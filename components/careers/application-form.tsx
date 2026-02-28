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
import { useForm } from "react-hook-form";
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
  cancelHref?: string;
  buttonsInFooter?: boolean;
}

interface FormValues {
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

const defaultValues: FormValues = {
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
};

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
  const {
    register,
    handleSubmit: rhfHandleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    mode: "onSubmit",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const countryCode = watch("countryCode");
  const selectedCountry =
    sortedCountryCodes.find((c) => c.dialCode === countryCode) ||
    sortedCountryCodes.find((c) => c.dialCode === "+92");

  const inputBg = useColorModeValue("gray.50", "gray.700");
  const helperTextColor = useColorModeValue("gray.500", "gray.200");
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const labelColor = useColorModeValue("gray.800", "gray.100");
  const menuBg = useColorModeValue("white", "gray.800");
  const menuHoverBg = useColorModeValue("gray.100", "gray.700");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  const onSubmit = async (data: FormValues) => {
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
            ...data,
            cvFileName: resumeFile.name,
            cvFileType: resumeFile.type,
            cvData,
          });
          toast.success("Application submitted successfully");
          reset(defaultValues);
          setResumeFile(null);
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
    reset(defaultValues);
    setResumeFile(null);
    setResumeError("");
  };

  const cancelButtonSx = {
    "&:hover": {
      bg: "teal.500",
      borderColor: "teal.500",
      color: "white !important",
      "& *, & span, & svg": { color: "white !important" },
    },
  };

  const inputProps = { bg: inputBg, transition: "none" as const };

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
        Submit
      </Button>
    </Flex>
  );

  return (
    <>
      <Box
        as="form"
        id="application-form"
        onSubmit={rhfHandleSubmit(onSubmit, () => {
          if (!resumeFile) setResumeError("Please upload your resume.");
        })}
      >
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

        <FormSection title="Personal Information" description="Tell us about yourself">
          <Stack spacing={4}>
            <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <FormControl isRequired isInvalid={!!errors.firstName}>
                <FormLabel color={labelColor}>First Name</FormLabel>
                <Input
                  {...register("firstName", { required: "Required" })}
                  {...inputProps}
                  placeholder="Enter your first name"
                />
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.lastName}>
                <FormLabel color={labelColor}>Last Name</FormLabel>
                <Input
                  {...register("lastName", { required: "Required" })}
                  {...inputProps}
                  placeholder="Enter your last name"
                />
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl isRequired isInvalid={!!errors.email}>
              <FormLabel color={labelColor}>Email Address</FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email.",
                  },
                })}
                {...inputProps}
                placeholder="your.email@example.com"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
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
                  <MenuList bg={menuBg} maxH="300px" overflowY="auto" zIndex={1000}>
                    {sortedCountryCodes.map((country: CountryCode) => (
                      <MenuItem
                        key={country.code}
                        onClick={() => setValue("countryCode", country.dialCode)}
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
                  {...register("phone", {
                    required: "Required",
                    onChange: (e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 15);
                      e.target.value = v;
                    },
                  })}
                  {...inputProps}
                  placeholder="3001234567"
                  flex={1}
                  maxLength={15}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
              </Flex>
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>

            <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <FormControl isRequired isInvalid={!!errors.yearOfGraduation}>
                <FormLabel color={labelColor}>Year of Graduation</FormLabel>
                <Input
                  type="number"
                  {...register("yearOfGraduation", { required: "Required" })}
                  {...inputProps}
                  placeholder="2020"
                />
                <FormErrorMessage>{errors.yearOfGraduation?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.gender}>
                <FormLabel color={labelColor}>Gender</FormLabel>
                <Select
                  placeholder="Select gender"
                  {...register("gender", { required: "Required" })}
                  bg={inputBg}
                  transition="none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </Select>
                <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
          </Stack>
        </FormSection>

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
                    {...register("experienceYears", { required: "Required" })}
                    {...inputProps}
                    placeholder="Enter years of experience"
                    min={0}
                  />
                  <InputRightAddon bg={inputBg}>years</InputRightAddon>
                </InputGroup>
                <FormErrorMessage>{errors.experienceYears?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.currentEmployer}>
                <FormLabel color={labelColor}>Current Employer</FormLabel>
                <Input
                  {...register("currentEmployer", { required: "Required" })}
                  {...inputProps}
                  placeholder="Company name"
                />
                <FormErrorMessage>{errors.currentEmployer?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <FormControl isRequired isInvalid={!!errors.currentCTC}>
                <FormLabel color={labelColor}>Current Salary</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    {...register("currentCTC", { required: "Required" })}
                    {...inputProps}
                    placeholder="e.g., 50,000"
                  />
                  <InputRightAddon bg={inputBg}>PKR</InputRightAddon>
                </InputGroup>
                <FormErrorMessage>{errors.currentCTC?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.expectedCTC}>
                <FormLabel color={labelColor}>Expected Salary</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    {...register("expectedCTC", { required: "Required" })}
                    {...inputProps}
                    placeholder="e.g., 50,000"
                  />
                  <InputRightAddon bg={inputBg}>PKR</InputRightAddon>
                </InputGroup>
                <FormErrorMessage>{errors.expectedCTC?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <FormControl isRequired isInvalid={!!errors.noticePeriod}>
                <FormLabel color={labelColor}>Notice Period</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    {...register("noticePeriod", { required: "Required" })}
                    {...inputProps}
                    placeholder="Enter notice period"
                  />
                  <InputRightAddon bg={inputBg}>days</InputRightAddon>
                </InputGroup>
                <FormErrorMessage>{errors.noticePeriod?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.skills}>
                <FormLabel color={labelColor}>Key Skills</FormLabel>
                <Input
                  {...register("skills", { required: "Required" })}
                  {...inputProps}
                  placeholder="e.g., React, Node.js, Python"
                />
                <FormErrorMessage>{errors.skills?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <FormControl>
                <FormLabel color={labelColor}>LinkedIn Profile</FormLabel>
                <Input
                  {...register("linkedin")}
                  {...inputProps}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </FormControl>
              <FormControl>
                <FormLabel color={labelColor}>Portfolio / GitHub</FormLabel>
                <Input
                  {...register("portfolio")}
                  {...inputProps}
                  placeholder="https://github.com/yourusername"
                />
              </FormControl>
            </Flex>
          </Stack>
        </FormSection>

        <FormSection
          title="Preferences"
          description="Your location and referral information"
        >
          <Stack spacing={4}>
            <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <FormControl isRequired isInvalid={!!errors.currentLocation}>
                <FormLabel color={labelColor}>Current Location</FormLabel>
                <Input
                  {...register("currentLocation", { required: "Required" })}
                  {...inputProps}
                  placeholder="City, Country"
                />
                <FormErrorMessage>{errors.currentLocation?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.preferredLocation}>
                <FormLabel color={labelColor}>Preferred Work Location</FormLabel>
                <Input
                  {...register("preferredLocation", { required: "Required" })}
                  {...inputProps}
                  placeholder="City, Country or Remote"
                />
                <FormErrorMessage>{errors.preferredLocation?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl isRequired isInvalid={!!errors.source}>
              <FormLabel color={labelColor}>How did you hear about this position?</FormLabel>
              <Select
                placeholder="Select source"
                {...register("source", { required: "Required" })}
                bg={inputBg}
                transition="none"
              >
                {applicationSourceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{errors.source?.message}</FormErrorMessage>
            </FormControl>
          </Stack>
        </FormSection>

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
                {...register("coverLetter")}
                {...inputProps}
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
