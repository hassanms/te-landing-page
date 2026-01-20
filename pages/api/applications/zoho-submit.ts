import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface ZohoApplicationData {
  jobId: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  yearOfGraduation?: string;
  gender?: string;
  experienceYears?: string;
  currentEmployer?: string;
  currentCTC?: string;
  expectedCTC?: string;
  noticePeriod?: string;
  skills?: string;
  source?: string;
  currentLocation?: string;
  preferredLocation?: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter?: string;
  cvFileName: string;
  cvFileType: string;
  cvData: string; // Base64 encoded
}

interface ZohoTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
}

interface ZohoCandidateResponse {
  data: Array<{
    code: string;
    details: {
      id: string;
      Created_Time: string;
      Modified_Time: string;
    };
    message: string;
    status: string;
  }>;
}

/**
 * Get or refresh Zoho access token
 */
async function getZohoAccessToken(): Promise<string> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const apiDomain = process.env.ZOHO_RECRUIT_API_DOMAIN || "https://recruit.zoho.com";

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Zoho credentials not configured. Please set ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, and ZOHO_REFRESH_TOKEN environment variables.");
  }

  try {
    const response = await axios.post<ZohoTokenResponse>(
      "https://accounts.zoho.com/oauth/v2/token",
      null,
      {
        params: {
          grant_type: "refresh_token",
          client_id: clientId,
          client_secret: clientSecret,
          refresh_token: refreshToken,
        },
      }
    );

    return response.data.access_token;
  } catch (error: any) {
    console.error("Error refreshing Zoho token:", error.response?.data || error.message);
    throw new Error("Failed to authenticate with Zoho Recruit");
  }
}

/**
 * Create candidate in Zoho Recruit
 */
async function createZohoCandidate(
  accessToken: string,
  data: ZohoApplicationData
): Promise<string> {
  const apiDomain = process.env.ZOHO_RECRUIT_API_DOMAIN || "https://recruit.zoho.com";
  const apiVersion = process.env.ZOHO_API_VERSION || "v2";

  // Map form data to Zoho Recruit candidate fields
  const candidateData = {
    First_Name: data.firstName,
    Last_Name: data.lastName,
    Email: data.email,
    Phone: data.phone,
    Current_Location: data.currentLocation || "",
    Preferred_Location: data.preferredLocation || "",
    Experience_in_Years: data.experienceYears || "",
    Current_Employer: data.currentEmployer || "",
    Current_CTC: data.currentCTC || "",
    Expected_CTC: data.expectedCTC || "",
    Notice_Period: data.noticePeriod || "",
    Skill_Set: data.skills || "",
    Cover_Letter: data.coverLetter || "",
    LinkedIn_Profile: data.linkedin || "",
    Portfolio_GitHub: data.portfolio || "",
    Year_of_Graduation: data.yearOfGraduation || "",
    Gender: data.gender || "",
    Source: data.source || "Website",
  };

  try {
    const response = await axios.post<ZohoCandidateResponse>(
      `${apiDomain}/recruit/${apiVersion}/Candidates`,
      { data: [candidateData] },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.data && response.data.data.length > 0) {
      const candidate = response.data.data[0];
      if (candidate.status === "success" || candidate.code === "SUCCESS") {
        return candidate.details.id;
      } else {
        throw new Error(candidate.message || "Failed to create candidate");
      }
    }

    throw new Error("No candidate ID returned from Zoho");
  } catch (error: any) {
    console.error("Error creating Zoho candidate:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "Failed to create candidate in Zoho Recruit"
    );
  }
}

/**
 * Upload resume to Zoho Recruit candidate
 * Note: This requires the 'form-data' package: npm install form-data
 * Alternative: You can also upload the file directly via Zoho's file upload API
 */
async function uploadResumeToZoho(
  accessToken: string,
  candidateId: string,
  cvData: string,
  cvFileName: string,
  cvFileType: string
): Promise<void> {
  const apiDomain = process.env.ZOHO_RECRUIT_API_DOMAIN || "https://recruit.zoho.com";
  const apiVersion = process.env.ZOHO_API_VERSION || "v2";

  // Convert base64 to buffer
  const base64Data = cvData.split(",")[1] || cvData;
  const buffer = Buffer.from(base64Data, "base64");

  try {
    // Try using form-data package if available
    // If not installed, you'll need to: npm install form-data @types/form-data
    let FormData;
    try {
      FormData = require("form-data");
    } catch {
      // If form-data is not installed, we'll skip file upload
      // You can still create the candidate without the resume attachment
      console.warn(
        "form-data package not found. Install it with: npm install form-data @types/form-data"
      );
      return;
    }

    const formData = new FormData();
    formData.append("file", buffer, {
      filename: cvFileName,
      contentType: cvFileType,
    });

    await axios.post(
      `${apiDomain}/recruit/${apiVersion}/Candidates/${candidateId}/Attachments`,
      formData,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          ...formData.getHeaders(),
        },
      }
    );
  } catch (error: any) {
    console.error("Error uploading resume:", error.response?.data || error.message);
    // Don't throw - resume upload failure shouldn't fail the entire application
    console.warn("Resume upload failed, but candidate was created");
  }
}

/**
 * Link candidate to job opening (if job ID exists in Zoho)
 */
async function linkCandidateToJob(
  accessToken: string,
  candidateId: string,
  jobId: string
): Promise<void> {
  const apiDomain = process.env.ZOHO_RECRUIT_API_DOMAIN || "https://recruit.zoho.com";
  const apiVersion = process.env.ZOHO_API_VERSION || "v2";

  // This requires the job to exist in Zoho Recruit with a matching ID
  // You may need to adjust this based on your job ID mapping
  try {
    await axios.post(
      `${apiDomain}/recruit/${apiVersion}/Candidates/${candidateId}/Job_Openings`,
      {
        data: [
          {
            Job_Opening: {
              id: jobId,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    console.error("Error linking candidate to job:", error.response?.data || error.message);
    // Don't throw - job linking failure shouldn't fail the entire application
    console.warn("Job linking failed, but candidate was created");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data: ZohoApplicationData = req.body;

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return res.status(400).json({
        message: "Missing required fields: firstName, lastName, email, phone",
      });
    }

    if (!data.cvData || !data.cvFileName) {
      return res.status(400).json({
        message: "Resume file is required",
      });
    }

    // Get access token
    const accessToken = await getZohoAccessToken();

    // Create candidate
    const candidateId = await createZohoCandidate(accessToken, data);

    // Upload resume
    await uploadResumeToZoho(
      accessToken,
      candidateId,
      data.cvData,
      data.cvFileName,
      data.cvFileType
    );

    // Link to job (optional - only if job exists in Zoho)
    if (data.jobId) {
      await linkCandidateToJob(accessToken, candidateId, data.jobId);
    }

    return res.status(200).json({
      success: true,
      message: "Application submitted to Zoho Recruit successfully",
      candidateId,
    });
  } catch (error: any) {
    console.error("Zoho submission error:", error);
    return res.status(500).json({
      message: error.message || "Failed to submit application to Zoho Recruit",
    });
  }
}
