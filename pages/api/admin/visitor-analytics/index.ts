import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

interface VisitorEventRow {
  id: string;
  session_id: string;
  event_type: string;
  event_name: string | null;
  page_path: string | null;
  payload: Record<string, unknown>;
  platform: string | null;
  country: string | null;
  city: string | null;
  referrer: string | null;
  created_at: string;
  visitor_id: string | null;
}

const BOUNCE_DURATION_SEC = 10;

function computeSessions(events: VisitorEventRow[]) {
  const bySession = new Map<
    string,
    {
      session_id: string;
      visitor_id: string | null;
      platform: string | null;
      referrer: string | null;
      country: string | null;
      city: string | null;
      first_landing_page: string;
      first_visit_at: string;
      last_at: string;
      total_duration_sec: number;
      events: { event_type: string; page_path: string | null; payload: Record<string, unknown>; created_at: string }[];
      page_durations: { page_path: string; duration_sec: number }[];
      user_name: string | null;
      user_email: string | null;
      user_phone: string | null;
      user_company: string | null;
      page_view_count: number;
      link_click_count: number;
      reached_contact: boolean;
    }
  >();

  const sorted = [...events].sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  for (const e of sorted) {
    let s = bySession.get(e.session_id);
    if (!s) {
      const firstPage = e.event_type === "page_view" ? (e.page_path || "/") : "/";
      s = {
        session_id: e.session_id,
        visitor_id: e.visitor_id ?? null,
        platform: e.platform,
        referrer: e.referrer,
        country: e.country,
        city: e.city,
        first_landing_page: firstPage,
        first_visit_at: e.created_at,
        last_at: e.created_at,
        total_duration_sec: 0,
        events: [],
        page_durations: [],
        user_name: null,
        user_email: null,
        user_phone: null,
        user_company: null,
        page_view_count: 0,
        link_click_count: 0,
        reached_contact: false,
      };
      bySession.set(e.session_id, s);
    }
    s.last_at = e.created_at;
    if (e.visitor_id) s.visitor_id = e.visitor_id;
    if (e.event_type === "page_view" && s.events.filter((x) => x.event_type === "page_view").length === 0) {
      s.first_landing_page = e.page_path || "/";
      s.first_visit_at = e.created_at;
    }
    if (e.platform) s.platform = e.platform;
    if (e.country) s.country = e.country;
    if (e.city) s.city = e.city;
    if (e.referrer) s.referrer = e.referrer;

    s.events.push({
      event_type: e.event_type,
      page_path: e.page_path,
      payload: e.payload || {},
      created_at: e.created_at,
    });

    if (e.event_type === "page_view") {
      s.page_view_count += 1;
    }
    if (e.event_type === "link_click") {
      s.link_click_count += 1;
    }

    if (e.event_type === "page_leave" && e.payload && typeof e.payload === "object") {
      const p = e.payload as { page_path?: string; duration_sec?: number };
      if (p.page_path != null && typeof p.duration_sec === "number") {
        s.page_durations.push({ page_path: String(p.page_path), duration_sec: p.duration_sec });
        s.total_duration_sec += p.duration_sec;
      }
    }
    if (e.event_type === "session_end" && e.payload && typeof e.payload === "object") {
      const p = e.payload as { time_on_page_sec?: number };
      if (typeof p.time_on_page_sec === "number") {
        s.total_duration_sec += p.time_on_page_sec;
      }
    }
    if (e.event_type === "user_identified" && e.payload && typeof e.payload === "object") {
      const p = e.payload as { name?: string; email?: string; phone?: string; company?: string };
      if (p.name) s.user_name = String(p.name).slice(0, 200);
      if (p.email) s.user_email = String(p.email).slice(0, 320);
      if (p.phone) s.user_phone = String(p.phone).slice(0, 32);
      if (p.company) s.user_company = String(p.company).slice(0, 200);
    }
    if (e.page_path && e.page_path.includes("contact")) {
      s.reached_contact = true;
    }
  }

  return Array.from(bySession.values());
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user, error: authError } = await getAuthUserFromRequest(req, res);
  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const period = Math.min(365, Math.max(1, parseInt((req.query.period as string) || "30", 10)));
  const sessionsLimit = Math.min(2000, Math.max(1, parseInt((req.query.sessions_limit as string) || "500", 10)));
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - period);
  const startISO = startDate.toISOString();

  try {
    const supabase = getSupabaseAdmin();

    const { data: events, error: eventsError } = await supabase
      .from("visitor_events")
      .select("id, session_id, event_type, event_name, page_path, payload, platform, country, city, referrer, created_at, visitor_id")
      .gte("created_at", startISO)
      .order("created_at", { ascending: false });

    if (eventsError) {
      console.error("visitor_events fetch error:", eventsError);
      return res.status(500).json({ error: "Failed to fetch visitor analytics" });
    }

    const list = (events ?? []) as VisitorEventRow[];

    const byPlatform: Record<string, number> = {};
    const byPage: Record<string, number> = {};
    const byClick: Record<string, number> = {};
    const byCountry: Record<string, number> = {};
    const byCity: Record<string, number> = {};
    const sessionsSet = new Set<string>();

    list.forEach((e) => {
      sessionsSet.add(e.session_id);
      const platform = e.platform || "direct";
      byPlatform[platform] = (byPlatform[platform] || 0) + 1;
      if (e.country) byCountry[e.country] = (byCountry[e.country] || 0) + 1;
      if (e.city) byCity[e.city] = (byCity[e.city] || 0) + 1;
      if (e.page_path) {
        byPage[e.page_path] = (byPage[e.page_path] || 0) + 1;
      }
      if (e.event_type === "link_click" && e.payload && typeof e.payload === "object") {
        const p = e.payload as { link_url?: string; element_id?: string; link_text?: string };
        const key = p.link_url || p.element_id || p.link_text || "unknown";
        byClick[key] = (byClick[key] || 0) + 1;
      }
    });

    const sessions = computeSessions(list);
    const totalDurationSec = sessions.reduce((sum, s) => sum + s.total_duration_sec, 0);
    const avgSessionDurationSec = sessions.length > 0 ? Math.round(totalDurationSec / sessions.length) : 0;

    const bouncedCount = sessions.filter(
      (s) =>
        s.page_view_count <= 1 &&
        s.link_click_count === 0 &&
        s.total_duration_sec <= BOUNCE_DURATION_SEC
    ).length;
    const bounceRate = sessions.length > 0 ? Math.round((bouncedCount / sessions.length) * 100) : 0;

    const convertedCount = sessions.filter(
      (s) =>
        !!(s.user_name || s.user_email || s.user_phone) || s.reached_contact
    ).length;
    const conversionRate = sessions.length > 0 ? Math.round((convertedCount / sessions.length) * 100) : 0;

    const sessionsByVisitorId = new Map<string, number>();
    for (const s of sessions) {
      const vid = s.visitor_id || `anon_${s.session_id}`;
      sessionsByVisitorId.set(vid, (sessionsByVisitorId.get(vid) || 0) + 1);
    }
    let newVisitors = 0;
    let returningVisitors = 0;
    sessionsByVisitorId.forEach((count) => {
      if (count === 1) newVisitors += 1;
      else returningVisitors += 1;
    });

    const eventsByDay: Record<string, number> = {};
    list.forEach((e) => {
      const day = e.created_at.slice(0, 10);
      eventsByDay[day] = (eventsByDay[day] || 0) + 1;
    });
    const eventsByDayList = Object.entries(eventsByDay)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-30);

    const platformList = Object.entries(byPlatform)
      .map(([platform, count]) => ({ platform, count }))
      .sort((a, b) => b.count - a.count);

    const countryList = Object.entries(byCountry)
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 30);

    const cityList = Object.entries(byCity)
      .map(([city, count]) => ({ city, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 30);

    const topPages = Object.entries(byPage)
      .map(([page_path, count]) => ({ page_path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    const topClicks = Object.entries(byClick)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    const sessionsSummary = sessions
      .map((s) => ({
        session_id: s.session_id,
        platform: s.platform,
        country: s.country,
        city: s.city,
        first_landing_page: s.first_landing_page,
        first_visit_at: s.first_visit_at,
        last_at: s.last_at,
        total_duration_sec: s.total_duration_sec,
        events_count: s.events.length,
        page_durations: s.page_durations,
        user_name: s.user_name,
        user_email: s.user_email,
        user_phone: s.user_phone,
        user_company: s.user_company,
        page_view_count: s.page_view_count,
        link_click_count: s.link_click_count,
      }))
      .sort((a, b) => new Date(b.first_visit_at).getTime() - new Date(a.first_visit_at).getTime())
      .slice(0, sessionsLimit);

    return res.status(200).json({
      period,
      startDate: startISO,
      summary: {
        totalEvents: list.length,
        uniqueSessions: sessionsSet.size,
        avgSessionDurationSec,
        bounceRate,
        conversionRate,
        newVisitors,
        returningVisitors,
      },
      eventsByDay: eventsByDayList,
      byPlatform: platformList,
      byCountry: countryList,
      byCity: cityList,
      topPages,
      topClicks,
      sessions: sessionsSummary,
      recentEvents: list.slice(0, 50).map((e) => ({
        id: e.id,
        session_id: e.session_id,
        event_type: e.event_type,
        event_name: e.event_name,
        page_path: e.page_path,
        platform: e.platform,
        country: e.country,
        city: e.city,
        created_at: e.created_at,
      })),
    });
  } catch (err) {
    console.error("admin visitor-analytics error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
