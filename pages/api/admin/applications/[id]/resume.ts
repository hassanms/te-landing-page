import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "lib/supabase/server";

// Simple admin check
const ADMIN_SECRET = process.env.ADMIN_SECRET || "your-admin-secret-key";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Admin authentication check
  const adminSecret = req.headers["x-admin-secret"] || req.query.secret;

  if (adminSecret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Application ID is required" });
    }

    // Get application to find resume URL
    const { data: application, error: appError } = await supabaseAdmin
      .from("applications")
      .select("resume_url")
      .eq("id", id)
      .single();

    if (appError || !application) {
      return res.status(404).json({ error: "Application not found" });
    }

    const resumeUrl = application.resume_url;

    if (!resumeUrl) {
      return res.status(404).json({ error: "Resume not found" });
    }

    let filePath: string;

    // Handle different URL formats:
    // 1. New format: "resumes/[jobId]/[timestamp]-[filename]"
    // 2. Old format: Full Supabase URL
    if (resumeUrl.startsWith("resumes/")) {
      // New format - path is already stored
      filePath = resumeUrl.replace("resumes/", "");
    } else if (resumeUrl.includes("/storage/v1/object/")) {
      // Old format - extract path from full URL
      // URL format: https://[project].supabase.co/storage/v1/object/public/resumes/[path]
      // or: https://[project].supabase.co/storage/v1/object/sign/resumes/[path]
      const pathMatch = resumeUrl.match(/resumes\/(.+?)(\?|$)/);
      if (!pathMatch) {
        return res.status(400).json({ error: "Invalid resume URL format" });
      }
      filePath = pathMatch[1];
    } else {
      // Try to extract path from any URL format
      const pathMatch = resumeUrl.match(/resumes\/(.+?)(\?|$)/);
      if (!pathMatch) {
        return res.status(400).json({ error: "Invalid resume URL format" });
      }
      filePath = pathMatch[1];
    }

    // Generate signed URL (valid for 1 hour)
    const { data: signedUrlData, error: signedError } = await supabaseAdmin.storage
      .from("resumes")
      .createSignedUrl(filePath, 3600); // 1 hour expiry

    if (signedError) {
      console.error("Error creating signed URL:", signedError);
      return res.status(500).json({ error: "Failed to generate download URL" });
    }

    return res.status(200).json({ downloadUrl: signedUrlData.signedUrl });
  } catch (error) {
    console.error("Error generating resume download URL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
