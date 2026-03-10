"use client";

import React, { useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

/** Match API country name to map geography name (e.g. United States <-> United States of America) */
function getSessionsForGeo(
  geoName: string | undefined,
  countrySessions: { country: string; sessions: number }[]
): number {
  if (!geoName) return 0;
  const g = geoName.toLowerCase();
  for (const { country, sessions } of countrySessions) {
    const c = country.toLowerCase();
    if (c === g || g.startsWith(c) || c.startsWith(g)) return sessions;
  }
  return 0;
}

const DEFAULT_FILL = "#E2E8F0";
const HEAT_COLORS = ["#99F6E4", "#2DD4BF", "#14B8A6", "#0D9488", "#0F766E"];

function getFill(sessions: number, maxSessions: number): string {
  if (sessions <= 0) return DEFAULT_FILL;
  if (maxSessions <= 0) return HEAT_COLORS[0];
  const p = sessions / maxSessions;
  const i = Math.min(
    Math.floor(p * HEAT_COLORS.length),
    HEAT_COLORS.length - 1
  );
  return HEAT_COLORS[i];
}

interface CountrySessionsMapProps {
  countrySessions: { country: string; sessions: number }[];
  width?: number;
  height?: number;
}

export function CountrySessionsMap({
  countrySessions,
  width = 640,
  height = 320,
}: CountrySessionsMapProps) {
  const maxSessions = useMemo(() => {
    return countrySessions.length
      ? Math.max(...countrySessions.map((c) => c.sessions), 1)
      : 0;
  }, [countrySessions]);

  return (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [10, 20],
        }}
        width={width}
        height={height}
      >
        <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name = geo.properties?.name ?? "";
            const sessions = getSessionsForGeo(name, countrySessions);
            const fill = getFill(sessions, maxSessions);
            return (
              <g key={geo.rsmKey}>
                <title>{`${name}: ${sessions} session${sessions !== 1 ? "s" : ""}`}</title>
                <Geography
                  geography={geo}
                  fill={fill}
                  stroke="#CBD5E0"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#0D9488", cursor: "pointer" },
                    pressed: { outline: "none" },
                  }}
                />
              </g>
            );
          })
        }
      </Geographies>
    </ComposableMap>
      {maxSessions > 0 && (
        <p style={{ marginTop: 8, fontSize: 12, color: "#718096" }}>
          Darker = more sessions (max {maxSessions} in period).
        </p>
      )}
    </>
  );
}
