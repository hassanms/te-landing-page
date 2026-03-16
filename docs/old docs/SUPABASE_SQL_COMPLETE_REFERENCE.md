# Complete Supabase SQL Reference - Application Status & Analytics

This document contains **ALL** Supabase SQL queries needed for the Application Tracking and Analytics features.

---

## 📋 Quick Setup

### 1. Run Migration

Copy and run this in **Supabase Dashboard > SQL Editor**:

```sql
-- ============================================
-- MIGRATION: Add Application Status Management
-- ============================================

-- Add status column
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending' 
  CHECK (status IN ('pending', 'reviewing', 'shortlisted', 'interviewed', 'offered', 'rejected', 'withdrawn'));

-- Add admin notes
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS admin_notes TEXT;

-- Add status updated timestamp
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS status_updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add updated_by column
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS updated_by TEXT;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_status_updated_at ON applications(status_updated_at DESC);

-- Create function for auto-updating timestamp
CREATE OR REPLACE FUNCTION update_application_status_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    NEW.status_updated_at = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS update_applications_status_updated_at ON applications;
CREATE TRIGGER update_applications_status_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_application_status_timestamp();
```

---

## 🔍 Common Queries

### Get All Applications with Status

```sql
SELECT 
  a.id,
  a.first_name || ' ' || a.last_name as name,
  a.email,
  a.phone,
  a.status,
  a.admin_notes,
  a.status_updated_at,
  a.updated_by,
  a.created_at,
  j.title as job_title,
  j.department
FROM applications a
LEFT JOIN jobs j ON a.job_id = j.id
ORDER BY a.created_at DESC;
```

### Filter Applications by Status

```sql
SELECT * FROM applications
WHERE status = 'pending'
ORDER BY created_at DESC;
```

### Update Application Status

```sql
UPDATE applications
SET 
  status = 'reviewing',
  admin_notes = 'Initial review completed',
  status_updated_at = NOW(),
  updated_by = 'Admin User'
WHERE id = 'application-uuid-here';
```

### Get Status Statistics

```sql
SELECT 
  status,
  COUNT(*) as count,
  ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM applications), 2) as percentage
FROM applications
GROUP BY status
ORDER BY count DESC;
```

### Get Applications by Department

```sql
SELECT 
  j.department,
  COUNT(a.id) as application_count,
  COUNT(*) FILTER (WHERE a.status = 'offered') as offers_made
FROM applications a
JOIN jobs j ON a.job_id = j.id
GROUP BY j.department
ORDER BY application_count DESC;
```

### Get Recent Applications (Last 30 Days)

```sql
SELECT 
  a.*,
  j.title as job_title
FROM applications a
LEFT JOIN jobs j ON a.job_id = j.id
WHERE a.created_at >= NOW() - INTERVAL '30 days'
ORDER BY a.created_at DESC;
```

### Get Average Response Time

```sql
SELECT 
  AVG(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400) as avg_days
FROM applications
WHERE status != 'pending' 
  AND status_updated_at IS NOT NULL
  AND created_at IS NOT NULL;
```

### Get Daily Application Count

```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as count
FROM applications
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### Get Applications by Job

```sql
SELECT 
  j.id,
  j.title,
  j.department,
  COUNT(a.id) as total_applications,
  COUNT(*) FILTER (WHERE a.status = 'pending') as pending,
  COUNT(*) FILTER (WHERE a.status = 'offered') as offered
FROM jobs j
LEFT JOIN applications a ON j.id = a.job_id
GROUP BY j.id, j.title, j.department
ORDER BY total_applications DESC;
```

---

## 📊 Analytics Queries

### Complete Analytics Summary

```sql
WITH app_stats AS (
  SELECT 
    COUNT(*) as total_applications,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as recent_applications,
    COUNT(*) FILTER (WHERE status = 'pending') as pending,
    COUNT(*) FILTER (WHERE status = 'reviewing') as reviewing,
    COUNT(*) FILTER (WHERE status = 'shortlisted') as shortlisted,
    COUNT(*) FILTER (WHERE status = 'interviewed') as interviewed,
    COUNT(*) FILTER (WHERE status = 'offered') as offered,
    COUNT(*) FILTER (WHERE status = 'rejected') as rejected,
    COUNT(*) FILTER (WHERE status = 'withdrawn') as withdrawn
  FROM applications
),
job_stats AS (
  SELECT 
    COUNT(*) as total_jobs,
    COUNT(*) FILTER (WHERE status = 'open') as open_jobs
  FROM jobs
)
SELECT * FROM app_stats, job_stats;
```

### Weekly Trends

```sql
SELECT 
  DATE_TRUNC('week', created_at) as week,
  COUNT(*) as applications,
  COUNT(*) FILTER (WHERE status = 'offered') as offers,
  COUNT(*) FILTER (WHERE status = 'rejected') as rejections
