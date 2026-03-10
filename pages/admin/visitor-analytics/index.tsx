import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Divider,
  IconButton,
  Tooltip,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import apiClient from "lib/api-client";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { AdminLayout } from "components/admin/layout/admin-layout";
import { FiEye } from "react-icons/fi";
import toast from "react-hot-toast";

const CountrySessionsMap = dynamic(
  () => import("components/admin/country-sessions-map").then((m) => m.CountrySessionsMap),
  { ssr: false }
);

const CHART_COLORS = ["#0D9488", "#2DD4BF", "#14B8A6", "#5EEAD4", "#99F6E4", "#CCFBF1", "#2D3748", "#4A5568"];

interface SessionSummary {
  session_id: string;
  platform: string | null;
  country: string | null;
  city: string | null;
  first_landing_page: string;
  first_visit_at: string;
  last_at: string;
  total_duration_sec: number;
  events_count: number;
  page_durations: { page_path: string; duration_sec: number }[];
  user_name: string | null;
  user_email: string | null;
  user_phone: string | null;
  user_company: string | null;
  page_view_count: number;
  link_click_count: number;
}

interface SessionDetail {
  session_id: string;
  user_name: string | null;
  user_email: string | null;
  user_phone: string | null;
  user_company: string | null;
  platform: string | null;
  country: string | null;
  city: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  first_landing_page: string;
  first_visit_at: string;
  last_at: string;
  total_duration_sec: number;
  page_durations: { page_path: string; duration_sec: number }[];
  events: { id: string; event_type: string; event_name: string | null; page_path: string | null; payload: Record<string, unknown>; created_at: string }[];
}

interface VisitorAnalyticsData {
  period: number;
  startDate: string;
  summary: {
    totalEvents: number;
    uniqueSessions: number;
    avgSessionDurationSec: number;
    bounceRate?: number;
    conversionRate?: number;
    newVisitors?: number;
    returningVisitors?: number;
  };
  eventsByDay: { date: string; count: number }[];
  byPlatform: { platform: string; count: number }[];
  byCountry: { country: string; count: number; sessions: number }[];
  byCity: { city: string; count: number; sessions: number }[];
  topPages: { page_path: string; count: number }[];
  topClicks: { label: string; count: number }[];
  sessions: SessionSummary[];
  recentEvents: {
    id: string;
    session_id: string;
    event_type: string;
    page_path: string | null;
    platform: string | null;
    country: string | null;
    city: string | null;
    created_at: string;
  }[];
}

function formatDuration(sec: number): string {
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return s ? `${m}m ${s}s` : `${m}m`;
}

function shortSessionId(sessionId: string): string {
  return sessionId.length > 12 ? sessionId.slice(0, 8) + "…" : sessionId;
}

function sessionDisplayLabel(s: SessionSummary): string {
  if (s.user_name?.trim()) return s.user_name.trim();
  if (s.user_email?.trim()) return s.user_email.trim();
  if (s.user_phone?.trim()) return s.user_phone.trim();
  return shortSessionId(s.session_id);
}

function getSessionQualityBadges(s: SessionSummary): { label: string; color: string }[] {
  const badges: { label: string; color: string }[] = [];

  const isHighIntent =
    !!(s.user_name && s.user_name.trim()) ||
    !!(s.user_email && s.user_email.trim()) ||
    !!(s.user_phone && s.user_phone.trim()) ||
    (s.first_landing_page.includes("/contact") ||
      s.first_landing_page.includes("/careers") ||
      s.first_landing_page.includes("/careers-apply"));

  const isBounce =
    s.page_view_count <= 1 &&
    s.link_click_count === 0 &&
    s.total_duration_sec <= 10;

  const hasClicks = s.link_click_count > 0;

  if (isHighIntent) {
    badges.push({ label: "High intent", color: "green" });
  }
  if (hasClicks && !isHighIntent) {
    badges.push({ label: "Scrolled & clicked", color: "purple" });
  }
  if (isBounce) {
    badges.push({ label: "Bounced", color: "red" });
  }

  if (badges.length === 0) {
    badges.push({ label: "Neutral", color: "gray" });
  }

  return badges;
}

function formatEventDetail(e: SessionDetail["events"][number]): string {
  if (e.event_type === "link_click" && e.payload && typeof e.payload === "object") {
    const p = e.payload as { link_url?: string; element_id?: string; link_text?: string };
    const label = (p.link_text || p.element_id || p.link_url || e.page_path || "").toString();
    const url = p.link_url;

    if (url && label && label !== url) {
      return `${label} (${url})`;
    }
    return label || "—";
  }

  if ((e.event_type === "page_view" || e.event_type === "page_leave") && e.page_path) {
    return e.page_path;
  }

  if (e.page_path) {
    return e.page_path;
  }

  return "—";
}

