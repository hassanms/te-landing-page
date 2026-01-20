-- ============================================
-- MIGRATION: Add Additional Application Fields
-- ============================================
-- Run this SQL in Supabase Dashboard > SQL Editor
-- This adds all form fields to the applications table
-- ============================================

-- Add additional columns to applications table
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS country_code TEXT,
ADD COLUMN IF NOT EXISTS year_of_graduation TEXT,
ADD COLUMN IF NOT EXISTS gender TEXT,
ADD COLUMN IF NOT EXISTS experience_years TEXT,
ADD COLUMN IF NOT EXISTS current_employer TEXT,
ADD COLUMN IF NOT EXISTS current_ctc TEXT,
ADD COLUMN IF NOT EXISTS expected_ctc TEXT,
ADD COLUMN IF NOT EXISTS notice_period TEXT,
ADD COLUMN IF NOT EXISTS skills TEXT,
ADD COLUMN IF NOT EXISTS source TEXT,
ADD COLUMN IF NOT EXISTS current_location TEXT,
ADD COLUMN IF NOT EXISTS preferred_location TEXT,
ADD COLUMN IF NOT EXISTS linkedin_url TEXT,
ADD COLUMN IF NOT EXISTS portfolio_url TEXT;

-- ============================================
-- VERIFICATION QUERY
-- ============================================
-- Run this to verify all columns were added successfully:
-- 
-- SELECT column_name, data_type, is_nullable
-- FROM information_schema.columns
-- WHERE table_name = 'applications'
-- ORDER BY ordinal_position;
-- ============================================
