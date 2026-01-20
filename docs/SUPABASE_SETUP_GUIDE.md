# Supabase Setup Guide - Career Management System

Complete guide to set up Supabase for the simple career management system.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Database Setup](#database-setup)
3. [Storage Setup](#storage-setup)
4. [Row Level Security (RLS)](#row-level-security-rls)
5. [Environment Variables](#environment-variables)
6. [Testing the Setup](#testing-the-setup)
7. [Sample Data](#sample-data)

---

## Prerequisites

1. Create a Supabase project at [https://supabase.com](https://supabase.com)
2. Note down your project URL and API keys from Settings > API

---

## Database Setup

### Step 1: Run the Schema SQL

Go to **Supabase Dashboard > SQL Editor** and run the following SQL:

```sql
-- ============================================
-- SIMPLE CAREER MANAGEMENT SYSTEM - DATABASE SCHEMA
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

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_jobs_slug ON jobs(slug);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON jobs(created_at DESC);

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
DROP TRIGGER IF EXISTS update_jobs_updated_at ON jobs;
CREATE TRIGGER update_jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

---

## Storage Setup

### Step 1: Create Storage Bucket

1. Go to **Supabase Dashboard > Storage**
2. Click **"New bucket"**
3. Configure:
   - **Name**: `resumes`
   - **Public bucket**: `false` (Private)
   - **File size limit**: `10485760` (10MB)
   - **Allowed MIME types**: 
     - `application/pdf`
     - `application/msword`
     - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

### Step 2: Set Storage Policies

Go to **Supabase Dashboard > Storage > Policies** and run this SQL:

```sql
-- ============================================
-- STORAGE POLICIES FOR RESUMES BUCKET
-- ============================================

-- Policy: Allow public to upload resumes (for application form)
CREATE POLICY "Public can upload resumes"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

-- Policy: Allow public to read files (for admin to download)
CREATE POLICY "Public can read resumes"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'resumes');

-- Policy: Allow service role to delete files (for cleanup if needed)
CREATE POLICY "Service role can delete resumes"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'resumes');
```

**Note**: The delete policy uses service role (bypasses RLS), so only server-side code with service role key can delete.

---

## Row Level Security (RLS)

### Enable RLS and Create Policies

Run this SQL in **Supabase Dashboard > SQL Editor**:

```sql
-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on both tables
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- ============================================
-- JOBS TABLE POLICIES
-- ============================================

-- Policy: Public can view open jobs only
DROP POLICY IF EXISTS "Public can view open jobs" ON jobs;
CREATE POLICY "Public can view open jobs"
  ON jobs
  FOR SELECT
  USING (status = 'open');

-- Policy: Service role can do everything (for admin operations)
-- Note: Service role bypasses RLS, so no policy needed

-- ============================================
-- APPLICATIONS TABLE POLICIES
-- ============================================

-- Policy: Public can insert applications (submit applications)
DROP POLICY IF EXISTS "Public can insert applications" ON applications;
CREATE POLICY "Public can insert applications"
  ON applications
  FOR INSERT
  WITH CHECK (true);

-- Policy: Public can read applications (simplified - for admin access via service role)
-- Note: In production, you might want to restrict this
-- For now, we use service role key for admin operations, so this is less critical
DROP POLICY IF EXISTS "Public can read applications" ON applications;
CREATE POLICY "Public can read applications"
  ON applications
  FOR SELECT
  USING (true);

-- Note: Admin operations (reading all applications) use service role key
-- which bypasses RLS, so these policies are mainly for public access
```

---

## Environment Variables

Add these to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Admin Secret (for simple admin authentication)
ADMIN_SECRET=your-secure-admin-secret-key-here
NEXT_PUBLIC_ADMIN_SECRET=your-secure-admin-secret-key-here

# Existing SMTP Configuration (keep your existing values)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@techemulsion.com
SMTP_TO=careers@techemulsion.com
```

### Where to Find Supabase Keys:

1. Go to **Supabase Dashboard > Settings > API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep this secret!)

---

## Testing the Setup

### Test 1: Verify Tables Exist

Run in SQL Editor:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('jobs', 'applications');
```

Should return both tables.

### Test 2: Verify Storage Bucket

1. Go to **Storage > Buckets**
2. Verify `resumes` bucket exists
3. Check it's set to **Private**

### Test 3: Insert a Test Job

Run in SQL Editor:

```sql
INSERT INTO jobs (slug, title, department, location, employment_type, description, requirements, status)
VALUES (
  'test-web-developer',
  'Test Web Developer',
  'Engineering',
  'Peshawar, Pakistan',
  'Full-time',
  'This is a test job posting to verify the setup.',
  ARRAY['React', 'Next.js', 'TypeScript'],
  'open'
)
RETURNING *;
```

### Test 4: Verify RLS Policies

Run in SQL Editor (should only return open jobs):

```sql
-- This should work (returns open jobs)
SELECT * FROM jobs WHERE status = 'open';

-- This should return empty (closed jobs are hidden from public)
SELECT * FROM jobs WHERE status = 'closed';
```

---

## Sample Data

### Insert Sample Jobs

Run this SQL to add sample jobs:

```sql
-- ============================================
-- SAMPLE JOBS DATA
-- ============================================

INSERT INTO jobs (slug, title, department, location, employment_type, description, requirements, status)
VALUES 
  (
    'web-developer',
    'Web Developer',
    'Engineering',
    'Peshawar, Pakistan',
    'Full-time',
    'We are looking for a skilled Web Developer to join our team. You will build and maintain high-quality web experiences for our global clients.',
    ARRAY[
      '2+ years of professional experience with modern JavaScript and TypeScript',
      'Strong experience with React / Next.js and component-based architectures',
      'Solid understanding of HTML5, CSS3, and responsive design best practices',
      'Familiarity with Git, code review workflows, and basic CI/CD concepts'
    ],
    'open'
  ),
  (
    'ai-engineer',
    'AI Engineer',
    'AI & Data',
    'Peshawar, Pakistan',
    'Full-time',
    'As an AI Engineer at Tech Emulsion, you will help design, prototype, and ship AI-powered experiences across our products and client projects.',
    ARRAY[
      'Experience working with modern LLMs and vector databases',
      'Strong programming skills in TypeScript, Python, or similar',
      'Understanding of prompt engineering, evaluation, and observability',
      'Familiarity with cloud platforms and deploying AI workloads'
    ],
    'open'
  ),
  (
    'devops-engineer',
    'DevOps Engineer',
    'Engineering',
    'Peshawar, Pakistan',
    'Full-time',
    'We are seeking a DevOps Engineer to help build and maintain our infrastructure and deployment pipelines.',
    ARRAY[
      'Experience with AWS, Docker, and Kubernetes',
      'Strong knowledge of CI/CD pipelines',
      'Familiarity with infrastructure as code (Terraform, CloudFormation)',
      'Experience with monitoring and logging tools'
    ],
    'open'
  )
ON CONFLICT (slug) DO NOTHING;
```

### Verify Sample Data

```sql
-- Check all jobs
SELECT id, slug, title, department, status, created_at FROM jobs ORDER BY created_at DESC;

-- Check only open jobs (what public sees)
SELECT id, slug, title, department FROM jobs WHERE status = 'open' ORDER BY created_at DESC;
```

---

## Database Functions (Optional - for future enhancements)

### Function: Get Job with Application Count

```sql
-- Function to get job with application count
CREATE OR REPLACE FUNCTION get_job_with_applications(job_slug TEXT)
RETURNS TABLE (
  id UUID,
  slug TEXT,
  title TEXT,
  department TEXT,
  location TEXT,
  employment_type TEXT,
  description TEXT,
  requirements TEXT[],
  status TEXT,
  created_at TIMESTAMP WITH TIME ZONE,
  application_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    j.id,
    j.slug,
    j.title,
    j.department,
    j.location,
    j.employment_type,
    j.description,
    j.requirements,
    j.status,
    j.created_at,
    COUNT(a.id)::BIGINT as application_count
  FROM jobs j
  LEFT JOIN applications a ON j.id = a.job_id
  WHERE j.slug = job_slug
  GROUP BY j.id;
END;
$$ LANGUAGE plpgsql;
```

### Usage:

```sql
SELECT * FROM get_job_with_applications('web-developer');
```

---

## Troubleshooting

### Issue: "relation does not exist"

**Solution**: Make sure you ran the schema SQL in the correct database. Check you're in the right project.

### Issue: "permission denied for table"

**Solution**: 
1. Check RLS policies are created correctly
2. Verify you're using the correct API key (anon key for public, service role for admin)

### Issue: "bucket does not exist"

**Solution**: 
1. Create the bucket manually in Storage > Buckets
2. Or run the storage bucket creation SQL

### Issue: "Failed to upload resume"

**Solution**:
1. Check storage bucket exists and is named `resumes`
2. Verify storage policies are set correctly
3. Check file size is under 10MB
4. Verify file type is PDF, DOC, or DOCX

### Issue: "Missing Supabase environment variables"

**Solution**:
1. Check `.env.local` file exists
2. Verify all three Supabase variables are set
3. Restart your Next.js dev server after adding env variables

---

## Security Notes

1. **Service Role Key**: Never expose this in client-side code. Only use in server-side API routes.

2. **Admin Secret**: Change the default admin secret to something secure. Use environment variables.

3. **RLS Policies**: The current setup allows public to read applications. For production, consider:
   - Restricting application reads to service role only
   - Adding email-based authentication for candidates to view their own applications

4. **Storage**: The resumes bucket is private but policies allow public read. For extra security:
   - Use signed URLs with expiration
   - Restrict read access to admin only

---

## Next Steps

After setup:

1. ✅ Test creating a job application
2. ✅ Test viewing applications in admin panel
3. ✅ Migrate existing static job data to Supabase
4. ✅ Set up proper authentication (optional, for future)

---

## Support

If you encounter issues:

1. Check Supabase Dashboard > Logs for errors
2. Verify all SQL scripts ran successfully
3. Check browser console and server logs
4. Ensure environment variables are set correctly

---

**Last Updated**: January 2025
