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
  useDisclosure,
  Spinner,
  Alert,
  AlertIcon,
  Select,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import apiClient from "lib/api-client";
import toast from "react-hot-toast";
import { AdminLayout } from "components/admin/layout/admin-layout";
import { FiDownload, FiEye } from "react-icons/fi";
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

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Admin - Applications - Tech Emulsion"
        description="View and manage job applications"
        pageType="about"
      />

      <Box>
        <VStack align="stretch" spacing={6}>
          <HStack justify="space-between" align="center" mb={4}>
            <Heading size="xl">Job Applications</Heading>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              maxW="200px"
              bg={useColorModeValue("white", "gray.700")}
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
            >
              <Table variant="simple">
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
                  {filteredApplications.map((app) => (
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

      {/* Application Detail Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Application Details - {selectedApplication?.firstName}{" "}
            {selectedApplication?.lastName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedApplication && (
              <VStack align="stretch" spacing={4}>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Personal Information
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    <Text>
                      <strong>Name:</strong> {selectedApplication.firstName}{" "}
                      {selectedApplication.lastName}
                    </Text>
                    <Text>
                      <strong>Email:</strong> {selectedApplication.email}
                    </Text>
                    <Text>
                      <strong>Phone:</strong>{" "}
                      {selectedApplication.countryCode
                        ? `${selectedApplication.countryCode} ${selectedApplication.phone}`
                        : selectedApplication.phone}
                    </Text>
                    {selectedApplication.yearOfGraduation && (
                      <Text>
                        <strong>Year of Graduation:</strong>{" "}
                        {selectedApplication.yearOfGraduation}
                      </Text>
                    )}
                    {selectedApplication.gender && (
                      <Text>
                        <strong>Gender:</strong> {selectedApplication.gender}
                      </Text>
                    )}
                  </VStack>
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Professional Information
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {selectedApplication.experienceYears && (
                      <Text>
                        <strong>Experience:</strong>{" "}
                        {selectedApplication.experienceYears}
                      </Text>
                    )}
                    {selectedApplication.currentEmployer && (
                      <Text>
                        <strong>Current Employer:</strong>{" "}
                        {selectedApplication.currentEmployer}
                      </Text>
                    )}
                    {selectedApplication.currentCTC && (
                      <Text>
                        <strong>Current Salary:</strong>{" "}
                        {selectedApplication.currentCTC}
                      </Text>
                    )}
                    {selectedApplication.expectedCTC && (
                      <Text>
                        <strong>Expected Salary:</strong>{" "}
                        {selectedApplication.expectedCTC}
                      </Text>
                    )}
                    {selectedApplication.noticePeriod && (
                      <Text>
                        <strong>Notice Period:</strong>{" "}
                        {selectedApplication.noticePeriod}
                      </Text>
                    )}
                    {selectedApplication.skills && (
                      <Text>
                        <strong>Skills:</strong> {selectedApplication.skills}
                      </Text>
                    )}
                  </VStack>
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Location & Source
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {selectedApplication.currentLocation && (
                      <Text>
                        <strong>Current Location:</strong>{" "}
                        {selectedApplication.currentLocation}
                      </Text>
                    )}
                    {selectedApplication.preferredLocation && (
                      <Text>
                        <strong>Preferred Location:</strong>{" "}
                        {selectedApplication.preferredLocation}
                      </Text>
                    )}
                    {selectedApplication.source && (
                      <Text>
                        <strong>Source:</strong> {selectedApplication.source}
                      </Text>
                    )}
                  </VStack>
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Links & Portfolio
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {selectedApplication.linkedin && (
                      <Text>
                        <strong>LinkedIn:</strong>{" "}
                        <Link
                          href={selectedApplication.linkedin}
                          isExternal
                          color="teal.500"
                        >
                          {selectedApplication.linkedin}
                        </Link>
                      </Text>
                    )}
                    {selectedApplication.portfolio && (
                      <Text>
                        <strong>Portfolio/GitHub:</strong>{" "}
                        <Link
                          href={selectedApplication.portfolio}
                          isExternal
                          color="teal.500"
                        >
                          {selectedApplication.portfolio}
                        </Link>
                      </Text>
                    )}
                  </VStack>
                </Box>

                {selectedApplication.job && (
                  <Box>
                    <Text fontWeight="bold" mb={2}>
                      Job Applied For
                    </Text>
                    <Text>
                      <strong>Title:</strong> {selectedApplication.job.title}
                    </Text>
                    <Text>
                      <strong>Department:</strong>{" "}
                      {selectedApplication.job.department}
                    </Text>
                  </Box>
                )}

                {selectedApplication.coverLetter && (
                  <Box>
                    <Text fontWeight="bold" mb={2}>
                      Cover Letter
                    </Text>
                    <Text
                      whiteSpace="pre-wrap"
                      p={3}
                      bg={useColorModeValue("gray.50", "gray.700")}
                      borderRadius="md"
                    >
                      {selectedApplication.coverLetter}
                    </Text>
                  </Box>
                )}

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Resume
                  </Text>
                  <Button
                    size="sm"
                    leftIcon={<FiDownload />}
                    colorScheme="teal"
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
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={4}>
                    Status Management
                  </Text>
                  <VStack align="stretch" spacing={4}>
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

                    {selectedApplication.statusUpdatedAt && (
                      <Text fontSize="sm" color={textColor}>
                        Last updated: {formatDate(selectedApplication.statusUpdatedAt)}
                        {selectedApplication.updatedBy && ` by ${selectedApplication.updatedBy}`}
                      </Text>
                    )}

                    <Button
                      colorScheme="teal"
                      onClick={handleStatusUpdate}
                      isDisabled={
                        editingStatus === (selectedApplication.status || "pending") &&
                        editingNotes === (selectedApplication.adminNotes || "")
                      }
                    >
                      Update Status
                    </Button>
                  </VStack>
                </Box>

                <Box>
                  <Text fontSize="sm" color={textColor}>
                    Applied on: {formatDate(selectedApplication.createdAt)}
                  </Text>
                </Box>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      </Box>
    </AdminLayout>
  );
};

export default AdminApplicationsPage;
