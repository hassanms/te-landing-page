import { STORAGE_KEYS, type Platform } from "./constants";
import type { Attribution } from "./types";

const PLATFORM_DOMAINS: Record<string, Platform> = {
  "google.com": "google",
  "google.": "google",
  "linkedin.com": "linkedin",
  "lnkd.in": "linkedin", // LinkedIn link shortener; main linkedin.com often sends no referrer (Referrer-Policy: no-referrer)
  "linkedin.android": "linkedin", // LinkedIn in-app browser (e.g. com.linkedin.android)
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

/** Paths that imply traffic source when referrer is stripped (e.g. LinkedIn). Use these in the platform's "Website" URL. */
const SOURCE_PATHS: Record<string, Platform> = {
  "/linkedin": "linkedin",
  "/r/linkedin": "linkedin",
  "/from/linkedin": "linkedin",
};

function getPlatformFromReferrer(referrer: string): Platform {
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    // Same-site referrer counts as direct; localhost is kept separate for dev traffic
    if (host === "127.0.0.1") return "localhost";
    if (typeof window !== "undefined" && window.location?.hostname) {
      const siteHost = window.location.hostname.toLowerCase();
      if (host === siteHost || host.endsWith("." + siteHost) || siteHost.endsWith("." + host)) return "direct";
    }
    if (host === "localhost") return "localhost";
    for (const [domain, platform] of Object.entries(PLATFORM_DOMAINS)) {
      if (host.includes(domain)) return platform;
    }
    // For unknown referrers, store the domain as the source
    return host;
  } catch {
    return "unknown";
  }
}

function getPlatformFromUtmSource(utmSource: string): Platform {
  // Step 1 requirement: map known utm_source values; store others as-is
  const s = utmSource.trim().toLowerCase();
  if (!s) return "direct";
  if (s === "linkedin") return "linkedin";
  if (s === "facebook" || s === "fb") return "facebook";
  if (s === "google") return "google";
  // keep existing mappings without breaking legacy UTMs
  if (s.includes("twitter") || s.includes("x.com")) return "twitter";
  if (s.includes("youtube")) return "youtube";
  if (s.includes("email") || s.includes("newsletter")) return "email";
  return utmSource; // as-is
}

function getPlatformFromPath(path: string): Platform | null {
  const normalized = path.replace(/\/$/, "") || "/";
  return SOURCE_PATHS[normalized] ?? null;
}

/**
 * Derive platform (and UTM) from current window URL and referrer only.
 * Used when storage says "direct" but the URL has utm_source or a source path (e.g. /linkedin)
 * so we still attribute correctly (fixes race where first run saw wrong URL).
 */
export function getAttributionFromCurrentUrl(): Attribution | null {
  if (typeof window === "undefined" || typeof document === "undefined") return null;
  const referrer = document.referrer || "";
  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source") || "";
  const path = window.location.pathname || "";
  let platform: Platform = "direct";
  if (utm_source) {
    platform = getPlatformFromUtmSource(utm_source);
  } else if (referrer) {
    platform = getPlatformFromReferrer(referrer);
  } else {
    const pathPlatform = getPlatformFromPath(path);
    if (pathPlatform) platform = pathPlatform;
  }
  const storage = safeSessionStorage();
  return {
    platform,
    utm_source: params.get("utm_source") || null,
    utm_medium: params.get("utm_medium") || null,
    utm_campaign: params.get("utm_campaign") || null,
    utm_term: params.get("utm_term") || null,
    utm_content: params.get("utm_content") || null,
    referrer,
    first_landing_page: path,
    first_visit_at: storage?.getItem(STORAGE_KEYS.FIRST_VISIT_AT) || "",
    country: storage?.getItem(STORAGE_KEYS.COUNTRY) || null,
    city: storage?.getItem(STORAGE_KEYS.CITY) || null,
  };
}

/**
 * If current URL indicates a source (e.g. utm_source=linkedin or path /linkedin) but storage
 * has "direct", persist from current URL so this session is attributed correctly.
 */
export function persistAttributionFromCurrentUrlIfBetter(): void {
  const storage = safeSessionStorage();
  if (!storage) return;
  const storedPlatform = storage.getItem(STORAGE_KEYS.PLATFORM) as Platform | null;
  if (storedPlatform && storedPlatform !== "direct") return; // already have a source
  const current = getAttributionFromCurrentUrl();
  if (!current || current.platform === "direct") return;
  const now = new Date().toISOString();
  storage.setItem(STORAGE_KEYS.PLATFORM, current.platform);
  if (current.utm_source) storage.setItem(STORAGE_KEYS.UTM_SOURCE, current.utm_source);
  if (current.utm_medium) storage.setItem(STORAGE_KEYS.UTM_MEDIUM, current.utm_medium);
  if (current.utm_campaign) storage.setItem(STORAGE_KEYS.UTM_CAMPAIGN, current.utm_campaign);
  if (current.utm_term) storage.setItem(STORAGE_KEYS.UTM_TERM, current.utm_term);
  if (current.utm_content) storage.setItem(STORAGE_KEYS.UTM_CONTENT, current.utm_content);
  storage.setItem(STORAGE_KEYS.REFERRER, current.referrer || "");
  storage.setItem(STORAGE_KEYS.FIRST_LANDING_PAGE, current.first_landing_page || "/");
  if (!storage.getItem(STORAGE_KEYS.FIRST_VISIT_AT)) storage.setItem(STORAGE_KEYS.FIRST_VISIT_AT, now);
}

function safeSessionStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function safeLocalStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/**
 * Generate or retrieve persistent visitor ID (localStorage).
 * Used for "new vs returning" in analytics; survives browser close.
 */
export function getOrCreateVisitorId(): string | null {
  const storage = safeLocalStorage();
  if (!storage) return null;
  let vid = storage.getItem(STORAGE_KEYS.VISITOR_ID);
  if (!vid) {
    vid = `v_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    try {
      storage.setItem(STORAGE_KEYS.VISITOR_ID, vid);
    } catch {
      return null;
    }
  }
  return vid;
}

/**
 * Parse current URL for UTM params and read document.referrer; derive platform and persist to sessionStorage.
 * Call on first load (and optionally on route change for SPA).
 */
export function captureAndPersistAttribution(): void {
  const storage = safeSessionStorage();
  if (!storage) return;

  const referrer =
    typeof document !== "undefined" ? document.referrer || "" : "";

  // Additional requirement: On every page, prefer existing sessionStorage UTM before re-reading URL.
  const storedUtmSource = storage.getItem(STORAGE_KEYS.UTM_SOURCE) || "";
  const storedUtmMedium = storage.getItem(STORAGE_KEYS.UTM_MEDIUM) || "";
  const storedUtmCampaign = storage.getItem(STORAGE_KEYS.UTM_CAMPAIGN) || "";
  const storedUtmTerm = storage.getItem(STORAGE_KEYS.UTM_TERM) || "";
  const storedUtmContent = storage.getItem(STORAGE_KEYS.UTM_CONTENT) || "";

  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const utm_source = storedUtmSource || params.get("utm_source") || "";
  const utm_medium = storedUtmMedium || params.get("utm_medium") || "";
  const utm_campaign = storedUtmCampaign || params.get("utm_campaign") || "";
  const utm_term = storedUtmTerm || params.get("utm_term") || "";
  const utm_content = storedUtmContent || params.get("utm_content") || "";

  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const now = new Date().toISOString();

  // Step 1 → Step 2 → Step 3 priority
  let platform: Platform = "direct";
  if (utm_source) {
    platform = getPlatformFromUtmSource(utm_source);
  } else if (referrer) {
    platform = getPlatformFromReferrer(referrer);
  } else {
    const pathPlatform = getPlatformFromPath(path);
    if (pathPlatform) platform = pathPlatform;
  }

  // Persist UTM parameters in sessionStorage (don't lose them on navigation)
  if (utm_source && !storedUtmSource) storage.setItem(STORAGE_KEYS.UTM_SOURCE, utm_source);
  if (utm_medium && !storedUtmMedium) storage.setItem(STORAGE_KEYS.UTM_MEDIUM, utm_medium);
  if (utm_campaign && !storedUtmCampaign) storage.setItem(STORAGE_KEYS.UTM_CAMPAIGN, utm_campaign);
  if (utm_term && !storedUtmTerm) storage.setItem(STORAGE_KEYS.UTM_TERM, utm_term);
  if (utm_content && !storedUtmContent) storage.setItem(STORAGE_KEYS.UTM_CONTENT, utm_content);

  // Store referrer and platform (first-touch for landing page + time; platform can be updated from direct → better source)
  if (!storage.getItem(STORAGE_KEYS.REFERRER)) storage.setItem(STORAGE_KEYS.REFERRER, referrer);
  const storedPlatform = storage.getItem(STORAGE_KEYS.PLATFORM);
  if (!storedPlatform || storedPlatform === "direct") storage.setItem(STORAGE_KEYS.PLATFORM, String(platform));

  if (!storage.getItem(STORAGE_KEYS.FIRST_VISIT_AT)) {
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

  const platform = (storage.getItem(STORAGE_KEYS.PLATFORM) as Platform | null) || "direct";
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
 * Returns a Promise that resolves when geo is already set, or when the fetch
 * completes (success or failure). Used so the first page_view can wait for
 * geography before sending.
 */
export function fetchAndPersistGeo(): Promise<void> {
  const storage = safeSessionStorage();
  if (!storage) return Promise.resolve();
  if (storage.getItem(STORAGE_KEYS.COUNTRY)) return Promise.resolve();

  return fetch(GEO_API, { method: "GET" })
    .then((r) => r.json())
    .then((data: { country?: string; city?: string }) => {
      const storage2 = safeSessionStorage();
      if (!storage2) return;
      if (data.country) storage2.setItem(STORAGE_KEYS.COUNTRY, data.country);
      if (data.city) storage2.setItem(STORAGE_KEYS.CITY, data.city);
    })
    .catch(() => {})
    .then(() => undefined);
}
