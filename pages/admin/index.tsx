import React, { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Spinner,
  Text,
  Alert,
  AlertIcon,
  HStack,
  VStack,
  Icon,
  Heading,
  Badge,
  Button,
} from "@chakra-ui/react";
import apiClient from "lib/api-client";
import { getAccessToken } from "lib/supabase/auth-client";
import { useRouter } from "next/router";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { AdminLayout } from "components/admin/layout/admin-layout";
import {
  FiBriefcase,
  FiCheckCircle,
  FiXCircle,
  FiFileText,
  FiCalendar,
  FiClock,
  FiGithub,
} from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  footerText?: string;
  footerIcon?: React.ElementType;
  alertText?: string;
  alertColor?: string;
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: IconComponent,
  iconBg,
  iconColor,
  footerText,
  footerIcon: FooterIcon,
  alertText,
  alertColor,
  onClick,
}) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const valueColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      p={5}
      border="1px solid"
      borderColor={borderColor}
      boxShadow="md"
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-3px)",
        cursor: onClick ? "pointer" : "default",
      }}
      transition="all 0.2s"
      h="100%"
      display="flex"
      flexDirection="column"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Top row: title and optional context */}
      <HStack justify="space-between" align="flex-start" mb={3} spacing={4}>
        <Text
          fontSize="xs"
          color={textColor}
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="0.5px"
        >
          {title}
        </Text>
        {footerText && (
          <HStack
            spacing={1.5}
            color={textColor}
            fontSize="xs"
            whiteSpace="nowrap"
          >
            {FooterIcon && <Icon as={FooterIcon} boxSize={3} />}
            <Text>{footerText}</Text>
          </HStack>
        )}
      </HStack>

      {/* Middle row: icon + main value */}
      <HStack justify="space-between" align="center" spacing={4} flex="1">
        <Box
          bg={iconBg}
          p={3}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize="56px"
          flexShrink={0}
        >
          <Icon as={IconComponent} boxSize={6} color={iconColor} />
        </Box>
        <Text
          fontSize="3xl"
          fontWeight="600"
          color={valueColor}
          lineHeight="1.1"
          textAlign="right"
          flex="1"
        >
          {value}
        </Text>
      </HStack>

      {/* Optional alert/footer line at bottom */}
      {alertText && (
        <Text
          mt={3}
          fontSize="xs"
          color={alertColor || "red.500"}
          fontWeight="medium"
        >
          {alertText}
        </Text>
      )}
    </Box>
  );
};

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalJobs: 0,
    openJobs: 0,
    closedJobs: 0,
    totalApplications: 0,
    recentApplications: 0,
    jobsWithNoApplications: 0,
    jobsWithNoApplicationsList: [] as { title: string }[],
    longPendingApplications: 0,
    staleOpenJobs: [] as { title: string; daysOpen: number }[],
    applicationsTrend: [] as { label: string; count: number }[],
    loading: true,
    error: null as string | null,
  });

  type BlogViewsRange = "week" | "month" | "year";

  interface BlogViewsPoint {
    bucket: string;
    label: string;
    totalViews: number;
    topPosts: {
      id: string;
      slug: string;
      title: string;
      views: number;
    }[];
  }

  const [blogViewsRange, setBlogViewsRange] = useState<BlogViewsRange>("week");
  const [blogViewsData, setBlogViewsData] = useState<BlogViewsPoint[]>([]);
  const [blogViewsLoading, setBlogViewsLoading] = useState(false);
  const [blogViewsError, setBlogViewsError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    let isMounted = true;

    const init = async () => {
      // Only proceed if there is a valid access token; otherwise redirect.
      const token = await getAccessToken();
      if (!token) {
        router.replace("/admin/login");
        return;
      }
      if (isMounted) {
        fetchStats();
        fetchBlogViews("week");
      }
    };

    void init();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const fetchBlogViews = async (range: BlogViewsRange) => {
    try {
      setBlogViewsLoading(true);
      const response = await apiClient.get("/api/admin/blog/analytics", {
        params: { range },
      });
      setBlogViewsData(response.data.buckets || []);
      setBlogViewsError(null);
    } catch (err: any) {
      console.error("Error fetching blog views analytics:", err);
      setBlogViewsError("Failed to load blog views analytics.");
    } finally {
      setBlogViewsLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      setStats((prev) => ({ ...prev, loading: true, error: null }));

      // Fetch jobs
      const jobsResponse = await apiClient.get("/api/admin/jobs");
      const jobs = jobsResponse.data.jobs || [];
      const openJobs = jobs.filter((job: any) => job.status === "open");
      const closedJobs = jobs.filter((job: any) => job.status === "closed");

      // Fetch applications
      const appsResponse = await apiClient.get("/api/admin/applications");
      const applications = appsResponse.data.applications || [];

      // Needs attention: jobs with no applications
      const applicationsByJobId: Record<string, number> = {};
      applications.forEach((app: any) => {
        const jobId = (app.job && app.job.id) || app.job_id;
        if (jobId) {
          applicationsByJobId[jobId] = (applicationsByJobId[jobId] || 0) + 1;
        }
      });

      const jobsWithNoApplicationsList = jobs
        .filter((job: any) => !applicationsByJobId[job.id])
        .map((job: any) => ({ title: job.title }));
      const jobsWithNoApplications = jobsWithNoApplicationsList.length;

      // Needs attention: stale open jobs (open longer than 30 days)
      const STALE_DAYS = 30;
      const now = new Date();
      const staleOpenJobs = openJobs
        .map((job: any) => {
          const createdAt = new Date(job.created_at);
          const diffDays =
            (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
          return {
            title: job.title,
            daysOpen: Math.floor(diffDays),
          };
        })
        .filter((jobInfo) => jobInfo.daysOpen >= STALE_DAYS);

      // Needs attention: pending applications older than 7 days
      const PENDING_DAYS = 7;
      const pendingThreshold = new Date();
      pendingThreshold.setDate(pendingThreshold.getDate() - PENDING_DAYS);
      const longPendingApplications = applications.filter((app: any) => {
        const status = app.status || "pending";
        if (status !== "pending") return false;
        const createdAt = new Date(app.created_at);
        return createdAt < pendingThreshold;
      }).length;

      // Applications trend (last 7 days, including today)
      const trendLabels: string[] = [];
      const trendCounts: number[] = [];
      const trendMap: Record<string, number> = {};

      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10); // YYYY-MM-DD
        trendMap[key] = 0;
        const shortLabel = d.toLocaleDateString("en-US", {
          weekday: "short",
        });
        trendLabels.push(shortLabel);
      }

      applications.forEach((app: any) => {
        if (!app.created_at) {
          return;
        }
        const d = new Date(app.created_at);
        if (isNaN(d.getTime())) {
          return;
        }
        const key = d.toISOString().slice(0, 10);
        if (key in trendMap) {
          trendMap[key] = (trendMap[key] || 0) + 1;
        }
      });

      Object.values(trendMap).forEach((count) => {
        trendCounts.push(count);
      });

      const applicationsTrend = trendLabels.map((label, index) => ({
        label,
        count: trendCounts[index] || 0,
      }));

      // Recent applications = sum of last 7 days (same window as trend)
      const recentApplications = applicationsTrend.reduce(
        (sum, day) => sum + day.count,
        0,
      );

      setStats({
        totalJobs: jobs.length,
        openJobs: openJobs.length,
        closedJobs: closedJobs.length,
        totalApplications: applications.length,
        recentApplications,
        jobsWithNoApplications,
        jobsWithNoApplicationsList,
        longPendingApplications,
        staleOpenJobs,
        applicationsTrend,
        loading: false,
        error: null,
      });
    } catch (err: any) {
      console.error("Error fetching stats:", err);
      // Let the global apiClient interceptor handle 401s by redirecting
      // to the admin login page, without flashing an error state.
      if (err?.response?.status !== 401) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to load dashboard statistics",
        }));
      }
    }
  };

  const handleBlogViewsRangeChange = (range: BlogViewsRange) => {
    if (range === blogViewsRange) return;
    setBlogViewsRange(range);
    fetchBlogViews(range);
  };

  const BlogViewsTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: any[];
  }) => {
    const cardBg = useColorModeValue("white", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const smallTextColor = useColorModeValue("gray.400", "gray.200");
    const textColor = useColorModeValue("gray.600", "gray.200");

    if (!active || !payload || payload.length === 0) return null;

    const point: BlogViewsPoint = payload[0].payload;

    return (
      <Box
        bg={cardBg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="md"
        p={3}
        boxShadow="lg"
        maxW="280px"
      >
        <Text fontSize="xs" color={smallTextColor} mb={1}>
          {point.label}
        </Text>
        <Text fontSize="sm" fontWeight="bold" mb={2} color={textColor}>
          Total views: {point.totalViews}
        </Text>
        {point.topPosts.length > 0 ? (
          <VStack align="flex-start" spacing={1}>
            <Text fontSize="xs" color={smallTextColor} fontWeight="semibold">
              Top 5 posts
            </Text>
            {point.topPosts.map((post, index) => (
              <HStack key={post.id} spacing={2} align="flex-start">
                <Text fontSize="xs" color={smallTextColor}>
                  {index + 1}.
                </Text>
                <VStack align="flex-start" spacing={0}>
                  <Text fontSize="xs" noOfLines={1} maxW="220px" color={textColor}>
                    {post.title}
                  </Text>
                  <Text fontSize="xs" color={smallTextColor}>
                    {post.views} views
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        ) : (
          <Text fontSize="xs" color={smallTextColor}>
            No views recorded for this period.
          </Text>
        )}
      </Box>
    );
  };

  if (stats.loading) {
    return (
      <AdminLayout>
        <Box textAlign="center" py={16}>
          <Spinner size="xl" color="teal.500" />
          <Text mt={4}>Loading dashboard...</Text>
        </Box>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Admin Dashboard - Tech Emulsion"
        description="Admin dashboard for managing jobs and applications"
        pageType="about"
      />

      <Box>
        <VStack align="flex-start" spacing={2} mb={8}>
          <Heading size="xl">Admin Dashboard</Heading>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Monitor jobs and applications at a glance.
          </Text>
        </VStack>

        {/* Quick summary chips */}
        <HStack
          spacing={3}
          flexWrap="wrap"
          mb={6}
          fontSize="xs"
          color={useColorModeValue("gray.600", "gray.200")}
        >
          <Badge borderRadius="full" px={3} py={1} colorScheme="teal">
            Total jobs: {stats.totalJobs}
          </Badge>
          <Badge borderRadius="full" px={3} py={1} colorScheme="green">
            Open jobs: {stats.openJobs}
          </Badge>
          <Badge borderRadius="full" px={3} py={1} colorScheme="gray">
            Closed jobs: {stats.closedJobs}
          </Badge>
          <Badge borderRadius="full" px={3} py={1} colorScheme="blue">
            Applications: {stats.totalApplications}
          </Badge>
          <Badge borderRadius="full" px={3} py={1} colorScheme="purple">
            Last 7 days: {stats.recentApplications} applications
          </Badge>
        </HStack>

        {/* Needs attention panel */}
        <Box
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="xl"
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.600")}
          p={6}
          boxShadow="md"
          mb={8}
        >
          <Heading size="md" mb={3}>
            Needs Attention
          </Heading>
          {stats.jobsWithNoApplications === 0 &&
          stats.longPendingApplications === 0 &&
          stats.staleOpenJobs.length === 0 ? (
            <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.200")}>
              All clear. Nothing critical needs attention right now.
            </Text>
          ) : (
            <VStack align="flex-start" spacing={3} fontSize="sm">
              {stats.jobsWithNoApplications > 0 && (
                <HStack spacing={2} align="flex-start">
                  <Badge colorScheme="orange" borderRadius="full">
                    Jobs
                  </Badge>
                  <Box>
                    <Text>
                      <strong>{stats.jobsWithNoApplications}</strong>{" "}
                      {stats.jobsWithNoApplications === 1 ? "job" : "jobs"} have no
                      applications yet.
                    </Text>
                    <VStack align="flex-start" spacing={1} mt={1}>
                      {stats.jobsWithNoApplicationsList.slice(0, 3).map((job) => (
                        <Text
                          key={job.title}
                          fontSize="xs"
                          color={useColorModeValue("gray.600", "gray.200")}
                        >
                          • {job.title}
                        </Text>
                      ))}
                      {stats.jobsWithNoApplicationsList.length > 3 && (
                        <Text
                          fontSize="xs"
                          color={useColorModeValue("gray.500", "gray.200")}
                        >
                          + {stats.jobsWithNoApplicationsList.length - 3} more
                        </Text>
                      )}
                    </VStack>
                  </Box>
                </HStack>
              )}
              {stats.staleOpenJobs.length > 0 && (
                <Box>
                  <HStack spacing={2} mb={1}>
                    <Badge colorScheme="red" borderRadius="full">
                      Stale jobs
                    </Badge>
                    <Text>
                      <strong>{stats.staleOpenJobs.length}</strong> open job
                      {stats.staleOpenJobs.length > 1 ? "s" : ""} older than 30
                      days.
                    </Text>
                  </HStack>
                  <VStack align="flex-start" spacing={1}>
                    {stats.staleOpenJobs.slice(0, 3).map((job) => (
                      <Text
                        key={job.title}
                        fontSize="xs"
                        color={useColorModeValue("gray.600", "gray.200")}
                      >
                        • {job.title} &mdash; open for {job.daysOpen} days
                      </Text>
                    ))}
                    {stats.staleOpenJobs.length > 3 && (
                      <Text
                        fontSize="xs"
                        color={useColorModeValue("gray.500", "gray.200")}
                      >
                        + {stats.staleOpenJobs.length - 3} more
                      </Text>
                    )}
                  </VStack>
                </Box>
              )}
              {stats.longPendingApplications > 0 && (
                <HStack spacing={2}>
                  <Badge colorScheme="purple" borderRadius="full">
                    Applications
                  </Badge>
                  <Text>
                    <strong>{stats.longPendingApplications}</strong> pending
                    application
                    {stats.longPendingApplications > 1 ? "s" : ""} older than 7
                    days.
                  </Text>
                </HStack>
              )}
            </VStack>
          )}
        </Box>

        {stats.error && (
          <Alert status="error" mb={6} borderRadius="lg">
            <AlertIcon />
            {stats.error}
          </Alert>
        )}

        {/* Stat cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
          <StatCard
            title="Total Jobs"
            value={stats.totalJobs}
            icon={FiBriefcase}
            iconBg="orange.50"
            iconColor="orange.500"
            footerText="All job postings"
            footerIcon={FiBriefcase}
            onClick={() => router.push("/admin/jobs")}
          />

          <StatCard
            title="Open Jobs"
            value={stats.openJobs}
            icon={FiCheckCircle}
            iconBg="green.50"
            iconColor="green.500"
            footerText="Last 24 Hours"
            footerIcon={FiCalendar}
            onClick={() => router.push("/admin/jobs")}
          />

          <StatCard
            title="Closed Jobs"
            value={stats.closedJobs}
            icon={FiXCircle}
            iconBg="red.50"
            iconColor="red.500"
            footerText="Tracked from System"
            footerIcon={FiGithub}
             onClick={() => router.push("/admin/jobs")}
          />

          <StatCard
            title="Total Applications"
            value={stats.totalApplications}
            icon={FiFileText}
            iconBg="blue.50"
            iconColor="blue.500"
            footerText={`${stats.recentApplications} in last 7 days`}
            footerIcon={FiClock}
            onClick={() => router.push("/admin/jobs")}
          />
        </SimpleGrid>

        {/* Blog views analytics */}
        <Box
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="xl"
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.600")}
          p={6}
          boxShadow="md"
        >
          <HStack justify="space-between" align="flex-start" mb={4} flexWrap="wrap" spacing={3}>
            <Box>
              <Heading size="md">Blog Views Analytics</Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.200")}
              >
                See how your blog traffic trends over time.
              </Text>
            </Box>
            <HStack spacing={2}>
              <Button
                size="sm"
                variant={blogViewsRange === "week" ? "solid" : "outline"}
                colorScheme="teal"
                onClick={() => handleBlogViewsRangeChange("week")}
              >
                Week
              </Button>
              <Button
                size="sm"
                variant={blogViewsRange === "month" ? "solid" : "outline"}
                colorScheme="teal"
                onClick={() => handleBlogViewsRangeChange("month")}
              >
                Month
              </Button>
              <Button
                size="sm"
                variant={blogViewsRange === "year" ? "solid" : "outline"}
                colorScheme="teal"
                onClick={() => handleBlogViewsRangeChange("year")}
              >
                Year
              </Button>
            </HStack>
          </HStack>

          {blogViewsError && (
            <Alert status="error" mb={4} borderRadius="md">
              <AlertIcon />
              {blogViewsError}
            </Alert>
          )}

          {blogViewsLoading ? (
            <Box textAlign="center" py={10}>
              <Spinner size="lg" color="teal.500" />
              <Text mt={3} fontSize="sm" color={useColorModeValue("gray.600", "gray.200")}>
                Loading blog views...
              </Text>
            </Box>
          ) : blogViewsData.length === 0 ? (
            <Box textAlign="center" py={10}>
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.200")}>
                No blog views recorded yet for the selected period.
              </Text>
              <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.400")} mt={2}>
                Once visitors read your blog posts, their views will appear here.
              </Text>
            </Box>
          ) : (
            <Box height={{ base: "260px", md: "320px" }}>
              {isClient && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={blogViewsData}
                    margin={{ top: 10, right: 16, bottom: 8, left: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={useColorModeValue("#EDF2F7", "#2D3748")}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="label"
                      tick={{ fontSize: 11 }}
                      tickMargin={8}
                      stroke={useColorModeValue("gray.400", "gray.300")}
                    />
                    <YAxis
                      allowDecimals={false}
                      tick={{ fontSize: 11 }}
                      stroke={useColorModeValue("gray.400", "gray.300")}
                    />
                    <RechartsTooltip content={<BlogViewsTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="totalViews"
                      stroke="#14B8A6"
                      strokeWidth={2.5}
                      dot={{ r: 3, strokeWidth: 1, stroke: "#0F766E", fill: "#14B8A6" }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdminDashboard;
