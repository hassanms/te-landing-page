# Quick Start Guide - Career Management System

This is a quick reference for getting the career management system up and running.

---

## ✅ What's Already Implemented

1. ✅ Supabase client setup (`lib/supabase/client.ts` and `server.ts`)
2. ✅ Database schema (`supabase/schema.sql`)
3. ✅ Jobs API endpoint (`/api/jobs`)
4. ✅ Application creation API (`/api/applications/create`)
5. ✅ Admin applications API (`/api/admin/applications`)
6. ✅ Careers page that fetches from Supabase
7. ✅ Application form that saves to Supabase
8. ✅ Admin page to view applications

---

## 🚀 Setup Steps

### 1. Install Dependencies

```bash
npm install
```

Supabase is already in `package.json`, so no additional install needed.

### 2. Set Up Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to **Settings > API** and copy:
   - Project URL
   - `anon` public key
   - `service_role` key (keep secret!)

### 3. Configure Environment Variables

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

ADMIN_SECRET=your-secure-admin-secret
NEXT_PUBLIC_ADMIN_SECRET=your-secure-admin-secret
```

### 4. Run Database Schema

1. Go to **Supabase Dashboard > SQL Editor**
2. Copy and paste the entire content from `supabase/schema.sql`
3. Click **Run**

### 5. Create Storage Bucket

1. Go to **Supabase Dashboard > Storage**
2. Click **"New bucket"**
3. Name: `resumes`
4. Public: `false` (Private)
5. File size limit: `10485760` (10MB)
6. Allowed MIME types:
   - `application/pdf`
   - `application/msword`
   - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

### 6. Set Storage Policies

Go to **Storage > Policies** and run:

```sql
CREATE POLICY "Public can upload resumes"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Public can read resumes"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'resumes');
```

### 7. Add Sample Jobs (Optional)

Run in SQL Editor:

```sql
INSERT INTO jobs (slug, title, department, location, employment_type, description, requirements, status)
VALUES 
  (
    'web-developer',
    'Web Developer',
    'Engineering',
    'Peshawar, Pakistan',
    'Full-time',
    'We are looking for a skilled Web Developer to join our team.',
    ARRAY['2+ years of experience', 'React/Next.js knowledge', 'TypeScript'],
    'open'
  );
```

### 8. Start Development Server

```bash
npm run dev
```

### 9. Test the System

1. **View Jobs**: Visit `http://localhost:3000/careers`
2. **Submit Application**: Click on a job and fill out the form
3. **View Applications**: Visit `http://localhost:3000/admin/applications?secret=your-admin-secret`

---

## 📁 File Structure

```
lib/supabase/
  ├── client.ts          # Client-side Supabase (for public queries)
  └── server.ts          # Server-side Supabase (for admin operations)

pages/api/
  ├── jobs/
  │   └── index.ts       # GET /api/jobs - Fetch jobs
  └── applications/
      └── create.ts      # POST /api/applications/create - Submit application

pages/api/admin/
  └── applications/
      └── index.ts       # GET /api/admin/applications - Admin view

pages/
  ├── careers/
  │   └── index.tsx      # Careers listing page
  └── admin/
      └── applications/
          └── index.tsx  # Admin applications page

supabase/
  └── schema.sql         # Database schema (run in Supabase SQL Editor)
```

---

## 🔑 API Endpoints

### Public Endpoints

- `GET /api/jobs` - Get all open jobs
- `POST /api/applications/create` - Submit job application

### Admin Endpoints

- `GET /api/admin/applications?secret=YOUR_SECRET` - Get all applications

---

## 🎯 How It Works

### Job Listings Flow

1. User visits `/careers`
2. Page calls `GET /api/jobs`
3. API queries Supabase `jobs` table (status = 'open')
4. Jobs displayed on page

### Application Flow

1. User fills application form
2. Form uploads resume to Supabase Storage (`resumes` bucket)
3. Form submits to `POST /api/applications/create`
4. API saves application to `applications` table
5. Success message shown to user

### Admin Flow

1. Admin visits `/admin/applications?secret=SECRET`
2. Page calls `GET /api/admin/applications` with secret
3. API verifies secret and queries all applications
4. Applications displayed in table

---

## 🐛 Troubleshooting

### "Missing Supabase environment variables"
- Check `.env.local` exists and has all three Supabase variables
- Restart dev server after adding env variables

### "Failed to fetch jobs"
- Verify database schema was run
- Check Supabase project URL and keys are correct
- Check browser console for errors

### "Failed to upload resume"
- Verify `resumes` bucket exists
- Check storage policies are set
- Verify file is under 10MB and correct type (PDF, DOC, DOCX)

### "Unauthorized" in admin page
- Check `ADMIN_SECRET` matches in `.env.local` and URL parameter
- Verify `NEXT_PUBLIC_ADMIN_SECRET` is set

---

## 📝 Next Steps

1. Add more jobs via Supabase Dashboard or SQL
2. Customize admin secret for security
3. Add email notifications (optional)
4. Enhance admin features (filtering, search, etc.)

---

For detailed setup instructions, see `docs/SUPABASE_SETUP_GUIDE.md`
