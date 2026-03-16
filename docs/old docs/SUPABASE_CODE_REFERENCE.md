# Supabase Code Reference - All SQL, Functions, and Queries

Complete reference of all Supabase code used in the career management system.

---

## 📋 Table of Contents

1. [Database Schema](#database-schema)
2. [Storage Setup](#storage-setup)
3. [RLS Policies](#rls-policies)
4. [Sample Queries](#sample-queries)
5. [Database Functions](#database-functions)
6. [Edge Functions (Future)](#edge-functions-future)

---

## Database Schema

### Complete Schema SQL

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

-- Indexes
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

-- Indexes
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

-- Trigger
DROP TRIGGER IF EXISTS update_jobs_updated_at ON jobs;
CREATE TRIGGER update_jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

---

## Storage Setup

### Create Bucket (via Dashboard)

1. Go to **Storage > New Bucket**
2. Name: `resumes`
3. Public: `false`
4. File size limit: `10485760` (10MB)
5. Allowed MIME types:
   - `application/pdf`
   - `application/msword`
   - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

### Storage Policies SQL

```sql
-- ============================================
-- STORAGE POLICIES FOR RESUMES BUCKET
-- ============================================

-- Policy: Allow public to upload resumes
CREATE POLICY "Public can upload resumes"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

-- Policy: Allow public to read files
CREATE POLICY "Public can read resumes"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'resumes');

-- Policy: Allow service role to delete files
CREATE POLICY "Service role can delete resumes"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'resumes');
```

---

## RLS Policies

### Complete RLS Setup

```sql
-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- ============================================
-- JOBS TABLE POLICIES
-- ============================================

-- Public can view open jobs only
DROP POLICY IF EXISTS "Public can view open jobs" ON jobs;
CREATE POLICY "Public can view open jobs"
  ON jobs
  FOR SELECT
  USING (status = 'open');

-- ============================================
-- APPLICATIONS TABLE POLICIES
-- ============================================

-- Public can insert applications
DROP POLICY IF EXISTS "Public can insert applications" ON applications;
CREATE POLICY "Public can insert applications"
  ON applications
  FOR INSERT
  WITH CHECK (true);

-- Public can read applications (simplified)
DROP POLICY IF EXISTS "Public can read applications" ON applications;
CREATE POLICY "Public can read applications"
  ON applications
  FOR SELECT
  USING (true);
```

---

## Sample Queries

### Get All Open Jobs

```sql
SELECT * FROM jobs 
WHERE status = 'open' 
ORDER BY created_at DESC;
```

### Get Job by Slug

```sql
SELECT * FROM jobs 
WHERE slug = 'web-developer' 
AND status = 'open';
```

### Get Applications for a Job

```sql
SELECT 
  a.*,
  j.title as job_title
FROM applications a
JOIN jobs j ON a.job_id = j.id
WHERE a.job_id = 'job-uuid-here'
ORDER BY a.created_at DESC;
```

### Get All Applications with Job Info

```sql
SELECT 
  a.id,
  a.first_name,
  a.last_name,
  a.email,
  a.phone,
  a.resume_url,
  a.cover_letter,
  a.created_at,
  j.title as job_title,
  j.department,
  j.slug as job_slug
FROM applications a
LEFT JOIN jobs j ON a.job_id = j.id
ORDER BY a.created_at DESC;
```

### Count Applications per Job

```sql
SELECT 
  j.id,
  j.title,
  COUNT(a.id) as application_count
FROM jobs j
LEFT JOIN applications a ON j.id = a.job_id
WHERE j.status = 'open'
GROUP BY j.id, j.title
ORDER BY application_count DESC;
```

### Get Recent Applications (Last 7 Days)

```sql
SELECT * FROM applications
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Search Applications by Email

```sql
SELECT * FROM applications
WHERE email ILIKE '%search@email.com%'
ORDER BY created_at DESC;
```

---

## Database Functions

### Function: Get Job with Application Count

```sql
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

**Usage:**
```sql
SELECT * FROM get_job_with_applications('web-developer');
```

### Function: Get Application Statistics

```sql
CREATE OR REPLACE FUNCTION get_application_stats()
RETURNS TABLE (
  total_applications BIGINT,
  applications_today BIGINT,
  applications_this_week BIGINT,
  applications_this_month BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*)::BIGINT as total_applications,
    COUNT(*) FILTER (WHERE created_at::date = CURRENT_DATE)::BIGINT as applications_today,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days')::BIGINT as applications_this_week,
    COUNT(*) FILTER (WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE))::BIGINT as applications_this_month
  FROM applications;
END;
$$ LANGUAGE plpgsql;
```

**Usage:**
```sql
SELECT * FROM get_application_stats();
```

---

## Sample Data

### Insert Sample Jobs

```sql
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
  )
ON CONFLICT (slug) DO NOTHING;
```

### Update Job Status

```sql
-- Close a job
UPDATE jobs 
SET status = 'closed' 
WHERE slug = 'web-developer';

-- Reopen a job
UPDATE jobs 
SET status = 'open' 
WHERE slug = 'web-developer';
```

### Delete a Job (and cascade delete applications)

```sql
DELETE FROM jobs WHERE slug = 'web-developer';
-- Applications will be automatically deleted due to ON DELETE CASCADE
```

---

## Edge Functions (Future)

### Example: Email Notification Function

```typescript
// supabase/functions/send-application-notification/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    const { applicationId } = await req.json()
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Fetch application
    const { data: application } = await supabaseClient
      .from('applications')
      .select('*, jobs(*)')
      .eq('id', applicationId)
      .single()

    // Send email notification
    // ... email logic here

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
```

---

## Maintenance Queries

### Clean Up Old Applications (Optional)

```sql
-- Delete applications older than 1 year
DELETE FROM applications 
WHERE created_at < NOW() - INTERVAL '1 year';
```

### Archive Closed Jobs

```sql
-- Update jobs closed more than 6 months ago
UPDATE jobs 
SET status = 'closed' 
WHERE status = 'open' 
AND created_at < NOW() - INTERVAL '6 months';
```

### Get Storage Usage

```sql
-- Check storage bucket size (run in Supabase Dashboard > Storage)
-- Or use Supabase Storage API to get bucket stats
```

---

## Useful Supabase Dashboard Queries

### Check Table Sizes

```sql
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### Check Index Usage

```sql
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_scan as index_scans
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
ORDER BY idx_scan DESC;
```

---

## API Query Examples (JavaScript/TypeScript)

### Fetch Jobs (Client-side)

```typescript
import { supabase } from '@/lib/supabase/client'

const { data, error } = await supabase
  .from('jobs')
  .select('*')
  .eq('status', 'open')
  .order('created_at', { ascending: false })
```

### Insert Application (Server-side)

```typescript
import { supabaseAdmin } from '@/lib/supabase/server'

const { data, error } = await supabaseAdmin
  .from('applications')
  .insert({
    job_id: jobId,
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    resume_url: resumeUrl,
    cover_letter: coverLetter
  })
```

### Upload File to Storage

```typescript
import { supabaseAdmin } from '@/lib/supabase/server'

const fileBuffer = Buffer.from(base64Data, 'base64')
const filePath = `${jobId}/${timestamp}-${fileName}`

const { data, error } = await supabaseAdmin.storage
  .from('resumes')
  .upload(filePath, fileBuffer, {
    contentType: fileType,
    upsert: false
  })

// Get public URL
const { data: urlData } = supabaseAdmin.storage
  .from('resumes')
  .getPublicUrl(filePath)
```

---

**Last Updated**: January 2025
