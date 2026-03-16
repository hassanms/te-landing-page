# Resume Download Fix - Private Bucket Issue

## Problem

When clicking the "Resume" download button in the admin panel, you get:
```
{"statusCode":"404","error":"Bucket not found","message":"Bucket not found"}
```

This happens because:
- The storage bucket is **private** (not public)
- Public URLs don't work for private buckets
- We need to use **signed URLs** instead

---

## Solution Implemented

### 1. Created New API Endpoint for Signed URLs

**File**: `pages/api/admin/applications/[id]/resume.ts`

This endpoint:
- Generates signed URLs on-demand (valid for 1 hour)
- Handles both old (full URL) and new (path-only) formats
- Requires admin authentication

### 2. Updated Application Creation

**File**: `pages/api/applications/create.ts`

Changed to store file path instead of public URL:
- **Before**: Stored full public URL (doesn't work for private buckets)
- **After**: Stores path in format `resumes/[jobId]/[timestamp]-[filename]`

### 3. Updated Admin Page

**File**: `pages/admin/applications/index.tsx`

Updated download handler to:
- Call the new API endpoint to get signed URL
- Handle errors gracefully
- Support both old and new URL formats

---

## How It Works Now

### Flow:

1. **User submits application** → File uploaded to private bucket
2. **Path stored in database** → `resumes/[jobId]/[timestamp]-[filename]`
3. **Admin clicks download** → Frontend calls `/api/admin/applications/[id]/resume`
4. **API generates signed URL** → Valid for 1 hour
5. **Resume downloads** → Using the signed URL

---

## Testing

1. **Submit a new application** - Should work normally
2. **Go to admin panel** - `/admin/applications?secret=YOUR_SECRET`
3. **Click "Resume" button** - Should download the file

---

## If You Still Get Errors

### Check 1: Bucket Name

Make sure your bucket is named exactly `resumes` (lowercase, no spaces).

**In Supabase Dashboard:**
- Go to **Storage > Buckets**
- Verify bucket name is `resumes`

### Check 2: Bucket Visibility

The bucket should be **Private** (which is correct for security).

### Check 3: Storage Policies

Run this SQL in **Supabase Dashboard > SQL Editor**:

```sql
-- Verify policies exist
SELECT * FROM storage.policies WHERE bucket_id = 'resumes';

-- If missing, create them:
CREATE POLICY "Public can upload resumes"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Public can read resumes"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'resumes');
```

### Check 4: Existing Applications

If you have existing applications with old URL format, they should still work because the code handles both formats. But new applications will use the new format.

---

## Migration (Optional)

If you want to update existing applications to use the new format, run this SQL:

```sql
-- Extract path from existing URLs and update
UPDATE applications
SET resume_url = 
  CASE 
    WHEN resume_url LIKE '%/resumes/%' THEN
      'resumes/' || SUBSTRING(resume_url FROM '%/resumes/([^?]+)%')
    ELSE resume_url
  END
WHERE resume_url LIKE 'http%';
```

**Note**: Only run this if you have existing applications with full URLs stored.

---

## API Endpoint Details

### GET `/api/admin/applications/[id]/resume`

**Query Parameters:**
- `secret` (required): Admin secret key

**Response:**
```json
{
  "downloadUrl": "https://[project].supabase.co/storage/v1/object/sign/resumes/[path]?token=[signed-token]"
}
```

**Error Responses:**
- `401`: Unauthorized (invalid secret)
- `404`: Application or resume not found
- `400`: Invalid resume URL format
- `500`: Server error

---

## Security Notes

1. **Signed URLs expire after 1 hour** - This is a security feature
2. **Admin authentication required** - Only admins can generate download links
3. **Private bucket** - Files are not publicly accessible
4. **Service role key** - Used server-side only (never exposed to client)

---

**Last Updated**: January 2025
