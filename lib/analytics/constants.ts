/**
 * Analytics storage keys (sessionStorage) - prefix te_ to avoid collisions
 */
export const STORAGE_KEYS = {
  UTM_SOURCE: "te_utm_source",
  UTM_MEDIUM: "te_utm_medium",
  UTM_CAMPAIGN: "te_utm_campaign",
  UTM_TERM: "te_utm_term",
  UTM_CONTENT: "te_utm_content",
  REFERRER: "te_referrer",
  PLATFORM: "te_platform",
  FIRST_LANDING_PAGE: "te_first_landing_page",
  FIRST_VISIT_AT: "te_first_visit_at",
  SESSION_ID: "te_session_id",
  COUNTRY: "te_country",
  CITY: "te_city",
  /** Persistent visitor ID (localStorage) for new vs returning */
  VISITOR_ID: "te_visitor_id",
} as const;

export const EVENT_NAMES = {
  PAGE_VIEW: "page_view",
  PAGE_LEAVE: "page_leave",
  LINK_CLICK: "link_click",
  ELEMENT_HOVER: "element_hover",
  SESSION_END: "session_end",
  USER_IDENTIFIED: "user_identified",
} as const;

export const PLATFORM_VALUES = [
  "google",
  "linkedin",
  "facebook",
  "twitter",
  "youtube",
  "email",
  "direct",
  "unknown",
] as const;

/**
 * Traffic source label stored on each event.
 *
 * Historically this was limited to `PLATFORM_VALUES`, but some sources (e.g. custom UTM sources,
 * or non-mapped referrer domains) should be stored as-is. Keep the known values list for UI/logic,
 * but allow arbitrary strings.
 */
export type Platform = (typeof PLATFORM_VALUES)[number] | (string & {});
