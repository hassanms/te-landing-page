# Database Migration - Add All Application Fields

## Overview

This migration adds all form fields to the `applications` table so that all data from the application form is saved to the database.

---

## Migration SQL

Run this SQL in **Supabase Dashboard > SQL Editor**:

```sql
-- ============================================
-- ADD ADDITIONAL FIELDS TO APPLICATIONS TABLE
-- ============================================

-- Add new columns to applications table
ALTER TABLE applications
ADD COLUMN IF NOT EXISTS country_code TEXT,
ADD COLUMN IF NOT EXISTS year_of_graduation TEXT,
ADD COLUMN IF NOT EXISTS gender TEXT,
ADD COLUMN IF NOT EXISTS experience_years TEXT,
ADD COLUMN IF NOT EXISTS current_employer TEXT,
ADD COLUMN IF NOT EXISTS current_ctc TEXT,
ADD COLUMN IF NOT EXISTS expected_ctc TEXT,
ADD COLUMN IF NOT EXISTS notice_period TEXT,
ADD COLUMN IF NOT EXISTS skills TEXT,
ADD COLUMN IF NOT EXISTS source TEXT,
ADD COLUMN IF NOT EXISTS current_location TEXT,
ADD COLUMN IF NOT EXISTS preferred_location TEXT,
ADD COLUMN IF NOT EXISTS linkedin_url TEXT,
ADD COLUMN IF NOT EXISTS portfolio_url TEXT;
```

---

## Fields Added

| Database Column | Form Field | Type | Description |
|----------------|-----------|------|-------------|
| `country_code` | `countryCode` | TEXT | Phone country code (e.g., +92) |
| `year_of_graduation` | `yearOfGraduation` | TEXT | Year of graduation |
| `gender` | `gender` | TEXT | Gender selection |
| `experience_years` | `experienceYears` | TEXT | Years of experience |
| `current_employer` | `currentEmployer` | TEXT | Current employer name |
| `current_ctc` | `currentCTC` | TEXT | Current salary/CTC |
| `expected_ctc` | `expectedCTC` | TEXT | Expected salary/CTC |
| `notice_period` | `noticePeriod` | TEXT | Notice period |
| `skills` | `skills` | TEXT | Skills set |
| `source` | `source` | TEXT | How they found the vacancy |
| `current_location` | `currentLocation` | TEXT | Current location |
| `preferred_location` | `preferredLocation` | TEXT | Preferred location |
| `linkedin_url` | `linkedin` | TEXT | LinkedIn profile URL |
| `portfolio_url` | `portfolio` | TEXT | Portfolio/GitHub URL |

---

## Verification

After running the migration, verify the columns were added:

```sql
-- Check all columns in applications table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'applications'
ORDER BY ordinal_position;
```

You should see all the new columns listed.

---

## What's Updated

### 1. Database Schema (`supabase/schema.sql`)
- ✅ Added all additional fields to the `applications` table definition

### 2. API Endpoint (`pages/api/applications/create.ts`)
- ✅ Extracts all fields from request body
- ✅ Saves all fields to database

### 3. Application Form (`components/careers/application-form.tsx`)
- ✅ Sends all fields in the request
- ✅ Sends `countryCode` separately (not just in phone field)

### 4. Admin API (`pages/api/admin/applications/index.ts`)
- ✅ Fetches all fields from database
- ✅ Returns all fields in response

### 5. Admin Page (`pages/admin/applications/index.tsx`)
- ✅ Updated interface to include all fields
- ✅ Updated modal to display all fields in organized sections

---

## Testing

1. **Submit a new application** with all fields filled
2. **Check Supabase Dashboard** - Verify all fields are saved
3. **View in admin panel** - All fields should be visible in the detail modal

---

## Notes

- All new fields are **nullable** (optional) to maintain backward compatibility
- Existing applications will have `NULL` for these fields
- New applications will save all provided data

---

**Last Updated**: January 2025
