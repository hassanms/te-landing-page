-- ============================================
-- ADD TOTAL POSITIONS COLUMN TO JOBS TABLE
-- ============================================
-- This migration adds the total_positions field to the jobs table
-- Run this SQL in your Supabase SQL Editor
-- ============================================

ALTER TABLE jobs
ADD COLUMN IF NOT EXISTS total_positions INTEGER DEFAULT NULL;

-- Add a comment to document the column
COMMENT ON COLUMN jobs.total_positions IS 'Total number of positions available for this job posting';
