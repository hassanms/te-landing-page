import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "lib/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { status } = req.query;

    let query = supabaseAdmin
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    // Filter by status if provided, otherwise only show open jobs
    if (status) {
      query = query.eq("status", status);
    } else {
      query = query.eq("status", "open");
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to fetch jobs" });
    }

    // Transform data to match existing Job interface
    const jobs = data?.map((job) => ({
      id: job.id,
      slug: job.slug,
      title: job.title,
      company: "Tech Emulsion",
      employmentType: job.employment_type,
      department: job.department,
      locations: [job.location],
      region: "APAC",
      country: "Pakistan",
      industry: "Technology",
      shortDescription: job.description.substring(0, 150) + "...",
      description: job.description,
      requirements: job.requirements || [],
      responsibilities: [], // Can be added later
      experienceLevel: "Mid-level",
      skills: [],
      benefits: [],
      postedDate: job.created_at,
      applicationDeadline: null,
      status: job.status,
    })) || [];

    return res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
