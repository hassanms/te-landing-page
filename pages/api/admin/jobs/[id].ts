import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Admin authentication check
  const { user, error: authError } = await getAuthUserFromRequest(req, res);

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const supabaseAdmin = getSupabaseAdmin();

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Job ID is required" });
  }

  if (req.method === "GET") {
    try {
      const { data: job, error } = await supabaseAdmin
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !job) {
        return res.status(404).json({ error: "Job not found" });
      }

      return res.status(200).json({ job });
    } catch (error) {
      console.error("Error fetching job:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  if (req.method === "PUT") {
    try {
      const {
        title,
        slug,
        department,
        location,
        employment_type,
        description,
        requirements,
        status,
        total_positions,
      } = req.body;

      // Validate required fields
      if (!title || !slug || !department || !location || !description) {
        return res.status(400).json({
          error: "Missing required fields: title, slug, department, location, description",
        });
      }

      // Check if slug already exists for a different job
      const { data: existingJob } = await supabaseAdmin
        .from("jobs")
        .select("id")
        .eq("slug", slug)
        .neq("id", id)
        .single();

      if (existingJob) {
        return res.status(400).json({ error: "A job with this slug already exists" });
      }

      // Update job
      const { data: job, error } = await supabaseAdmin
        .from("jobs")
        .update({
          title,
          slug,
          department,
          location,
          employment_type,
          description,
          requirements: requirements || [],
          status,
          total_positions: total_positions || null,
        })
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to update job" });
      }

      return res.status(200).json({ job });
    } catch (error) {
      console.error("Error updating job:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { error } = await supabaseAdmin
        .from("jobs")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to delete job" });
      }

      return res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
      console.error("Error deleting job:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  return res.status(405).json({ error: "Method not allowed" });
}
