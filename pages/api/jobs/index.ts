import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

// Utility function to strip HTML tags and get plain text
function stripHtmlTags(html: string): string {
  if (!html) return "";
  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, "");
  // Decode HTML entities
  const decoded = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  // Clean up multiple spaces and trim
  return decoded.replace(/\s+/g, " ").trim();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const supabaseAdmin = getSupabaseAdmin();
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
    const jobs = data?.map((job) => {
      // Strip HTML from description to create plain text shortDescription
      const plainTextDescription = stripHtmlTags(job.description);
      const shortDesc = plainTextDescription.length > 150
        ? plainTextDescription.substring(0, 150) + "..."
        : plainTextDescription;

      return {
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
        shortDescription: shortDesc,
        description: job.description, // Keep full HTML for detail page
        requirements: job.requirements || [],
        responsibilities: [], // Can be added later
        experienceLevel: "Mid-level",
        skills: [],
        benefits: [],
        postedDate: job.created_at,
        applicationDeadline: null,
        status: job.status,
        totalPositions: job.total_positions || null,
      };
    }) || [];

    return res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
