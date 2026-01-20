import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  Stack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import apiClient from "lib/api-client";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface Job {
  id?: string;
  slug?: string;
  title?: string;
  department?: string;
  location?: string;
  employment_type?: string;
  description?: string;
  requirements?: string[];
  status?: string;
}

interface JobFormProps {
  job?: Job | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export const JobForm: React.FC<JobFormProps> = ({ job, onSuccess, onCancel }) => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    department: "",
    location: "",
    employment_type: "Full-time",
    description: "",
    requirements: "",
    status: "open",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputBg = useColorModeValue("gray.50", "gray.700");
  const quillBg = useColorModeValue("white", "gray.800");
  const quillTextColor = useColorModeValue("gray.800", "gray.200");

  // ReactQuill modules configuration
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
  ];

  useEffect(() => {
    if (job) {
      setForm({
        title: job.title || "",
        slug: job.slug || "",
        department: job.department || "",
        location: job.location || "",
        employment_type: job.employment_type || "Full-time",
        description: job.description || "",
        requirements: job.requirements?.join("\n") || "",
        status: job.status || "open",
      });
    }
  }, [job]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));

    // Auto-generate slug from title
    if (field === "title" && !job) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.title) newErrors.title = "Title is required";
    if (!form.slug) newErrors.slug = "Slug is required";
    if (!form.department) newErrors.department = "Department is required";
    if (!form.location) newErrors.location = "Location is required";
    
    // Validate description - check if it has actual content (not just empty HTML tags)
    const descriptionText = form.description.replace(/<[^>]*>/g, "").trim();
    if (!descriptionText) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      // Convert requirements string to array
      const requirementsArray = form.requirements
        .split("\n")
        .map((r) => r.trim())
        .filter((r) => r.length > 0);

      const jobData = {
        ...form,
        requirements: requirementsArray,
      };

      if (job?.id) {
        // Update existing job
        await apiClient.put(`/api/admin/jobs/${job.id}`, jobData);
        toast.success("Job updated successfully");
      } else {
        // Create new job
        await apiClient.post("/api/admin/jobs", jobData);
        toast.success("Job created successfully");
      }

      onSuccess();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Failed to save job. Please try again.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl isRequired isInvalid={!!errors.title}>
          <FormLabel>Job Title</FormLabel>
          <Input
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            bg={inputBg}
            placeholder="e.g., Web Developer"
          />
          <FormErrorMessage>{errors.title}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.slug}>
          <FormLabel>Slug (URL-friendly)</FormLabel>
          <Input
            value={form.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
            bg={inputBg}
            placeholder="e.g., web-developer"
          />
          <FormErrorMessage>{errors.slug}</FormErrorMessage>
        </FormControl>

        <HStack spacing={4}>
          <FormControl isRequired isInvalid={!!errors.department}>
            <FormLabel>Department</FormLabel>
            <Input
              value={form.department}
              onChange={(e) => handleChange("department", e.target.value)}
              bg={inputBg}
              placeholder="e.g., Engineering"
            />
            <FormErrorMessage>{errors.department}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.location}>
            <FormLabel>Location</FormLabel>
            <Input
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              bg={inputBg}
              placeholder="e.g., Peshawar, Pakistan"
            />
            <FormErrorMessage>{errors.location}</FormErrorMessage>
          </FormControl>
        </HStack>

        <HStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Employment Type</FormLabel>
            <Select
              value={form.employment_type}
              onChange={(e) => handleChange("employment_type", e.target.value)}
              bg={inputBg}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Status</FormLabel>
            <Select
              value={form.status}
              onChange={(e) => handleChange("status", e.target.value)}
              bg={inputBg}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </Select>
          </FormControl>
        </HStack>

        <FormControl isRequired isInvalid={!!errors.description}>
          <FormLabel>Job Description</FormLabel>
          <Box
            bg={quillBg}
            borderRadius="md"
            border="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.600")}
            _focusWithin={{
              borderColor: "teal.500",
              boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
            }}
          >
            <ReactQuill
              theme="snow"
              value={form.description}
              onChange={(value) => handleChange("description", value)}
              modules={quillModules}
              formats={quillFormats}
              placeholder="Describe the role, responsibilities, and what you're looking for..."
              style={{
                backgroundColor: quillBg,
                color: quillTextColor,
              }}
            />
          </Box>
          <FormErrorMessage>{errors.description}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Requirements (one per line)</FormLabel>
          <Textarea
            value={form.requirements}
            onChange={(e) => handleChange("requirements", e.target.value)}
            bg={inputBg}
            minH="100px"
            placeholder="2+ years of experience&#10;React/Next.js knowledge&#10;TypeScript proficiency"
          />
        </FormControl>

        <HStack justify="flex-end" spacing={4} mt={4}>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme="teal" type="submit" isLoading={submitting}>
            {job?.id ? "Update Job" : "Create Job"}
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};
