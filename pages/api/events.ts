import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

const MAX_PAYLOAD_SIZE = 8000;
const ALLOWED_EVENT_TYPES = ["page_view", "link_click", "element_hover", "session_end"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let body: {
      session_id?: string;
      event_type?: string;
      event_name?: string;
      page_path?: string;
      payload?: Record<string, unknown>;
      platform?: string;
      utm_source?: string | null;
      utm_medium?: string | null;
      utm_campaign?: string | null;
      utm_term?: string | null;
      utm_content?: string | null;
      referrer?: string;
      user_agent?: string;
    };
    if (typeof req.body === "object" && req.body !== null) {
      body = req.body as typeof body;
    } else {
      const raw = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
      if (raw.length > MAX_PAYLOAD_SIZE) {
        return res.status(400).json({ error: "Payload too large" });
      }
      body = JSON.parse(raw) as typeof body;
    }

    const session_id = body.session_id ?? "";
    const event_type = body.event_type ?? "";

    if (!session_id || !event_type || !ALLOWED_EVENT_TYPES.includes(event_type)) {
      return res.status(400).json({ error: "Invalid session_id or event_type" });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("visitor_events").insert({
      session_id,
      event_type,
      event_name: body.event_name ?? null,
      page_path: body.page_path ?? null,
      payload: body.payload ?? {},
      platform: body.platform ?? null,
      utm_source: body.utm_source ?? null,
      utm_medium: body.utm_medium ?? null,
      utm_campaign: body.utm_campaign ?? null,
      utm_term: body.utm_term ?? null,
      utm_content: body.utm_content ?? null,
      referrer: body.referrer ?? null,
      user_agent: body.user_agent ?? null,
    });

    if (error) {
      console.error("visitor_events insert error:", error);
      return res.status(500).json({ error: "Failed to store event" });
    }

    return res.status(204).end();
  } catch (e) {
    console.error("api/events error:", e);
    return res.status(400).json({ error: "Bad request" });
  }
}
