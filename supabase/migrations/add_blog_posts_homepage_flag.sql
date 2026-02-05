-- ============================================
-- BLOG POSTS - HOMEPAGE FLAG
-- ============================================
-- Run this SQL in your Supabase SQL editor.
-- Adds a flag so admins can choose which posts appear
-- on the homepage blog section.
-- ============================================

ALTER TABLE blog_posts
ADD COLUMN IF NOT EXISTS show_on_homepage BOOLEAN DEFAULT FALSE;

CREATE INDEX IF NOT EXISTS idx_blog_posts_show_on_homepage
ON blog_posts (show_on_homepage)
WHERE show_on_homepage = TRUE;

