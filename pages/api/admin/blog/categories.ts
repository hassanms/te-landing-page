import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabaseAdmin = getSupabaseAdmin();

  // GET - Fetch all categories (public for listing, no auth needed)
  if (req.method === "GET") {
    try {
      const { data, error } = await supabaseAdmin
        .from("blog_categories")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) {
        console.error("Supabase error:", error);
        return res.status(500).json({ error: "Failed to fetch categories" });
      }

      return res.status(200).json({ categories: data || [] });
    } catch (error) {
      console.error("Error fetching categories:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // POST - Create new category (requires auth)
  if (req.method === "POST") {
    const { user, error: authError } = await getAuthUserFromRequest(req, res);

    if (authError || !user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const { name, slug, description, color, sort_order } = req.body;

      if (!name || !slug) {
        return res.status(400).json({ error: "Name and slug are required" });
      }

      const { data: category, error } = await supabaseAdmin
        .from("blog_categories")
        .insert({
          name,
          slug,
          description: description || null,
          color: color || "#14b8a6",
          sort_order: sort_order || 0,
        })
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Failed to create category" });
      }

      return res.status(201).json({ category });
    } catch (error) {
      console.error("Error creating category:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: "Method not allowed" });
}
