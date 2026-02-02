import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { category, featured, limit, offset, search, home } = req.query;

    const supabaseAdmin = getSupabaseAdmin();

    let query = supabaseAdmin
      .from("blog_posts")
      .select("id, slug, title, excerpt, featured_image, category, author_name, tags, is_featured, published_at, reading_time_minutes, view_count, show_on_homepage", { count: "exact" })
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    // Filter by homepage selection
    if (home === "true") {
      query = query.eq("show_on_homepage", true);
    }

    // Filter by category
    if (category && category !== "all" && category !== "All Insights") {
      query = query.eq("category", category);
    }

    // Filter featured only
    if (featured === "true") {
      query = query.eq("is_featured", true);
    }

    // Search
    if (search) {
      query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`);
    }

    // Pagination
    const limitNum = parseInt(limit as string) || 20;
    const offsetNum = parseInt(offset as string) || 0;
    query = query.range(offsetNum, offsetNum + limitNum - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to fetch blog posts" });
    }

    return res.status(200).json({
      posts: data || [],
      total: count || 0,
      hasMore: (count || 0) > offsetNum + limitNum,
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
