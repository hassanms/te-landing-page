import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Spinner,
  Alert,
  AlertIcon,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  SimpleGrid,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import apiClient from "lib/api-client";
import toast from "react-hot-toast";
import { AdminLayout } from "components/admin/layout/admin-layout";
import { 
  FiDownload, 
  FiEye, 
  FiUser, 
  FiBriefcase, 
  FiMapPin, 
  FiLink, 
  FiFileText,
  FiMail,
  FiPhone,
  FiCalendar,
  FiDollarSign,
  FiClock,
  FiAward,
  FiGlobe
} from "react-icons/fi";
import { EnhancedSEO } from "components/seo/enhanced-seo";

interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter: string | null;
  countryCode?: string | null;
  yearOfGraduation?: string | null;
  gender?: string | null;
  experienceYears?: string | null;
  currentEmployer?: string | null;
  currentCTC?: string | null;
  expectedCTC?: string | null;
  noticePeriod?: string | null;
  skills?: string | null;
  source?: string | null;
  currentLocation?: string | null;
  preferredLocation?: string | null;
  linkedin?: string | null;
  portfolio?: string | null;
  status?: string;
  adminNotes?: string | null;
  statusUpdatedAt?: string | null;
  updatedBy?: string | null;
  createdAt: string;
  job: {
    id: string;
    title: string;
    slug: string;
    department: string;
  } | null;
}

const AdminApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/api/admin/applications");
      setApplications(response.data.applications || []);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching applications:", err);
      setError("Failed to load applications. Please check your admin secret.");
    } finally {
      setLoading(false);
    }
  };

  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [editingStatus, setEditingStatus] = useState<string>("");
  const [editingNotes, setEditingNotes] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
    setEditingStatus(application.status || "pending");
    setEditingNotes(application.adminNotes || "");
    onOpen();
  };

  const handleStatusUpdate = async () => {
    if (!selectedApplication) return;

    try {
      await apiClient.put(
        `/api/admin/applications/${selectedApplication.id}/status`,
        {
          status: editingStatus,
          adminNotes: editingNotes,
          updatedBy: "Admin",
        }
      );

      toast.success("Application status updated successfully");
      fetchApplications();
      setSelectedApplication({
        ...selectedApplication,
        status: editingStatus,
        adminNotes: editingNotes,
      });
    } catch (err: any) {
      console.error("Error updating status:", err);
      toast.error(err?.response?.data?.error || "Failed to update status");
    }
  };

  const getStatusColor = (status: string) => {
    const statusColors: Record<string, string> = {
      pending: "gray",
      reviewing: "blue",
      shortlisted: "purple",
      interviewed: "orange",
      offered: "green",
      rejected: "red",
      withdrawn: "yellow",
    };
    return statusColors[status] || "gray";
  };

  const filteredApplications = statusFilter === "all"
    ? applications
    : applications.filter((app) => (app.status || "pending") === statusFilter);

  const handleDownloadResume = async (applicationId: string, resumeUrl: string, fileName: string) => {
    try {
      // Get signed URL from API
      const response = await apiClient.get(`/api/admin/applications/${applicationId}/resume`);

      if (response.data?.downloadUrl) {
        window.open(response.data.downloadUrl, "_blank");
      } else {
        // Fallback: try direct URL if it's already a full URL
        if (resumeUrl.startsWith("http")) {
          window.open(resumeUrl, "_blank");
        } else {
          alert("Failed to generate download link. Please try again.");
        }
      }
    } catch (error: any) {
      console.error("Error downloading resume:", error);
      // Fallback: try direct URL
      if (resumeUrl.startsWith("http")) {
        window.open(resumeUrl, "_blank");
      } else {
        alert("Failed to download resume. Please try again.");
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const statusSummary = applications.reduce<Record<string, number>>(
    (acc, app) => {
      const key = app.status || "pending";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    },
    {},
  );

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  const totalFiltered = filteredApplications.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedApplications = filteredApplications.slice(startIndex, endIndex);

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Admin - Applications - Tech Emulsion"
        description="View and manage job applications"
        pageType="about"
      />

      <Box>
        <VStack align="stretch" spacing={6}>
          <HStack justify="space-between" align="flex-start" mb={4}>
            <Box>
              <Heading size="xl">Job Applications</Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                Review candidates, update statuses, and keep notes.
              </Text>
            </Box>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              maxW="220px"
              bg={useColorModeValue("white", "gray.700")}
              size="sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewing">Reviewing</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="interviewed">Interviewed</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
              <option value="withdrawn">Withdrawn</option>
            </Select>
          </HStack>

          <HStack
            spacing={3}
            flexWrap="wrap"
            align="center"
            fontSize="xs"
            color={textColor}
          >
            <Text>
              Total: <strong>{applications.length}</strong>
            </Text>
            {Object.entries(statusSummary).map(([status, count]) => (
              <Badge
                key={status}
                colorScheme={getStatusColor(status)}
                borderRadius="full"
                px={3}
                py={1}
                textTransform="capitalize"
              >
                {status} • {count}
              </Badge>
            ))}
            <HStack spacing={2} ml="auto">
              <Text>Rows per page:</Text>
              <Select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                size="xs"
                w="auto"
                bg={useColorModeValue("white", "gray.700")}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </Select>
            </HStack>
          </HStack>

          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}

          {loading ? (
            <Box textAlign="center" py={10}>
              <Spinner size="xl" />
              <Text mt={4}>Loading applications...</Text>
            </Box>
          ) : applications.length === 0 ? (
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" color={textColor}>
                No applications found.
              </Text>
            </Box>
          ) : (
            <Box
              bg={bgColor}
              borderRadius="lg"
              border="1px solid"
              borderColor={borderColor}
              overflow="hidden"
              overflowX="auto"
            >
              <Table variant="striped" colorScheme="blackAlpha" size="sm">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Phone</Th>
                    <Th>Job</Th>
                    <Th>Status</Th>
                    <Th>Applied</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paginatedApplications.map((app) => (
                    <Tr key={app.id}>
                      <Td>
                        {app.firstName} {app.lastName}
                      </Td>
                      <Td>{app.email}</Td>
                      <Td>{app.phone}</Td>
                      <Td>
                        {app.job ? (
                          <Badge colorScheme="teal">{app.job.title}</Badge>
                        ) : (
                          <Text color={textColor} fontSize="sm">
                            N/A
                          </Text>
                        )}
                      </Td>
                      <Td>
                        <Badge
                          colorScheme={getStatusColor(app.status || "pending")}
                          textTransform="capitalize"
                        >
                          {app.status || "pending"}
                        </Badge>
                      </Td>
                      <Td>
                        <Text fontSize="sm" color={textColor}>
                          {formatDate(app.createdAt)}
                        </Text>
                      </Td>
                      <Td>
                        <HStack spacing={2}>
                          <Button
                            size="sm"
                            leftIcon={<FiEye />}
                            onClick={() => handleViewDetails(app)}
                          >
                            View
                          </Button>
                          <Button
                            size="sm"
                            leftIcon={<FiDownload />}
                            onClick={() =>
                              handleDownloadResume(
                                app.id,
                                app.resumeUrl,
                                `${app.firstName}-${app.lastName}-resume.pdf`,
                              )
                            }
                          >
                            Resume
                          </Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </VStack>

        {!loading && filteredApplications.length > 0 && (
          <HStack
            mt={4}
            justify="space-between"
            align="center"
            fontSize="xs"
            color={textColor}
            flexWrap="wrap"
          >
            <Text>
              Showing{" "}
              <strong>
                {startIndex + 1}-
                {Math.min(endIndex, totalFiltered)}
              </strong>{" "}
              of <strong>{totalFiltered}</strong> filtered applications (
              {applications.length} total)
            </Text>
            <HStack spacing={2}>
              <Button
                size="xs"
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                isDisabled={safePage <= 1}
              >
                Previous
              </Button>
              <Text>
                Page <strong>{safePage}</strong> of{" "}
                <strong>{totalPages}</strong>
              </Text>
              <Button
                size="xs"
                variant="outline"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                isDisabled={safePage >= totalPages}
              >
                Next
              </Button>
            </HStack>
          </HStack>
        )}

      {/* Application Detail Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent maxH="90vh">
          <ModalHeader pb={3}>
            <HStack spacing={3}>
              <Icon as={FiUser} boxSize={6} color="teal.500" />
              <Box>
                <Heading size="md">
                  {selectedApplication?.firstName} {selectedApplication?.lastName}
                </Heading>
                <Text fontSize="sm" color={textColor} fontWeight="normal" mt={1}>
                  Application Details
                </Text>
              </Box>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedApplication && (
              <VStack align="stretch" spacing={6}>
                {/* Header Section with Status Badge */}
                <HStack justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={1}>
                    <HStack spacing={2}>
                      <Badge
                        colorScheme={getStatusColor(selectedApplication.status || "pending")}
                        fontSize="sm"
                        px={3}
                        py={1}
                        textTransform="capitalize"
                      >
                        {selectedApplication.status || "pending"}
                      </Badge>
                      {selectedApplication.job && (
                        <Badge colorScheme="teal" fontSize="sm" px={3} py={1}>
                          {selectedApplication.job.department}
                        </Badge>
                      )}
                    </HStack>
                    <Text fontSize="xs" color={textColor}>
                      Applied on {formatDate(selectedApplication.createdAt)}
                    </Text>
                  </VStack>
                  <Button
                    size="sm"
                    leftIcon={<FiDownload />}
                    colorScheme="teal"
                    variant="outline"
                    onClick={() =>
                      handleDownloadResume(
                        selectedApplication.id,
                        selectedApplication.resumeUrl,
                        `${selectedApplication.firstName}-${selectedApplication.lastName}-resume.pdf`,
                      )
                    }
                  >
                    Download Resume
                  </Button>
                </HStack>

                <Divider />

                {/* Personal Information Section */}
                <Box>
                  <HStack spacing={2} mb={4}>
                    <Icon as={FiUser} boxSize={5} color="teal.500" />
                    <Heading size="sm">Personal Information</Heading>
                  </HStack>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Box
                      p={4}
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderRadius="md"
                    >
                      <HStack spacing={2} mb={1}>
                        <Icon as={FiUser} boxSize={4} color={textColor} />
                        <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                          Full Name
                        </Text>
                      </HStack>
                      <Text fontWeight="semibold">
                        {selectedApplication.firstName} {selectedApplication.lastName}
                      </Text>
                    </Box>
                    <Box
                      p={4}
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderRadius="md"
                    >
                      <HStack spacing={2} mb={1}>
                        <Icon as={FiMail} boxSize={4} color={textColor} />
                        <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                          Email
                        </Text>
                      </HStack>
                      <Text fontWeight="semibold" isTruncated>
                        {selectedApplication.email}
                      </Text>
                    </Box>
                    <Box
                      p={4}
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderRadius="md"
                    >
                      <HStack spacing={2} mb={1}>
                        <Icon as={FiPhone} boxSize={4} color={textColor} />
                        <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                          Phone
                        </Text>
                      </HStack>
                      <Text fontWeight="semibold">
                        {selectedApplication.countryCode
                          ? `${selectedApplication.countryCode} ${selectedApplication.phone}`
                          : selectedApplication.phone}
                      </Text>
                    </Box>
                    {selectedApplication.yearOfGraduation && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiCalendar} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Year of Graduation
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.yearOfGraduation}
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.gender && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiUser} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Gender
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">{selectedApplication.gender}</Text>
                      </Box>
                    )}
                  </SimpleGrid>
                </Box>

                <Divider />

                {/* Professional Information Section */}
                <Box>
                  <HStack spacing={2} mb={4}>
                    <Icon as={FiBriefcase} boxSize={5} color="teal.500" />
                    <Heading size="sm">Professional Information</Heading>
                  </HStack>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {selectedApplication.experienceYears && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiAward} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Experience
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.experienceYears} years
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.currentEmployer && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiBriefcase} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Current Employer
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.currentEmployer}
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.currentCTC && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiDollarSign} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Current Salary
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.currentCTC}
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.expectedCTC && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiDollarSign} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Expected Salary
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.expectedCTC}
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.noticePeriod && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiClock} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Notice Period
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.noticePeriod}
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.skills && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                        gridColumn={{ base: "1", md: "1 / -1" }}
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiAward} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Skills
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold" whiteSpace="pre-wrap">
                          {selectedApplication.skills}
                        </Text>
                      </Box>
                    )}
                  </SimpleGrid>
                </Box>

                <Divider />

                {/* Location & Source Section */}
                <Box>
                  <HStack spacing={2} mb={4}>
                    <Icon as={FiMapPin} boxSize={5} color="teal.500" />
                    <Heading size="sm">Location & Source</Heading>
                  </HStack>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {selectedApplication.currentLocation && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiMapPin} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Current Location
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.currentLocation}
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.preferredLocation && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiGlobe} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Preferred Location
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">
                          {selectedApplication.preferredLocation}
                        </Text>
                      </Box>
                    )}
                    {selectedApplication.source && (
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                      >
                        <HStack spacing={2} mb={1}>
                          <Icon as={FiGlobe} boxSize={4} color={textColor} />
                          <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                            Application Source
                          </Text>
                        </HStack>
                        <Text fontWeight="semibold">{selectedApplication.source}</Text>
                      </Box>
                    )}
                  </SimpleGrid>
                </Box>

                {/* Links & Portfolio Section */}
                {(selectedApplication.linkedin || selectedApplication.portfolio) && (
                  <>
                    <Divider />
                    <Box>
                      <HStack spacing={2} mb={4}>
                        <Icon as={FiLink} boxSize={5} color="teal.500" />
                        <Heading size="sm">Links & Portfolio</Heading>
                      </HStack>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        {selectedApplication.linkedin && (
                          <Box
                            p={4}
                            bg={useColorModeValue("gray.50", "gray.700")}
                            borderRadius="md"
                          >
                            <HStack spacing={2} mb={2}>
                              <Icon as={FiLink} boxSize={4} color={textColor} />
                              <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                                LinkedIn
                              </Text>
                            </HStack>
                            <Link
                              href={selectedApplication.linkedin}
                              isExternal
                              color="teal.500"
                              fontWeight="semibold"
                              wordBreak="break-all"
                            >
                              {selectedApplication.linkedin}
                            </Link>
                          </Box>
                        )}
                        {selectedApplication.portfolio && (
                          <Box
                            p={4}
                            bg={useColorModeValue("gray.50", "gray.700")}
                            borderRadius="md"
                          >
                            <HStack spacing={2} mb={2}>
                              <Icon as={FiLink} boxSize={4} color={textColor} />
                              <Text fontSize="xs" color={textColor} textTransform="uppercase" letterSpacing="wide">
                                Portfolio/GitHub
                              </Text>
                            </HStack>
                            <Link
                              href={selectedApplication.portfolio}
                              isExternal
                              color="teal.500"
                              fontWeight="semibold"
                              wordBreak="break-all"
                            >
                              {selectedApplication.portfolio}
                            </Link>
                          </Box>
                        )}
                      </SimpleGrid>
                    </Box>
                  </>
                )}

                {/* Job Applied For Section */}
                {selectedApplication.job && (
                  <>
                    <Divider />
                    <Box>
                      <HStack spacing={2} mb={4}>
                        <Icon as={FiBriefcase} boxSize={5} color="teal.500" />
                        <Heading size="sm">Job Applied For</Heading>
                      </HStack>
                      <Box
                        p={4}
                        bg={useColorModeValue("teal.50", "teal.900")}
                        borderRadius="md"
                        borderLeft="4px solid"
                        borderColor="teal.500"
                      >
                        <Text fontSize="lg" fontWeight="bold" mb={1}>
                          {selectedApplication.job.title}
                        </Text>
                        <Text fontSize="sm" color={textColor}>
                          Department: {selectedApplication.job.department}
                        </Text>
                      </Box>
                    </Box>
                  </>
                )}

                {/* Cover Letter Section */}
                {selectedApplication.coverLetter && (
                  <>
                    <Divider />
                    <Box>
                      <HStack spacing={2} mb={4}>
                        <Icon as={FiFileText} boxSize={5} color="teal.500" />
                        <Heading size="sm">Cover Letter</Heading>
                      </HStack>
                      <Box
                        p={4}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        borderRadius="md"
                        maxH="200px"
                        overflowY="auto"
                      >
                        <Text
                          whiteSpace="pre-wrap"
                          fontSize="sm"
                          lineHeight="tall"
                        >
                          {selectedApplication.coverLetter}
                        </Text>
                      </Box>
                    </Box>
                  </>
                )}

                <Divider />

                {/* Status Management Section */}
                <Box>
                  <HStack spacing={2} mb={4}>
                    <Icon as={FiBriefcase} boxSize={5} color="teal.500" />
                    <Heading size="sm">Status Management</Heading>
                  </HStack>
                  <VStack align="stretch" spacing={4}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <FormControl>
                        <FormLabel>Application Status</FormLabel>
                        <Select
                          value={editingStatus}
                          onChange={(e) => setEditingStatus(e.target.value)}
                          bg={useColorModeValue("white", "gray.700")}
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="interviewed">Interviewed</option>
                          <option value="offered">Offered</option>
                          <option value="rejected">Rejected</option>
                          <option value="withdrawn">Withdrawn</option>
                        </Select>
                      </FormControl>
                      {selectedApplication.statusUpdatedAt && (
                        <Box
                          p={3}
                          bg={useColorModeValue("gray.50", "gray.700")}
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <VStack align="flex-start" spacing={0}>
                            <Text fontSize="xs" color={textColor}>
                              Last Updated
                            </Text>
                            <Text fontSize="sm" fontWeight="semibold">
                              {formatDate(selectedApplication.statusUpdatedAt)}
                            </Text>
                            {selectedApplication.updatedBy && (
                              <Text fontSize="xs" color={textColor}>
                                by {selectedApplication.updatedBy}
                              </Text>
                            )}
                          </VStack>
                        </Box>
                      )}
                    </SimpleGrid>
                    <FormControl>
                      <FormLabel>Admin Notes</FormLabel>
                      <Textarea
                        value={editingNotes}
                        onChange={(e) => setEditingNotes(e.target.value)}
                        placeholder="Add notes about this application..."
                        bg={useColorModeValue("white", "gray.700")}
                        rows={4}
                      />
                    </FormControl>
                  </VStack>
                </Box>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <HStack spacing={3}>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="teal"
                onClick={handleStatusUpdate}
                isDisabled={
                  editingStatus === (selectedApplication?.status || "pending") &&
                  editingNotes === (selectedApplication?.adminNotes || "")
                }
              >
                Update Status
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </AdminLayout>
  );
};

export default AdminApplicationsPage;
