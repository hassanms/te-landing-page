-- ============================================
-- MIGRATION: Add Application Status Management
-- ============================================
-- Run this SQL in Supabase Dashboard > SQL Editor
-- This adds status tracking to applications
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

-- ============================================
-- VERIFICATION QUERY
-- ============================================
-- Run this to verify all columns were added successfully:
-- 
-- SELECT column_name, data_type, is_nullable, column_default
-- FROM information_schema.columns
-- WHERE table_name = 'applications'
-- AND column_name IN ('status', 'admin_notes', 'status_updated_at', 'updated_by')
-- ORDER BY ordinal_position;
-- ============================================
