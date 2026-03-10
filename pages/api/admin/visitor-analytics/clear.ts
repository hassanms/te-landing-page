import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { user, error: authError } = await getAuthUserFromRequest(req, res);
  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { scope = "all", days = 90 } = (req.body || {}) as {
    scope?: "all" | "older_than_days";
    days?: number;
  };

  const supabaseAdmin = getSupabaseAdmin();

  try {
    if (scope === "older_than_days") {
      const safeDays = Math.max(1, Math.min(3650, Number.isFinite(days) ? days : 90));
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - safeDays);
      const cutoffISO = cutoff.toISOString();

      const { error } = await supabaseAdmin
        .from("visitor_events")
        .delete()
        .lt("created_at", cutoffISO);

      if (error) {
        console.error("Error clearing old visitor_events:", error);
        return res.status(500).json({ error: "Failed to clear old visitor analytics" });
      }

      return res.status(200).json({ success: true, scope, days: safeDays });
    }

    // Default: clear all visitor analytics
    const { error } = await supabaseAdmin
      .from("visitor_events")
      .delete()
      .neq("session_id", ""); // guard against empty condition

    if (error) {
      console.error("Error clearing visitor_events:", error);
      return res.status(500).json({ error: "Failed to clear visitor analytics" });
    }

    return res.status(200).json({ success: true, scope: "all" });
  } catch (err) {
    console.error("visitor-analytics clear error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

