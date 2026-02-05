import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Admin authentication check
  const { user, error: authError } = await getAuthUserFromRequest(req, res);

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const supabaseAdmin = getSupabaseAdmin();

  // GET - Fetch all blog posts (including unpublished for admin)
  if (req.method === "GET") {
    try {
      const { status, category, search, limit, offset } = req.query;

      let query = supabaseAdmin
        .from("blog_posts")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false });

      // Filter by published status
      if (status === "published") {
        query = query.eq("is_published", true);
      } else if (status === "draft") {
        query = query.eq("is_published", false);
      }

      // Filter by category
      if (category && category !== "all") {
        query = query.eq("category", category);
      }

      // Search in title or excerpt
      if (search) {
        query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`);
      }

      // Pagination
      if (limit) {
        query = query.limit(parseInt(limit as string));
      }
      if (offset) {
        query = query.range(
          parseInt(offset as string),
          parseInt(offset as string) + parseInt((limit as string) || "10") - 1
        );
      }

      const { data, error, count } = await query;

      if (error) {
        console.error("Supabase error:", error);
        return res.status(500).json({ error: "Failed to fetch blog posts" });
      }

      return res.status(200).json({ 
        posts: data || [], 
        total: count || 0 
      });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // POST - Create new blog post
  if (req.method === "POST") {
    try {
      const {
        title,
        slug,
        excerpt,
        content,
        featured_image,
        category,
        author_name,
        tags,
        is_featured,
        is_published,
        meta_title,
        meta_description,
        meta_keywords,
        canonical_url,
        og_image,
        show_on_homepage,
      } = req.body;

      // Validate required fields
      if (!title || !slug || !excerpt || !content || !category) {
        return res.status(400).json({
          error: "Missing required fields: title, slug, excerpt, content, category",
        });
      }

      // Check if slug already exists
      const { data: existingPost } = await supabaseAdmin
        .from("blog_posts")
        .select("id")
        .eq("slug", slug)
        .single();

      if (existingPost) {
        return res.status(400).json({ error: "A blog post with this slug already exists" });
      }

      // Prepare data
      const postData: any = {
        title,
        slug,
        excerpt,
        content,
        category,
        author_name: author_name || "Tech Emulsion",
        tags: tags || [],
        is_featured: is_featured || false,
        is_published: is_published || false,
        featured_image: featured_image || null,
        meta_title: meta_title || title,
        meta_description: meta_description || excerpt,
        meta_keywords: meta_keywords || null,
        canonical_url: canonical_url || null,
        og_image: og_image || featured_image || null,
        show_on_homepage: show_on_homepage || false,
      };

      // Set published_at if publishing
      if (is_published) {
        postData.published_at = new Date().toISOString();
      }

      // Insert new blog post
      const { data: post, error } = await supabaseAdmin
        .from("blog_posts")
        .insert(postData)
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to create blog post" });
      }

      // If this post is featured, ensure all other posts are not featured
      if (post.is_featured) {
        await supabaseAdmin
          .from("blog_posts")
          .update({ is_featured: false })
          .neq("id", post.id);
      }

      return res.status(201).json({ post });
    } catch (error) {
      console.error("Error creating blog post:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: "Method not allowed" });
}
