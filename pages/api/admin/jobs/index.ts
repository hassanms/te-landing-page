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

  if (req.method === "GET") {
    try {
      const { status } = req.query;

      let query = supabaseAdmin
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (status) {
        query = query.eq("status", status);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Supabase error:", error);
        return res.status(500).json({ error: "Failed to fetch jobs" });
      }

      return res.status(200).json({ jobs: data || [] });
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  if (req.method === "POST") {
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

      // Check if slug already exists
      const { data: existingJob } = await supabaseAdmin
        .from("jobs")
        .select("id")
        .eq("slug", slug)
        .single();

      if (existingJob) {
        return res.status(400).json({ error: "A job with this slug already exists" });
      }

      // Insert new job
      const { data: job, error } = await supabaseAdmin
        .from("jobs")
        .insert({
          title,
          slug,
          department,
          location,
          employment_type: employment_type || "Full-time",
          description,
          requirements: requirements || [],
          status: status || "open",
          total_positions: total_positions || null,
        })
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to create job" });
      }

      return res.status(201).json({ job });
    } catch (error) {
      console.error("Error creating job:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: "Method not allowed" });
}
