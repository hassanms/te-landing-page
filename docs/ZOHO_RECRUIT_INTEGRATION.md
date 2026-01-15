# Zoho Recruit Integration Guide

This guide explains how to integrate your job application form with Zoho Recruit to automatically submit candidate applications.

## Prerequisites

1. **Zoho Recruit Account**: Sign up for Zoho Recruit at [https://www.zoho.com/recruit/](https://www.zoho.com/recruit/)
2. **API Credentials**: You'll need to generate OAuth tokens or use API keys

## Integration Methods

### Method 1: Zoho Recruit API (Recommended)

This method allows you to submit applications directly to Zoho Recruit via their REST API.

#### Step 1: Generate OAuth 2.0 Credentials

1. Go to [Zoho API Console](https://api-console.zoho.com/)
2. Click "Add Client" and select "Server-based Applications"
3. Note down:
   - **Client ID**
   - **Client Secret**
   - **Redirect URI** (e.g., `http://localhost:3000/api/zoho/callback` for development)

#### Step 2: Generate Access Token

You can use one of these methods:

**Option A: Self-Client (For Server-to-Server)**
```bash
# Generate refresh token using self-client
curl -X POST https://accounts.zoho.com/oauth/v2/token \
  -d "grant_type=refresh_token" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "refresh_token=YOUR_REFRESH_TOKEN"
```

**Option B: Authorization Code Flow**
1. Visit: `https://accounts.zoho.com/oauth/v2/auth?scope=ZohoRecruit.modules.ALL&client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI&access_type=offline`
2. Authorize and copy the authorization code
3. Exchange for access token:
```bash
curl -X POST https://accounts.zoho.com/oauth/v2/token \
  -d "grant_type=authorization_code" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=YOUR_REDIRECT_URI" \
  -d "code=AUTHORIZATION_CODE"
```

#### Step 3: Set Environment Variables

Add to your `.env.local`:
```env
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
ZOHO_REFRESH_TOKEN=your_refresh_token
ZOHO_RECRUIT_API_DOMAIN=https://recruit.zoho.com  # or .eu, .in, .com.au based on your region
```

#### Step 4: Install Required Packages

```bash
npm install form-data
npm install --save-dev @types/form-data
```

Note: `axios` should already be installed in your project. If not, install it:
```bash
npm install axios
```

#### Step 5: Create API Endpoint

See `pages/api/applications/zoho-submit.ts` for the implementation.

### Method 2: Zoho Recruit Webhook

If you prefer, you can configure Zoho Recruit to accept webhooks from your application.

1. In Zoho Recruit, go to Settings > Developer Space > Webhooks
2. Create a new webhook endpoint
3. Configure it to receive POST requests from your application form

### Method 3: Embedded Zoho Recruit Form

Zoho Recruit also offers embedded forms that you can iframe into your page, but this provides less customization.

## API Endpoint Implementation

The API endpoint (`pages/api/applications/zoho-submit.ts`) handles:

1. **Token Refresh**: Automatically refreshes expired access tokens
2. **Candidate Creation**: Creates a new candidate record in Zoho Recruit
3. **Resume Upload**: Uploads the candidate's resume as an attachment
4. **Job Application**: Links the candidate to the specific job opening

## Field Mapping

Map your form fields to Zoho Recruit fields:

| Your Form Field | Zoho Recruit Field | Required |
|----------------|-------------------|----------|
| firstName | First Name | Yes |
| lastName | Last Name | Yes |
| email | Email | Yes |
| phone | Phone | Yes |
| currentLocation | Current Location | No |
| preferredLocation | Preferred Location | No |
| experienceYears | Experience (Years) | No |
| currentEmployer | Current Employer | No |
| skills | Skills | No |
| coverLetter | Cover Letter | No |
| resumeFile | Resume (Attachment) | Yes |

## Testing

1. Use Zoho Recruit's sandbox/test environment first
2. Test with sample data
3. Verify candidates appear in your Zoho Recruit account
4. Check that resumes are properly attached

## Error Handling

The integration includes error handling for:
- Invalid credentials
- Network failures
- Zoho API rate limits
- Missing required fields

## Rate Limits

Zoho Recruit API has rate limits:
- **Free Plan**: 100 API calls/day
- **Paid Plans**: Higher limits (check your plan)

## Support Resources

- [Zoho Recruit API Documentation](https://www.zoho.com/recruit/developer-guide/)
- [Zoho API Console](https://api-console.zoho.com/)
- [Zoho Recruit Support](https://help.zoho.com/portal/en/kb/recruit)

## Next Steps

1. Set up your Zoho Recruit account
2. Generate API credentials
3. Update environment variables
4. Test the integration
5. Deploy to production
