# Application Status Management & Analytics - Complete SQL Reference

This document contains all Supabase SQL queries, migrations, and setup instructions for the Application Tracking and Analytics features.

---

## 📋 Table of Contents

1. [Database Migration](#database-migration)
2. [SQL Queries Reference](#sql-queries-reference)
3. [API Endpoints](#api-endpoints)
4. [Setup Instructions](#setup-instructions)

---

## 🗄️ Database Migration

### Migration File: `supabase/migrations/add_application_status.sql`

Run this migration to add status tracking to the applications table:

```sql
-- ============================================
-- MIGRATION: Add Application Status Management
-- ============================================

-- Add status column to applications table
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending' 
  CHECK (status IN ('pending', 'reviewing', 'shortlisted', 'interviewed', 'offered', 'rejected', 'withdrawn'));

-- Add notes/comments column for admin notes
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS admin_notes TEXT;

-- Add status updated timestamp
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS status_updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add updated_by column (for tracking who changed the status)
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS updated_by TEXT;

-- Create index on status for faster queries
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_status_updated_at ON applications(status_updated_at DESC);

-- ============================================
-- FUNCTION: Update status_updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_application_status_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    NEW.status_updated_at = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update status_updated_at when status changes
DROP TRIGGER IF EXISTS update_applications_status_updated_at ON applications;
CREATE TRIGGER update_applications_status_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_application_status_timestamp();
```

---

## 📊 SQL Queries Reference

### 1. Get All Applications with Status

```sql
SELECT 
  a.id,
  a.first_name,
  a.last_name,
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

### 2. Get Applications by Status

```sql
SELECT * FROM applications
WHERE status = 'pending'
ORDER BY created_at DESC;
```

### 3. Update Application Status

```sql
UPDATE applications
SET 
  status = 'reviewing',
  admin_notes = 'Initial review completed',
  status_updated_at = NOW(),
  updated_by = 'Admin User'
WHERE id = 'application-uuid-here';
```

### 4. Get Status Breakdown

```sql
SELECT 
  status,
  COUNT(*) as count
FROM applications
GROUP BY status
ORDER BY count DESC;
```

### 5. Get Applications by Department

```sql
SELECT 
  j.department,
  COUNT(a.id) as application_count
FROM applications a
JOIN jobs j ON a.job_id = j.id
GROUP BY j.department
ORDER BY application_count DESC;
```

### 6. Get Recent Applications (Last N Days)

```sql
SELECT * FROM applications
WHERE created_at >= NOW() - INTERVAL '30 days'
ORDER BY created_at DESC;
```

### 7. Get Average Response Time

```sql
SELECT 
  AVG(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400) as avg_days
FROM applications
WHERE status != 'pending' AND status_updated_at IS NOT NULL;
```

### 8. Get Applications by Job

```sql
SELECT 
  j.title,
  j.id as job_id,
  COUNT(a.id) as application_count
FROM jobs j
LEFT JOIN applications a ON j.id = a.job_id
GROUP BY j.id, j.title
ORDER BY application_count DESC;
```

### 9. Get Daily Application Count

```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as count
FROM applications
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### 10. Get Status History (if you add a history table later)

```sql
-- This is for future enhancement
-- You can create a status_history table to track all status changes

CREATE TABLE IF NOT EXISTS application_status_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  old_status TEXT,
  new_status TEXT NOT NULL,
  changed_by TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_status_history_application_id ON application_status_history(application_id);
CREATE INDEX idx_status_history_created_at ON application_status_history(created_at DESC);
```

---

## 🔌 API Endpoints

### 1. Update Application Status

**Endpoint:** `PUT /api/admin/applications/[id]/status`

**Request:**
```json
{
  "status": "reviewing",
  "adminNotes": "Initial review completed",
  "updatedBy": "Admin User"
}
```

**Response:**
```json
{
  "application": {
    "id": "...",
    "status": "reviewing",
    "admin_notes": "Initial review completed",
    "status_updated_at": "2025-01-15T10:30:00Z",
    "updated_by": "Admin User"
  }
}
```

### 2. Get Analytics

**Endpoint:** `GET /api/admin/analytics?secret=SECRET&period=30`

**Query Parameters:**
- `secret` (required): Admin secret key
- `period` (optional): Number of days (default: 30)

**Response:**
```json
{
  "summary": {
    "totalApplications": 150,
    "totalJobs": 10,
    "openJobs": 8,
    "recentApplications": 45,
    "avgApplicationsPerJob": 15.0,
    "avgResponseTime": 3.5
  },
  "statusBreakdown": {
    "pending": 20,
    "reviewing": 15,
    "shortlisted": 10,
    "interviewed": 5,
    "offered": 3,
    "rejected": 90,
    "withdrawn": 7
  },
  "applicationsByJob": {
    "job-uuid-1": 25,
    "job-uuid-2": 30
  },
  "applicationsByDay": {
    "2025-01-15": 5,
    "2025-01-14": 3
  },
  "applicationsByDepartment": {
    "Engineering": 80,
    "Sales": 40,
    "Marketing": 30
  },
  "period": 30
}
```

---

## 🚀 Setup Instructions

### Step 1: Run Database Migration

1. Go to **Supabase Dashboard > SQL Editor**
2. Open `supabase/migrations/add_application_status.sql`
3. Copy the entire content
4. Paste into SQL Editor
5. Click **Run**

### Step 2: Verify Migration

Run this query to verify all columns were added:

```sql
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'applications'
AND column_name IN ('status', 'admin_notes', 'status_updated_at', 'updated_by')
ORDER BY ordinal_position;
```

### Step 3: Test Status Update

Test updating an application status:

```sql
-- Get an application ID first
SELECT id, first_name, last_name, status FROM applications LIMIT 1;

-- Update its status
UPDATE applications
SET 
  status = 'reviewing',
  admin_notes = 'Test note',
  updated_by = 'Test Admin'
WHERE id = 'your-application-id-here';

-- Verify the update
SELECT id, status, admin_notes, status_updated_at, updated_by 
FROM applications 
WHERE id = 'your-application-id-here';
```

---

## 📈 Analytics Queries

### Get Complete Analytics (Used by API)

```sql
-- This is the comprehensive query used in the analytics API
WITH application_stats AS (
  SELECT 
    COUNT(*) as total_applications,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as recent_applications,
    COUNT(*) FILTER (WHERE status = 'pending') as pending_count,
    COUNT(*) FILTER (WHERE status = 'reviewing') as reviewing_count,
    COUNT(*) FILTER (WHERE status = 'shortlisted') as shortlisted_count,
    COUNT(*) FILTER (WHERE status = 'interviewed') as interviewed_count,
    COUNT(*) FILTER (WHERE status = 'offered') as offered_count,
    COUNT(*) FILTER (WHERE status = 'rejected') as rejected_count,
    COUNT(*) FILTER (WHERE status = 'withdrawn') as withdrawn_count
  FROM applications
),
job_stats AS (
  SELECT 
    COUNT(*) as total_jobs,
    COUNT(*) FILTER (WHERE status = 'open') as open_jobs
  FROM jobs
)
SELECT * FROM application_stats, job_stats;
```

### Get Applications by Department

```sql
SELECT 
  j.department,
  COUNT(a.id) as count,
  ROUND(COUNT(a.id) * 100.0 / (SELECT COUNT(*) FROM applications), 2) as percentage
FROM applications a
JOIN jobs j ON a.job_id = j.id
GROUP BY j.department
ORDER BY count DESC;
```

### Get Response Time Statistics

```sql
SELECT 
  status,
  COUNT(*) as count,
  AVG(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400) as avg_days_to_update,
  MIN(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400) as min_days,
  MAX(EXTRACT(EPOCH FROM (status_updated_at - created_at)) / 86400) as max_days
FROM applications
WHERE status != 'pending' AND status_updated_at IS NOT NULL
GROUP BY status
ORDER BY avg_days_to_update;
```

---

## 🔍 Useful Queries for Reporting

### Weekly Application Trends

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
  ROUND(COUNT(*) FILTER (WHERE a.status = 'offered') * 100.0 / COUNT(a.id), 2) as offer_rate
FROM jobs j
LEFT JOIN applications a ON j.id = a.job_id
GROUP BY j.id, j.title, j.department
HAVING COUNT(a.id) > 0
ORDER BY total_applications DESC
LIMIT 10;
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

---

## 📝 Notes

- All status values are validated at the database level using CHECK constraints
- Status updates automatically trigger timestamp updates
- The `updated_by` field can be used to track which admin made changes
- Admin notes are stored as plain text (consider adding rich text support later)
- All timestamps are stored in UTC with timezone information

---

**Last Updated**: January 2025
