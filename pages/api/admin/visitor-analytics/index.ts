import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

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
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - period);
  const startISO = startDate.toISOString();

  try {
    const supabase = getSupabaseAdmin();

    const { data: events, error: eventsError } = await supabase
      .from("visitor_events")
      .select("id, session_id, event_type, event_name, page_path, payload, platform, created_at")
      .gte("created_at", startISO)
      .order("created_at", { ascending: false });

    if (eventsError) {
      console.error("visitor_events fetch error:", eventsError);
      return res.status(500).json({ error: "Failed to fetch visitor analytics" });
    }

    const list = events ?? [];

    const byPlatform: Record<string, number> = {};
    const byPage: Record<string, number> = {};
    const byClick: Record<string, number> = {};
    const sessions = new Set<string>();

    list.forEach((e) => {
      sessions.add(e.session_id);
      const platform = e.platform || "direct";
      byPlatform[platform] = (byPlatform[platform] || 0) + 1;
      if (e.page_path) {
        byPage[e.page_path] = (byPage[e.page_path] || 0) + 1;
      }
      if (e.event_type === "link_click" && e.payload && typeof e.payload === "object") {
        const p = e.payload as { link_url?: string; element_id?: string; link_text?: string };
        const key = p.link_url || p.element_id || p.link_text || "unknown";
        byClick[key] = (byClick[key] || 0) + 1;
      }
    });

    const platformList = Object.entries(byPlatform)
      .map(([platform, count]) => ({ platform, count }))
      .sort((a, b) => b.count - a.count);

    const topPages = Object.entries(byPage)
      .map(([page_path, count]) => ({ page_path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    const topClicks = Object.entries(byClick)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    const recentEvents = list.slice(0, 50).map((e) => ({
      id: e.id,
      session_id: e.session_id,
      event_type: e.event_type,
      event_name: e.event_name,
      page_path: e.page_path,
      platform: e.platform,
      created_at: e.created_at,
    }));

    return res.status(200).json({
      period,
      startDate: startISO,
      summary: {
        totalEvents: list.length,
        uniqueSessions: sessions.size,
      },
      byPlatform: platformList,
      topPages,
      topClicks,
      recentEvents,
    });
  } catch (err) {
    console.error("admin visitor-analytics error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
