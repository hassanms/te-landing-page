-- ============================================
-- BLOG MANAGEMENT SYSTEM - DATABASE SCHEMA
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- ============================================

-- ============================================
-- TABLE: blog_posts
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  category TEXT NOT NULL,
  author_name TEXT NOT NULL DEFAULT 'Tech Emulsion',
  author_avatar TEXT,
  tags TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  
  -- SEO fields
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  canonical_url TEXT,
  og_image TEXT,
  
  -- Tracking fields
  view_count INTEGER DEFAULT 0,
  reading_time_minutes INTEGER DEFAULT 5,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_featured ON blog_posts(is_featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- ============================================
-- TABLE: blog_categories
-- ============================================
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#14b8a6', -- teal color
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- ============================================
-- TRIGGER: Auto-update updated_at
-- ============================================
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Blog Posts: Public can read published posts only
CREATE POLICY "Public can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = TRUE);

-- Blog Categories: Public can read all categories
CREATE POLICY "Public can view blog categories"
  ON blog_categories
  FOR SELECT
  USING (TRUE);

-- ============================================
-- STORAGE BUCKET: blog-images
-- ============================================
-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true, -- Public bucket for blog images
  5242880, -- 5MB in bytes
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- Policy: Allow public to read blog images
CREATE POLICY "Public can read blog images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'blog-images');

-- Policy: Allow authenticated users to upload blog images
CREATE POLICY "Authenticated users can upload blog images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'blog-images');

-- Policy: Allow authenticated users to update blog images
CREATE POLICY "Authenticated users can update blog images"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'blog-images');

-- Policy: Allow authenticated users to delete blog images
CREATE POLICY "Authenticated users can delete blog images"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'blog-images');

-- ============================================
-- INSERT DEFAULT CATEGORIES
-- ============================================
INSERT INTO blog_categories (name, slug, description, color, sort_order)
VALUES 
  ('Business Strategy', 'business-strategy', 'Strategic insights for business growth', '#14b8a6', 1),
  ('AI & ML Development', 'ai-ml-development', 'Artificial Intelligence and Machine Learning', '#8b5cf6', 2),
  ('Data Engineering', 'data-engineering', 'Data pipelines, warehousing, and analytics', '#3b82f6', 3),
  ('Software Development', 'software-development', 'Best practices in software engineering', '#10b981', 4),
  ('Project Management', 'project-management', 'Effective project management techniques', '#f59e0b', 5),
  ('Chatbot Development', 'chatbot-development', 'Building conversational AI and chatbots', '#ec4899', 6),
  ('DevOps', 'devops', 'DevOps practices and cloud infrastructure', '#6366f1', 7),
  ('Game Development', 'game-development', 'Game design and development insights', '#ef4444', 8),
  ('Mobile App Development', 'mobile-app-development', 'iOS, Android, and cross-platform development', '#06b6d4', 9)
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- FUNCTION: Calculate reading time
-- ============================================
CREATE OR REPLACE FUNCTION calculate_reading_time(content TEXT)
RETURNS INTEGER AS $$
DECLARE
  word_count INTEGER;
  reading_time INTEGER;
BEGIN
  -- Remove HTML tags and count words
  word_count := array_length(
    regexp_split_to_array(
      regexp_replace(content, '<[^>]*>', '', 'g'),
      '\s+'
    ),
    1
  );
  
  -- Average reading speed: 200 words per minute
  reading_time := GREATEST(1, CEIL(word_count::DECIMAL / 200));
  
  RETURN reading_time;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- TRIGGER: Auto-calculate reading time
-- ============================================
CREATE OR REPLACE FUNCTION update_reading_time()
RETURNS TRIGGER AS $$
BEGIN
  NEW.reading_time_minutes := calculate_reading_time(NEW.content);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER calculate_blog_reading_time
  BEFORE INSERT OR UPDATE OF content ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_reading_time();

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================
-- Uncomment to insert sample blog posts

/*
INSERT INTO blog_posts (
  slug, title, excerpt, content, category, author_name, 
  is_featured, is_published, published_at, featured_image,
  meta_title, meta_description
)
VALUES 
  (
    'sample-blog-post',
    'Sample Blog Post Title',
    'This is a sample excerpt for the blog post.',
    '<h2>Introduction</h2><p>This is sample content for testing the blog system.</p>',
    'Business Strategy',
    'Tech Emulsion Team',
    true,
    true,
    NOW(),
    '/assets/blog/sample-image.png',
    'Sample Blog Post - Tech Emulsion',
    'This is a sample blog post for testing purposes.'
  );
*/
