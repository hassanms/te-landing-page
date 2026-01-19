import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Admin authentication check
  const { user, error: authError } = await getAuthUserFromRequest(req, res);

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const supabaseAdmin = getSupabaseAdmin();

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { period = "30" } = req.query; // days
    const days = parseInt(period as string, 10);

    // Calculate date range
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    const startDateISO = startDate.toISOString();

    // Fetch all applications
    const { data: applications, error: appsError } = await supabaseAdmin
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (appsError) {
      console.error("Error fetching applications:", appsError);
      return res.status(500).json({ error: "Failed to fetch applications" });
    }

    // Fetch all jobs
    const { data: jobs, error: jobsError } = await supabaseAdmin
      .from("jobs")
      .select("*");

    if (jobsError) {
      console.error("Error fetching jobs:", jobsError);
      return res.status(500).json({ error: "Failed to fetch jobs" });
    }

    // Calculate statistics
    const totalApplications = applications?.length || 0;
    const totalJobs = jobs?.length || 0;
    const openJobs = jobs?.filter((j) => j.status === "open").length || 0;

    // Status breakdown
    const statusBreakdown = {
      pending: applications?.filter((a) => a.status === "pending").length || 0,
      reviewing: applications?.filter((a) => a.status === "reviewing").length || 0,
      shortlisted: applications?.filter((a) => a.status === "shortlisted").length || 0,
      interviewed: applications?.filter((a) => a.status === "interviewed").length || 0,
      offered: applications?.filter((a) => a.status === "offered").length || 0,
      rejected: applications?.filter((a) => a.status === "rejected").length || 0,
      withdrawn: applications?.filter((a) => a.status === "withdrawn").length || 0,
    };

    // Recent applications (within period)
    const recentApplications = applications?.filter(
      (a) => new Date(a.created_at) >= new Date(startDateISO)
    ) || [];

    // Applications by job
    const applicationsByJob: Record<string, number> = {};
    applications?.forEach((app) => {
      const jobId = app.job_id;
      applicationsByJob[jobId] = (applicationsByJob[jobId] || 0) + 1;
    });

    // Applications by day (for chart)
    const applicationsByDay: Record<string, number> = {};
    recentApplications.forEach((app) => {
      const date = new Date(app.created_at).toISOString().split("T")[0];
      applicationsByDay[date] = (applicationsByDay[date] || 0) + 1;
    });

    // Applications by department
    const applicationsByDepartment: Record<string, number> = {};
    applications?.forEach((app) => {
      const job = jobs?.find((j) => j.id === app.job_id);
      if (job) {
        const dept = job.department || "Unknown";
        applicationsByDepartment[dept] = (applicationsByDepartment[dept] || 0) + 1;
      }
    });

    // Average applications per job
    const avgApplicationsPerJob =
      totalJobs > 0 ? (totalApplications / totalJobs).toFixed(2) : "0";

    // Response time (average days from application to status update)
    const applicationsWithStatusUpdate = applications?.filter(
      (a) => a.status_updated_at && a.status !== "pending"
    ) || [];

    let avgResponseTime = 0;
    if (applicationsWithStatusUpdate.length > 0) {
      const totalDays = applicationsWithStatusUpdate.reduce((sum, app) => {
        const created = new Date(app.created_at).getTime();
        const updated = new Date(app.status_updated_at).getTime();
        const days = (updated - created) / (1000 * 60 * 60 * 24);
        return sum + days;
      }, 0);
      avgResponseTime = totalDays / applicationsWithStatusUpdate.length;
    }

    return res.status(200).json({
      summary: {
        totalApplications,
        totalJobs,
        openJobs,
        recentApplications: recentApplications.length,
        avgApplicationsPerJob: parseFloat(avgApplicationsPerJob),
        avgResponseTime: parseFloat(avgResponseTime.toFixed(2)),
      },
      statusBreakdown,
      applicationsByJob,
      applicationsByDay,
      applicationsByDepartment,
      period: days,
    });
  } catch (error) {
    console.error("Error generating analytics:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
