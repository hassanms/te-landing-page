import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useColorModeValue,
  CircularProgress,
  ButtonGroup,
  VStack,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { FaChevronRight } from "react-icons/fa";

const validatePhone = (phone: string) => {
  const cleaned = phone.replace(/[^\d+]/g, "");

  if (cleaned.startsWith("+")) {
    const digitsOnly = cleaned.substring(1);
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return false;
    }
    return /^\+[1-9]\d{6,14}$/.test(cleaned);
  } else {
    const digitsOnly = cleaned;
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return false;
    }
    return /^\d{7,15}$/.test(digitsOnly);
  }
};

const careerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z0-9 ]*$/, "Name cannot contain special characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(/^[^@]+@[^@]+\.[^@]+$/, "Email must contain a dot (.) after the @"),
  phone: Yup.string()
    .required("Phone number is required")
    .test(
      "phone-format",
      "Please enter a valid phone number (7-15 digits). International format: +1234567890",
      (value) => {
        if (!value) return false;
        return validatePhone(value);
      },
    ),
  experience: Yup.string()
    .required("Experience is required")
    .max(40, "Keep experience concise"),
  message: Yup.string().required("Please add a short note or cover summary"),
  linkedin: Yup.string()
    .url("Please enter a valid LinkedIn URL")
    .nullable()
    .transform((value, originalValue) =>
      originalValue === "" ? null : value,
    ),
  portfolio: Yup.string()
    .url("Please enter a valid portfolio URL")
    .nullable()
    .transform((value, originalValue) =>
      originalValue === "" ? null : value,
    ),
  cvData: Yup.string().required("Please upload your CV (PDF or DOC)"),
});

const inputStyles = (colorMode: "light" | "dark") => ({
  padding: "2rem",
  border: "none",
  fontWeight: 500,
  color: colorMode === "dark" ? "white" : "gray.00",
  fontSize: "lg",
  borderRadius: "none",
  _focusVisible: {
    borderBottom: "2px solid",
    borderBottomColor: "teal.500",
    color: "none",
  },
  mb: {
    base: 2,
    md: 0,
  },
  backgroundColor: colorMode === "dark" ? "gray.700" : "gray.50",
  _placeholder: {
    color: colorMode === "dark" ? "gray.400" : "gray.500",
  },
});

