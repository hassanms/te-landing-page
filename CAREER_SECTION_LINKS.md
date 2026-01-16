# Career Section Links - Complete Reference

All URLs and routes for the Career Management System.

---

## 🌐 Public Career Pages

### Main Career Pages

1. **Careers Listing Page**
   - **URL**: `/careers`
   - **Full URL**: `https://techemulsion.com/careers`
   - **Description**: Main page showing all open job listings
   - **Features**: 
     - Lists all open jobs from Supabase
     - Job cards with basic information
     - Links to individual job details

2. **Job Detail Page**
   - **URL Pattern**: `/careers/[jobId]`
   - **Example**: `/careers/web-developer` or `/careers/123e4567-e89b-12d3-a456-426614174000`
   - **Full URL Example**: `https://techemulsion.com/careers/web-developer`
   - **Description**: Individual job detail page showing full job description
   - **Features**:
     - Full job description
     - Requirements and responsibilities
     - Job information sidebar
     - "Apply" button
     - Social share buttons

3. **Application Form Page**
   - **URL Pattern**: `/careers/[jobId]/apply`
   - **Example**: `/careers/web-developer/apply`
   - **Full URL Example**: `https://techemulsion.com/careers/web-developer/apply`
   - **Description**: Page with application form for a specific job
   - **Features**:
     - Application form with all fields
     - Resume upload
     - Autofill section
     - Form validation

---

## 🔐 Admin Pages

### Admin Application Management

1. **Admin Applications Dashboard**
   - **URL**: `/admin/applications`
   - **Full URL**: `https://techemulsion.com/admin/applications`
   - **Query Parameter**: `?secret=YOUR_ADMIN_SECRET`
   - **Full URL with Secret**: `https://techemulsion.com/admin/applications?secret=your-admin-secret`
   - **Description**: Admin page to view all job applications
   - **Features**:
     - List all applications in a table
     - View application details
     - Download resumes
     - Filter by job
     - Application detail modal

---

## 🔌 API Endpoints

### Public APIs

1. **Get All Jobs**
   - **Method**: `GET`
   - **URL**: `/api/jobs`
   - **Query Parameters**: 
     - `status` (optional): Filter by status (`open`, `closed`)
   - **Example**: `/api/jobs?status=open`
   - **Response**: List of all open jobs

2. **Get Single Job**
   - **Method**: `GET`
   - **URL Pattern**: `/api/jobs/[jobId]`
   - **Example**: `/api/jobs/web-developer` or `/api/jobs/123e4567-e89b-12d3-a456-426614174000`
   - **Response**: Single job details

3. **Submit Application**
   - **Method**: `POST`
   - **URL**: `/api/applications/create`
   - **Body**: Application form data (JSON)
   - **Response**: Application confirmation

### Admin APIs

1. **Get All Applications (Admin)**
   - **Method**: `GET`
   - **URL**: `/api/admin/applications`
   - **Query Parameters**:
     - `secret` (required): Admin secret key
     - `jobId` (optional): Filter by job ID
     - `limit` (optional): Number of results (default: 100)
     - `offset` (optional): Pagination offset (default: 0)
   - **Example**: `/api/admin/applications?secret=your-secret&jobId=123&limit=50`
   - **Response**: List of applications with job details

2. **Get Single Application (Admin)**
   - **Method**: `GET`
   - **URL Pattern**: `/api/admin/applications/[id]`
   - **Query Parameters**:
     - `secret` (required): Admin secret key
   - **Example**: `/api/admin/applications/123?secret=your-secret`
   - **Response**: Single application details

---

## 📝 URL Examples

### Development (Local)
```
http://localhost:3000/careers
http://localhost:3000/careers/web-developer
http://localhost:3000/careers/web-developer/apply
http://localhost:3000/admin/applications?secret=your-admin-secret
```

### Production
```
https://techemulsion.com/careers
https://techemulsion.com/careers/web-developer
https://techemulsion.com/careers/web-developer/apply
https://techemulsion.com/admin/applications?secret=your-admin-secret
```

---

## 🔗 Navigation Flow

### User Journey

1. **Homepage** → `/careers` (Careers listing)
2. **Careers Listing** → `/careers/[jobId]` (Job details)
3. **Job Details** → `/careers/[jobId]/apply` (Application form)
4. **Application Form** → Submit → Success message

### Admin Journey

1. **Admin Login** → `/admin/applications?secret=SECRET` (Applications dashboard)
2. **Applications List** → Click "View" → Modal with details
3. **Applications List** → Click "Resume" → Download resume

---

## 🔑 Important Notes

### Admin Access

- **Admin Secret**: Required for accessing admin pages
- **Environment Variable**: `ADMIN_SECRET` and `NEXT_PUBLIC_ADMIN_SECRET`
- **Security**: Change the default secret in production!

### Job ID Format

- Jobs can be accessed by:
  - **Slug**: `web-developer` (human-readable)
  - **UUID**: `123e4567-e89b-12d3-a456-426614174000` (database ID)
- The system tries slug first, then UUID

### API Authentication

- **Public APIs**: No authentication required
- **Admin APIs**: Require `secret` query parameter or `x-admin-secret` header

---

## 📋 Quick Reference

| Page | URL | Access |
|------|-----|--------|
| Careers Listing | `/careers` | Public |
| Job Details | `/careers/[jobId]` | Public |
| Apply Form | `/careers/[jobId]/apply` | Public |
| Admin Dashboard | `/admin/applications?secret=SECRET` | Admin Only |

---

## 🛠️ Testing URLs

### Test with Sample Data

If you have a job with slug `web-developer`:

```
/careers
/careers/web-developer
/careers/web-developer/apply
```

### Test Admin Access

```
/admin/applications?secret=your-admin-secret
```

---

**Last Updated**: January 2025
