import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
  useColorModeValue,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Select,
  Input,
} from "@chakra-ui/react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import apiClient from "lib/api-client";
import toast from "react-hot-toast";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { JobForm } from "components/admin/jobs/job-form";
import { AdminLayout } from "components/admin/layout/admin-layout";

interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  requirements: string[];
  status: string;
  created_at: string;
}

const AdminJobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const tableHeadingColor = useColorModeValue("gray.600", "gray.100");

  useEffect(() => {
    fetchJobs();
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, searchTerm]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/api/admin/jobs");
      setJobs(response.data.jobs || []);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs. Please check your admin secret.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setSelectedJob(null);
    setIsEditing(false);
    onOpen();
  };

  const handleEdit = (job: Job) => {
    setSelectedJob(job);
    setIsEditing(true);
    onOpen();
  };

  const handleDelete = async (jobId: string) => {
    if (!confirm("Are you sure you want to delete this job?")) {
      return;
    }

    try {
      await apiClient.delete(`/api/admin/jobs/${jobId}`);
      toast.success("Job deleted successfully");
      fetchJobs();
    } catch (err: any) {
      console.error("Error deleting job:", err);
      toast.error("Failed to delete job");
    }
  };

  const handleFormSuccess = () => {
    onClose();
    fetchJobs();
    setSelectedJob(null);
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesStatus =
      statusFilter === "all" ? true : job.status === statusFilter;
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      job.title.toLowerCase().includes(term) ||
      job.department.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term);

    return matchesStatus && matchesSearch;
  });

  const totalFiltered = filteredJobs.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Admin - Jobs - Tech Emulsion"
        description="Manage job postings"
        pageType="about"
      />

      <Box>
        <HStack justify="space-between" mb={6} align="flex-start">
          <Box>
            <Heading size="xl">Job Management</Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.200")}
            >
              Create, edit, and manage all open roles.
            </Text>
          </Box>
          <Button
            leftIcon={<FiPlus />}
            colorScheme="teal"
            onClick={handleCreateNew}
          >
            Create New Job
          </Button>
        </HStack>

        <HStack
          spacing={4}
          mb={4}
          align="center"
          flexWrap="wrap"
        >
          <Select
            placeholder="All statuses"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value || "all")}
            maxW="200px"
            bg={useColorModeValue("white", "gray.800")}
            size="sm"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </Select>
          <Input
            placeholder="Search by title, department, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            maxW="320px"
            bg={useColorModeValue("white", "gray.800")}
            size="sm"
          />
          <HStack spacing={2} ml="auto" fontSize="xs" color={textColor}>
            <Text>
              Rows per page:
            </Text>
            <Select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              size="xs"
              w="auto"
              bg={useColorModeValue("white", "gray.800")}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
          </HStack>
        </HStack>

        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        {loading ? (
          <Box textAlign="center" py={10}>
            <Spinner size="xl" />
            <Text mt={4}>Loading jobs...</Text>
          </Box>
        ) : jobs.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Text fontSize="lg" color={textColor}>
              No jobs found. Create your first job posting.
            </Text>
          </Box>
        ) : filteredJobs.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Text fontSize="lg" color={textColor}>
              No jobs match the current filters.
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
                  <Th color={tableHeadingColor}>Title</Th>
                  <Th color={tableHeadingColor}>Department</Th>
                  <Th color={tableHeadingColor}>Location</Th>
                  <Th color={tableHeadingColor}>Type</Th>
                  <Th color={tableHeadingColor}>Status</Th>
                  <Th color={tableHeadingColor}>Created</Th>
                  <Th color={tableHeadingColor}>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {paginatedJobs.map((job) => (
                  <Tr key={job.id}>
                    <Td fontWeight="medium" whiteSpace="nowrap">
                      {job.title}
                    </Td>
                    <Td whiteSpace="nowrap">{job.department}</Td>
                    <Td whiteSpace="nowrap">{job.location}</Td>
                    <Td whiteSpace="nowrap">{job.employment_type}</Td>
                    <Td>
                      <Badge
                        colorScheme={job.status === "open" ? "green" : "gray"}
                      >
                        {job.status}
                      </Badge>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color={textColor}>
                        {formatDate(job.created_at)}
                      </Text>
                    </Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton
                          aria-label="Edit job"
                          icon={<FiEdit />}
                          size="sm"
                          onClick={() => handleEdit(job)}
                        />
                        <IconButton
                          aria-label="Delete job"
                          icon={<FiTrash2 />}
                          size="sm"
                          colorScheme="red"
                          variant="ghost"
                          onClick={() => handleDelete(job.id)}
                        />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}

        {!loading && filteredJobs.length > 0 && (
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
              of <strong>{totalFiltered}</strong> filtered jobs (
              {jobs.length} total)
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
      </Box>

      {/* Create/Edit Job Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isEditing ? "Edit Job" : "Create New Job"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <JobForm
              job={selectedJob}
              onSuccess={handleFormSuccess}
              onCancel={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </AdminLayout>
  );
};

export default AdminJobsPage;
