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
} from "@chakra-ui/react";
import apiClient from "lib/api-client";
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
}) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const valueColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      p={6}
      border="1px solid"
      borderColor={borderColor}
      boxShadow="md"
      _hover={{ boxShadow: "lg", transform: "translateY(-3px)" }}
      transition="all 0.2s"
      h="100%"
      display="flex"
      flexDirection="column"
    >
      <HStack justify="space-between" align="flex-start" mb={4}>
        <Box
          bg={iconBg}
          p={4}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize="64px"
          flexShrink={0}
        >
          <Icon as={IconComponent} boxSize={7} color={iconColor} />
        </Box>
        {alertText && (
          <Text fontSize="sm" color={alertColor || "red.500"} fontWeight="medium">
            {alertText}
          </Text>
        )}
      </HStack>

      <VStack align="flex-start" spacing={1} flex="1">
        <Text
          fontSize="xs"
          color={textColor}
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="0.5px"
          mb={1}
        >
          {title}
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="600"
          color={valueColor}
          lineHeight="1.2"
          mb={2}
        >
          {value}
        </Text>
        {footerText && (
          <HStack spacing={1.5} mt="auto" color={textColor}>
            {FooterIcon && <Icon as={FooterIcon} boxSize={3.5} />}
            <Text fontSize="xs">{footerText}</Text>
          </HStack>
        )}
      </VStack>
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

  useEffect(() => {
    fetchStats();
  }, []);

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
      setStats((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to load dashboard statistics",
      }));
    }
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
            color={useColorModeValue("gray.600", "gray.300")}
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
          color={useColorModeValue("gray.600", "gray.300")}
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
            <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
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
                          color={useColorModeValue("gray.600", "gray.300")}
                        >
                          • {job.title}
                        </Text>
                      ))}
                      {stats.jobsWithNoApplicationsList.length > 3 && (
                        <Text
                          fontSize="xs"
                          color={useColorModeValue("gray.500", "gray.400")}
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
                        color={useColorModeValue("gray.600", "gray.300")}
                      >
                        • {job.title} &mdash; open for {job.daysOpen} days
                      </Text>
                    ))}
                    {stats.staleOpenJobs.length > 3 && (
                      <Text
                        fontSize="xs"
                        color={useColorModeValue("gray.500", "gray.400")}
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

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <StatCard
            title="Total Jobs"
            value={stats.totalJobs}
            icon={FiBriefcase}
            iconBg="orange.50"
            iconColor="orange.500"
            footerText="All job postings"
            footerIcon={FiBriefcase}
          />

          <StatCard
            title="Open Jobs"
            value={stats.openJobs}
            icon={FiCheckCircle}
            iconBg="green.50"
            iconColor="green.500"
            footerText="Last 24 Hours"
            footerIcon={FiCalendar}
          />

          <StatCard
            title="Closed Jobs"
            value={stats.closedJobs}
            icon={FiXCircle}
            iconBg="red.50"
            iconColor="red.500"
            footerText="Tracked from System"
            footerIcon={FiGithub}
          />

          <StatCard
            title="Total Applications"
            value={stats.totalApplications}
            icon={FiFileText}
            iconBg="blue.50"
            iconColor="blue.500"
            footerText={`${stats.recentApplications} in last 7 days`}
            footerIcon={FiClock}
          />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export default AdminDashboard;
