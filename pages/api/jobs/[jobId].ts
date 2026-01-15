import type { NextApiRequest, NextApiResponse } from "next";
import jobs from "data/jobs/jobs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  const {
    query: { jobId },
  } = req;

  const job = jobs.find((j) => j.id === jobId || j.slug === jobId);

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  return res.status(200).json(job);
}

