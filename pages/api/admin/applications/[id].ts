import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "lib/supabase/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "your-admin-secret-key";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminSecret = req.headers["x-admin-secret"] || req.query.secret;

  if (adminSecret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { id } = req.query;

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
  } catch (error) {
    console.error("Error fetching application:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
