import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BackgroundGradient } from "./gradients/background-gradient";
import { ButtonLink } from "./button-link";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const { colorMode } = useColorMode();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios
        .post("/api/sendEmail", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error("Failed to send message:", error);
          toast.success("Message sent successfully");
        });
      toast.success("Message sent successfully");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message");
    }
  };

  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 20 }} pb="40">
        <Stack
          direction={{ base: "column", lg: "row" }}
          alignItems="flex-start"
        >
          <Box
            display={{ base: "block", md: "flex" }}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
            mb={10}
          >
            <Box
              display={{ base: "block", md: "flex" }}
              px="15"
              mt={10}
              justifyContent={"space-between"}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="4"
                width="100%"
              >
                <Heading
                  as="h2"
                  size="lg"
                  color={colorMode === "dark" ? "white" : "#004c4c"}
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  CONTACT
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
                  }}
                >
                  Have an Project in Mind?
                </Heading>
                <Text
                  color="gray.400"
                  fontSize="lg"
                  fontWeight={"500"}
                  mt="4"
                  width={"60%"}
                  align={"center"}
                >
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </Text>
              </Box>

              {/* Explore services */}
            </Box>
            {/* contant form name company email phone and text area */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
              mt="10"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="10"
                width="100%"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="10"
                  width={{ base: "100%", md: "70%" }}
                >
                  <Box
                    display={{ base: "block", md: "flex" }}
                    flexDirection={["column", "row"]}
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    gap={{
                      base: 4,
                      md: 4,
                    }}
                  >
                    <Input
                      type="text"
                      placeholder="Name"
                      sx={{
                        padding: "1rem",
                        borderBottom: "1px solid gray.400",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "none",
                        _focusVisible: {
                          borderBottom: "1px solid #004c4c",
                          color: "none",
                        },
                        mb: {
                          base: 8,
                          md: 0,
                        },
                      }}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        });
                      }}
                    />
                    <Input
                      type="text"
                      placeholder="Company"
                      sx={{
                        padding: "1rem",
                        borderBottom: "1px solid gray.400",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "none",
                        _focusVisible: {
                          borderBottom: "1px solid #004c4c",
                          color: "none",
                        },
                      }}
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        });
                      }}
                    />
                  </Box>
                  <Box
                    display={{ base: "block", md: "flex" }}
                    flexDirection={["column", "row"]}
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    gap={4}
                  >
                    <Input
                      type="email"
                      placeholder="Email"
                      sx={{
                        padding: "1rem",
                        borderBottom: "1px solid gray.400",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "none",
                        _focusVisible: {
                          borderBottom: "1px solid #004c4c",
                          color: "none",
                        },
                        mb: {
                          base: 8,
                          md: 0,
                        },
                      }}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}
                    />
                    <Input
                      type="tel"
                      placeholder="Phone"
                      sx={{
                        padding: "1rem",
                        borderBottom: "1px solid gray.400",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "none",
                        _focusVisible: {
                          borderBottom: "1px solid #004c4c",
                          color: "none",
                        },
                      }}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        });
                      }}
                    />
                  </Box>
                  <Textarea
                    placeholder="Message"
                    sx={{
                      padding: "1rem",
                      borderBottom: "1px solid gray.400",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderRadius: "none",
                      _focusVisible: {
                        borderBottom: "1px solid #004c4c",
                        color: "none",
                      },
                    }}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      });
                    }}
                  />
                  <Button
                    size="lg"
                    variant="solid"
                    sx={{
                      backgroundColor: "#004c4c",
                      color: "white",
                      _hover: {
                        backgroundColor: "#006666",
                      },
                    }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
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
