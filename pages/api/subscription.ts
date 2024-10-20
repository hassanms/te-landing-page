
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body;

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

        console.log("transporter", transporter);

        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: `Subscription form submission`,
            text: `
            User has subscribed to the newsletter with the following email address:
        Email: ${email}
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
