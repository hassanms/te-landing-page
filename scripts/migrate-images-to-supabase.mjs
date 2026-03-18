#!/usr/bin/env node
/**
 * One-time migration: upload all images from public/ to Supabase Storage.
 * Uses SUPABASE_SERVICE_ROLE_KEY. Safe to re-run (upsert: true).
 * Run from project root: node scripts/migrate-images-to-supabase.mjs
 */

import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const IMAGE_EXT = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico", ".avif",
  ".PNG", ".JPG", ".JPEG", ".GIF", ".WEBP", ".SVG", ".ICO", ".AVIF",
]);
const STATIC_ASSET_EXT = new Set([".webmanifest", ".json", ".xml"]);

const MIME_BY_EXT = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".PNG": "image/png",
  ".JPG": "image/jpeg",
  ".JPEG": "image/jpeg",
  ".GIF": "image/gif",
  ".WEBP": "image/webp",
  ".SVG": "image/svg+xml",
  ".ICO": "image/x-icon",
  ".avif": "image/avif",
  ".AVIF": "image/avif",
  ".webmanifest": "application/manifest+json",
  ".json": "application/json",
  ".xml": "application/xml",
};

function loadEnvLocal() {
  const envPath = path.join(projectRoot, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

function* walkDir(dir, base = "") {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      yield* walkDir(path.join(dir, e.name), rel);
    } else if (e.isFile()) {
      const ext = path.extname(e.name);
      if (IMAGE_EXT.has(ext) || STATIC_ASSET_EXT.has(ext)) {
        yield { relativePath: rel.replace(/\\/g, "/"), absolutePath: path.join(dir, e.name) };
      }
    }
  }
}

async function main() {
  loadEnvLocal();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET;

  if (!url || !serviceKey) {
    console.error("❌ Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local");
    process.exit(1);
  }

  const supabase = createClient(url, serviceKey);
  let ok = 0;
  let fail = 0;

  console.log(`Bucket: ${bucket}, public dir: ${publicDir}\n`);

  for (const { relativePath, absolutePath } of walkDir(publicDir)) {
    const ext = path.extname(relativePath);
    const contentType = MIME_BY_EXT[ext] || "application/octet-stream";
    const buffer = fs.readFileSync(absolutePath);

    const { error } = await supabase.storage
      .from(bucket)
      .upload(relativePath, buffer, {
        contentType,
        upsert: true,
      });

    if (error) {
      console.log(`❌ ${relativePath} — ${error.message}`);
      fail++;
    } else {
      console.log(`✅ ${relativePath}`);
      ok++;
    }
  }

  console.log(`\nDone. ✅ ${ok} succeeded, ❌ ${fail} failed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
