import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "your-admin-secret-key";

const VALID_STATUSES = [
  "pending",
  "reviewing",
  "shortlisted",
  "interviewed",
  "offered",
  "rejected",
  "withdrawn",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const supabaseAdmin = getSupabaseAdmin();
  // Admin authentication check
  const adminSecret = req.headers["x-admin-secret"] || req.query.secret;

  if (adminSecret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Application ID is required" });
  }

  if (req.method === "PUT") {
    try {
      const { status, adminNotes, updatedBy } = req.body;

      if (!status || !VALID_STATUSES.includes(status)) {
        return res.status(400).json({
          error: `Invalid status. Must be one of: ${VALID_STATUSES.join(", ")}`,
        });
      }

      // Update application status
      const updateData: any = {
        status,
        status_updated_at: new Date().toISOString(),
      };

      if (adminNotes !== undefined) {
        updateData.admin_notes = adminNotes;
      }

      if (updatedBy) {
        updateData.updated_by = updatedBy;
      }

      const { data: application, error } = await supabaseAdmin
        .from("applications")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to update application status" });
      }

      return res.status(200).json({ application });
    } catch (error) {
      console.error("Error updating application status:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["PUT"]);
  return res.status(405).json({ error: "Method not allowed" });
}
