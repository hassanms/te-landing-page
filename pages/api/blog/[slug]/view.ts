import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";

/**
 * GET /api/blog/[slug]/view
 * Records a single view for the blog post (increments view_count and inserts into blog_post_views).
 * Call this when the blog post page is displayed so that views are counted even when
 * the page was loaded via getStaticProps (no client fetch to the main blog API).
 */
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

    const { data: post, error } = await supabaseAdmin
      .from("blog_posts")
      .select("id, view_count")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error || !post) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    await Promise.all([
      supabaseAdmin
        .from("blog_posts")
        .update({ view_count: (post.view_count || 0) + 1 })
        .eq("id", post.id),
      supabaseAdmin
        .from("blog_post_views")
        .insert({ blog_post_id: post.id }),
    ]);

    return res.status(204).end();
  } catch (err) {
    console.error("Failed to record blog view:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
