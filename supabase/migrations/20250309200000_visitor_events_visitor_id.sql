-- Persistent visitor ID for new vs returning analytics
ALTER TABLE visitor_events ADD COLUMN IF NOT EXISTS visitor_id TEXT;
CREATE INDEX IF NOT EXISTS idx_visitor_events_visitor_id ON visitor_events(visitor_id);
COMMENT ON COLUMN visitor_events.visitor_id IS 'Persistent visitor ID (localStorage) for new vs returning';
