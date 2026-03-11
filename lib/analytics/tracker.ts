import { EVENT_NAMES } from "./constants";
import { getAttribution, getAttributionFromCurrentUrl, getOrCreateSessionId, getOrCreateVisitorId, captureAndPersistAttribution, persistAttributionFromCurrentUrlIfBetter, fetchAndPersistGeo } from "./source";
import type { VisitorEventPayload } from "./types";

const API_EVENTS_URL = "/api/events";
const MAX_PAYLOAD_SIZE = 8000;

// Guard so tracker is only initialized once per page load.
// In React 18 dev mode, effects can run twice; without this we would
// attach duplicate listeners and send duplicate events.
let trackerInitialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getPagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname || "";
}

function getUserAgent(): string {
  if (typeof navigator === "undefined") return "";
  return navigator.userAgent || "";
}

function buildPayload(
  eventType: string,
  eventName?: string,
  extraPayload?: Record<string, unknown>
): VisitorEventPayload {
  const sessionId = getOrCreateSessionId();
  // If storage says "direct" but current URL has utm_source or source path (e.g. /linkedin), use URL so LinkedIn etc. are attributed
  persistAttributionFromCurrentUrlIfBetter();
  const attribution = getAttribution();
  const fromUrl = getAttributionFromCurrentUrl();
  const effective =
    attribution?.platform === "direct" && fromUrl?.platform !== "direct"
      ? fromUrl
      : attribution;

  const pagePath = getPagePath();

  const payload: VisitorEventPayload = {
    session_id: sessionId,
    event_type: eventType,
    event_name: eventName,
    page_path: pagePath,
    payload: extraPayload ?? {},
    user_agent: getUserAgent(),
  };

  if (effective) {
    payload.platform = effective.platform;
    payload.utm_source = effective.utm_source;
    payload.utm_medium = effective.utm_medium;
    payload.utm_campaign = effective.utm_campaign;
    payload.utm_term = effective.utm_term;
    payload.utm_content = effective.utm_content;
    payload.referrer = effective.referrer || undefined;
    payload.country = effective.country ?? undefined;
    payload.city = effective.city ?? undefined;
  }

  const visitorId = getOrCreateVisitorId();
  if (visitorId) payload.visitor_id = visitorId;

  return payload;
}

export function sendToApi(payload: VisitorEventPayload): void {
  try {
    const body = JSON.stringify(payload);
    if (body.length > MAX_PAYLOAD_SIZE) return;

    if (
      navigator.sendBeacon &&
      (payload.event_type === EVENT_NAMES.SESSION_END || payload.event_type === EVENT_NAMES.PAGE_LEAVE)
    ) {
      navigator.sendBeacon(API_EVENTS_URL, body);
      return;
    }

    fetch(API_EVENTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: payload.event_type === EVENT_NAMES.SESSION_END,
    }).catch(() => {});
  } catch (_) {}
}

export function sendToGA(
  measurementId: string,
  eventName: string,
  params: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, {
    send_to: measurementId,
    ...params,
  });
}

export function trackEvent(
  eventType: string,
  eventName?: string,
  extraPayload?: Record<string, unknown>,
  gaMeasurementId?: string | null
): void {
  const payload = buildPayload(eventType, eventName, extraPayload);
  sendToApi(payload);

  if (gaMeasurementId && window.gtag) {
    const gaParams: Record<string, string | number | boolean | undefined> = {
      page_path: payload.page_path,
      platform: payload.platform ?? "direct",
      ...(extraPayload ?? {}),
    };
    sendToGA(gaMeasurementId, eventType, gaParams);
  }
}

let pageEnteredAt: number = 0;

export function getPageEnteredAt(): number {
  return pageEnteredAt;
}

export function setPageEnteredAt(ts: number): void {
  pageEnteredAt = ts;
}

/**
 * Associate the current session with a user (name, email, phone).
 * Call after contact form submit or any form that collects this info.
 * Admin will show this instead of/in addition to Session ID for readability.
 */
