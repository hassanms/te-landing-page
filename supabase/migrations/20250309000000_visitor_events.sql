-- ============================================
-- VISITOR EVENTS TABLE - Site analytics
-- ============================================
-- Run this in Supabase SQL Editor (or via migration)
-- Stores: traffic source attribution, link/button clicks, hover duration, session end
-- ============================================

-- Table: visitor_events
CREATE TABLE IF NOT EXISTS visitor_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_name TEXT,
  page_path TEXT,
  payload JSONB DEFAULT '{}',
  -- Attribution (from first-touch in session)
  platform TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  referrer TEXT,
  -- Metadata
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_visitor_events_created_at ON visitor_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_visitor_events_session_id ON visitor_events(session_id);
CREATE INDEX IF NOT EXISTS idx_visitor_events_event_type ON visitor_events(event_type);
CREATE INDEX IF NOT EXISTS idx_visitor_events_platform ON visitor_events(platform);
CREATE INDEX IF NOT EXISTS idx_visitor_events_page_path ON visitor_events(page_path);

-- Composite for admin dashboard: platform + time
CREATE INDEX IF NOT EXISTS idx_visitor_events_platform_created ON visitor_events(platform, created_at DESC);

-- RLS: only service role (API) can read/write. No public/anon access.
ALTER TABLE visitor_events ENABLE ROW LEVEL SECURITY;

-- No policies = only service_role bypasses RLS. Our API uses getSupabaseAdmin() (service role).
-- Optional: if you ever need anon to insert from client directly, add:
-- CREATE POLICY "Allow anon insert" ON visitor_events FOR INSERT TO anon WITH CHECK (true);
-- (We use server-side API to insert, so not required.)

COMMENT ON TABLE visitor_events IS 'Site visitor and event tracking: source, clicks, hover, session end';
