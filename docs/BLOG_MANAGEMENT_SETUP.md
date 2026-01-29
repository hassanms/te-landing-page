# Blog Management System - Setup Guide

This document provides instructions for setting up and using the Blog Management System in the Tech Emulsion admin panel.

## Table of Contents

1. [Database Setup](#database-setup)
2. [Environment Variables](#environment-variables)
3. [Admin Panel Usage](#admin-panel-usage)
4. [API Reference](#api-reference)
5. [Features](#features)
6. [Troubleshooting](#troubleshooting)

---

## Database Setup

### Step 1: Run the Migration SQL

Run the following SQL in your Supabase SQL Editor. The migration file is located at:
`supabase/migrations/create_blog_posts.sql`

```sql
-- Copy the entire contents of create_blog_posts.sql and run it in Supabase SQL Editor
```

This will create:
- `blog_posts` table - Stores all blog post data
- `blog_categories` table - Stores blog categories
- `blog-images` storage bucket - For uploading blog images
- Default categories (Business Strategy, AI & ML Development, etc.)
- Row Level Security (RLS) policies
- Auto-calculate reading time trigger

### Step 2: Verify Tables

After running the migration, verify that the tables exist:

```sql
SELECT * FROM blog_posts LIMIT 1;
SELECT * FROM blog_categories;
```

### Step 3: Verify Storage Bucket

Go to Supabase Dashboard > Storage and verify the `blog-images` bucket exists.
If not, create it manually:
- Name: `blog-images`
- Public: Yes
- File size limit: 5MB
- Allowed MIME types: image/jpeg, image/png, image/gif, image/webp, image/svg+xml

---

## Environment Variables

Ensure these environment variables are set in your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## Admin Panel Usage

### Accessing Blog Management

1. Log in to the admin panel at `/admin/login`
2. Click on "Blog" in the sidebar navigation
3. You'll see the Blog Management page with all posts

### Creating a New Blog Post

1. Click "New Post" button
2. Fill in the required fields:
   - **Title**: The blog post title
   - **Slug**: URL-friendly identifier (auto-generated from title)
   - **Category**: Select from dropdown
   - **Excerpt**: Brief summary (shown in listings)
   - **Content**: Full blog content (rich text editor)
3. Optional fields:
   - Featured Image (upload or URL)
   - Tags
   - Author Name
   - SEO metadata
4. Toggle settings:
   - **Publish Post**: Make visible to public
   - **Feature Post**: Display prominently on blog page
5. Click "Create Post" or "Save as Draft"

### Editing a Blog Post

1. Click the Edit icon (pencil) next to any post
2. Modify the content in the modal
3. Click "Update Post" to save changes

### Managing Post Status

From the table, use the menu (three dots) to:
- **View Post**: Opens published post in new tab
- **Copy Link**: Copy post URL to clipboard
- **Publish/Unpublish**: Toggle visibility
- **Set Featured/Remove Featured**: Toggle featured status
- **Delete**: Permanently remove post

### Rich Text Editor Features

The content editor supports:
- Headings (H1, H2, H3, H4)
- Bold, Italic, Underline, Strikethrough
- Text color and background color
- Ordered and unordered lists
- Indentation
- Text alignment
- Blockquotes and code blocks
- Links and images
- Clean formatting

### Image Upload

Images can be uploaded in two ways:
1. **Direct Upload**: Click "Upload Image" and select a file
2. **URL Input**: Paste an external image URL

Supported formats: JPEG, PNG, GIF, WebP
Maximum size: 5MB
Recommended dimensions: 1200x630px (for featured/OG images)

---

## API Reference

### Admin APIs (Requires Authentication)

#### List Blog Posts
```
GET /api/admin/blog
Query params: status, category, search, limit, offset
```

#### Get Single Blog Post
```
GET /api/admin/blog/[id]
```

#### Create Blog Post
```
POST /api/admin/blog
Body: { title, slug, excerpt, content, category, ... }
```

#### Update Blog Post
```
PUT /api/admin/blog/[id]
Body: { title, slug, excerpt, content, ... }
```

#### Delete Blog Post
```
DELETE /api/admin/blog/[id]
```

#### Upload Image
```
POST /api/admin/blog/upload
Body: FormData with 'file' field
```

#### List Categories
```
GET /api/admin/blog/categories
```

### Public APIs

#### List Published Posts
```
GET /api/blog
Query params: category, featured, limit, offset, search
```

#### Get Published Post by Slug
```
GET /api/blog/[slug]
Returns: { post, relatedPosts }
```

#### List Categories
```
GET /api/blog/categories
```

---

## Features

### Blog Post Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | text | Yes | Post title |
| slug | text | Yes | URL-friendly identifier |
| excerpt | text | Yes | Brief summary |
| content | text | Yes | Full HTML content |
| featured_image | text | No | Main image URL |
| category | text | Yes | Post category |
| author_name | text | No | Author display name |
| tags | text[] | No | Array of tags |
| is_featured | boolean | No | Show on featured section |
| is_published | boolean | No | Public visibility |
| meta_title | text | No | SEO title |
| meta_description | text | No | SEO description |
| meta_keywords | text | No | SEO keywords |
| canonical_url | text | No | Canonical URL |
| og_image | text | No | Open Graph image |
| reading_time_minutes | int | Auto | Calculated from content |
| view_count | int | Auto | Increments on view |

### Default Categories

1. Business Strategy
2. AI & ML Development
3. Data Engineering
4. Software Development
5. Project Management
6. Chatbot Development
7. DevOps
8. Game Development
9. Mobile App Development

### SEO Features

- Custom meta title and description
- Meta keywords support
- Canonical URL support
- Open Graph image
- Auto-generated breadcrumb data
- Reading time calculation

---

## Troubleshooting

### "Failed to fetch blog posts"
- Check Supabase connection
- Verify environment variables
- Check if tables exist

### Image upload fails
- Verify `blog-images` bucket exists
- Check file size (max 5MB)
- Check file type (JPEG, PNG, GIF, WebP)
- Verify storage policies are set

### "Unauthorized" error
- Log in again at `/admin/login`
- Check if session expired
- Verify user exists in Supabase Auth

### Posts not showing on public blog page
- Check if post is published (`is_published = true`)
- Check if `published_at` is set
- Verify RLS policies allow public read for published posts

### Rich text editor not loading
- Clear browser cache
- Check for JavaScript errors in console
- Verify ReactQuill is installed: `npm list react-quill`

---

## Database Schema Reference

### blog_posts table

```sql
CREATE TABLE blog_posts (
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
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  canonical_url TEXT,
  og_image TEXT,
  view_count INTEGER DEFAULT 0,
  reading_time_minutes INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### blog_categories table

```sql
CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#14b8a6',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```
