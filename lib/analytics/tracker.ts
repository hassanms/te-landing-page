import { EVENT_NAMES } from "./constants";
import { getAttribution, getOrCreateSessionId, captureAndPersistAttribution } from "./source";
import type { VisitorEventPayload } from "./types";

const API_EVENTS_URL = "/api/events";
const MAX_PAYLOAD_SIZE = 8000;

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
  const attribution = getAttribution();
  const pagePath = getPagePath();

  const payload: VisitorEventPayload = {
    session_id: sessionId,
    event_type: eventType,
    event_name: eventName,
    page_path: pagePath,
    payload: extraPayload ?? {},
    user_agent: getUserAgent(),
  };

  if (attribution) {
    payload.platform = attribution.platform;
    payload.utm_source = attribution.utm_source;
    payload.utm_medium = attribution.utm_medium;
    payload.utm_campaign = attribution.utm_campaign;
    payload.utm_term = attribution.utm_term;
    payload.utm_content = attribution.utm_content;
    payload.referrer = attribution.referrer || undefined;
  }

  return payload;
}

export function sendToApi(payload: VisitorEventPayload): void {
  try {
    const body = JSON.stringify(payload);
    if (body.length > MAX_PAYLOAD_SIZE) return;

    if (navigator.sendBeacon && payload.event_type === EVENT_NAMES.SESSION_END) {
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

export function initTracker(gaMeasurementId: string | null): void {
  if (typeof window === "undefined") return;

  captureAndPersistAttribution();
  pageEnteredAt = Date.now();

  const path = getPagePath();
  trackEvent(EVENT_NAMES.PAGE_VIEW, "page_view", { page_path: path }, gaMeasurementId);

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
