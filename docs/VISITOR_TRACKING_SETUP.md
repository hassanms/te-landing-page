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

Then run the second migration for geography (country, city):

**File:** `supabase/migrations/20250309100000_visitor_events_geo_and_page_leave.sql`

```sql
ALTER TABLE visitor_events ADD COLUMN IF NOT EXISTS country TEXT;
ALTER TABLE visitor_events ADD COLUMN IF NOT EXISTS city TEXT;
CREATE INDEX IF NOT EXISTS idx_visitor_events_country ON visitor_events(country);
CREATE INDEX IF NOT EXISTS idx_visitor_events_city ON visitor_events(city);
```

Then run the third migration for new vs returning (persistent visitor ID):

**File:** `supabase/migrations/20250309200000_visitor_events_visitor_id.sql`

```sql
ALTER TABLE visitor_events ADD COLUMN IF NOT EXISTS visitor_id TEXT;
CREATE INDEX IF NOT EXISTS idx_visitor_events_visitor_id ON visitor_events(visitor_id);
```

## 2. Environment variables

No new env vars are required. The app uses:

- `NEXT_PUBLIC_SUPABASE_URL` – already used
- `SUPABASE_SERVICE_ROLE_KEY` – already used by admin APIs

Optional:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` – if set, used for GA4; otherwise falls back to the default ID.

## 3. Event types stored

| event_type           | Description                                              |
|----------------------|----------------------------------------------------------|
| `page_view`          | Page load / route (with source, country, city)           |
| `page_leave`         | User left a page (with time spent on that page in sec)   |
| `link_click`         | User clicked a link or button                            |
| `element_hover`      | Hover duration on tracked element                        |
| `session_end`        | Tab close or navigate away (with time on last page)      |
| `user_identified`    | Name, email, phone (and optional company) from contact/career form submit; links the session to a person for admin readability. |

Country and city are resolved client-side via a geo API (ip-api.com) and stored with each event. A persistent **visitor_id** (localStorage) is used for "new vs returning" in the Overview; when absent, events still store normally. When a visitor submits the contact form or a career application, the session is associated with their name, email, and phone so the admin Sessions tab shows them instead of only the Session ID.

## 4. Viewing data in admin

- **Admin → Visitor Analytics** (GA-style):
  - **Overview:** Sessions, total events, avg session duration, top country; events-over-time chart, traffic by source (pie), top countries, top pages, most clicked.
  - **Visitors:** Bounce rate, conversion rate, new vs returning visitors (by persistent visitor_id); then full list of all visitors (up to 500 per period): Name, Email, Phone, Company (when they submitted contact/career form), Location (country, city – collected automatically for every visit), Source, First visit, Last seen, Time on site, Events count. Click **View** for full activity. Data is collected automatically (location, source, pages, time); name/email/phone appear when the visitor submits a form.
  - **Traffic sources:** Where visitors come from (Google, LinkedIn, Facebook, direct URL, etc.) with bar chart and table.
  - **Geography:** Country heatmap (sessions by country); by-country and by-city tables with unique **sessions** and event counts.
  - **Sessions:** Per-visitor sessions with User/Session ID, source, country, city, first page, arrived/left time, total duration. Click **View** to open session detail: time per page, full event timeline (page views, clicks, when they left, and which links/buttons they clicked).
  - **Settings:** Export current data as CSV (sessions for the selected period) before clearing; configurable retention (30, 60, 90, 180, 365 days) to clear analytics older than X days, or clear all (danger zone).

Data is written by the public site to `POST /api/events`; the API inserts into `visitor_events` using the Supabase service role. The settings tab calls `POST /api/admin/visitor-analytics/clear` with appropriate scope (`all` or `older_than_days`) to delete analytics data when needed.
