import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const buildTransporter = () => {
  const port = Number(process.env.SMTP_PORT);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true,
    debug: true,
    tls: {
      rejectUnauthorized: false,
    },
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const {
    jobId,
    role,
    firstName,
    lastName,
    email,
    phone,
    yearOfGraduation,
    gender,
    experienceYears,
    currentEmployer,
    currentCTC,
    expectedCTC,
    noticePeriod,
    skills,
    source,
    currentLocation,
    preferredLocation,
    linkedin,
    portfolio,
    coverLetter,
    cvFileName,
    cvFileType,
    cvData,
  } = req.body;

  if (
    !role ||
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !yearOfGraduation ||
    !gender ||
    !experienceYears ||
    !currentEmployer ||
    !currentCTC ||
    !expectedCTC ||
    !noticePeriod ||
    !skills ||
    !source ||
    !currentLocation ||
    !preferredLocation ||
    !cvData
  ) {
    return res.status(422).json({
      message: "Invalid input. Please fill in all required fields.",
    });
  }

  const base64Content = (cvData as string).split(",").pop();

  if (!base64Content) {
    return res.status(422).json({
      message: "CV file is not valid. Please try again.",
    });
  }

  const transporter = buildTransporter();

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `Career application: ${role} - ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 720px; margin: 20px auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
        <h2 style="color: #004c4c; margin-bottom: 16px;">New Career Application</h2>
        <p><strong>Role:</strong> ${role}</p>
        ${jobId ? `<p><strong>Job ID:</strong> ${jobId}</p>` : ""}
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Year of Graduation:</strong> ${yearOfGraduation}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Experience in Years:</strong> ${experienceYears}</p>
        <p><strong>Current Employer:</strong> ${currentEmployer}</p>
        <p><strong>Current CTC:</strong> ${currentCTC}</p>
        <p><strong>Expected CTC:</strong> ${expectedCTC}</p>
        <p><strong>Notice Period:</strong> ${noticePeriod}</p>
        <p><strong>Skill Set:</strong> ${skills}</p>
        <p><strong>How did you come across this vacancy?:</strong> ${source}</p>
        <p><strong>Current Location:</strong> ${currentLocation}</p>
        <p><strong>Preferred Location:</strong> ${preferredLocation}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ""}
        ${portfolio ? `<p><strong>Portfolio / GitHub:</strong> ${portfolio}</p>` : ""}
        ${coverLetter ? `<p><strong>Cover Letter / Message:</strong><br/>${coverLetter}</p>` : ""}
        <p style="margin-top: 18px;">CV is attached to this email.</p>
      </div>
    `,
    attachments: [
      {
        filename: cvFileName || "candidate-cv",
        content: Buffer.from(base64Content, "base64"),
        contentType: cvFileType || undefined,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Application sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send application" });
  }
}

