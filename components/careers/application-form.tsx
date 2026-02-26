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
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiChevronDown, FiArrowLeft, FiSend } from "react-icons/fi";
import { sortedCountryCodes, CountryCode } from "data/country-codes";
import toast from "react-hot-toast";
import axios from "axios";
import { Job } from "data/jobs/types";
import {
  applicationSourceOptions,
} from "data/jobs/constants";
import { ResumeUpload } from "components/forms/resume-upload";

interface ApplicationFormProps {
  job: Job;
  /** When provided, Cancel navigates to this URL instead of clearing the form */
  cancelHref?: string;
  /** When true, render Submit/Cancel in a footer section with divider */
  buttonsInFooter?: boolean;
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
  description?: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
}) => {
  const sectionBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const descriptionColor = useColorModeValue("gray.600", "gray.200");
  const headingColor = useColorModeValue("teal.700", "teal.300");

  return (
    <Box
      bg={sectionBg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={{ base: 4, md: 6 }}
      mb={6}
      boxShadow="sm"
    >
      <Box mb={4}>
        <Heading as="h3" fontSize="lg" fontWeight="semibold" color={headingColor}>
          {title}
        </Heading>
        {description && (
          <Text fontSize="sm" color={descriptionColor} mt={0.5}>
            {description}
          </Text>
        )}
      </Box>
      <Divider mb={5} />
      {children}
    </Box>
  );
};

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  job,
  cancelHref,
  buttonsInFooter,
}) => {
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
  const helperTextColor = useColorModeValue("gray.500", "gray.200");
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const labelColor = useColorModeValue("gray.800", "gray.100");
  const menuBg = useColorModeValue("white", "gray.800");
  const menuHoverBg = useColorModeValue("gray.100", "gray.700");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  // Find selected country for display
  const selectedCountry = sortedCountryCodes.find(
    (country) => country.dialCode === form.countryCode
  ) || sortedCountryCodes.find((country) => country.dialCode === "+92");

  const handleChange = (field: keyof FormState, value: string) => {
    // For phone field, only allow digits and limit to 15 characters
    if (field === "phone") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      // Limit to 15 digits (standard international phone number length)
      const limitedValue = digitsOnly.slice(0, 15);
      setForm((prev) => ({ ...prev, [field]: limitedValue }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
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

  const cancelButtonSx = {
    "&:hover": {
      bg: "teal.500",
      borderColor: "teal.500",
      color: "white !important",
      "& *, & span, & svg": { color: "white !important" },
    },
  };

  const renderButtons = () => (
    <Flex
      justify={buttonsInFooter ? "center" : "flex-end"}
      align="center"
      gap={4}
      mt={buttonsInFooter ? 0 : 8}
      pt={buttonsInFooter ? 0 : 4}
      flexWrap="wrap"
    >
      {cancelHref ? (
        <Button
          as={NextLink}
          href={cancelHref}
          variant="outline"
          colorScheme="teal"
          size="lg"
          leftIcon={<Icon as={FiArrowLeft} boxSize={4} />}
          transition="all 0.2s"
          sx={cancelButtonSx}
        >
          Cancel
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={clearForm}
          colorScheme="teal"
          size="lg"
          leftIcon={<Icon as={FiArrowLeft} boxSize={4} />}
          transition="all 0.2s"
          sx={cancelButtonSx}
        >
          Cancel
        </Button>
      )}
      <Button
        colorScheme="teal"
        type="submit"
        form={buttonsInFooter ? "application-form" : undefined}
        isLoading={submitting}
        size="lg"
        rightIcon={<Icon as={FiSend} boxSize={4} />}
        _hover={{ bg: "teal.600" }}
        transition="all 0.2s"
      >
        Submit Application
      </Button>
    </Flex>
  );

  return (
    <>
      <Box as="form" id="application-form" onSubmit={handleSubmit}>
      {/* Form Header */}
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Heading as="h2" fontSize="2xl" fontWeight="semibold" color={labelColor}>
            Job Application
          </Heading>
          <Text fontSize="sm" color={helperTextColor} mt={1}>
            Please fill out all required fields marked with *
          </Text>
        </Box>
        <Button
          variant="link"
          size="sm"
          onClick={clearForm}
          color={linkColor}
          _hover={{ color: "teal.500", textDecoration: "underline" }}
        >
          Clear All
        </Button>
      </Flex>

      {/* Section 1: Personal Information */}
      <FormSection
        title="Personal Information"
        description="Tell us about yourself"
      >
        <Stack spacing={4}>
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.firstName}>
              <FormLabel color={labelColor}>First Name</FormLabel>
              <Input
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                bg={inputBg}
                placeholder="Enter your first name"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.lastName}>
              <FormLabel color={labelColor}>Last Name</FormLabel>
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
            <FormLabel color={labelColor}>Email Address</FormLabel>
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
            <FormLabel color={labelColor}>Phone Number</FormLabel>
            <Flex gap={2}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FiChevronDown />}
                  bg={inputBg}
                  minW="140px"
                  maxW="140px"
                  fontWeight="normal"
                  _hover={{ bg: inputBg }}
                  _active={{ bg: inputBg }}
                >
                  <Flex align="center" gap={2}>
                    <Text fontSize="lg">{selectedCountry?.flag}</Text>
                    <Text>{selectedCountry?.dialCode}</Text>
                  </Flex>
                </MenuButton>
                <MenuList
                  bg={menuBg}
                  maxH="300px"
                  overflowY="auto"
                  zIndex={1000}
                >
                  {sortedCountryCodes.map((country: CountryCode) => (
                    <MenuItem
                      key={country.code}
                      onClick={() => handleChange("countryCode", country.dialCode)}
                      bg={menuBg}
                      _hover={{ bg: menuHoverBg }}
                      icon={<Text fontSize="lg">{country.flag}</Text>}
                    >
                      <Flex align="center" gap={2} w="100%">
                        <Text flex={1}>{country.name}</Text>
                        <Text color={helperTextColor}>{country.dialCode}</Text>
                      </Flex>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                bg={inputBg}
                placeholder="3001234567"
                flex={1}
                maxLength={15}
                pattern="[0-9]*"
                inputMode="numeric"
              />
            </Flex>
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          </FormControl>

          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.yearOfGraduation}>
              <FormLabel color={labelColor}>Year of Graduation</FormLabel>
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
              <FormLabel color={labelColor}>Gender</FormLabel>
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
        title="Professional Experience"
        description="Share your work history and skills"
      >
        <Stack spacing={4}>
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.experienceYears}>
              <FormLabel color={labelColor}>Years of Experience</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  value={form.experienceYears}
                  onChange={(e) =>
                    handleChange("experienceYears", e.target.value)
                  }
                  bg={inputBg}
                  placeholder="Enter years of experience"
                  min="0"
                />
                <InputRightAddon bg={inputBg}>
                  {form.experienceYears === "1" ? "year" : "years"}
                </InputRightAddon>
              </InputGroup>
              <FormErrorMessage>{errors.experienceYears}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.currentEmployer}>
              <FormLabel color={labelColor}>Current Employer</FormLabel>
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
              <FormLabel color={labelColor}>Current Salary</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  value={form.currentCTC}
                  onChange={(e) => handleChange("currentCTC", e.target.value)}
                  bg={inputBg}
                  placeholder="e.g., 50,000"
                />
                <InputRightAddon bg={inputBg}>PKR</InputRightAddon>
              </InputGroup>
              <FormErrorMessage>{errors.currentCTC}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.expectedCTC}>
              <FormLabel color={labelColor}>Expected Salary</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  value={form.expectedCTC}
                  onChange={(e) => handleChange("expectedCTC", e.target.value)}
                  bg={inputBg}
                  placeholder="e.g., 50,000"
                />
                <InputRightAddon bg={inputBg}>PKR</InputRightAddon>
              </InputGroup>
              <FormErrorMessage>{errors.expectedCTC}</FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.noticePeriod}>
              <FormLabel color={labelColor}>Notice Period</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  value={form.noticePeriod}
                  onChange={(e) => handleChange("noticePeriod", e.target.value)}
                  bg={inputBg}
                  placeholder="Enter notice period"
                />
                <InputRightAddon bg={inputBg}>days</InputRightAddon>
              </InputGroup>
              <FormErrorMessage>{errors.noticePeriod}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.skills}>
              <FormLabel color={labelColor}>Key Skills</FormLabel>
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
              <FormLabel color={labelColor}>LinkedIn Profile</FormLabel>
              <Input
                value={form.linkedin}
                onChange={(e) => handleChange("linkedin", e.target.value)}
                bg={inputBg}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </FormControl>
            <FormControl>
              <FormLabel color={labelColor}>Portfolio / GitHub</FormLabel>
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
        title="Preferences"
        description="Your location and referral information"
      >
        <Stack spacing={4}>
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <FormControl isRequired isInvalid={!!errors.currentLocation}>
              <FormLabel color={labelColor}>Current Location</FormLabel>
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
              <FormLabel color={labelColor}>Preferred Work Location</FormLabel>
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
            <FormLabel color={labelColor}>How did you hear about this position?</FormLabel>
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
            <FormLabel color={labelColor}>Cover Letter / Message (Optional)</FormLabel>
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

      {!buttonsInFooter && renderButtons()}
    </Box>
      {buttonsInFooter && (
        <>
          <Box
            bg="transparent"
            py={2}
            mt={{ base: 6, md: 8 }}
            borderTopWidth="1px"
            borderColor={dividerColor}
          />
          <Box mt={6} mb={6}>{renderButtons()}</Box>
        </>
      )}
    </>
  );
};

export default ApplicationForm;
