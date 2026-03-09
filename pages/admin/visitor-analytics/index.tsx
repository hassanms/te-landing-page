import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
  Select,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
  VStack,
} from "@chakra-ui/react";
import apiClient from "lib/api-client";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { AdminLayout } from "components/admin/layout/admin-layout";

interface VisitorAnalyticsData {
  period: number;
  startDate: string;
  summary: { totalEvents: number; uniqueSessions: number };
  byPlatform: { platform: string; count: number }[];
  topPages: { page_path: string; count: number }[];
  topClicks: { label: string; count: number }[];
  recentEvents: {
    id: string;
    session_id: string;
    event_type: string;
    event_name: string | null;
    page_path: string | null;
    platform: string | null;
    created_at: string;
  }[];
}

const AdminVisitorAnalyticsPage = () => {
  const [data, setData] = useState<VisitorAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState("30");

  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const tableHeadingColor = useColorModeValue("gray.600", "gray.100");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get("/api/admin/visitor-analytics", {
          params: { period },
        });
        setData(res.data);
        setError(null);
      } catch (err: unknown) {
        console.error("Visitor analytics error:", err);
        setError("Failed to load visitor analytics.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [period]);

  if (loading) {
    return (
      <AdminLayout>
        <Box textAlign="center" py={16}>
          <Spinner size="xl" color="teal.500" />
          <Text mt={4}>Loading visitor analytics...</Text>
        </Box>
      </AdminLayout>
    );
  }

  if (error || !data) {
    return (
      <AdminLayout>
        <Alert status="error" mb={6}>
          <AlertIcon />
          {error || "No data"}
        </Alert>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Visitor Analytics - Admin - Tech Emulsion"
        description="Traffic sources and user event analytics"
        pageType="about"
      />

      <Box>
        <HStack justify="space-between" align="flex-start" mb={6} flexWrap="wrap" gap={3}>
          <Box>
            <Heading size="xl">Visitor Analytics</Heading>
            <Text mt={1} fontSize="sm" color={textColor}>
              Traffic sources (Google, LinkedIn, Direct, etc.) and user events (clicks, session end).
            </Text>
          </Box>
          <Select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            maxW="180px"
            bg={cardBg}
            size="sm"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">Last year</option>
          </Select>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          <Stat
            bg={cardBg}
            p={6}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="md"
          >
            <StatLabel textTransform="uppercase" fontSize="xs">
              Total Events
            </StatLabel>
            <StatNumber fontSize="3xl">{data.summary.totalEvents}</StatNumber>
            <StatHelpText>page_view, link_click, element_hover, session_end</StatHelpText>
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
              Unique Sessions
            </StatLabel>
            <StatNumber fontSize="3xl" color="teal.500">
              {data.summary.uniqueSessions}
            </StatNumber>
            <StatHelpText>Last {data.period} days</StatHelpText>
          </Stat>
        </SimpleGrid>

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
            Traffic by platform
          </Heading>
          {data.byPlatform.length > 0 ? (
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th color={tableHeadingColor}>Platform</Th>
                  <Th color={tableHeadingColor} isNumeric>Events</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.byPlatform.map(({ platform, count }) => (
                  <Tr key={platform}>
                    <Td>
                      <Badge colorScheme="teal" variant="subtle" borderRadius="md" px={2}>
                        {platform}
                      </Badge>
                    </Td>
                    <Td isNumeric>{count}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Text color={textColor}>No platform data in this period.</Text>
          )}
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={6}>
          <Box
            bg={cardBg}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            p={6}
            boxShadow="md"
          >
            <Heading size="md" mb={4}>
              Top pages
            </Heading>
            {data.topPages.length > 0 ? (
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th color={tableHeadingColor}>Page</Th>
                    <Th color={tableHeadingColor} isNumeric>Events</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.topPages.slice(0, 10).map(({ page_path, count }) => (
                    <Tr key={page_path}>
                      <Td fontSize="sm" noOfLines={1}>{page_path || "/"}</Td>
                      <Td isNumeric>{count}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ) : (
              <Text color={textColor} fontSize="sm">No page data.</Text>
            )}
          </Box>
          <Box
            bg={cardBg}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            p={6}
            boxShadow="md"
          >
            <Heading size="md" mb={4}>
              Top link / button clicks
            </Heading>
            {data.topClicks.length > 0 ? (
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th color={tableHeadingColor}>Link / element</Th>
                    <Th color={tableHeadingColor} isNumeric>Clicks</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.topClicks.slice(0, 10).map(({ label, count }) => (
                    <Tr key={label}>
                      <Td fontSize="xs" noOfLines={1} maxW="200px">{label}</Td>
                      <Td isNumeric>{count}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ) : (
              <Text color={textColor} fontSize="sm">No click data.</Text>
            )}
          </Box>
        </SimpleGrid>

        <Box
          bg={cardBg}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          p={6}
          boxShadow="md"
        >
          <Heading size="md" mb={4}>
            Recent events
          </Heading>
          {data.recentEvents.length > 0 ? (
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th color={tableHeadingColor}>Time</Th>
                  <Th color={tableHeadingColor}>Type</Th>
                  <Th color={tableHeadingColor}>Platform</Th>
                  <Th color={tableHeadingColor}>Page</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.recentEvents.slice(0, 20).map((e) => (
                  <Tr key={e.id}>
                    <Td fontSize="xs" color={textColor}>
                      {new Date(e.created_at).toLocaleString()}
                    </Td>
                    <Td>
                      <Badge size="sm" colorScheme="blue">{e.event_type}</Badge>
                    </Td>
                    <Td>{e.platform ?? "—"}</Td>
                    <Td fontSize="xs" noOfLines={1} maxW="180px">{e.page_path ?? "—"}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Text color={textColor}>No recent events.</Text>
          )}
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdminVisitorAnalyticsPage;
