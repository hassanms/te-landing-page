"use client";

import { useEffect } from "react";

const STORAGE_KEY = "chakra-ui-color-mode";
const INITIAL_MODE = "dark"; // Must match theme.config.initialColorMode

/**
 * Runs color mode initialization AFTER React hydrates.
 * This prevents hydration mismatch: ColorModeScript runs before React and can
 * set a different mode from localStorage, while the server always uses initialColorMode.
 * By deferring to useEffect, server and client both render with initialColorMode first.
 */
export function ColorModeInit() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || INITIAL_MODE;
      const isDark = stored === "dark";
      document.body.classList.add(isDark ? "chakra-ui-dark" : "chakra-ui-light");
      document.body.classList.remove(isDark ? "chakra-ui-light" : "chakra-ui-dark");
      document.documentElement.style.colorScheme = stored;
      (document.documentElement as HTMLElement).dataset.theme = stored;
    } catch {
      // Fallback if localStorage fails
      document.body.classList.add("chakra-ui-dark");
      document.body.classList.remove("chakra-ui-light");
      document.documentElement.style.colorScheme = "dark";
      (document.documentElement as HTMLElement).dataset.theme = "dark";
    }
  }, []);

  return null;
}