export function identifyUser(
  data: { name?: string; email?: string; phone?: string; company?: string },
  gaMeasurementId?: string | null
): void {
  const payload: Record<string, string> = {};
  if (data.name) payload.name = data.name.slice(0, 200);
  if (data.email) payload.email = data.email.slice(0, 320);
  if (data.phone) payload.phone = data.phone.slice(0, 32);
  if (data.company) payload.company = data.company.slice(0, 200);
  if (Object.keys(payload).length === 0) return;
  trackEvent(EVENT_NAMES.USER_IDENTIFIED, "user_identified", payload, gaMeasurementId);
}

/** Call when user leaves current page (e.g. route change); sends page_leave with time on page. */
export function trackPageLeave(
  pagePath: string,
  durationSec: number,
  gaMeasurementId?: string | null
): void {
  if (durationSec < 0) return;
  trackEvent(
    EVENT_NAMES.PAGE_LEAVE,
    "page_leave",
    { page_path: pagePath, duration_sec: durationSec },
    gaMeasurementId
  );
  pageEnteredAt = Date.now();
}

const GEO_WAIT_MS = 2500;

export function initTracker(gaMeasurementId: string | null): void {
  if (typeof window === "undefined") return;
  if (trackerInitialized) return;
  trackerInitialized = true;

  captureAndPersistAttribution();
  pageEnteredAt = Date.now();

  // Wait for geo (with timeout) so the first page_view includes country/city.
  // Otherwise Geography in admin stays empty because events are sent before ip-api responds.
  const path = getPagePath();
  const sendFirstPageView = () => {
    trackEvent(EVENT_NAMES.PAGE_VIEW, "page_view", { page_path: path }, gaMeasurementId);
  };
  Promise.race([
    fetchAndPersistGeo(),
    new Promise<void>((r) => setTimeout(r, GEO_WAIT_MS)),
  ]).then(sendFirstPageView);

  // Global click delegation
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      const button = target.closest("button");
      const clickable = target.closest('[role="button"]');
      const el = link || button || clickable;
      if (!el) return;

      const href = link?.getAttribute("href") ?? undefined;
      const id = (el as HTMLElement).id || el.getAttribute("data-track-id") || undefined;
      const text = (el as HTMLElement).textContent?.slice(0, 200) || el.getAttribute("aria-label") || undefined;

      trackEvent(
        EVENT_NAMES.LINK_CLICK,
        "link_click",
        {
          link_url: href,
          element_id: id,
          link_text: text,
        },
        gaMeasurementId
      );
    },
    { passive: true, capture: true }
  );

  // Hover tracking for elements with data-track-hover
  let hoverStart: number = 0;
  let hoverId: string | null = null;

  document.addEventListener(
    "mouseover",
    (e) => {
      const el = (e.target as HTMLElement).closest("[data-track-hover]");
      if (!el) return;
      const id = (el as HTMLElement).getAttribute("data-track-hover") || "unknown";
      hoverId = id;
      hoverStart = Date.now();
    },
    { passive: true }
  );

  document.addEventListener(
    "mouseout",
    (e) => {
      const el = (e.target as HTMLElement).closest("[data-track-hover]");
      if (!el || !hoverId) return;
      const duration = Math.round((Date.now() - hoverStart) / 1000);
      if (duration > 0) {
        trackEvent(
          EVENT_NAMES.ELEMENT_HOVER,
          "element_hover",
          { element_id: hoverId, duration_sec: duration },
          gaMeasurementId
        );
      }
      hoverId = null;
    },
    { passive: true }
  );

  // Session end: visibilitychange + pagehide (send only once per page)
  let sessionEndSent = false;
  const sendSessionEnd = () => {
    if (sessionEndSent) return;
    sessionEndSent = true;
    const timeOnPageSec = Math.round((Date.now() - pageEnteredAt) / 1000);
    const currentPath = getPagePath();
    if (timeOnPageSec > 0 && currentPath) {
      trackEvent(
        EVENT_NAMES.PAGE_LEAVE,
        "page_leave",
        { page_path: currentPath, duration_sec: timeOnPageSec },
        gaMeasurementId
      );
    }
    trackEvent(
      EVENT_NAMES.SESSION_END,
      "session_end",
      { time_on_page_sec: timeOnPageSec },
      gaMeasurementId
    );
  };

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") sendSessionEnd();
  });

  window.addEventListener("pagehide", sendSessionEnd);
}
