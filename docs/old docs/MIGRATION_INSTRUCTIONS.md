# Migration Instructions - Add Application Fields

## Quick Migration

To add all form fields to your existing `applications` table, run this SQL in **Supabase Dashboard > SQL Editor**:

```sql
-- Add additional columns to applications table
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

## Migration File

The complete migration SQL is available in:
**`supabase/migrations/add_application_fields.sql`**

---

## Steps to Run Migration

1. **Go to Supabase Dashboard**
   - Navigate to your project
   - Click on **SQL Editor** in the left sidebar

2. **Open the Migration File**
   - Copy the contents from `supabase/migrations/add_application_fields.sql`
   - Or copy the SQL from above

3. **Run the Migration**
   - Paste the SQL into the SQL Editor
   - Click **Run** or press `Ctrl+Enter`

4. **Verify the Migration**
   - Run this verification query:
   ```sql
   SELECT column_name, data_type, is_nullable
   FROM information_schema.columns
   WHERE table_name = 'applications'
   ORDER BY ordinal_position;
   ```
   - You should see all the new columns listed

---

## Fields Added

| Column Name | Form Field | Description |
|------------|-----------|-------------|
| `country_code` | `countryCode` | Phone country code (e.g., +92) |
| `year_of_graduation` | `yearOfGraduation` | Year of graduation |
| `gender` | `gender` | Gender selection |
| `experience_years` | `experienceYears` | Years of experience |
| `current_employer` | `currentEmployer` | Current employer name |
| `current_ctc` | `currentCTC` | Current salary/CTC |
| `expected_ctc` | `expectedCTC` | Expected salary/CTC |
| `notice_period` | `noticePeriod` | Notice period |
| `skills` | `skills` | Skills set |
| `source` | `source` | How they found the vacancy |
| `current_location` | `currentLocation` | Current location |
| `preferred_location` | `preferredLocation` | Preferred location |
| `linkedin_url` | `linkedin` | LinkedIn profile URL |
| `portfolio_url` | `portfolio` | Portfolio/GitHub URL |

---

## Important Notes

- ✅ **Safe to run multiple times** - Uses `IF NOT EXISTS` so it won't error if columns already exist
- ✅ **Backward compatible** - All new fields are nullable (optional)
- ✅ **Existing data preserved** - Won't affect existing applications
- ✅ **No downtime** - Can be run on live database

---

## After Migration

Once the migration is complete:

1. **Test submitting a new application** - All fields should save
2. **Check admin panel** - All fields should be visible in application details
3. **Verify in Supabase** - Check the `applications` table to see the new columns

---

**Last Updated**: January 2025
