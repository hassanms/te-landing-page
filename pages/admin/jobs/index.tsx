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
} from "@chakra-ui/react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import axios from "axios";
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

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");

  const adminSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET || "your-admin-secret-key";

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/admin/jobs", {
        params: { secret: adminSecret },
      });
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
      await axios.delete(`/api/admin/jobs/${jobId}`, {
        params: { secret: adminSecret },
      });
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

  return (
    <AdminLayout>
      <EnhancedSEO
        title="Admin - Jobs - Tech Emulsion"
        description="Manage job postings"
        pageType="about"
      />

      <Box>
        <HStack justify="space-between" mb={6}>
          <Heading size="xl">Job Management</Heading>
          <Button
            leftIcon={<FiPlus />}
            colorScheme="teal"
            onClick={handleCreateNew}
          >
            Create New Job
          </Button>
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
                  <Th>Title</Th>
                  <Th>Department</Th>
                  <Th>Location</Th>
                  <Th>Type</Th>
                  <Th>Status</Th>
                  <Th>Created</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {jobs.map((job) => (
                  <Tr key={job.id}>
                    <Td fontWeight="medium">{job.title}</Td>
                    <Td>{job.department}</Td>
                    <Td>{job.location}</Td>
                    <Td>{job.employment_type}</Td>
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
