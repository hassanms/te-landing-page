import type { Platform } from "./constants";

export interface Attribution {
  platform: Platform;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  referrer: string;
  first_landing_page: string;
  first_visit_at: string;
  country: string | null;
  city: string | null;
}

export interface VisitorEventPayload {
  session_id: string;
  event_type: string;
  event_name?: string;
  page_path?: string;
  payload?: Record<string, unknown>;
  /**
   * Traffic source. For known sources it's one of the canonical platform values
   * (google/linkedin/facebook/direct/...). For unknown UTM or referrer domains it can be a raw string.
   */
  platform?: Platform;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  referrer?: string;
  user_agent?: string;
  country?: string | null;
  city?: string | null;
  /** Persistent ID for new vs returning (localStorage) */
  visitor_id?: string | null;
}
