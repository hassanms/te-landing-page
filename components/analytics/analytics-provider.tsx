"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { initTracker, captureAndPersistAttribution } from "lib/analytics";

const DEFAULT_GA_ID = "G-DJFC9CERLF";
const GA_ID =
  typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "undefined" &&
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== ""
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : DEFAULT_GA_ID;

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    captureAndPersistAttribution();
  }, [router.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ready = () => {
      if ((window as unknown as { gtag?: unknown }).gtag) {
        initTracker(GA_ID);
        return true;
      }
      return false;
    };
    if (ready()) return;
    const id = setInterval(() => {
      if (ready()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      {children}
    </>
  );
}
