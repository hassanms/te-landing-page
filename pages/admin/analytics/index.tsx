import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Spinner,
  Text,
  Alert,
  AlertIcon,
  VStack,
  HStack,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from "@chakra-ui/react";
import apiClient from "lib/api-client";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { AdminLayout } from "components/admin/layout/admin-layout";

interface AnalyticsData {
  summary: {
    totalApplications: number;
    totalJobs: number;
    openJobs: number;
    recentApplications: number;
    avgApplicationsPerJob: number;
    avgResponseTime: number;
  };
  statusBreakdown: {
    pending: number;
    reviewing: number;
    shortlisted: number;
    interviewed: number;
    offered: number;
    rejected: number;
    withdrawn: number;
  };
  applicationsByJob: Record<string, number>;
  applicationsByDay: Record<string, number>;
  applicationsByDepartment: Record<string, number>;
  applicationsByTitle: Record<string, number>;
  period: number;
}

const AdminAnalyticsPage = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState("30");

  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const tableHeadingColor = useColorModeValue("gray.600", "gray.100");

  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/api/admin/analytics", {
        params: { period },
      });
      setAnalytics(response.data);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching analytics:", err);
      setError("Failed to load analytics. Please check your admin secret.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <Box textAlign="center" py={16}>
          <Spinner size="xl" color="teal.500" />
          <Text mt={4}>Loading analytics...</Text>
        </Box>
      </AdminLayout>
    );
  }

  if (error || !analytics) {
    return (
      <AdminLayout>
        <Alert status="error" mb={6}>
          <AlertIcon />
          {error || "Failed to load analytics"}
        </Alert>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Admin Applications Analytics - Tech Emulsion"
        description="Applications analytics and reporting for job applications"
        pageType="about"
      />

      <Box>
        <HStack justify="space-between" align="flex-start" mb={6}>
          <Box>
            <Heading size="xl">Applications Analytics</Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.200")}
            >
              Track application trends and hiring performance over time.
            </Text>
          </Box>
          <Select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            maxW="220px"
            bg={useColorModeValue("white", "gray.700")}
            size="sm"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">Last year</option>
          </Select>
        </HStack>

        {/* High-level status summary chips */}
        <HStack
          spacing={3}
          flexWrap="wrap"
          mb={6}
          fontSize="xs"
          color={textColor}
        >
          <Text>
            Total Jobs: <strong>{analytics.summary.totalJobs}</strong>
          </Text>
          <Text>
            Open Jobs: <strong>{analytics.summary.openJobs}</strong>
          </Text>
          <Badge colorScheme="teal" borderRadius="full" px={3} py={1}>
            Recent applications (last {analytics.period} days):{" "}
            {analytics.summary.recentApplications}
          </Badge>
          <Badge colorScheme="purple" borderRadius="full" px={3} py={1}>
            Avg per job: {analytics.summary.avgApplicationsPerJob}
          </Badge>
          <Badge colorScheme="orange" borderRadius="full" px={3} py={1}>
            Avg response time: {analytics.summary.avgResponseTime} days
          </Badge>
        </HStack>

        {/* Summary Stats */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
          <Stat
            bg={cardBg}
            p={6}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="md"
          >
            <StatLabel textTransform="uppercase" fontSize="xs">
              Total Applications
            </StatLabel>
            <StatNumber fontSize="3xl">
              {analytics.summary.totalApplications}
            </StatNumber>
            <StatHelpText>All time</StatHelpText>
          </Stat>

          <Stat
            bg={cardBg}
            p={6}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="md"
          >
            <StatLabel textTransform="uppercase" fontSize="xs">
              Recent Applications
            </StatLabel>
            <StatNumber fontSize="3xl" color="teal.400">
              {analytics.summary.recentApplications}
            </StatNumber>
            <StatHelpText>Last {analytics.period} days</StatHelpText>
          </Stat>

          <Stat
            bg={cardBg}
            p={6}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="md"
          >
            <StatLabel textTransform="uppercase" fontSize="xs">
              Avg per Job
            </StatLabel>
            <StatNumber fontSize="3xl">
              {analytics.summary.avgApplicationsPerJob}
            </StatNumber>
            <StatHelpText>Applications per job</StatHelpText>
          </Stat>

          <Stat
            bg={cardBg}
            p={6}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="md"
          >
            <StatLabel textTransform="uppercase" fontSize="xs">
              Avg Response Time
            </StatLabel>
            <StatNumber fontSize="3xl">
              {analytics.summary.avgResponseTime}
            </StatNumber>
            <StatHelpText>Days</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Status Breakdown */}
        <Box
          bg={cardBg}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          p={6}
          mb={6}
          boxShadow="md"
        >
          <Heading size="md" mb={4}>
            Status Breakdown
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 7 }} spacing={4}>
            <Box
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Text fontSize="sm" color={textColor} mb={1}>
                Pending
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                {analytics.statusBreakdown.pending}
              </Text>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("blue.50", "blue.900")}
            >
              <Text fontSize="sm" color={textColor} mb={1}>
                Reviewing
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                {analytics.statusBreakdown.reviewing}
              </Text>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("purple.50", "purple.900")}
            >
              <Text fontSize="sm" color={textColor} mb={1}>
                Shortlisted
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">
                {analytics.statusBreakdown.shortlisted}
              </Text>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("orange.50", "orange.900")}
            >
              <Text fontSize="sm" color={textColor} mb={1}>
                Interviewed
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="orange.500">
                {analytics.statusBreakdown.interviewed}
              </Text>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("green.50", "green.900")}
            >
              <Text fontSize="sm" color={textColor} mb={1}>
                Offered
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="green.500">
                {analytics.statusBreakdown.offered}
              </Text>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("red.50", "red.900")}
            >
              <Text fontSize="sm" color={textColor} mb={1}>
                Rejected
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="red.500">
                {analytics.statusBreakdown.rejected}
              </Text>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("yellow.50", "yellow.900")}
            >
              <Text fontSize="sm" color={textColor} mb={1}>
                Withdrawn
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="yellow.500">
                {analytics.statusBreakdown.withdrawn}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Applications by Job Title */}
        <Box
          bg={cardBg}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          p={6}
          mb={6}
          boxShadow="md"
        >
          <Heading size="md" mb={4}>
            Applications by Job Title
          </Heading>
          {analytics.applicationsByTitle &&
          Object.keys(analytics.applicationsByTitle).length > 0 ? (
            <Table variant="striped" colorScheme="blackAlpha" size="sm">
              <Thead>
                <Tr>
                  <Th color={tableHeadingColor}>Job Title</Th>
                  <Th color={tableHeadingColor}>Applications</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(analytics.applicationsByTitle)
                  .sort(([, a], [, b]) => b - a)
                  .map(([title, count]) => (
                    <Tr key={title}>
                      <Td>{title}</Td>
                      <Td>
                        <Badge colorScheme="teal" fontSize="md" px={3} py={1}>
                          {count}
                        </Badge>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          ) : (
            <Text color={textColor}>No data available</Text>
          )}
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdminAnalyticsPage;
