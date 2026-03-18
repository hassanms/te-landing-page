import { supabase } from "./supabase/client";

const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET || "public-assets";

/**
 * Returns the public URL for an image stored in Supabase Storage (public-assets bucket).
 * Use for all migrated site images (assets/, static/).
 * @param path - Storage path, e.g. "assets/logo/logo-light.png" or "/assets/logo/logo-light.png"
 */
export function getImageUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(normalized);
  return data.publicUrl;
}
