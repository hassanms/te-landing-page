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
    const { jobId } = req.query;

    if (!jobId || typeof jobId !== "string") {
      return res.status(400).json({ error: "Job ID is required" });
    }

    // Try to find by slug first, then by ID
    let { data: job, error } = await supabaseAdmin
      .from("jobs")
      .select("*")
      .eq("slug", jobId)
      .single();

    // If not found by slug, try by ID
    if (error || !job) {
      const result = await supabaseAdmin
        .from("jobs")
        .select("*")
        .eq("id", jobId)
        .single();
      job = result.data;
      error = result.error;
    }

    if (error || !job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // Transform data to match existing Job interface
    // Strip HTML from description to create plain text shortDescription
    const plainTextDescription = stripHtmlTags(job.description);
    const shortDesc = plainTextDescription.length > 150
      ? plainTextDescription.substring(0, 150) + "..."
      : plainTextDescription;

    const transformedJob = {
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
    };

    return res.status(200).json(transformedJob);
  } catch (error) {
    console.error("Error fetching job:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

