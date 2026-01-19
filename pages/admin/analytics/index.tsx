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
  period: number;
}

const AdminAnalyticsPage = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState("30");

  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");

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
        <Box textAlign="center" py={10}>
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
        title="Admin Analytics - Tech Emulsion"
        description="Analytics and reporting for job applications"
        pageType="about"
      />

      <Box>
        <HStack justify="space-between" align="center" mb={6}>
          <Heading size="xl">Analytics & Reporting</Heading>
          <Select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            maxW="200px"
            bg={useColorModeValue("white", "gray.700")}
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">Last year</option>
          </Select>
        </HStack>

        {/* Summary Stats */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
          <Stat
            bg={cardBg}
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="sm"
          >
            <StatLabel>Total Applications</StatLabel>
            <StatNumber>{analytics.summary.totalApplications}</StatNumber>
            <StatHelpText>All time</StatHelpText>
          </Stat>

          <Stat
            bg={cardBg}
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="sm"
          >
            <StatLabel>Recent Applications</StatLabel>
            <StatNumber color="teal.500">{analytics.summary.recentApplications}</StatNumber>
            <StatHelpText>Last {analytics.period} days</StatHelpText>
          </Stat>

          <Stat
            bg={cardBg}
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="sm"
          >
            <StatLabel>Avg per Job</StatLabel>
            <StatNumber>{analytics.summary.avgApplicationsPerJob}</StatNumber>
            <StatHelpText>Applications per job</StatHelpText>
          </Stat>

          <Stat
            bg={cardBg}
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="sm"
          >
            <StatLabel>Avg Response Time</StatLabel>
            <StatNumber>{analytics.summary.avgResponseTime}</StatNumber>
            <StatHelpText>Days</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Status Breakdown */}
        <Box
          bg={cardBg}
          borderRadius="lg"
          border="1px solid"
          borderColor={borderColor}
          p={6}
          mb={6}
          boxShadow="sm"
        >
          <Heading size="md" mb={4}>Status Breakdown</Heading>
          <SimpleGrid columns={{ base: 2, md: 4, lg: 7 }} spacing={4}>
            <Box>
              <Text fontSize="sm" color={textColor} mb={1}>Pending</Text>
              <Text fontSize="2xl" fontWeight="bold">{analytics.statusBreakdown.pending}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color={textColor} mb={1}>Reviewing</Text>
              <Text fontSize="2xl" fontWeight="bold" color="blue.500">{analytics.statusBreakdown.reviewing}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color={textColor} mb={1}>Shortlisted</Text>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">{analytics.statusBreakdown.shortlisted}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color={textColor} mb={1}>Interviewed</Text>
              <Text fontSize="2xl" fontWeight="bold" color="orange.500">{analytics.statusBreakdown.interviewed}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color={textColor} mb={1}>Offered</Text>
              <Text fontSize="2xl" fontWeight="bold" color="green.500">{analytics.statusBreakdown.offered}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color={textColor} mb={1}>Rejected</Text>
              <Text fontSize="2xl" fontWeight="bold" color="red.500">{analytics.statusBreakdown.rejected}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color={textColor} mb={1}>Withdrawn</Text>
              <Text fontSize="2xl" fontWeight="bold" color="yellow.500">{analytics.statusBreakdown.withdrawn}</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Applications by Department */}
        <Box
          bg={cardBg}
          borderRadius="lg"
          border="1px solid"
          borderColor={borderColor}
          p={6}
          mb={6}
          boxShadow="sm"
        >
          <Heading size="md" mb={4}>Applications by Department</Heading>
          {Object.keys(analytics.applicationsByDepartment).length > 0 ? (
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Department</Th>
                  <Th>Applications</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(analytics.applicationsByDepartment)
                  .sort(([, a], [, b]) => b - a)
                  .map(([dept, count]) => (
                    <Tr key={dept}>
                      <Td>{dept}</Td>
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
