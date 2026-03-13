import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const {
    feedbackType,
    isAnonymous,
    name,
    priority,
    subject,
    message,
  } = req.body as {
    feedbackType: string;
    isAnonymous: boolean;
    name?: string;
    priority: string;
    subject: string;
    message: string;
  };

  if (!feedbackType || !priority || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const port = Number(process.env.SMTP_PORT);

  const transporter = nodemailer.createTransport({
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

  const effectiveName =
    isAnonymous || !name?.trim() ? "Anonymous" : name.trim();

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `[Employee Feedback] ${feedbackType} — ${subject}`,
    html: `
      <div
        style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        "
      >
        <h2 style="margin-top: 0; color: #004c4c;">Employee Feedback Submission</h2>
        <p><strong>Feedback Type:</strong> ${feedbackType}</p>
        <p><strong>Priority Level:</strong> ${priority}</p>
        <p><strong>Submitted By:</strong> ${effectiveName}</p>
        <p><strong>Subject / Title:</strong> ${subject}</p>
        <p><strong>Detailed Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: "Failed to submit feedback" });
  }
}

