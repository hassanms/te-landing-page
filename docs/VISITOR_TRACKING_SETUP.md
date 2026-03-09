# Visitor & Event Tracking – Supabase Setup

## 1. Run the migration in Supabase

In **Supabase Dashboard → SQL Editor**, run the migration file:

**File:** `supabase/migrations/20250309000000_visitor_events.sql`

Or paste and run this SQL:

```sql
-- Table: visitor_events
CREATE TABLE IF NOT EXISTS visitor_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_name TEXT,
  page_path TEXT,
  payload JSONB DEFAULT '{}',
  platform TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_visitor_events_created_at ON visitor_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_visitor_events_session_id ON visitor_events(session_id);
CREATE INDEX IF NOT EXISTS idx_visitor_events_event_type ON visitor_events(event_type);
CREATE INDEX IF NOT EXISTS idx_visitor_events_platform ON visitor_events(platform);
CREATE INDEX IF NOT EXISTS idx_visitor_events_page_path ON visitor_events(page_path);
CREATE INDEX IF NOT EXISTS idx_visitor_events_platform_created ON visitor_events(platform, created_at DESC);

ALTER TABLE visitor_events ENABLE ROW LEVEL SECURITY;
```

## 2. Environment variables

No new env vars are required. The app uses:

- `NEXT_PUBLIC_SUPABASE_URL` – already used
- `SUPABASE_SERVICE_ROLE_KEY` – already used by admin APIs

Optional:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` – if set, used for GA4; otherwise falls back to the default ID.

## 3. Event types stored

| event_type           | Description                          |
|----------------------|--------------------------------------|
| `page_view`          | First page load / route (with source) |
| `link_click`         | User clicked a link or button        |
| `element_hover`      | Hover duration on tracked element    |
| `session_end`        | Tab close or navigate away           |

## 4. Viewing data in admin

- **Admin → Visitor Analytics** shows:
  - Traffic by platform (Google, LinkedIn, Direct, etc.)
  - Top pages, top link clicks, recent events
  - Time range filter (7 / 30 / 90 days)

Data is written by the public site to `POST /api/events`; the API inserts into `visitor_events` using the Supabase service role.
