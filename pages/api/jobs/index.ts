import type { NextApiRequest, NextApiResponse } from "next";
import jobs from "data/jobs/jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  return res.status(200).json(jobs);
}

