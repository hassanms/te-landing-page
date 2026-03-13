import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Collapse,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import toast from "react-hot-toast";

type FeedbackType = "Honest Feedback" | "Complaint" | "Improvement Suggestion";

const feedbackTypes: FeedbackType[] = [
  "Honest Feedback",
  "Complaint",
  "Improvement Suggestion",
];

const priorityLevels = ["Low", "Medium", "High", "Urgent"] as const;

const FeedbackPage = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  const [feedbackType, setFeedbackType] = useState<FeedbackType | "">(
    "Honest Feedback",
  );
  const [isAnonymous, setIsAnonymous] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const resetForm = () => {
    setFeedbackType("");
    setIsAnonymous(true);
    setName("");
    setPriority("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!feedbackType) {
      toast.error("Please select a feedback type.");
      return;
    }

    if (!subject.trim()) {
      toast.error("Subject is required.");
      return;
    }

    if (!message.trim()) {
      toast.error("Detailed message is required.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/feedback", {
        feedbackType,
        isAnonymous,
        name: name.trim(),
        priority,
        subject: subject.trim(),
        message: message.trim(),
      });

      toast.success("Thank you! Your feedback has been submitted.");
      resetForm();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Head>
        <title>Voice of Our Team - Employee Feedback | Tech Emulsion</title>
      </Head>
      <EnhancedSEO
        title="Voice of Our Team - Employee Feedback"
        description="Share your thoughts, ideas, and concerns with leadership. Your feedback shapes our company."
        pageType="contact"
        canonicalUrl="https://techemulsion.com/feedback"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Employee Feedback", url: "https://techemulsion.com/feedback" },
          ],
        }}
      />

      <Box position="relative" minH="100vh" color={headingColor}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={-1}
          overflow="hidden"
          pointerEvents="none"
        >
          <BackgroundGradient height="100%" width="100%" />
        </Box>

        <Box pt={{ base: 20, md: 24 }} />
        <Container maxW="container.xl" pt={6} pb={20} position="relative" zIndex={1}>
          {/* <Flex justify="flex-end" mb={8} display={{ base: "none", md: "flex" }}>
            <ButtonGroup
              sx={{
                bg: "none",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: textColor,
                  p: 0,
                  "&:hover": { bg: "none", color: headingColor },
                }}
              >
                Home
              </ButtonLink>
              <Icon as={FaChevronRight} color={textColor} boxSize={4} />
              <Text as="span" ml="2" color={headingColor}>
                Employee Feedback
              </Text>
            </ButtonGroup>
          </Flex> */}

          <Box
            minH={{ base: "280px", md: "35vh" }}
            display={{ base: "block", md: "grid" }}
            gridTemplateColumns={{ md: "1fr 1fr" }}
            borderTopWidth={{ base: 0, md: "1px" }}
            borderColor={dividerColor}
            mx={-6}
            px={6}
          >
            <Box
              py={8}
              pr={{ base: 0, md: 6 }}
              display="flex"
              alignItems="flex-start"
              borderRightWidth={{ md: "1px" }}
              borderColor={dividerColor}
              sx={{
                borderColor: "gray.200 !important",
                _dark: { borderColor: "gray.600 !important" },
              }}
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Voice of Our Team
              </Heading>
            </Box>

            <Box
              pl={{ base: 0, md: 6 }}
              py={{ base: 4, md: 8 }}
              display="flex"
              alignItems={{ base: "flex-start", md: "flex-end" }}
              justifyContent={{ base: "flex-start", md: "flex-end" }}
            >
              <Text
                color={textColor}
                fontSize="16px"
                lineHeight="tall"
                textAlign={{ base: "left", md: "left" }}
                maxW={{ md: "420px" }}
              >
                Your feedback shapes our company. Share your thoughts openly,
                whether it&apos;s appreciation, a concern, or an idea to make
                things better.
              </Text>
            </Box>
          </Box>

          <Box
            bg="transparent"
            py={2}
            px={6}
            mx={-6}
            borderTopWidth="1px"
            borderColor={dividerColor}
          />

          <Box
            as="form"
            onSubmit={handleSubmit}
            mt={10}
            maxW="800px"
            mx="auto"
          >
            <Stack spacing={8}>
              <FormControl isRequired>
                <FormLabel fontWeight="semibold" color={headingColor}>
                  Feedback Type
                </FormLabel>
                <ButtonGroup isAttached flexWrap="wrap" gap={2}>
                  {feedbackTypes.map((type) => {
                    const isSelected = feedbackType === type;
                    return (
                      <Button
                        key={type}
                        onClick={() => setFeedbackType(type)}
                        variant={isSelected ? "solid" : "outline"}
                        colorScheme="teal"
                        bg={isSelected ? "teal.500" : "transparent"}
                        color={isSelected ? "white" : textColor}
                        _hover={{
                          bg: isSelected
                            ? "teal.600"
                            : "rgba(0, 76, 76, 0.12)",
                          color: isSelected ? "white" : headingColor,
                        }}
                      >
                        {type}
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </FormControl>

              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="anonymous" mb="0" fontWeight="semibold">
                  Submit Anonymously
                </FormLabel>
                <Switch
                  id="anonymous"
                  isChecked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  colorScheme="teal"
                />
              </FormControl>

              <Collapse in={!isAnonymous} animateOpacity style={{ overflow: "visible" }}>
                <FormControl>
                  <FormLabel fontWeight="semibold" color={headingColor}>
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    bg={useColorModeValue("gray.50", "gray.700")}
                  />
                </FormControl>
              </Collapse>

              <FormControl>
                <FormLabel fontWeight="semibold" color={headingColor}>
                  Priority Level
                </FormLabel>
                <Select
                  placeholder="Select priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  bg={useColorModeValue("gray.50", "gray.700")}
                >
                  {priorityLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="semibold" color={headingColor}>
                  Subject / Title
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Give a brief subject for your feedback"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  bg={useColorModeValue("gray.50", "gray.700")}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="semibold" color={headingColor}>
                  Detailed Message
                </FormLabel>
                <Textarea
                  placeholder="Share as much detail as you feel comfortable. Examples, context, and suggestions are very helpful."
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  bg={useColorModeValue("gray.50", "gray.700")}
                />
              </FormControl>

              <Box textAlign="center">
                <Button
                  type="submit"
                  size="lg"
                  colorScheme="teal"
                  bg="teal.500"
                  color="white"
                  _hover={{ bg: "teal.600" }}
                  isDisabled={loading}
                >
                  {loading ? (
                    <CircularProgress
                      isIndeterminate
                      color="white"
                      size={6}
                    />
                  ) : (
                    "Submit Feedback"
                  )}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FeedbackPage;

