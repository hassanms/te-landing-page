import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "lib/supabase/server";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

interface ApplicationData {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode?: string;
  phone: string;
  coverLetter?: string;
  cvFileName: string;
  cvFileType: string;
  cvData: string; // Base64 encoded file
  // Additional fields from form (stored but not required)
  role?: string;
  yearOfGraduation?: string;
  gender?: string;
  experienceYears?: string;
  currentEmployer?: string;
  currentCTC?: string;
  expectedCTC?: string;
  noticePeriod?: string;
  skills?: string;
  source?: string;
  currentLocation?: string;
  preferredLocation?: string;
  linkedin?: string;
  portfolio?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      jobId,
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      coverLetter,
      cvFileName,
      cvFileType,
      cvData,
      yearOfGraduation,
      gender,
      experienceYears,
      currentEmployer,
      currentCTC,
      expectedCTC,
      noticePeriod,
      skills,
      source,
      currentLocation,
      preferredLocation,
      linkedin,
      portfolio,
    }: ApplicationData = req.body;

    // Validate required fields
    if (!jobId || !firstName || !lastName || !email || !phone || !cvData) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Verify job exists and is open
    const { data: job, error: jobError } = await supabaseAdmin
      .from("jobs")
      .select("id, status")
      .eq("id", jobId)
      .single();

    if (jobError || !job) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (job.status !== "open") {
      return res.status(400).json({ error: "This job is no longer accepting applications" });
    }

    // Convert base64 to buffer
    const base64Data = cvData.split(",")[1] || cvData;
    const fileBuffer = Buffer.from(base64Data, "base64");

    // Generate unique file path
    const timestamp = Date.now();
    const sanitizedFileName = cvFileName.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filePath = `${jobId}/${timestamp}-${sanitizedFileName}`;

    // Upload resume to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("resumes")
      .upload(filePath, fileBuffer, {
        contentType: cvFileType,
        upsert: false,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return res.status(500).json({ error: "Failed to upload resume" });
    }

    // For private buckets, store the file path instead of public URL
    // We'll generate signed URLs on-demand via API endpoint
    // Store path in format: resumes/[filePath] for easy extraction
    const resumeUrl = `resumes/${filePath}`;

    // Save application to database with all fields
    const { data: application, error: dbError } = await supabaseAdmin
      .from("applications")
      .insert({
        job_id: jobId,
        first_name: firstName,
        last_name: lastName,
        email: email.toLowerCase().trim(),
        phone,
        resume_url: resumeUrl,
        cover_letter: coverLetter || null,
        // Additional fields
        country_code: countryCode || null,
        year_of_graduation: yearOfGraduation || null,
        gender: gender || null,
        experience_years: experienceYears || null,
        current_employer: currentEmployer || null,
        current_ctc: currentCTC || null,
        expected_ctc: expectedCTC || null,
        notice_period: noticePeriod || null,
        skills: skills || null,
        source: source || null,
        current_location: currentLocation || null,
        preferred_location: preferredLocation || null,
        linkedin_url: linkedin || null,
        portfolio_url: portfolio || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      // If database insert fails, try to delete uploaded file
      await supabaseAdmin.storage.from("resumes").remove([filePath]);
      return res.status(500).json({ error: "Failed to save application" });
    }

    return res.status(201).json({
      message: "Application submitted successfully",
      applicationId: application.id,
    });
  } catch (error) {
    console.error("Error creating application:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
