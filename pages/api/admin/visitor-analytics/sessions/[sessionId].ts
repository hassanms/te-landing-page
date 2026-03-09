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
  utm_source: string | null;
  utm_medium: string | null;
  created_at: string;
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

  const sessionId = req.query.sessionId as string;
  if (!sessionId) {
    return res.status(400).json({ error: "Missing sessionId" });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data: events, error } = await supabase
      .from("visitor_events")
      .select("id, session_id, event_type, event_name, page_path, payload, platform, country, city, referrer, utm_source, utm_medium, created_at")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("session detail fetch error:", error);
      return res.status(500).json({ error: "Failed to fetch session" });
    }

    const list = (events ?? []) as VisitorEventRow[];
    if (list.length === 0) {
      return res.status(404).json({ error: "Session not found" });
    }

    const first = list[0];
    const last = list[list.length - 1];
    let totalDurationSec = 0;
    const pageDurations: { page_path: string; duration_sec: number }[] = [];

    for (const e of list) {
      if (e.event_type === "page_leave" && e.payload && typeof e.payload === "object") {
        const p = e.payload as { page_path?: string; duration_sec?: number };
        if (p.page_path != null && typeof p.duration_sec === "number") {
          pageDurations.push({ page_path: String(p.page_path), duration_sec: p.duration_sec });
          totalDurationSec += p.duration_sec;
        }
      }
      if (e.event_type === "session_end" && e.payload && typeof e.payload === "object") {
        const p = e.payload as { time_on_page_sec?: number };
        if (typeof p.time_on_page_sec === "number") totalDurationSec += p.time_on_page_sec;
      }
    }

    const firstPageView = list.find((e) => e.event_type === "page_view");
    const userIdentified = [...list].reverse().find((e) => e.event_type === "user_identified");
    const userPayload = userIdentified?.payload && typeof userIdentified.payload === "object"
      ? (userIdentified.payload as { name?: string; email?: string; phone?: string; company?: string })
      : null;

    return res.status(200).json({
      session_id: sessionId,
      user_name: userPayload?.name ?? null,
      user_email: userPayload?.email ?? null,
      user_phone: userPayload?.phone ?? null,
      user_company: userPayload?.company ?? null,
      platform: first.platform,
      country: first.country,
      city: first.city,
      referrer: first.referrer,
      utm_source: first.utm_source,
      utm_medium: first.utm_medium,
      first_landing_page: firstPageView?.page_path || first.page_path || "/",
      first_visit_at: first.created_at,
      last_at: last.created_at,
      total_duration_sec: totalDurationSec,
      page_durations: pageDurations,
      events: list.map((e) => ({
        id: e.id,
        event_type: e.event_type,
        event_name: e.event_name,
        page_path: e.page_path,
        payload: e.payload,
        created_at: e.created_at,
      })),
    });
  } catch (err) {
    console.error("session detail error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
