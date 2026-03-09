import { STORAGE_KEYS, PLATFORM_VALUES } from "./constants";
import type { Attribution, Platform } from "./types";

const PLATFORM_DOMAINS: Record<string, Platform> = {
  "google.com": "google",
  "google.": "google",
  "linkedin.com": "linkedin",
  "facebook.com": "facebook",
  "fb.com": "facebook",
  "twitter.com": "twitter",
  "x.com": "twitter",
  "youtube.com": "youtube",
  "youtu.be": "youtube",
  "mail.": "email",
  "outlook": "email",
  "gmail": "email",
  "yahoo": "email",
};

function getPlatformFromReferrer(referrer: string): Platform {
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    for (const [domain, platform] of Object.entries(PLATFORM_DOMAINS)) {
      if (host.includes(domain)) return platform;
    }
    return "unknown";
  } catch {
    return "unknown";
  }
}

function getPlatformFromUtmSource(utmSource: string): Platform {
  const s = utmSource.toLowerCase();
  if (s.includes("google")) return "google";
  if (s.includes("linkedin")) return "linkedin";
  if (s.includes("facebook") || s.includes("fb")) return "facebook";
  if (s.includes("twitter") || s.includes("x.com")) return "twitter";
  if (s.includes("youtube")) return "youtube";
  if (s.includes("email") || s.includes("newsletter")) return "email";
  return "unknown";
}

function safeSessionStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/**
 * Parse current URL for UTM params and read document.referrer; derive platform and persist to sessionStorage.
 * Call on first load (and optionally on route change for SPA).
 */
export function captureAndPersistAttribution(): void {
  const storage = safeSessionStorage();
  if (!storage) return;

  const url =
    typeof window !== "undefined" ? window.location.href : "";
  const referrer =
    typeof document !== "undefined" ? document.referrer || "" : "";

  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const utm_source = params.get("utm_source") || "";
  const utm_medium = params.get("utm_medium") || "";
  const utm_campaign = params.get("utm_campaign") || "";
  const utm_term = params.get("utm_term") || "";
  const utm_content = params.get("utm_content") || "";

  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const now = new Date().toISOString();

  let platform: Platform = "direct";
  if (utm_source) {
    platform = getPlatformFromUtmSource(utm_source);
  } else if (referrer) {
    platform = getPlatformFromReferrer(referrer);
  }

  // First-touch: only set if not already set this session
  if (!storage.getItem(STORAGE_KEYS.FIRST_VISIT_AT)) {
    if (utm_source) storage.setItem(STORAGE_KEYS.UTM_SOURCE, utm_source);
    if (utm_medium) storage.setItem(STORAGE_KEYS.UTM_MEDIUM, utm_medium);
    if (utm_campaign) storage.setItem(STORAGE_KEYS.UTM_CAMPAIGN, utm_campaign);
    if (utm_term) storage.setItem(STORAGE_KEYS.UTM_TERM, utm_term);
    if (utm_content) storage.setItem(STORAGE_KEYS.UTM_CONTENT, utm_content);
    storage.setItem(STORAGE_KEYS.REFERRER, referrer);
    storage.setItem(STORAGE_KEYS.PLATFORM, platform);
    storage.setItem(STORAGE_KEYS.FIRST_LANDING_PAGE, path);
    storage.setItem(STORAGE_KEYS.FIRST_VISIT_AT, now);
  }
}

/**
 * Generate or retrieve session ID (one per tab).
 */
export function getOrCreateSessionId(): string {
  const storage = safeSessionStorage();
  if (!storage) return `s_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
  let sid = storage.getItem(STORAGE_KEYS.SESSION_ID);
  if (!sid) {
    sid = `s_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    storage.setItem(STORAGE_KEYS.SESSION_ID, sid);
  }
  return sid;
}

/**
 * Read persisted attribution from sessionStorage for attaching to events.
 */
export function getAttribution(): Attribution | null {
  const storage = safeSessionStorage();
  if (!storage) return null;

  const platform = storage.getItem(STORAGE_KEYS.PLATFORM) as Platform | null;
  if (!platform || !PLATFORM_VALUES.includes(platform)) {
    return {
      platform: "direct",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
      referrer: "",
      first_landing_page: "",
      first_visit_at: "",
      country: storage.getItem(STORAGE_KEYS.COUNTRY),
      city: storage.getItem(STORAGE_KEYS.CITY),
    };
  }

  return {
    platform,
    utm_source: storage.getItem(STORAGE_KEYS.UTM_SOURCE),
    utm_medium: storage.getItem(STORAGE_KEYS.UTM_MEDIUM),
    utm_campaign: storage.getItem(STORAGE_KEYS.UTM_CAMPAIGN),
    utm_term: storage.getItem(STORAGE_KEYS.UTM_TERM),
    utm_content: storage.getItem(STORAGE_KEYS.UTM_CONTENT),
    referrer: storage.getItem(STORAGE_KEYS.REFERRER) || "",
    first_landing_page: storage.getItem(STORAGE_KEYS.FIRST_LANDING_PAGE) || "",
    first_visit_at: storage.getItem(STORAGE_KEYS.FIRST_VISIT_AT) || "",
    country: storage.getItem(STORAGE_KEYS.COUNTRY),
    city: storage.getItem(STORAGE_KEYS.CITY),
  };
}

const GEO_API = "https://ip-api.com/json/?fields=country,city,regionName";

/**
 * Fetch country/city from public geo API and persist to sessionStorage.
 * Call once per session; safe to call multiple times (no-op if already set).
 */
export function fetchAndPersistGeo(): void {
  const storage = safeSessionStorage();
  if (!storage || storage.getItem(STORAGE_KEYS.COUNTRY)) return;

  fetch(GEO_API, { method: "GET" })
    .then((r) => r.json())
    .then((data: { country?: string; city?: string }) => {
      const storage2 = safeSessionStorage();
      if (!storage2) return;
      if (data.country) storage2.setItem(STORAGE_KEYS.COUNTRY, data.country);
      if (data.city) storage2.setItem(STORAGE_KEYS.CITY, data.city);
    })
    .catch(() => {});
}
