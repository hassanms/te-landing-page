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

  if (req.method !== "GET" && req.method !== "DELETE") {
    res.setHeader("Allow", "GET, DELETE");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Application ID is required" });
  }

  try {
    if (req.method === "DELETE") {
      // Fetch application to get resume_url before deleting the row
      const { data: application, error: fetchError } = await supabaseAdmin
        .from("applications")
        .select("resume_url")
        .eq("id", id)
        .single();

      if (!fetchError && application?.resume_url) {
        const resumeUrl = application.resume_url as string;
        let storagePath: string | null = null;

        // Only delete from our Supabase Storage bucket "resumes"
        if (resumeUrl.startsWith("resumes/")) {
          storagePath = resumeUrl.replace(/^resumes\//, "");
        } else if (resumeUrl.includes("/storage/v1/object/") || resumeUrl.includes("/resumes/")) {
          const match = resumeUrl.match(/resumes\/(.+?)(\?|$)/);
          if (match) storagePath = match[1];
        }

        if (storagePath) {
          const { error: removeError } = await supabaseAdmin.storage
            .from("resumes")
            .remove([storagePath]);
          if (removeError) {
            console.error("Error deleting resume file from storage:", removeError);
            // Continue to delete DB row so we don't leave orphan record
          }
        }
      }

      const { error } = await supabaseAdmin
        .from("applications")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting application:", error);
        return res.status(500).json({ error: "Failed to delete application" });
      }
      return res.status(200).json({ message: "Application deleted successfully" });
    }

    const { data, error } = await supabaseAdmin
      .from("applications")
      .select(
        `
        *,
        jobs (
          id,
          title,
          slug,
          department,
          location,
          employment_type
        )
      `,
      )
      .eq("id", id)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: "Application not found" });
    }

    // Transform data
    const application = {
      id: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      phone: data.phone,
      resumeUrl: data.resume_url,
      coverLetter: data.cover_letter,
      createdAt: data.created_at,
      job: data.jobs
        ? {
            id: data.jobs.id,
            title: data.jobs.title,
            slug: data.jobs.slug,
            department: data.jobs.department,
            location: data.jobs.location,
            employmentType: data.jobs.employment_type,
          }
        : null,
    };

    return res.status(200).json({ application });
  } catch (err) {
    console.error("Error in applications [id]:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
