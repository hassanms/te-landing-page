-- Add country and city for geography reporting
ALTER TABLE visitor_events ADD COLUMN IF NOT EXISTS country TEXT;
ALTER TABLE visitor_events ADD COLUMN IF NOT EXISTS city TEXT;

CREATE INDEX IF NOT EXISTS idx_visitor_events_country ON visitor_events(country);
CREATE INDEX IF NOT EXISTS idx_visitor_events_city ON visitor_events(city);

COMMENT ON COLUMN visitor_events.country IS 'Country from geo lookup (e.g. ip-api)';
COMMENT ON COLUMN visitor_events.city IS 'City from geo lookup';
