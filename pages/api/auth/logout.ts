import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Client-side will handle the actual logout via Supabase client
  // This endpoint just confirms the logout
  return res.status(200).json({ message: "Logged out successfully" });
}
