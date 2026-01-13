import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

type CareerRequestBody = {
  name: string;
  email: string;
  phone: string;
  role: string;
  linkedin?: string;
  portfolio?: string;
  experience?: string;
  message?: string;
  cvFileName?: string;
  cvFileType?: string;
  cvData?: string;
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
    name,
    email,
    phone,
    role,
    linkedin,
    portfolio,
    experience,
    message,
    cvFileName,
    cvFileType,
    cvData,
  } = req.body as CareerRequestBody;

  if (!name || !email || !phone || !role || !cvData) {
    return res.status(422).json({
      message: "Invalid input. Please fill in all required fields.",
    });
  }

  const base64Content = cvData.split(",").pop();
  if (!base64Content) {
    return res.status(422).json({
      message: "CV file is not valid. Please try again.",
    });
  }

  const transporter = buildTransporter();

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `Career application: ${role} - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 20px auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
        <h2 style="color: #004c4c; margin-bottom: 16px;">New Career Application</h2>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ""}
        ${portfolio ? `<p><strong>Portfolio:</strong> ${portfolio}</p>` : ""}
        ${experience ? `<p><strong>Experience:</strong> ${experience}</p>` : ""}
        ${message ? `<p><strong>Notes:</strong> ${message}</p>` : ""}
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
