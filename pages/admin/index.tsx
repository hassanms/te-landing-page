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
} from "@chakra-ui/react";
import axios from "axios";
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
      borderRadius="lg"
      p={6}
      border="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
      _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
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
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="0.5px"
          mb={1}
        >
          {title}
        </Text>
        <Text 
          fontSize="2xl" 
          fontWeight="300" 
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
    loading: true,
    error: null as string | null,
  });

  const adminSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET || "your-admin-secret-key";

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setStats((prev) => ({ ...prev, loading: true, error: null }));

      // Fetch jobs
      const jobsResponse = await axios.get("/api/admin/jobs", {
        params: { secret: adminSecret },
      });
      const jobs = jobsResponse.data.jobs || [];
      const openJobs = jobs.filter((job: any) => job.status === "open");
      const closedJobs = jobs.filter((job: any) => job.status === "closed");

      // Fetch applications
      const appsResponse = await axios.get("/api/admin/applications", {
        params: { secret: adminSecret },
      });
      const applications = appsResponse.data.applications || [];

      // Calculate recent applications (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const recentApplications = applications.filter((app: any) => {
        const appDate = new Date(app.created_at);
        return appDate >= sevenDaysAgo;
      }).length;

      setStats({
        totalJobs: jobs.length,
        openJobs: openJobs.length,
        closedJobs: closedJobs.length,
        totalApplications: applications.length,
        recentApplications,
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
        <Box textAlign="center" py={10}>
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
