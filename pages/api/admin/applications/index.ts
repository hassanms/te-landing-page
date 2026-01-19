import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

// Simple admin check - you can enhance this with proper authentication later
const ADMIN_SECRET = process.env.ADMIN_SECRET || "your-admin-secret-key";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const supabaseAdmin = getSupabaseAdmin();
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Simple admin authentication check
  const adminSecret = req.headers["x-admin-secret"] || req.query.secret;

  if (adminSecret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { jobId, limit = 100, offset = 0 } = req.query;

    let query = supabaseAdmin
      .from("applications")
      .select(
        `
        id,
        first_name,
        last_name,
        email,
        phone,
        resume_url,
        cover_letter,
        country_code,
        year_of_graduation,
        gender,
        experience_years,
        current_employer,
        current_ctc,
        expected_ctc,
        notice_period,
        skills,
        source,
        current_location,
        preferred_location,
        linkedin_url,
        portfolio_url,
        status,
        admin_notes,
        status_updated_at,
        updated_by,
        created_at,
        jobs (
          id,
          title,
          slug,
          department
        )
      `,
      )
      .order("created_at", { ascending: false })
      .range(Number(offset), Number(offset) + Number(limit) - 1);

    if (jobId) {
      query = query.eq("job_id", jobId);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to fetch applications" });
    }

    // Transform data for frontend
    const applications = data?.map((app: any) => ({
      id: app.id,
      firstName: app.first_name,
      lastName: app.last_name,
      email: app.email,
      phone: app.phone,
      resumeUrl: app.resume_url,
      coverLetter: app.cover_letter,
      countryCode: app.country_code,
      yearOfGraduation: app.year_of_graduation,
      gender: app.gender,
      experienceYears: app.experience_years,
      currentEmployer: app.current_employer,
      currentCTC: app.current_ctc,
      expectedCTC: app.expected_ctc,
      noticePeriod: app.notice_period,
      skills: app.skills,
      source: app.source,
      currentLocation: app.current_location,
      preferredLocation: app.preferred_location,
      linkedin: app.linkedin_url,
      portfolio: app.portfolio_url,
      status: app.status || "pending",
      adminNotes: app.admin_notes,
      statusUpdatedAt: app.status_updated_at,
      updatedBy: app.updated_by,
      createdAt: app.created_at,
      job: app.jobs
        ? {
            id: app.jobs.id,
            title: app.jobs.title,
            slug: app.jobs.slug,
            department: app.jobs.department,
          }
        : null,
    }));

    // Get total count
    const { count } = await supabaseAdmin
      .from("applications")
      .select("*", { count: "exact", head: true });

    return res.status(200).json({
      applications: applications || [],
      total: count || 0,
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
