import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
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

// Reusable Section Header Component
interface FormSectionProps {
  title: string;
  stepNumber: number;
  description?: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  stepNumber,
  description,
  children,
}) => {
  const sectionBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const stepBg = useColorModeValue("teal.500", "teal.400");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      bg={sectionBg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={{ base: 4, md: 6 }}
      mb={6}
    >
      <Flex align="center" gap={3} mb={4}>
        <Flex
          align="center"
          justify="center"
          w="32px"
          h="32px"
          borderRadius="full"
          bg={stepBg}
          color="white"
          fontWeight="bold"
          fontSize="sm"
          flexShrink={0}
        >
          {stepNumber}
        </Flex>
        <Box>
          <Heading as="h3" fontSize="lg" fontWeight="semibold" color="teal.600">
            {title}
          </Heading>
          {description && (
            <Text fontSize="sm" color={descriptionColor} mt={0.5}>
              {description}
            </Text>
          )}
        </Box>
      </Flex>
      <Divider mb={5} />
      {children}
    </Box>
  );
};

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ job }) => {
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

  const handleChange = (field: keyof FormState, value: string) => {
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
      {/* Form Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading as="h2" fontSize="xl" fontWeight="semibold">
            Job Application
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Please fill out all required fields marked with *
          </Text>
        </Box>
        <Button variant="link" size="sm" onClick={clearForm} color="gray.600">
          Clear All
        </Button>
      </Flex>

      {/* Section 1: Personal Information */}
      <FormSection
        stepNumber={1}
        title="Personal Information"
        description="Tell us about yourself"
      >
        <Stack spacing={4}>
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                bg={inputBg}
                placeholder="Enter your first name"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                bg={inputBg}
                placeholder="Enter your last name"
              />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              bg={inputBg}
              placeholder="your.email@example.com"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.phone}>
            <FormLabel>Phone Number</FormLabel>
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
                placeholder="3001234567"
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
                placeholder="2020"
              />
              <FormErrorMessage>{errors.yearOfGraduation}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.gender}>
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="Select gender"
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
        </Stack>
      </FormSection>

      {/* Section 2: Professional Experience */}
      <FormSection
        stepNumber={2}
        title="Professional Experience"
        description="Share your work history and skills"
      >
        <Stack spacing={4}>
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.experienceYears}>
              <FormLabel>Years of Experience</FormLabel>
              <Select
                placeholder="Select experience"
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
                placeholder="Company name"
              />
              <FormErrorMessage>{errors.currentEmployer}</FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.currentCTC}>
              <FormLabel>Current Salary</FormLabel>
              <Select
                placeholder="Select salary range"
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
                placeholder="Select salary range"
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
                placeholder="Select notice period"
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
              <FormLabel>Key Skills</FormLabel>
              <Input
                placeholder="e.g., React, Node.js, Python"
                value={form.skills}
                onChange={(e) => handleChange("skills", e.target.value)}
                bg={inputBg}
              />
              <FormErrorMessage>{errors.skills}</FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl>
              <FormLabel>LinkedIn Profile</FormLabel>
              <Input
                value={form.linkedin}
                onChange={(e) => handleChange("linkedin", e.target.value)}
                bg={inputBg}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Portfolio / GitHub</FormLabel>
              <Input
                value={form.portfolio}
                onChange={(e) => handleChange("portfolio", e.target.value)}
                bg={inputBg}
                placeholder="https://github.com/yourusername"
              />
            </FormControl>
          </Flex>
        </Stack>
      </FormSection>

      {/* Section 3: Preferences */}
      <FormSection
        stepNumber={3}
        title="Preferences"
        description="Your location and referral information"
      >
        <Stack spacing={4}>
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.currentLocation}>
              <FormLabel>Current Location</FormLabel>
              <Input
                value={form.currentLocation}
                onChange={(e) =>
                  handleChange("currentLocation", e.target.value)
                }
                bg={inputBg}
                placeholder="City, Country"
              />
              <FormErrorMessage>{errors.currentLocation}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.preferredLocation}>
              <FormLabel>Preferred Work Location</FormLabel>
              <Input
                value={form.preferredLocation}
                onChange={(e) =>
                  handleChange("preferredLocation", e.target.value)
                }
                bg={inputBg}
                placeholder="City, Country or Remote"
              />
              <FormErrorMessage>{errors.preferredLocation}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl isRequired isInvalid={!!errors.source}>
            <FormLabel>How did you hear about this position?</FormLabel>
            <Select
              placeholder="Select source"
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
        </Stack>
      </FormSection>

      {/* Section 4: Documents */}
      <FormSection
        stepNumber={4}
        title="Documents"
        description="Upload your resume and add a cover letter"
      >
        <Stack spacing={5}>
          <ResumeUpload
            onFileChange={(file) => setResumeFile(file)}
            error={resumeError}
            fileName={resumeFile?.name}
          />

          <FormControl>
            <FormLabel>Cover Letter / Message (Optional)</FormLabel>
            <Textarea
              value={form.coverLetter}
              onChange={(e) => handleChange("coverLetter", e.target.value)}
              bg={inputBg}
              minH="140px"
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            />
          </FormControl>
        </Stack>
      </FormSection>

      {/* Submit Buttons */}
      <Flex justify="flex-end" gap={4} mt={2}>
        <Button variant="outline" onClick={clearForm} colorScheme="gray">
          Cancel
        </Button>
        <Button colorScheme="teal" type="submit" isLoading={submitting}>
          Submit Application
        </Button>
      </Flex>
    </Box>
  );
};

export default ApplicationForm;