function escapeCsvCell(value: string | number | null | undefined): string {
  if (value == null) return "";
  const s = String(value);
  if (s.includes('"') || s.includes(",") || s.includes("\n") || s.includes("\r")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function buildSessionsCsv(sessions: SessionSummary[], period: number): string {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "Company",
    "Country",
    "City",
    "Source",
    "First visit",
    "Last seen",
    "Time on site (sec)",
    "Events count",
    "Page views",
    "Link clicks",
    "First landing page",
    "Session ID",
  ];
  const rows = sessions.map((s) => [
    escapeCsvCell(s.user_name),
    escapeCsvCell(s.user_email),
    escapeCsvCell(s.user_phone),
    escapeCsvCell(s.user_company),
    escapeCsvCell(s.country),
    escapeCsvCell(s.city),
    escapeCsvCell(s.platform ?? "direct"),
    escapeCsvCell(new Date(s.first_visit_at).toISOString()),
    escapeCsvCell(new Date(s.last_at).toISOString()),
    escapeCsvCell(s.total_duration_sec),
    escapeCsvCell(s.events_count),
    escapeCsvCell(s.page_view_count),
    escapeCsvCell(s.link_click_count),
    escapeCsvCell(s.first_landing_page),
    escapeCsvCell(s.session_id),
  ]);
  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
}

function getFunnelStatus(events: SessionDetail["events"]): {
  home: boolean;
  services: boolean;
  contact: boolean;
} {
  const paths = events
    .filter((e) => e.event_type === "page_view" || e.event_type === "page_leave")
    .map((e) => e.page_path || "");

  const home = paths.some((p) => p === "/" || p.startsWith("/?"));
  const services = paths.some((p) =>
    p.startsWith("/services") || p.includes("/services/"),
  );
  const contact = paths.some((p) =>
    p.startsWith("/contact") || p.includes("/contact"),
  );

  return { home, services, contact };
}

const AdminVisitorAnalyticsPage = () => {
  const [data, setData] = useState<VisitorAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState("30");
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [sessionDetail, setSessionDetail] = useState<SessionDetail | null>(null);
  const [sessionDetailLoading, setSessionDetailLoading] = useState(false);
  const { isOpen: isSessionModalOpen, onOpen: onSessionModalOpen, onClose: onSessionModalClose } = useDisclosure();
  const {
    isOpen: isClearOpen,
    onOpen: onClearOpen,
    onClose: onClearClose,
  } = useDisclosure();
  const [clearMode, setClearMode] = useState<"all" | "older_than_days" | null>(null);
  const [retentionDays, setRetentionDays] = useState(90);
  const [isClearing, setIsClearing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const cancelClearRef = useRef<HTMLButtonElement | null>(null);

  const RETENTION_OPTIONS = [30, 60, 90, 180, 365];

  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const tableHeadingColor = useColorModeValue("gray.600", "gray.100");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await apiClient.get("/api/admin/visitor-analytics", { params: { period } });
      setData(res.data);
      setError(null);
    } catch (err: unknown) {
      console.error("Visitor analytics error:", err);
      setError("Failed to load visitor analytics.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [period]);

  const openSessionDetail = async (sessionId: string) => {
    setSelectedSessionId(sessionId);
    setSessionDetail(null);
    onSessionModalOpen();
    setSessionDetailLoading(true);
    try {
      const res = await apiClient.get(`/api/admin/visitor-analytics/sessions/${encodeURIComponent(sessionId)}`);
      setSessionDetail(res.data);
    } catch {
      setSessionDetail(null);
    } finally {
      setSessionDetailLoading(false);
    }
  };

  const closeSessionModal = () => {
    onSessionModalClose();
    setSelectedSessionId(null);
    setSessionDetail(null);
  };

  const openClearAllConfirm = () => {
    setClearMode("all");
    onClearOpen();
  };

  const openClearOldConfirm = () => {
    setClearMode("older_than_days");
    onClearOpen();
  };

  const handleExportCsv = () => {
    if (!data?.sessions?.length) {
      toast.error("No data to export.");
      return;
    }
    setIsExporting(true);
    try {
      const csv = buildSessionsCsv(data.sessions, data.period);
      const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `visitor-analytics-${data.period}d-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("CSV downloaded.");
    } catch (err) {
      console.error("Export CSV error:", err);
      toast.error("Failed to export CSV.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleConfirmClear = async () => {
    if (!clearMode) return;
    setIsClearing(true);
    try {
      if (clearMode === "all") {
        await apiClient.post("/api/admin/visitor-analytics/clear", { scope: "all" });
        toast.success("All visitor analytics have been cleared.");
      } else {
        const days = RETENTION_OPTIONS.includes(retentionDays) ? retentionDays : Math.max(1, Math.min(3650, retentionDays));
        await apiClient.post("/api/admin/visitor-analytics/clear", {
          scope: "older_than_days",
          days,
        });
        toast.success(`Visitor analytics older than ${days} days have been cleared.`);
      }
      onClearClose();
      setClearMode(null);
      fetchData();
    } catch (err: any) {
      console.error("Error clearing visitor analytics:", err);
      toast.error(
        err?.response?.data?.error || "Failed to clear visitor analytics. Please try again.",
      );
    } finally {
      setIsClearing(false);
    }
  };

  const handleCancelClear = () => {
    onClearClose();
    setClearMode(null);
  };

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
        description="Traffic sources, geography, and per-session analytics"
        pageType="about"
      />

      <Box>
        <HStack justify="space-between" align="flex-start" mb={6} flexWrap="wrap" gap={3}>
          <Box>
            <Heading size="xl">Visitor Analytics</Heading>
            <Text mt={1} fontSize="sm" color={textColor}>
              Traffic sources (Google, social, direct), geography, and per-user session tracking with time on page.
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

        <Tabs colorScheme="teal" variant="enclosed" mb={6}>
          <TabList
            flexWrap="wrap"
            borderBottom="2px solid"
            borderColor={borderColor}
            bg={useColorModeValue("gray.50", "gray.800")}
            borderRadius="md"
            p={1}
          >
            <Tab fontWeight="semibold">Overview</Tab>
            <Tab fontWeight="semibold">Visitors</Tab>
            <Tab fontWeight="semibold">Traffic sources</Tab>
            <Tab fontWeight="semibold">Geography</Tab>
            <Tab fontWeight="semibold">Sessions</Tab>
            <Tab fontWeight="semibold">Settings</Tab>
          </TabList>

          <TabPanels pt={4}>
            {/* Overview */}
            <TabPanel px={0}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4} mb={6}>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>Sessions</StatLabel>
                  <StatNumber fontSize="2xl">{data.summary.uniqueSessions}</StatNumber>
                  <StatHelpText>Unique visitors (last {data.period} days)</StatHelpText>
                </Stat>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>Total events</StatLabel>
                  <StatNumber fontSize="2xl">{data.summary.totalEvents}</StatNumber>
                  <StatHelpText>Page views, clicks, session end</StatHelpText>
                </Stat>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>Avg session duration</StatLabel>
                  <StatNumber fontSize="2xl" color="teal.500">{formatDuration(data.summary.avgSessionDurationSec)}</StatNumber>
                  <StatHelpText>Time on site per session</StatHelpText>
                </Stat>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>Top country</StatLabel>
                  <StatNumber fontSize="lg">
                    {data.byCountry[0]?.country ?? "—"}
                  </StatNumber>
                  <StatHelpText>{data.byCountry[0] ? `${data.byCountry[0].count} events` : "No data"}</StatHelpText>
                </Stat>
              </SimpleGrid>

              {data.eventsByDay && data.eventsByDay.length > 0 && (
                <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor} mb={6}>
                  <Heading size="sm" mb={4}>Events over time</Heading>
                  <Box height="240px">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data.eventsByDay} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} tickFormatter={(v) => v.slice(5)} />
                        <YAxis allowDecimals={false} tick={{ fontSize: 10 }} />
                        <RechartsTooltip labelFormatter={(v) => v} />
                        <Line type="monotone" dataKey="count" stroke="#0D9488" strokeWidth={2} dot={{ r: 2 }} name="Events" />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>
              )}

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                  <Heading size="sm" mb={3}>Traffic by source</Heading>
                  {data.byPlatform.length > 0 ? (
                    <Box height="220px">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={data.byPlatform}
                            dataKey="count"
                            nameKey="platform"
                            cx="50%"
                            cy="50%"
                            outerRadius={70}
                            label={({ platform, count }) => `${platform} (${count})`}
                          >
                            {data.byPlatform.map((_, i) => (
                              <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                            ))}
                          </Pie>
                          <RechartsTooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  ) : (
                    <Text color={textColor} fontSize="sm">No traffic data yet.</Text>
                  )}
                </Box>
                <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                  <Heading size="sm" mb={3}>Top countries</Heading>
                  {data.byCountry.length > 0 ? (
                    <Table size="sm">
                      <Thead>
                        <Tr><Th color={tableHeadingColor}>Country</Th><Th color={tableHeadingColor} isNumeric>Events</Th></Tr>
                      </Thead>
                      <Tbody>
                        {data.byCountry.slice(0, 8).map(({ country, count }) => (
                          <Tr key={country}><Td>{country}</Td><Td isNumeric>{count}</Td></Tr>
                        ))}
                      </Tbody>
                    </Table>
                  ) : (
                    <Text color={textColor} fontSize="sm">No geography data yet.</Text>
                  )}
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
                <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                  <Heading size="sm" mb={3}>Top pages</Heading>
                  {data.topPages && data.topPages.length > 0 ? (
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th color={tableHeadingColor}>Page</Th>
                          <Th color={tableHeadingColor} isNumeric>Views</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.topPages.slice(0, 10).map(({ page_path, count }) => (
                          <Tr key={page_path}>
                            <Td fontFamily="mono" fontSize="xs" noOfLines={1} maxW="240px" title={page_path}>
                              {page_path || "/"}
                            </Td>
                            <Td isNumeric>{count}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  ) : (
                    <Text color={textColor} fontSize="sm">No page data yet.</Text>
                  )}
                </Box>
                <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                  <Heading size="sm" mb={3}>Most clicked</Heading>
                  {data.topClicks && data.topClicks.length > 0 ? (
                    <Box overflowX="auto">
                      <Table size="sm">
                        <Thead>
                          <Tr>
                            <Th color={tableHeadingColor}>Link / button</Th>
                            <Th color={tableHeadingColor} isNumeric>Clicks</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {data.topClicks.slice(0, 10).map(({ label, count }, i) => (
                            <Tr key={i}>
                              <Td
                                fontSize="xs"
                                maxW="280px"
                                whiteSpace="normal"
                                wordBreak="break-word"
                                title={label}
                              >
                                {label && label.length > 60 ? `${label.slice(0, 60)}…` : label || "—"}
                              </Td>
                              <Td isNumeric>{count}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </Box>
                  ) : (
                    <Text color={textColor} fontSize="sm">No click data yet.</Text>
                  )}
                </Box>
              </SimpleGrid>
            </TabPanel>

            {/* Visitors: all visitors with name, email, phone, location, source, activity */}
            <TabPanel px={0}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4} mb={6}>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>Bounce rate</StatLabel>
                  <StatNumber fontSize="2xl">
                    {typeof data.summary.bounceRate === "number" ? `${data.summary.bounceRate}%` : "—"}
                  </StatNumber>
                  <StatHelpText>≤1 page, no clicks, ≤10s</StatHelpText>
                </Stat>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>Conversion rate</StatLabel>
                  <StatNumber fontSize="2xl" color="teal.500">
                    {typeof data.summary.conversionRate === "number" ? `${data.summary.conversionRate}%` : "—"}
                  </StatNumber>
                  <StatHelpText>Reached contact or submitted form</StatHelpText>
                </Stat>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>New visitors</StatLabel>
                  <StatNumber fontSize="2xl">
                    {typeof data.summary.newVisitors === "number" ? data.summary.newVisitors : "—"}
                  </StatNumber>
                  <StatHelpText>1 session in period</StatHelpText>
                </Stat>
                <Stat bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} boxShadow="sm">
                  <StatLabel textTransform="uppercase" fontSize="xs" color={textColor}>Returning visitors</StatLabel>
                  <StatNumber fontSize="2xl">
                    {typeof data.summary.returningVisitors === "number" ? data.summary.returningVisitors : "—"}
                  </StatNumber>
                  <StatHelpText>2+ sessions in period</StatHelpText>
                </Stat>
              </SimpleGrid>

              <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor} mb={6}>
                <Heading size="md" mb={2}>All visitors</Heading>
                <Text fontSize="sm" color={textColor} mb={4}>
                  Every visitor in the selected period. Name, email, and phone appear when they submit the contact or career form; location and source are collected automatically for all visits. Click View to see full activity (pages, clicks, time on site).
                </Text>
                {data.sessions.length > 0 ? (
                  <Box overflowX="auto">
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          <Th color={tableHeadingColor}>Name</Th>
                          <Th color={tableHeadingColor}>Email</Th>
                          <Th color={tableHeadingColor}>Phone</Th>
                          <Th color={tableHeadingColor}>Company</Th>
                          <Th color={tableHeadingColor}>Location</Th>
                          <Th color={tableHeadingColor}>Source</Th>
                          <Th color={tableHeadingColor}>First visit</Th>
                          <Th color={tableHeadingColor}>Last seen</Th>
                          <Th color={tableHeadingColor}>Time on site</Th>
                          <Th color={tableHeadingColor}>Events</Th>
                          <Th color={tableHeadingColor}></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.sessions.map((s) => (
                          <Tr key={s.session_id}>
                            <Td fontSize="sm">{s.user_name ?? "—"}</Td>
                            <Td fontSize="sm" noOfLines={1} maxW="180px">{s.user_email ?? "—"}</Td>
                            <Td fontSize="sm" whiteSpace="nowrap">{s.user_phone ?? "—"}</Td>
                            <Td fontSize="sm" noOfLines={1} maxW="120px">{s.user_company ?? "—"}</Td>
                            <Td fontSize="sm" whiteSpace="nowrap">
                              {[s.country, s.city].filter(Boolean).join(", ") || "—"}
                            </Td>
                            <Td><Badge size="sm" colorScheme="teal" variant="subtle">{s.platform ?? "direct"}</Badge></Td>
                            <Td fontSize="xs" whiteSpace="nowrap">{new Date(s.first_visit_at).toLocaleString()}</Td>
                            <Td fontSize="xs" whiteSpace="nowrap">{new Date(s.last_at).toLocaleString()}</Td>
                            <Td fontSize="sm">{formatDuration(s.total_duration_sec)}</Td>
                            <Td isNumeric>{s.events_count}</Td>
                            <Td>
                              <Tooltip label="View full activity">
                                <IconButton
                                  aria-label="View visitor"
                                  size="xs"
                                  icon={<FiEye />}
                                  colorScheme="teal"
                                  variant="ghost"
                                  onClick={() => openSessionDetail(s.session_id)}
                                />
                              </Tooltip>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                ) : (
                  <Text color={textColor}>No visitors in this period.</Text>
                )}
              </Box>
            </TabPanel>

            {/* Traffic sources */}
            <TabPanel px={0}>
              <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor} mb={6}>
                <Heading size="md" mb={4}>Where visitors come from</Heading>
                <Text fontSize="sm" color={textColor} mb={4}>
                  Google search, social (LinkedIn, Facebook, etc.), direct URL, or other sources.
                </Text>
                {data.byPlatform.length > 0 ? (
                  <>
                    <Box height="280px" mb={4}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data.byPlatform} layout="vertical" margin={{ left: 60 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis type="category" dataKey="platform" width={80} tick={{ fontSize: 12 }} />
                          <RechartsTooltip />
                          <Bar dataKey="count" fill="#0D9488" name="Events" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          <Th color={tableHeadingColor}>Source / platform</Th>
                          <Th color={tableHeadingColor} isNumeric>Events</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.byPlatform.map(({ platform, count }) => (
                          <Tr key={platform}>
                            <Td><Badge colorScheme="teal" variant="subtle" borderRadius="md" px={2}>{platform}</Badge></Td>
                            <Td isNumeric>{count}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </>
                ) : (
                  <Text color={textColor}>No traffic source data in this period.</Text>
                )}
              </Box>
            </TabPanel>

            {/* Geography */}
            <TabPanel px={0}>
              <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor} mb={6}>
                <Heading size="md" mb={2}>Sessions by country (map)</Heading>
                <Text fontSize="sm" color={textColor} mb={4}>
                  Heatmap by unique sessions. Hover for country name and session count.
                </Text>
                {data.byCountry.length > 0 ? (
                  <Box overflowX="auto" width="100%">
                    <CountrySessionsMap
                      countrySessions={data.byCountry.map(({ country, sessions }) => ({ country, sessions }))}
                      width={640}
                      height={320}
                    />
                  </Box>
                ) : (
                  <Text color={textColor} fontSize="sm">No country data yet.</Text>
                )}
              </Box>

              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
                <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                  <Heading size="md" mb={4}>By country</Heading>
                  <Text fontSize="xs" color={textColor} mb={2}>Unique sessions and event counts.</Text>
                  {data.byCountry.length > 0 ? (
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          <Th color={tableHeadingColor}>Country</Th>
                          <Th color={tableHeadingColor} isNumeric>Sessions</Th>
                          <Th color={tableHeadingColor} isNumeric>Events</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.byCountry.map(({ country, count, sessions }) => (
                          <Tr key={country}>
                            <Td>{country}</Td>
                            <Td isNumeric>{sessions}</Td>
                            <Td isNumeric>{count}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  ) : (
                    <Text color={textColor}>No country data yet.</Text>
                  )}
                </Box>
                <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                  <Heading size="md" mb={4}>By city</Heading>
                  <Text fontSize="xs" color={textColor} mb={2}>Unique sessions and event counts.</Text>
                  {data.byCity.length > 0 ? (
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          <Th color={tableHeadingColor}>City</Th>
                          <Th color={tableHeadingColor} isNumeric>Sessions</Th>
                          <Th color={tableHeadingColor} isNumeric>Events</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.byCity.map(({ city, count, sessions }) => (
                          <Tr key={city}>
                            <Td>{city}</Td>
                            <Td isNumeric>{sessions}</Td>
                            <Td isNumeric>{count}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  ) : (
                    <Text color={textColor}>No city data yet.</Text>
                  )}
                </Box>
              </SimpleGrid>
            </TabPanel>

            {/* Sessions (per-user) */}
            <TabPanel px={0}>
              <Box bg={cardBg} p={6} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                <Heading size="md" mb={2}>Sessions (per visitor)</Heading>
                <Text fontSize="sm" color={textColor} mb={4}>
                  Shows name, email, or phone when the visitor submitted the contact form; otherwise Session ID. Click View for full timeline.
                </Text>
                {data.sessions.length > 0 ? (
                  <Box overflowX="auto">
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          <Th color={tableHeadingColor}>User / Session</Th>
                          <Th color={tableHeadingColor}>Source</Th>
                          <Th color={tableHeadingColor}>Country</Th>
                          <Th color={tableHeadingColor}>City</Th>
                          <Th color={tableHeadingColor}>First page</Th>
                          <Th color={tableHeadingColor}>Arrived</Th>
                          <Th color={tableHeadingColor}>Left</Th>
                          <Th color={tableHeadingColor}>Duration</Th>
                          <Th color={tableHeadingColor}>Quality</Th>
                          <Th color={tableHeadingColor}></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.sessions.map((s) => (
                          <Tr key={s.session_id}>
                            <Td>
                              <VStack align="flex-start" spacing={0}>
                                <Text fontWeight={s.user_name || s.user_email || s.user_phone ? "medium" : "normal"} fontSize="sm" noOfLines={1} title={s.session_id}>
                                  {sessionDisplayLabel(s)}
                                </Text>
                                {(s.user_name || s.user_email || s.user_phone) && (
                                  <Text fontFamily="mono" fontSize="xs" color={textColor}>{shortSessionId(s.session_id)}</Text>
                                )}
                              </VStack>
                            </Td>
                            <Td><Badge size="sm" colorScheme="teal" variant="subtle">{s.platform ?? "direct"}</Badge></Td>
                            <Td>{s.country ?? "—"}</Td>
                            <Td>{s.city ?? "—"}</Td>
                            <Td fontSize="xs" noOfLines={1} maxW="120px">{s.first_landing_page || "/"}</Td>
                            <Td fontSize="xs" whiteSpace="nowrap">{new Date(s.first_visit_at).toLocaleString()}</Td>
                            <Td fontSize="xs" whiteSpace="nowrap">{new Date(s.last_at).toLocaleString()}</Td>
                            <Td fontSize="xs">{formatDuration(s.total_duration_sec)}</Td>
                            <Td>
                              <HStack spacing={1} flexWrap="wrap">
                                {getSessionQualityBadges(s).map((b) => (
                                  <Badge key={b.label} colorScheme={b.color} fontSize="0.65rem">
                                    {b.label}
                                  </Badge>
                                ))}
                              </HStack>
                            </Td>
                            <Td>
                              <Tooltip label="View session detail">
                                <IconButton
                                  aria-label="View session"
                                  size="xs"
                                  icon={<FiEye />}
                                  colorScheme="teal"
                                  variant="ghost"
                                  onClick={() => openSessionDetail(s.session_id)}
                                />
                              </Tooltip>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                ) : (
                  <Text color={textColor}>No sessions in this period.</Text>
                )}
              </Box>
            </TabPanel>

            {/* Settings */}
            <TabPanel px={0}>
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  boxShadow="sm"
                >
                  <Heading size="md" mb={2}>
                    Analytics settings
                  </Heading>
                  <Text fontSize="sm" color={textColor} mb={4}>
                    These controls apply only to visitor analytics data stored in Supabase
                    (<code>visitor_events</code> table). Clearing data will not affect other
                    parts of the admin (jobs, applications, blog, etc.).
                  </Text>
                  <VStack align="flex-start" spacing={2} fontSize="sm">
                    <Text color={textColor}>
                      • Events are stored with full detail (source, location, events, timeline)
                      so you can understand who visited and what they did.
                    </Text>
                    <Text color={textColor}>
                      • Export a CSV of the current period before clearing, then use the
                      danger zone to clear by retention or clear all.
                    </Text>
                  </VStack>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    variant="outline"
                    mt={4}
                    isLoading={isExporting}
                    loadingText="Exporting…"
                    onClick={handleExportCsv}
                    isDisabled={!data?.sessions?.length}
                  >
                    Export CSV (current period)
                  </Button>
                  {data?.sessions?.length != null && data.sessions.length > 0 && (
                    <Text fontSize="xs" color={textColor}>
                      Downloads {data.sessions.length} session(s) for the last {data.period} days.
                    </Text>
                  )}
                </Box>

                <Box
                  bg={useColorModeValue("white", "red.900")}
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={useColorModeValue("red.200", "red.700")}
                  boxShadow="sm"
                >
                  <Heading size="md" mb={2} color={useColorModeValue("red.700", "red.100")}>
                    Danger zone
                  </Heading>
                  <Text fontSize="sm" color={textColor} mb={4}>
                    Clearing analytics is permanent and cannot be undone. Consider exporting
                    data or narrowing to a shorter time range before deleting.
                  </Text>
                  <VStack align="flex-start" spacing={4}>
                    <Box>
                      <Heading size="sm" mb={1}>
                        Clear analytics older than X days
                      </Heading>
                      <Text fontSize="sm" color={textColor} mb={2}>
                        Remove historical events older than the selected number of days
                        while keeping recent visitor data.
                      </Text>
                      <HStack spacing={3} flexWrap="wrap">
                        <Select
                          value={String(retentionDays)}
                          onChange={(e) => setRetentionDays(Number(e.target.value))}
                          maxW="120px"
                          size="sm"
                          bg={cardBg}
                        >
                          {RETENTION_OPTIONS.map((d) => (
                            <option key={d} value={d}>
                              {d} days
                            </option>
                          ))}
                        </Select>
                        <Button
                          size="sm"
                          variant="outline"
                          colorScheme="red"
                          onClick={openClearOldConfirm}
                        >
                          Clear analytics &gt; {retentionDays} days old
                        </Button>
                      </HStack>
                    </Box>

                    <Divider />

                    <Box>
                      <Heading size="sm" mb={1}>
                        Clear all visitor analytics
                      </Heading>
                      <Text fontSize="sm" color={textColor} mb={2}>
                        Delete all records in <code>visitor_events</code> for this project.
                        This will reset the Visitors, Overview, Traffic, and Sessions tabs.
                      </Text>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={openClearAllConfirm}
                      >
                        Clear all visitor analytics
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Session detail modal */}
        <Modal isOpen={isSessionModalOpen} onClose={closeSessionModal} size="xl" scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent bg={cardBg} maxH="90vh">
            <ModalHeader>Session detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {sessionDetailLoading ? (
                <HStack justify="center" py={8}><Spinner color="teal.500" /><Text>Loading session…</Text></HStack>
              ) : sessionDetail ? (
                <VStack align="stretch" spacing={4}>
                  {(sessionDetail.user_name || sessionDetail.user_email || sessionDetail.user_phone) && (
                    <Box pb={2} borderBottom="1px solid" borderColor={borderColor}>
                      <Heading size="xs" mb={2} textTransform="uppercase" color={textColor}>Identified user</Heading>
                      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2} fontSize="sm">
                        {sessionDetail.user_name && <><Text color={textColor}>Name</Text><Text fontWeight="medium">{sessionDetail.user_name}</Text></>}
                        {sessionDetail.user_email && <><Text color={textColor}>Email</Text><Text fontWeight="medium">{sessionDetail.user_email}</Text></>}
                        {sessionDetail.user_phone && <><Text color={textColor}>Phone</Text><Text fontWeight="medium">{sessionDetail.user_phone}</Text></>}
                        {sessionDetail.user_company && <><Text color={textColor}>Company</Text><Text fontWeight="medium">{sessionDetail.user_company}</Text></>}
                      </SimpleGrid>
                    </Box>
                  )}
                  <HStack flexWrap="wrap" gap={4} fontSize="sm">
                    <Badge colorScheme="teal">Source: {sessionDetail.platform ?? "direct"}</Badge>
                    {sessionDetail.country && <Text color={textColor}>Country: {sessionDetail.country}</Text>}
                    {sessionDetail.city && <Text color={textColor}>City: {sessionDetail.city}</Text>}
                    {sessionDetail.referrer && (
                      <Text color={textColor} noOfLines={1} maxW="200px" title={sessionDetail.referrer}>
                        Referrer: {sessionDetail.referrer}
                      </Text>
                    )}
                  </HStack>
                  <SimpleGrid columns={2} spacing={2} fontSize="sm">
                    <Text color={textColor}>First page:</Text>
                    <Text fontFamily="mono">{sessionDetail.first_landing_page}</Text>
                    <Text color={textColor}>Arrived:</Text>
                    <Text>{new Date(sessionDetail.first_visit_at).toLocaleString()}</Text>
                    <Text color={textColor}>Left:</Text>
                    <Text>{new Date(sessionDetail.last_at).toLocaleString()}</Text>
                    <Text color={textColor}>Total time on site:</Text>
                <Text fontWeight="semibold">{formatDuration(sessionDetail.total_duration_sec)}</Text>
                <Text color={textColor}>Pages visited:</Text>
                <Text>{sessionDetail.page_durations?.length || "—"}</Text>
                <Text color={textColor}>Total link clicks:</Text>
                <Text>
                  {sessionDetail.events.filter((e) => e.event_type === "link_click").length}
                </Text>
                  </SimpleGrid>
              {/* Simple funnel: Home → Services → Contact */}
              <Box mt={4}>
                <Heading size="xs" mb={1} textTransform="uppercase" color={textColor}>
                  Funnel: Home → Services → Contact
                </Heading>
                {(() => {
                  const f = getFunnelStatus(sessionDetail.events);
                  const steps: { key: keyof typeof f; label: string }[] = [
                    { key: "home", label: "Home" },
                    { key: "services", label: "Services" },
                    { key: "contact", label: "Contact" },
                  ];
                  return (
                    <HStack spacing={3} fontSize="xs" mt={1} flexWrap="wrap">
                      {steps.map((step, index) => (
                        <HStack key={step.key} spacing={1}>
                          <Badge
                            variant={f[step.key] ? "solid" : "subtle"}
                            colorScheme={f[step.key] ? "green" : "gray"}
                            fontSize="0.7rem"
                          >
                            {f[step.key] ? "✓" : "○"} {step.label}
                          </Badge>
                          {index < steps.length - 1 && (
                            <Text color={textColor} mx={1}>
                              →
                            </Text>
                          )}
                        </HStack>
                      ))}
                    </HStack>
                  );
                })()}
              </Box>
                  {sessionDetail.page_durations && sessionDetail.page_durations.length > 0 && (
                    <>
                      <Divider />
                      <Heading size="sm">Time per page</Heading>
                      <Table size="sm">
                        <Thead>
                          <Tr><Th color={tableHeadingColor}>Page</Th><Th color={tableHeadingColor} isNumeric>Time</Th></Tr>
                        </Thead>
                        <Tbody>
                          {sessionDetail.page_durations.map((pd, i) => (
                            <Tr key={i}>
                              <Td fontFamily="mono" fontSize="xs">{pd.page_path}</Td>
                              <Td isNumeric>{formatDuration(pd.duration_sec)}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </>
                  )}
                  <Divider />
                  <Heading size="sm" mb={2}>
                    Event timeline (grouped by page)
                  </Heading>
                  <Accordion allowMultiple defaultIndex={[0]}>
                    {Array.from(
                      sessionDetail.events.reduce((acc, e) => {
                        const key = e.page_path || "(no page)";
                        if (!acc.has(key)) acc.set(key, []);
                        acc.get(key)!.push(e);
                        return acc;
                      }, new Map<string, SessionDetail["events"][number][]>())
                    ).map(([pagePath, events]) => {
                      const durationForPage =
                        sessionDetail.page_durations?.find((pd) => pd.page_path === pagePath)
                          ?.duration_sec ?? null;

                      return (
                        <AccordionItem key={pagePath}>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left" fontSize="sm">
                                {pagePath}{" "}
                                {durationForPage != null && (
                                  <Text as="span" fontSize="xs" color={textColor}>
                                    · {formatDuration(durationForPage)}
                                  </Text>
                                )}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel px={0} pt={2}>
                            <Box overflowX="auto" maxH="260px" overflowY="auto">
                              <Table size="sm">
                                <Thead>
                                  <Tr>
                                    <Th color={tableHeadingColor}>Time</Th>
                                    <Th color={tableHeadingColor}>Event</Th>
                                    <Th color={tableHeadingColor}>Detail</Th>
                                  </Tr>
                                </Thead>
                                <Tbody>
                                  {events.map((e) => (
                                    <Tr key={e.id}>
                                      <Td fontSize="xs" whiteSpace="nowrap">
                                        {new Date(e.created_at).toLocaleTimeString()}
                                      </Td>
                                      <Td>
                                        <Badge size="sm" colorScheme="blue">
                                          {e.event_type}
                                        </Badge>
                                      </Td>
                                      <Td
                                        fontSize="xs"
                                        maxW="260px"
                                        whiteSpace="normal"
                                        wordBreak="break-word"
                                      >
                                        {formatEventDetail(e)}
                                      </Td>
                                    </Tr>
                                  ))}
                                </Tbody>
                              </Table>
                            </Box>
                          </AccordionPanel>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </VStack>
              ) : selectedSessionId && !sessionDetailLoading ? (
                <Text color={textColor}>Could not load session.</Text>
              ) : null}
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Clear analytics confirmation */}
        <AlertDialog
          isOpen={isClearOpen}
          leastDestructiveRef={cancelClearRef}
          onClose={handleCancelClear}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {clearMode === "all"
                  ? "Clear all visitor analytics"
                  : `Clear analytics older than ${retentionDays} days`}
              </AlertDialogHeader>

              <AlertDialogBody>
                {clearMode === "all" ? (
                  <>
                    This will permanently delete <strong>all</strong> visitor analytics
                    records from the database. This includes all visitors, events,
                    timelines, and history.
                  </>
                ) : (
                  <>
                    This will permanently delete visitor analytics records older than{" "}
                    <strong>{retentionDays} days</strong>. Recent data (last {retentionDays}{" "}
                    days) will be kept.
                  </>
                )}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelClearRef} onClick={handleCancelClear}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={handleConfirmClear}
                  ml={3}
                  isLoading={isClearing}
                >
                  Confirm
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </AdminLayout>
  );
};

export default AdminVisitorAnalyticsPage;
