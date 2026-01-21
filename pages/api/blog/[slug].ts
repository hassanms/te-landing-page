import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Slug is required" });
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const supabaseAdmin = getSupabaseAdmin();

    // Fetch the blog post
    const { data: post, error } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error || !post) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    // Increment view count (fire and forget)
    void (async () => {
      try {
        await supabaseAdmin
          .from("blog_posts")
          .update({ view_count: (post.view_count || 0) + 1 })
          .eq("id", post.id);
      } catch (err) {
        console.error("Failed to increment view count:", err);
      }
    })();

    // Fetch related posts (same category, excluding current)
    const { data: relatedPosts } = await supabaseAdmin
      .from("blog_posts")
      .select("id, slug, title, excerpt, featured_image, category, published_at, reading_time_minutes")
      .eq("is_published", true)
      .eq("category", post.category)
      .neq("id", post.id)
      .order("published_at", { ascending: false })
      .limit(3);

    return res.status(200).json({
      post,
      relatedPosts: relatedPosts || [],
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
