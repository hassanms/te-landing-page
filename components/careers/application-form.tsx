import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import axios from "axios";
import { Job } from "data/jobs/types";
import {
  applicationSourceOptions,
  ctcRangeOptions,
  experienceYearOptions,
  noticePeriodOptions,
} from "data/jobs/constants";
import { ResumeUpload } from "components/forms/resume-upload";
import { AutofillSection } from "./autofill-section";

interface ApplicationFormProps {
  job: Job;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  yearOfGraduation: string;
  gender: string;
  experienceYears: string;
  currentEmployer: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  skills: string;
  source: string;
  currentLocation: string;
  preferredLocation: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter?: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ job }) => {
  const { colorMode } = useColorMode();
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+92",
    phone: "",
    yearOfGraduation: "",
    gender: "",
    experienceYears: "",
    currentEmployer: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    skills: "",
    source: "",
    currentLocation: "",
    preferredLocation: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputBg = useColorModeValue("gray.50", "gray.700");

  const handleChange = (
    field: keyof FormState,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    const requiredFields: (keyof FormState)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "yearOfGraduation",
      "gender",
      "experienceYears",
      "currentEmployer",
      "currentCTC",
      "expectedCTC",
      "noticePeriod",
      "skills",
      "source",
      "currentLocation",
      "preferredLocation",
    ];

    requiredFields.forEach((field) => {
      if (!form[field]) {
        newErrors[field] = "Required";
      }
    });

    if (!resumeFile) {
      setResumeError("Please upload your resume.");
    } else {
      setResumeError("");
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && !!resumeFile;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    if (!resumeFile) {
      setResumeError("Please upload your resume.");
      return;
    }

    setSubmitting(true);

    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        try {
          const cvData = reader.result as string;

          await axios.post("/api/applications/create", {
            jobId: job.id,
            role: job.title,
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            countryCode: form.countryCode,
            phone: form.phone,
            yearOfGraduation: form.yearOfGraduation,
            gender: form.gender,
            experienceYears: form.experienceYears,
            currentEmployer: form.currentEmployer,
            currentCTC: form.currentCTC,
            expectedCTC: form.expectedCTC,
            noticePeriod: form.noticePeriod,
            skills: form.skills,
            source: form.source,
            currentLocation: form.currentLocation,
            preferredLocation: form.preferredLocation,
            linkedin: form.linkedin,
            portfolio: form.portfolio,
            coverLetter: form.coverLetter,
            cvFileName: resumeFile.name,
            cvFileType: resumeFile.type,
            cvData,
          });

          toast.success("Application submitted successfully");
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "+92",
            phone: "",
            yearOfGraduation: "",
            gender: "",
            experienceYears: "",
            currentEmployer: "",
            currentCTC: "",
            expectedCTC: "",
            noticePeriod: "",
            skills: "",
            source: "",
            currentLocation: "",
            preferredLocation: "",
            linkedin: "",
            portfolio: "",
            coverLetter: "",
          });
          setResumeFile(null);
          setErrors({});
        } catch (error: any) {
          const errorMessage = 
            error?.response?.data?.error || 
            error?.response?.data?.message ||
            "Failed to submit application. Please try again.";
          toast.error(errorMessage);
        } finally {
          setSubmitting(false);
        }
      };

      reader.readAsDataURL(resumeFile);
    } catch (error: any) {
      toast.error("Failed to read resume file. Please try again.");
      setSubmitting(false);
    }
  };

  const clearForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+92",
      phone: "",
      yearOfGraduation: "",
      gender: "",
      experienceYears: "",
      currentEmployer: "",
      currentCTC: "",
      expectedCTC: "",
      noticePeriod: "",
      skills: "",
      source: "",
      currentLocation: "",
      preferredLocation: "",
      linkedin: "",
      portfolio: "",
      coverLetter: "",
    });
    setResumeFile(null);
    setResumeError("");
    setErrors({});
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      {/* <AutofillSection
        onResumeUpload={(file) => {
          setResumeFile(file);
          setResumeError("");
        }}
        resumeFile={resumeFile}
      /> */}

      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h2" fontSize="xl" fontWeight="semibold" color="teal.600">
          Personal Details
        </Heading>
        <Button variant="link" size="sm" onClick={clearForm} color="gray.600">
          Clear
        </Button>
      </Flex>

      <Stack spacing={4}>
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl isRequired isInvalid={!!errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              bg={inputBg}
              placeholder="-None-"
            />
            <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              bg={inputBg}
              placeholder="-None-"
            />
            <FormErrorMessage>{errors.lastName}</FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            bg={inputBg}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.phone}>
          <FormLabel>Contact</FormLabel>
          <Flex gap={2}>
            <Select
              maxW="120px"
              value={form.countryCode}
              onChange={(e) => handleChange("countryCode", e.target.value)}
              bg={inputBg}
            >
              <option value="+92">+92</option>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </Select>
            <Input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              bg={inputBg}
            />
          </Flex>
          <FormErrorMessage>{errors.phone}</FormErrorMessage>
        </FormControl>

        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl isRequired isInvalid={!!errors.yearOfGraduation}>
            <FormLabel>Year of Graduation</FormLabel>
            <Input
              type="number"
              value={form.yearOfGraduation}
              onChange={(e) =>
                handleChange("yearOfGraduation", e.target.value)
              }
              bg={inputBg}
            />
            <FormErrorMessage>{errors.yearOfGraduation}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.gender}>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select"
              value={form.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              bg={inputBg}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </Select>
            <FormErrorMessage>{errors.gender}</FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl isRequired isInvalid={!!errors.experienceYears}>
            <FormLabel>Experience In Years</FormLabel>
            <Select
              placeholder="-None-"
              value={form.experienceYears}
              onChange={(e) =>
                handleChange("experienceYears", e.target.value)
              }
              bg={inputBg}
            >
              {experienceYearOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.experienceYears}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.currentEmployer}>
            <FormLabel>Current Employer</FormLabel>
            <Input
              value={form.currentEmployer}
              onChange={(e) =>
                handleChange("currentEmployer", e.target.value)
              }
              bg={inputBg}
            />
            <FormErrorMessage>{errors.currentEmployer}</FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl isRequired isInvalid={!!errors.currentCTC}>
            <FormLabel>Current Salary</FormLabel>
            <Select
              placeholder="-None-"
              value={form.currentCTC}
              onChange={(e) => handleChange("currentCTC", e.target.value)}
              bg={inputBg}
            >
              {ctcRangeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.currentCTC}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.expectedCTC}>
            <FormLabel>Expected Salary</FormLabel>
            <Select
              placeholder="-None-"
              value={form.expectedCTC}
              onChange={(e) => handleChange("expectedCTC", e.target.value)}
              bg={inputBg}
            >
              {ctcRangeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.expectedCTC}</FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl isRequired isInvalid={!!errors.noticePeriod}>
            <FormLabel>Notice Period</FormLabel>
            <Select
              placeholder="-None-"
              value={form.noticePeriod}
              onChange={(e) => handleChange("noticePeriod", e.target.value)}
              bg={inputBg}
            >
              {noticePeriodOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.noticePeriod}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.skills}>
            <FormLabel>Skill Set</FormLabel>
            <Input
              placeholder="Search and add skills"
              value={form.skills}
              onChange={(e) => handleChange("skills", e.target.value)}
              bg={inputBg}
            />
            <FormErrorMessage>{errors.skills}</FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl isRequired isInvalid={!!errors.source}>
            <FormLabel>How did you come across this vacancy?</FormLabel>
            <Select
              placeholder="-None-"
              value={form.source}
              onChange={(e) => handleChange("source", e.target.value)}
              bg={inputBg}
            >
              {applicationSourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.source}</FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl isRequired isInvalid={!!errors.currentLocation}>
            <FormLabel>Current Location</FormLabel>
            <Input
              value={form.currentLocation}
              onChange={(e) =>
                handleChange("currentLocation", e.target.value)
              }
              bg={inputBg}
            />
            <FormErrorMessage>{errors.currentLocation}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.preferredLocation}>
            <FormLabel>Preferred Location</FormLabel>
            <Input
              value={form.preferredLocation}
              onChange={(e) =>
                handleChange("preferredLocation", e.target.value)
              }
              bg={inputBg}
              placeholder="None"
            />
            <FormErrorMessage>{errors.preferredLocation}</FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FormControl>
            <FormLabel>LinkedIn Profile URL</FormLabel>
            <Input
              value={form.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              bg={inputBg}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Portfolio / GitHub URL</FormLabel>
            <Input
              value={form.portfolio}
              onChange={(e) => handleChange("portfolio", e.target.value)}
              bg={inputBg}
            />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel>Cover Letter / Message</FormLabel>
          <Textarea
            value={form.coverLetter}
            onChange={(e) => handleChange("coverLetter", e.target.value)}
            bg={inputBg}
            minH="160px"
          />
        </FormControl>

        <Box>
          {/* <Heading as="h2" fontSize="xl" fontWeight="semibold" color="teal.600" mb={4}>
            Upload Your Resume
          </Heading> */}
          <ResumeUpload
            onFileChange={(file) => setResumeFile(file)}
            error={resumeError}
            fileName={resumeFile?.name}
          />
        </Box>

        <Flex justify="flex-end" gap={4} mt={6}>
          <Button
            variant="outline"
            onClick={clearForm}
            colorScheme="gray"
          >
            Cancel
          </Button>
          <Button
            colorScheme="teal"
            type="submit"
            isLoading={submitting}
          >
            Submit Application
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ApplicationForm;

