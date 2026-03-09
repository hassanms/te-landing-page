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
} as const;

export const EVENT_NAMES = {
  PAGE_VIEW: "page_view",
  LINK_CLICK: "link_click",
  ELEMENT_HOVER: "element_hover",
  SESSION_END: "session_end",
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

export type Platform = (typeof PLATFORM_VALUES)[number];
