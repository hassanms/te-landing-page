import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Blog post ID is required" });
  }

  // Admin authentication check
  const { user, error: authError } = await getAuthUserFromRequest(req, res);

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const supabaseAdmin = getSupabaseAdmin();

  // GET - Fetch single blog post
  if (req.method === "GET") {
    try {
      const { data: post, error } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !post) {
        return res.status(404).json({ error: "Blog post not found" });
      }

      return res.status(200).json({ post });
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // PUT - Update blog post
  if (req.method === "PUT") {
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
      } = req.body;

      // Check if the post exists
      const { data: existingPost } = await supabaseAdmin
        .from("blog_posts")
        .select("id, is_published, published_at")
        .eq("id", id)
        .single();

      if (!existingPost) {
        return res.status(404).json({ error: "Blog post not found" });
      }

      // Check if new slug conflicts with another post
      if (slug) {
        const { data: slugConflict } = await supabaseAdmin
          .from("blog_posts")
          .select("id")
          .eq("slug", slug)
          .neq("id", id)
          .single();

        if (slugConflict) {
          return res.status(400).json({ error: "A blog post with this slug already exists" });
        }
      }

      // Prepare update data
      const updateData: any = {
        title,
        slug,
        excerpt,
        content,
        category,
        author_name,
        tags,
        is_featured,
        is_published,
        featured_image,
        meta_title,
        meta_description,
        meta_keywords,
        canonical_url,
        og_image,
        updated_at: new Date().toISOString(),
      };

      // Set published_at if publishing for the first time
      if (is_published && !existingPost.published_at) {
        updateData.published_at = new Date().toISOString();
      }

      // Remove undefined values
      Object.keys(updateData).forEach(key => {
        if (updateData[key] === undefined) {
          delete updateData[key];
        }
      });

      const { data: post, error } = await supabaseAdmin
        .from("blog_posts")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to update blog post" });
      }

      return res.status(200).json({ post });
    } catch (error) {
      console.error("Error updating blog post:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // DELETE - Delete blog post
  if (req.method === "DELETE") {
    try {
      const { error } = await supabaseAdmin
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to delete blog post" });
      }

      return res.status(200).json({ message: "Blog post deleted successfully" });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  return res.status(405).json({ error: "Method not allowed" });
}
