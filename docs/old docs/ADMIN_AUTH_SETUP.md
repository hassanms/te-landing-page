# Admin Authentication Setup Guide

## Step 1: Create User in Supabase

1. Go to **Supabase Dashboard → Authentication → Users**
2. Click **"Add user"** or **"Invite user"**
3. Enter email: `admin@email.com` (or your preferred admin email)
4. Set a secure password
5. **Important**: If email confirmation is enabled, either:
   - Disable it in **Settings → Auth → Email Auth → Enable email confirmations** (turn OFF)
   - OR manually confirm the user's email in the Users table

## Step 2: Configure Environment Variables

Create or update `.env.local` in your project root:

```env
# Supabase Configuration (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Where to Find These Values:

1. Go to **Supabase Dashboard → Settings → API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` ⚠️ (Keep this secret!)

## Step 3: Test Login

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/login`
3. Enter your credentials:
   - Email: `admin@email.com` (or the email you created)
   - Password: (the password you set)
4. You should be redirected to `/admin` dashboard

## Troubleshooting

### "Invalid login credentials"
- Make sure the password is set correctly
- Try resetting the password in Supabase Dashboard

### "Email not confirmed"
- Go to **Authentication → Settings → Auth**
- Turn OFF **"Enable email confirmations"**
- OR manually confirm the email in the Users table

### "Unauthorized" errors
- Check that all environment variables are set correctly
- Restart your dev server after changing `.env.local`
- Verify the Supabase project URL and keys are correct

### Session not persisting
- Check browser cookies are enabled
- Clear browser cache and try again
- Check browser console for errors

## Security Notes

- The `SUPABASE_SERVICE_ROLE_KEY` should **NEVER** be exposed to the client
- Only use it in server-side code (API routes, `getServerSideProps`)
- The `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe to expose (it's public)
- Consider enabling additional security features in Supabase:
  - Rate limiting
  - IP restrictions (for production)
  - Multi-factor authentication (optional)
