-- ============================================
-- SIMPLE CAREER MANAGEMENT SYSTEM - DATABASE SCHEMA
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE: jobs
-- ============================================
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  employment_type TEXT NOT NULL CHECK (employment_type IN ('Full-time', 'Part-time', 'Contract', 'Internship')),
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_jobs_slug ON jobs(slug);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);

-- ============================================
-- TABLE: applications
-- ============================================
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  resume_url TEXT NOT NULL,
  cover_letter TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- NOTE: Additional fields migration
-- ============================================
-- To add all form fields, run the migration file:
-- supabase/migrations/add_application_fields.sql
-- 
-- Or run this ALTER TABLE command:
-- ALTER TABLE applications
-- ADD COLUMN IF NOT EXISTS country_code TEXT,
-- ADD COLUMN IF NOT EXISTS year_of_graduation TEXT,
-- ADD COLUMN IF NOT EXISTS gender TEXT,
-- ADD COLUMN IF NOT EXISTS experience_years TEXT,
-- ADD COLUMN IF NOT EXISTS current_employer TEXT,
-- ADD COLUMN IF NOT EXISTS current_ctc TEXT,
-- ADD COLUMN IF NOT EXISTS expected_ctc TEXT,
-- ADD COLUMN IF NOT EXISTS notice_period TEXT,
-- ADD COLUMN IF NOT EXISTS skills TEXT,
-- ADD COLUMN IF NOT EXISTS source TEXT,
-- ADD COLUMN IF NOT EXISTS current_location TEXT,
-- ADD COLUMN IF NOT EXISTS preferred_location TEXT,
-- ADD COLUMN IF NOT EXISTS linkedin_url TEXT,
-- ADD COLUMN IF NOT EXISTS portfolio_url TEXT;

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

-- ============================================
-- FUNCTION: Update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on both tables
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Jobs: Public can read open jobs only
CREATE POLICY "Public can view open jobs"
  ON jobs
  FOR SELECT
  USING (status = 'open');

-- Applications: Public can insert (submit applications)
CREATE POLICY "Public can insert applications"
  ON applications
  FOR INSERT
  WITH CHECK (true);

-- Applications: Public can read their own applications (by email)
-- Note: For admin access, you'll need to use service role key or create admin policies
CREATE POLICY "Users can view own applications"
  ON applications
  FOR SELECT
  USING (true); -- Simplified: allow all reads for now (you can restrict by email later)

-- ============================================
-- STORAGE BUCKET: resumes
-- ============================================
-- Note: Run this in Supabase Dashboard > Storage > Create Bucket
-- Bucket name: "resumes"
-- Public: false (private)
-- File size limit: 10MB
-- Allowed MIME types: application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document

-- Storage policies (run after creating bucket)
-- Allow public to upload resumes (for application form)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'resumes',
  'resumes',
  false,
  10485760, -- 10MB in bytes
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

-- Policy: Allow public to upload files
CREATE POLICY "Public can upload resumes"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

-- Policy: Allow public to read files (for admin to download)
CREATE POLICY "Public can read resumes"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'resumes');

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================
-- Uncomment to insert sample jobs

/*
INSERT INTO jobs (slug, title, department, location, employment_type, description, requirements, status)
VALUES 
  (
    'web-developer',
    'Web Developer',
    'Engineering',
    'Peshawar, Pakistan',
    'Full-time',
    'We are looking for a skilled Web Developer to join our team.',
    ARRAY['2+ years of experience', 'React/Next.js knowledge', 'TypeScript'],
    'open'
  ),
  (
    'ai-engineer',
    'AI Engineer',
    'AI & Data',
    'Peshawar, Pakistan',
    'Full-time',
    'Join our AI team to build cutting-edge AI solutions.',
    ARRAY['Experience with LLMs', 'Python/TypeScript', 'Vector databases'],
    'open'
  );
*/