FROM applications
WHERE created_at >= NOW() - INTERVAL '12 weeks'
GROUP BY DATE_TRUNC('week', created_at)
ORDER BY week DESC;
```

### Top Performing Jobs

```sql
SELECT 
  j.title,
  j.department,
  COUNT(a.id) as total_applications,
  COUNT(*) FILTER (WHERE a.status = 'offered') as offers_made,
  ROUND(COUNT(*) FILTER (WHERE a.status = 'offered') * 100.0 / NULLIF(COUNT(a.id), 0), 2) as offer_rate
FROM jobs j
LEFT JOIN applications a ON j.id = a.job_id
GROUP BY j.id, j.title, j.department
HAVING COUNT(a.id) > 0
ORDER BY total_applications DESC;
```

### Application Source Analysis

```sql
SELECT 
  source,
  COUNT(*) as count,
  COUNT(*) FILTER (WHERE status = 'offered') as offers,
  ROUND(COUNT(*) FILTER (WHERE status = 'offered') * 100.0 / COUNT(*), 2) as conversion_rate
FROM applications
WHERE source IS NOT NULL
GROUP BY source
ORDER BY count DESC;
```

### Response Time by Status

```sql
SELECT 
  status,
  COUNT(*) as count,
  ROUND(AVG(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400), 2) as avg_days,
  ROUND(MIN(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400), 2) as min_days,
  ROUND(MAX(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400), 2) as max_days
FROM applications
WHERE status != 'pending' 
  AND status_updated_at IS NOT NULL
  AND created_at IS NOT NULL
GROUP BY status
ORDER BY avg_days;
```

---

## 🔧 Maintenance Queries

### Verify Migration Success

```sql
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'applications'
AND column_name IN ('status', 'admin_notes', 'status_updated_at', 'updated_by')
ORDER BY ordinal_position;
```

### Check Indexes

```sql
SELECT 
  indexname,
  indexdef
FROM pg_indexes
WHERE tablename = 'applications'
AND indexname LIKE 'idx_applications%';
```

### Find Applications Without Status

```sql
SELECT id, first_name, last_name, email, created_at
FROM applications
WHERE status IS NULL;
```

### Update Old Applications to Default Status

```sql
UPDATE applications
SET status = 'pending'
WHERE status IS NULL;
```

---

## 📈 Reporting Queries

### Monthly Application Report

```sql
SELECT 
  DATE_TRUNC('month', created_at) as month,
  COUNT(*) as total_applications,
  COUNT(*) FILTER (WHERE status = 'offered') as offers,
  COUNT(*) FILTER (WHERE status = 'rejected') as rejections,
  ROUND(COUNT(*) FILTER (WHERE status = 'offered') * 100.0 / COUNT(*), 2) as offer_rate
FROM applications
WHERE created_at >= NOW() - INTERVAL '12 months'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;
```

### Department Performance

```sql
SELECT 
  j.department,
  COUNT(a.id) as total_applications,
  COUNT(*) FILTER (WHERE a.status = 'offered') as offers,
  COUNT(*) FILTER (WHERE a.status = 'rejected') as rejections,
  ROUND(AVG(EXTRACT(EPOCH FROM (a.status_updated_at - a.created_at)) / 86400), 2) as avg_response_days
FROM jobs j
LEFT JOIN applications a ON j.id = a.job_id
WHERE a.id IS NOT NULL
GROUP BY j.department
ORDER BY total_applications DESC;
```

### Status Transition Analysis

```sql
-- This shows how applications move through statuses
SELECT 
  status,
  COUNT(*) as current_count,
  COUNT(*) FILTER (WHERE status_updated_at >= NOW() - INTERVAL '7 days') as changed_last_week
FROM applications
GROUP BY status
ORDER BY current_count DESC;
```

---

## 🛠️ Utility Queries

### Reset Application Status (for testing)

```sql
-- Reset all applications to pending (use with caution!)
UPDATE applications
SET 
  status = 'pending',
  admin_notes = NULL,
  status_updated_at = NOW(),
  updated_by = 'System Reset';
```

### Clean Up Test Data

```sql
-- Delete test applications (be careful!)
DELETE FROM applications
WHERE email LIKE '%test%' OR email LIKE '%example%';
```

### Export Applications to CSV Format

```sql
-- This query output can be exported as CSV
SELECT 
  a.id,
  a.first_name,
  a.last_name,
  a.email,
  a.phone,
  a.status,
  a.admin_notes,
  j.title as job_title,
  j.department,
  a.created_at,
  a.status_updated_at
FROM applications a
LEFT JOIN jobs j ON a.job_id = j.id
ORDER BY a.created_at DESC;
```

---

## 📝 Notes

- All timestamps are in UTC
- Status values are validated at database level
- Indexes improve query performance
- Use `IF NOT EXISTS` to avoid errors on re-run
- Always backup before running UPDATE/DELETE queries

---

**File Location**: `supabase/migrations/add_application_status.sql`  
**Last Updated**: January 2025
