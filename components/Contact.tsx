import {
  Box,
  Button,
  CircularProgress,
  Container,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";

// Updated validation schema
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z0-9 ]*$/, "Name cannot contain special characters")
    .required("Name is required"),
  company: Yup.string()
    .matches(/^[a-zA-Z0-9 ]*$/, "Company cannot contain special characters")
    .required("Company is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[^@]+@[^@]+\.[^@]+$/,
      "Email must contain a dot (.) after the @",
    ),
  phone: Yup.string()
    .matches(/^[0-9+]*$/, "Phone can only contain numbers and +")
    .required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // For phone: allow only numbers and +
    if (name === "phone") {
      const filtered = value.replace(/[^0-9+]/g, "");
      setFormData({ ...formData, [name]: filtered });
      try {
        await contactSchema.validateAt(name, { ...formData, [name]: filtered });
        setErrors((prev: any) => ({ ...prev, [name]: "" }));
      } catch (err: any) {
        setErrors((prev: any) => ({ ...prev, [name]: err.message }));
      }
      return;
    }

    // For name and company: allow only letters, numbers, and spaces
    if (name === "name" || name === "company") {
      const filtered = value.replace(/[^a-zA-Z0-9 ]/g, "");
      setFormData({ ...formData, [name]: filtered });
      try {
        await contactSchema.validateAt(name, { ...formData, [name]: filtered });
        setErrors((prev: any) => ({ ...prev, [name]: "" }));
      } catch (err: any) {
        setErrors((prev: any) => ({ ...prev, [name]: err.message }));
      }
      return;
    }

    setFormData({ ...formData, [name]: value });

    // Validate field on change
    try {
      await contactSchema.validateAt(name, { ...formData, [name]: value });
      setErrors((prev: any) => ({ ...prev, [name]: "" }));
    } catch (err: any) {
      setErrors((prev: any) => ({ ...prev, [name]: err.message }));
    }
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactSchema.validate(formData, { abortEarly: false });
      await axios.post("/api/sendEmail", formData);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      toast.success("Message sent successfully");
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: any = {};
        err.inner.forEach((error: any) => {
          if (error.path) validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
        toast.error("Please fix the errors in the form.");
      } else if (
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Failed to send message");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 20 }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          alignItems="flex-start">
          <Box
            display={{ base: "block", md: "flex" }}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
            mb={10}>
            <Box
              display={{ base: "block", md: "flex" }}
              px="15"
              mt={10}
              justifyContent={"space-between"}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="4"
                width="100%">
                <Heading
                  as="h2"
                  size="md"
                  color={colorMode === "dark" ? "white" : "teal.500"}
                  sx={{
                    textTransform: "uppercase",
                  }}>
                  Contact Us
                </Heading>
                <Heading
                  as="h1"
                  mt="2"
                  sx={{
                    fontSize: {
                      base: "2rem",
                      md: "2rem",
                    },
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  Have an Idea? We Can Help You Build It.
                </Heading>
                <Text
                  color={textColor}
                  fontSize="lg"
                  fontWeight={"500"}
                  mt="4"
                  width={{ base: "100%", lg: "60%" }}
                  textAlign="center"
                  alignItems="center"
                  px="2">
                  {`Got an idea you're excited about? We're here to help you turn it into reality.
                  Our team of experts is ready to collaborate with you, providing the support and expertise needed to bring your vision to life.
                  Contact us today to get started on your project!`}
                </Text>
              </Box>
            </Box>
            {/* contact form name company email phone and text area */}
            <Box
              as="form"
              onSubmit={handleSubmit}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
              mt="10">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="6"
                  width={{ base: "100%", md: "70%" }}
                  px={{ base: 4, lg: 0 }}>
                  <Box
                    display={{
                      base: "block",
                      md: "flex",
                    }}
                    flexDirection={["column", "row"]}
                    justifyContent="center"
                    alignItems="flex-start"
                    width="100%"
                    gap={{
                      base: 4,
                      md: 4,
                    }}>
                    <Box flex={1}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        sx={{
                          padding: "2rem",
                          border: "none",
                          fontWeight: 500,
                          color: colorMode === "dark" ? "white" : "gray.00",
                          fontSize: "1rem",
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
                          backgroundColor:
                            colorMode === "dark" ? "gray.700" : "gray.50",
                          _placeholder: {
                            color:
                              colorMode === "dark" ? "gray.400" : "gray.500",
                          },
                        }}
                        value={formData.name}
                        onChange={handleChange}
                        errorBorderColor="red.500"
                        onFocus={() => handleFocus("name")}
                        onBlur={handleBlur}
                      />
                      {focusedField === "name" && errors.name && (
                        <Text color="red.500" fontSize="sm" mt={2} mb={2}>
                          {errors.name}
                        </Text>
                      )}
                    </Box>
                    <Box flex={1}>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company"
                        sx={{
                          padding: "2rem",
                          border: "none",
                          fontWeight: 500,
                          color: colorMode === "dark" ? "white" : "gray.00",
                          fontSize: "1rem",
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
                          backgroundColor:
                            colorMode === "dark" ? "gray.700" : "gray.50",
                          _placeholder: {
                            color:
                              colorMode === "dark" ? "gray.400" : "gray.500",
                          },
                        }}
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus("company")}
                        onBlur={handleBlur}
                      />
                      {focusedField === "company" && errors.company && (
                        <Text color="red.500" fontSize="sm" mt={2} mb={2}>
                          {errors.company}
                        </Text>
                      )}
                    </Box>
                  </Box>
                  <Box
                    display={{ base: "block", md: "flex" }}
                    flexDirection={["column", "row"]}
                    justifyContent="center"
                    alignItems="flex-start"
                    width="100%"
                    gap={4}>
                    <Box flex={1}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        sx={{
                          padding: "2rem",
                          border: "none",
                          fontWeight: 500,
                          color: colorMode === "dark" ? "white" : "gray.00",
                          fontSize: "1rem",
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
                          backgroundColor:
                            colorMode === "dark" ? "gray.700" : "gray.50",
                          _placeholder: {
                            color:
                              colorMode === "dark" ? "gray.400" : "gray.500",
                          },
                        }}
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                      />
                      {focusedField === "email" && errors.email && (
                        <Text color="red.500" fontSize="sm" mt={2} mb={2}>
                          {errors.email}
                        </Text>
                      )}
                    </Box>
                    <Box flex={1}>
                      <Input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        sx={{
                          padding: "2rem",
                          border: "none",
                          fontWeight: 500,
                          color: colorMode === "dark" ? "white" : "gray.00",
                          fontSize: "1rem",
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
                          backgroundColor:
                            colorMode === "dark" ? "gray.700" : "gray.50",
                          _placeholder: {
                            color:
                              colorMode === "dark" ? "gray.400" : "gray.500",
                          },
                        }}
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={handleBlur}
                      />
                      {focusedField === "phone" && errors.phone && (
                        <Text color="red.500" fontSize="sm" mt={2} mb={2}>
                          {errors.phone}
                        </Text>
                      )}
                    </Box>
                  </Box>
                  <Box width="100%">
                    <Textarea
                      name="message"
                      placeholder="Message"
                      sx={{
                        padding: "2rem",
                        border: "none",
                        color: colorMode === "dark" ? "white" : "gray.700",
                        fontWeight: 500,
                        fontSize: "1rem",
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
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                    />
                    {focusedField === "message" && errors.message && (
                      <Text color="red.500" fontSize="sm" mt={2} mb={2}>
                        {errors.message}
                      </Text>
                    )}
                  </Box>
                  <Button
                    size="lg"
                    variant="solid"
                    sx={{
                      backgroundColor: "teal.500",
                      color: "white",
                      _hover: {
                        backgroundColor: "teal.600",
                      },
                    }}
                    type="submit"
                    disabled={loading}>
                    {loading ? (
                      <CircularProgress
                        isIndeterminate
                        color="white"
                        size={7}
                      />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