const CareersApply = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const router = useRouter();
  const roleFromQuery =
    typeof router.query.role === "string"
      ? router.query.role
      : "Careers Application";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    message: "",
    cvFileName: "",
    cvFileType: "",
    cvData: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let filtered = value.replace(/[^\d+\s\-()]/g, "");
      let cleaned = filtered.startsWith("+")
        ? "+" + filtered.substring(1).replace(/[^\d\s\-()]/g, "")
        : filtered.replace(/[^\d\s\-()]/g, "");

      const digitsOnly = cleaned.replace(/[^\d]/g, "");
      const maxDigits = 15;

      if (digitsOnly.length > maxDigits) {
        if (cleaned.startsWith("+")) {
          const digitsAfterPlus = cleaned
            .substring(1)
            .replace(/[^\d]/g, "")
            .substring(0, maxDigits);
          let result = "+";
          let digitCount = 0;
          for (let i = 1; i < cleaned.length && digitCount < maxDigits; i++) {
            const char = cleaned[i];
            if (/\d/.test(char)) {
              result += char;
              digitCount++;
            } else if (/[\s\-()]/.test(char)) {
              result += char;
            }
          }
          cleaned = result || `+${digitsAfterPlus}`;
        } else {
          let result = "";
          let digitCount = 0;
          for (let i = 0; i < cleaned.length && digitCount < maxDigits; i++) {
            const char = cleaned[i];
            if (/\d/.test(char)) {
              result += char;
              digitCount++;
            } else if (/[\s\-()]/.test(char)) {
              result += char;
            }
          }
          cleaned = result;
        }
      }

      setFormData({ ...formData, [name]: cleaned });
      try {
        await careerSchema.validateAt(name, { ...formData, [name]: cleaned });
        setErrors((prev) => ({ ...prev, [name]: "" }));
      } catch (err: any) {
        setErrors((prev) => ({ ...prev, [name]: err.message }));
      }
      return;
    }

    if (name === "name") {
      const filtered = value.replace(/[^a-zA-Z0-9 ]/g, "");
      setFormData({ ...formData, [name]: filtered });
      try {
        await careerSchema.validateAt(name, { ...formData, [name]: filtered });
        setErrors((prev) => ({ ...prev, [name]: "" }));
      } catch (err: any) {
        setErrors((prev) => ({ ...prev, [name]: err.message }));
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
    try {
      await careerSchema.validateAt(name, { ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (err: any) {
      setErrors((prev) => ({ ...prev, [name]: err.message }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        cvData: "Please upload a PDF or Word document.",
      }));
      return;
    }

    const maxSize = 7 * 1024 * 1024; // 7 MB
    if (file.size > maxSize) {
      setErrors((prev) => ({
        ...prev,
        cvData: "File is too large. Please keep it under 7MB.",
      }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        cvFileName: file.name,
        cvFileType: file.type,
        cvData: reader.result as string,
      }));
      setErrors((prev) => ({ ...prev, cvData: "" }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await careerSchema.validate(formData, { abortEarly: false });

      await axios.post("/api/careerApplication", {
        ...formData,
        role: roleFromQuery,
      });

      toast.success("Application submitted successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        experience: "",
        message: "",
        cvFileName: "",
        cvFileType: "",
        cvData: "",
      });
      setErrors({});
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: Record<string, string> = {};
        const errorMessages: string[] = [];

        err.inner.forEach((error: any) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
            errorMessages.push(error.message);
          }
        });

        setErrors(validationErrors);

        if (errorMessages.length > 0) {
          toast.error(errorMessages[0], {
            duration: 5000,
          });
        }
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Failed to submit application. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box position="relative" overflow="hidden">
      <EnhancedSEO
        title={`Apply - ${roleFromQuery} | Tech Emulsion`}
        description={`Apply for the ${roleFromQuery} role at Tech Emulsion.`}
        pageType="about"
        canonicalUrl="https://techemulsion.com/careers-apply"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Careers", url: "https://techemulsion.com/careers" },
            {
              name: `Apply - ${roleFromQuery}`,
              url: "https://techemulsion.com/careers-apply",
            },
          ],
        }}
      />
      <Container maxW="container.xl" py={{ base: 14, lg: 20 }}>
        <BackgroundGradient height="100%" zIndex="-1" />

        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
          mb={10}>
          <Box>
            <Heading as="h2" size="lg">
              Apply for {roleFromQuery}
            </Heading>
            <Text
              color={textColor}
              fontSize="lg"
              mt="4"
              mr={10}
              width={["70%", null, "auto"]}>
              Share a few details and your CV so we can review your profile for
              the {roleFromQuery} role at Tech Emulsion.
            </Text>
          </Box>

          <VStack
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4">
            <ButtonGroup
              style={{
                backgroundColor: " none",
                fontSize: "lg",
                color: "muted",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Home
              </ButtonLink>
              <FaChevronRight size={15} />
              <ButtonLink
                href="/careers"
                size="lg"
                sx={{
                  bg: "none",
                  color: "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Careers
              </ButtonLink>
              <FaChevronRight size={15} />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                }}>
                Apply
              </Text>
            </ButtonGroup>
          </VStack>
        </Box>

        <Box
          border="1px solid"
          borderColor={borderColor}
          borderRadius="2xl"
          p={{ base: 6, lg: 10 }}
          bg={cardBg}
          boxShadow="lg">
          <Stack spacing={4} mb={6}>
            <Heading as="h2" size="lg">
              Application Form
            </Heading>
            <Text color={textColor} maxW="720px">
              Please fill out the form below and attach your CV. We&apos;ll get
              back to you via email.
            </Text>
          </Stack>

          <Box as="form" onSubmit={handleSubmit}>
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={5}
              mb={5}>
              <Box flex={1}>
                <Text mb={2} fontWeight="600">
                  Full name
                </Text>
                <Input
                  name="name"
                  placeholder="Enter your name"
                  sx={inputStyles(colorMode)}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <Text color="red.500" fontSize="sm" mt={2}>
                    {errors.name}
                  </Text>
                )}
              </Box>
              <Box flex={1}>
                <Text mb={2} fontWeight="600">
                  Email
                </Text>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  sx={inputStyles(colorMode)}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <Text color="red.500" fontSize="sm" mt={2}>
                    {errors.email}
                  </Text>
                )}
              </Box>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              gap={5}
              mb={5}>
              <Box flex={1}>
                <Text mb={2} fontWeight="600">
                  Phone
                </Text>
                <Input
                  name="phone"
                  placeholder="Phone (e.g., +1234567890)"
                  sx={inputStyles(colorMode)}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <Text color="red.500" fontSize="sm" mt={2}>
                    {errors.phone}
                  </Text>
                )}
              </Box>
              <Box flex={1}>
                <Text mb={2} fontWeight="600">
                  Experience
                </Text>
                <Input
                  name="experience"
                  placeholder="e.g., 3+ years"
                  sx={inputStyles(colorMode)}
                  value={formData.experience}
                  onChange={handleChange}
                />
                {errors.experience && (
                  <Text color="red.500" fontSize="sm" mt={2}>
                    {errors.experience}
                  </Text>
                )}
              </Box>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              gap={5}
              mb={5}>
              <Box flex={1}>
                <Text mb={2} fontWeight="600">
                  LinkedIn (optional)
                </Text>
                <Input
                  name="linkedin"
                  placeholder="LinkedIn profile URL"
                  sx={inputStyles(colorMode)}
                  value={formData.linkedin}
                  onChange={handleChange}
                />
                {errors.linkedin && (
                  <Text color="red.500" fontSize="sm" mt={2}>
                    {errors.linkedin}
                  </Text>
                )}
              </Box>
              <Box flex={1}>
                <Text mb={2} fontWeight="600">
                  Portfolio / GitHub (optional)
                </Text>
                <Input
                  name="portfolio"
                  placeholder="Portfolio or GitHub URL"
                  sx={inputStyles(colorMode)}
                  value={formData.portfolio}
                  onChange={handleChange}
                />
                {errors.portfolio && (
                  <Text color="red.500" fontSize="sm" mt={2}>
                    {errors.portfolio}
                  </Text>
                )}
              </Box>
            </Flex>

            <Box mb={5}>
              <Text mb={2} fontWeight="600">
                Short note / cover summary
              </Text>
              <Textarea
                name="message"
                placeholder="Tell us briefly why you’d be a great fit."
                sx={{
                  padding: "2rem",
                  border: "none",
                  color: colorMode === "dark" ? "white" : "gray.700",
                  fontWeight: 500,
                  fontSize: "lg",
                  minHeight: "200px",
                  borderRadius: "none",
                  _focusVisible: {
                    borderBottom: "2px solid #004c4c",
                    color: "none",
                  },
                  mb: {
                    base: 2,
                    md: 0,
                  },
                  backgroundColor:
                    colorMode === "dark" ? "gray.700" : "gray.50",
                }}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <Text color="red.500" fontSize="sm" mt={2}>
                  {errors.message}
                </Text>
              )}
            </Box>

            <Box mb={5}>
              <Text mb={2} fontWeight="600">
                Upload CV (PDF or Word)
              </Text>
              <Input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                sx={{
                  padding: "0.75rem",
                  border: "1px dashed",
                  borderColor: errors.cvData ? "red.500" : borderColor,
                  borderRadius: "md",
                  backgroundColor: colorMode === "dark" ? "gray.700" : "gray.50",
                }}
              />
              <Text fontSize="sm" color={textColor} mt={2}>
                Max size 7MB. We&apos;ll send it to the same inbox as contact
                requests.
              </Text>
              {(formData.cvFileName || errors.cvData) && (
                <Text
                  fontSize="sm"
                  mt={2}
                  color={errors.cvData ? "red.500" : textColor}>
                  {errors.cvData
                    ? errors.cvData
                    : `Selected: ${formData.cvFileName}`}
                </Text>
              )}
            </Box>

            <Box mt={6} display="flex" justifyContent="center">
              <Button
                colorScheme="teal"
                size="lg"
                type="submit"
                disabled={loading}>
                {loading ? (
                  <CircularProgress isIndeterminate color="white" size={6} />
                ) : (
                  "Submit Application"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CareersApply;

