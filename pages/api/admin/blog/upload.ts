import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";
import formidable from "formidable";
import fs from "fs";
import path from "path";

// Disable default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Admin authentication check
  const { user, error: authError } = await getAuthUserFromRequest(req, res);

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const form = formidable({
      maxFileSize: 5 * 1024 * 1024, // 5MB
      allowEmptyFiles: false,
    });

    const [fields, files] = await form.parse(req);
    
    const uploadedFile = files.file?.[0];
    
    if (!uploadedFile) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
    if (!allowedTypes.includes(uploadedFile.mimetype || "")) {
      return res.status(400).json({ error: "Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG" });
    }

    // Read file
    const fileBuffer = fs.readFileSync(uploadedFile.filepath);
    
    // Generate unique filename
    const timestamp = Date.now();
    const originalName = uploadedFile.originalFilename || "image";
    const ext = path.extname(originalName) || ".jpg";
    const baseName = path.basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .substring(0, 50);
    const fileName = `${baseName}-${timestamp}${ext}`;
    const filePath = `blog/${fileName}`;

    // Upload to Supabase Storage
    const supabaseAdmin = getSupabaseAdmin();
    
    const { data, error } = await supabaseAdmin.storage
      .from("blog-images")
      .upload(filePath, fileBuffer, {
        contentType: uploadedFile.mimetype || "image/jpeg",
        upsert: false,
      });

    if (error) {
      console.error("Storage upload error:", error);
      return res.status(500).json({ error: "Failed to upload image" });
    }

    // Get public URL
    const { data: urlData } = supabaseAdmin.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    // Clean up temp file
    fs.unlinkSync(uploadedFile.filepath);

    return res.status(200).json({
      url: urlData.publicUrl,
      path: filePath,
      fileName,
    });
  } catch (error: any) {
    console.error("Error uploading image:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
}
