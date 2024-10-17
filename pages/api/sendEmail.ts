
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, company, email, phone, message } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !message
        ) {
            return res.status(422).json({
                message:
                    'Invalid input. Please fill in all fields.'
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            logger: true,
            debug: true

        });

        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: `Contact form submission from ${name}`,
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
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company ? company : ""}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
            </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
