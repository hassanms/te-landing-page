import type { NextPage } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Link,
  Divider,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link/button-link";

const BlogPost: NextPage = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const bgColor = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "white");
  const sidebarBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Table of Contents items
  const tocItems = [
    { id: "introduction", label: "Introduction" },
    { id: "the-real-problem", label: "The Real Problem" },
    { id: "the-shift", label: "The Shift" },
    { id: "the-field-explained", label: "The Field Explained" },
    { id: "examples", label: "Examples" },
    { id: "how-agencies-should-package", label: "How Agencies Should Package This" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "the-next-step", label: "The Next Step" },
  ];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(
        (section: any) => section.top <= 100 && section.bottom >= 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box bg={bgColor} minH="100vh" py="20">
      <EnhancedSEO
        title="AI Systems Engineering: Why AI Apps Will Get Commoditized and AI Systems Will Not - Tech Emulsion"
        description="AI apps are becoming easy to build. Reliable AI systems are not. That difference will decide which software agencies survive the next decade. Learn about AI Systems Engineering and why it matters."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog/ai-systems-engineering"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Insights", url: "https://techemulsion.com/blog" },
            {
              name: "AI Systems Engineering: Why AI Apps Will Get Commoditized and AI Systems Will Not",
              url: "https://techemulsion.com/blog/ai-systems-engineering",
            },
          ],
        }}
      />
      <Head>
        <title>AI Systems Engineering: Why AI Apps Will Get Commoditized and AI Systems Will Not - Tech Emulsion</title>
      </Head>

      <Container maxW="container.xl" py="10">
        {/* Header Section with Title and Breadcrumb */}
        {/* Breadcrumb Navigation - Top */}
        <Box px="15" mt={10} mb="4">
          <ButtonGroup
            style={{
              backgroundColor: " none",
              fontSize: "1rem",
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
            {/* @ts-ignore - react-icons type compatibility */}
            <FaChevronRight size={15} />
            <ButtonLink
              href="/blog"
              size="lg"
              sx={{
                bg: "none",
                color: "muted",
                padding: "0",
                "&:hover": {
                  bg: "none",
                },
              }}>
              Insights
            </ButtonLink>
            {/* @ts-ignore - react-icons type compatibility */}
            <FaChevronRight size={15} />
            <Text
              as="span"
              ml="2"
              sx={{
                color: colorMode === "light" ? "#004c4c !important" : "white",
              }}>
              AI & ML Development
            </Text>
          </ButtonGroup>
        </Box>

        {/* Title - Below Breadcrumb */}
        <Box px="15" mb="8">
          <Heading as="h1" size="3xl" color={titleColor} fontWeight="normal" lineHeight="1.2" mb="4">
            AI Systems Engineering: Why "AI Apps" Will Get Commoditized and "AI Systems" Will Not
          </Heading>
        </Box>

        {/* Author Info with Vertical Line */}
        <Box
          position="relative"
          pl="4"
          mb="8"
          borderLeft="4px solid"
          borderColor="teal.500"
          maxW={{ base: "100%", lg: "800px" }}>
          <VStack align="flex-start" spacing="1">
            <Text fontSize="sm" fontWeight="semibold" color={titleColor}>
              Written by:
            </Text>
            <Text fontSize="sm" color={textColor}>
              Hassan Sid
            </Text>
            <Text fontSize="sm" color={textColor}>
              January 8, 2026
            </Text>
          </VStack>
        </Box>

        {/* Two Column Layout: Table of Contents (Left) and Content (Right) */}
        <Stack direction={{ base: "column", lg: "row" }} spacing="8" align="flex-start">
          {/* Left Sidebar - Table of Contents (Sticky) */}
          <Box
            display={{ base: "none", lg: "block" }}
            w={{ base: "100%", lg: "300px" }}
            flexShrink={0}
            position={{ base: "relative", lg: "sticky" }}
            top={{ base: "0", lg: "100px" }}
            alignSelf="flex-start"
            maxH={{ base: "none", lg: "calc(100vh - 120px)" }}
            overflowY={{ base: "visible", lg: "auto" }}>
            <Box
              bg={sidebarBg}
              p="6"
              borderRadius="lg"
              border="1px solid"
              borderColor={borderColor}>
              <Heading as="h3" size="md" mb="4" color={titleColor}>
                Table of Contents
              </Heading>
              <VStack align="stretch" spacing="2">
                {tocItems.map((item, idx) => (
                  <Box key={idx}>
                    <Link
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      _hover={{ textDecoration: "none" }}>
                      <Text
                        fontSize="sm"
                        color={
                          activeSection === item.id
                            ? "teal.500"
                            : colorMode === "dark"
                            ? "lightGrey.400"
                            : "gray.600"
                        }
                        fontWeight={activeSection === item.id ? "semibold" : "normal"}
                        _hover={{
                          color: "teal.500",
                        }}
                        transition="color 0.2s">
                        {item.label}
                      </Text>
                    </Link>
                    {idx < tocItems.length - 1 && <Divider mt="2" />}
                  </Box>
                ))}
              </VStack>

              {/* Solutions & Services Section */}
              <Box mt="8" pt="6" borderTop="1px solid" borderColor={borderColor}>
                <Heading as="h3" size="md" mb="4" color={titleColor}>
                  Solutions & Services
                </Heading>
                <VStack align="stretch" spacing="3">
                  {[
                    "Agentic AI Engineering",
                    "Next-Gen SaaS Development",
                    "Innovative Website Development",
                    "Custom Chrome Extensions",
                    "Expert DevOps Solutions",
                    "Generative AI Integration",
                    "QA Testing & Automation",
                    "Automation Solutions",
                  ].map((service, idx) => (
                    <NextLink key={idx} href="/services" passHref>
                      <Link
                        color={textColor}
                        fontSize="sm"
                        _hover={{
                          color: "teal.500",
                          textDecoration: "none",
                        }}>
                        {service}
                      </Link>
                    </NextLink>
                  ))}
                </VStack>
              </Box>
            </Box>
          </Box>

          {/* Right Column - Blog Content */}
          <Box flex="1" maxW={{ base: "100%", lg: "800px" }}>
            <VStack align="stretch" spacing="6">
              {/* Featured Image */}
              <Box
                w="100%"
                h="400px"
                bg="charcoal.800"
                borderRadius="lg"
                overflow="hidden"
                mb="8"
                sx={{
                  backgroundImage:
                    "url(/assets/blog/AI-Systems-Engineering.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Introduction Paragraph - After Image */}
              <Box mb="8">
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  AI apps are becoming easy to build.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  Reliable AI systems are not.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  That difference will decide which software agencies survive the next decade.
                </Text>
              </Box>

              {/* Section: The Real Problem */}
              <Box id="the-real-problem" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Real Problem
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Many agencies are rushing to build AI features. Chatbots. AI assistants. Smart dashboards. Auto responders. These demos often look impressive. They work well in controlled scenarios and early pilots. But once they are exposed to real users, real data, and real business pressure, cracks start to appear.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The AI gives inconsistent answers. It misunderstands edge cases. It triggers the wrong actions. It escalates too often or not enough. Costs grow unpredictably. Trust slowly erodes.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The client does not say the system is broken. They say something more dangerous.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  They say it feels unreliable.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This is the moment when excitement turns into disappointment, and many AI projects quietly stall.
                </Text>
              </Box>

              {/* Section: The Shift */}
              <Box id="the-shift" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Shift
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The mistake is thinking the value lies in the AI itself.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Models are getting better every month. Access is getting cheaper. Everyone can plug into the same APIs. When everyone can build an AI app, the app itself stops being the advantage.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The real shift is this.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Value moves from AI outputs to system design.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The agencies that win are not the ones who ask what the model should say. They are the ones who decide when the model should act, what it is allowed to do, how its output is verified, and what happens when it is uncertain.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  That discipline is called AI Systems Engineering.
                </Text>
              </Box>

              {/* Section: The Field Explained */}
              <Box id="the-field-explained" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Field Explained
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  AI Systems Engineering is the practice of building AI into controlled, production ready systems that run real workflows.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  In this model, AI is not the boss. It is a specialist.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The system has clear layers. There is an orchestration layer that controls flow and state. There are integrations that connect calendars, CRMs, databases, and internal tools. There are rules that define boundaries and escalation paths. There are validations that prevent bad outputs from causing damage.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The AI is used where it is strong. Understanding language. Extracting intent. Summarizing context. Classifying inputs. Suggesting next steps.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  But decisions, permissions, and execution remain governed by the system.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This is what separates an AI app from an AI system.
                </Text>
              </Box>

              {/* Section: Examples */}
              <Box id="examples" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Examples
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Consider a booking assistant.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  An AI app simply talks to the user and tries to schedule something. When it fails, it fails silently.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  An AI system checks availability from the calendar. Confirms duration rules. Applies business hours. Validates location and service area. Uses AI only to understand the request and collect missing details. If anything is unclear, it escalates.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Or take customer support.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  An AI app replies to tickets.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  An AI system classifies tickets, drafts responses, checks policy rules, flags risk, routes edge cases to humans, logs outcomes, and measures resolution quality.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  In both cases, the value is not the response. The value is the controlled flow.
                </Text>
              </Box>

              {/* Section: How Agencies Should Package This */}
              <Box id="how-agencies-should-package" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  How Agencies Should Package This
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  AI Systems Engineering should never be sold as building a feature.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  It should be sold as building an operational system.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A strong engagement starts with defining the workflow. Inputs. Outputs. Decisions. Failure modes. Escalation rules. Success metrics.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Then the system is built with clear ownership and monitoring. Finally, it is run in production with feedback loops and continuous improvement.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  When packaged this way, pricing moves away from hours and toward outcomes. Clients stop comparing you to cheaper builders because you are no longer selling code. You are selling reliability.
                </Text>
              </Box>

              {/* Section: Common Mistakes */}
              <Box id="common-mistakes" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Common Mistakes
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The most common mistake is letting the AI control the flow.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Another is shipping without monitoring. If you cannot see how the system behaves, you cannot improve it.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Many teams also skip validation and allow free form outputs to trigger actions. This works until it does not.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Finally, some teams over optimize for clever prompts instead of system design. Prompts matter, but they are not the foundation.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Systems are.
                </Text>
              </Box>

              {/* Section: The Next Step */}
              <Box id="the-next-step" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Next Step
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  If you are building AI today, ask yourself a simple question.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  If this system runs at ten times the volume tomorrow, will it become more reliable or more chaotic.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  If the answer is chaotic, you are building an AI app.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  If the answer is reliable, you are building an AI system.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  That difference is the moat.
                </Text>
              </Box>

              {/* Related Articles */}
              <Box mt="12" pt="8" borderTop="1px solid" borderColor={borderColor}>
                <Heading as="h2" size="lg" color={titleColor} mb="6">
                  Read What Next
                </Heading>
                <VStack align="stretch" spacing="4">
                  <NextLink href="/blog/productized-internal-tools" passHref>
                    <Link
                      display="block"
                      p="4"
                      border="1px solid"
                      borderColor={borderColor}
                      borderRadius="lg"
                      _hover={{
                        textDecoration: "none",
                        borderColor: "teal.500",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.3s">
                      <Text
                        fontSize="sm"
                        color="teal.500"
                        textTransform="uppercase"
                        mb="2">
                        Business Strategy
                      </Text>
                      <Heading as="h3" size="md" color={titleColor} mb="2">
                        Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities
                      </Heading>
                      <Text fontSize="sm" color={textColor}>
                        January 14, 2026
                      </Text>
                    </Link>
                  </NextLink>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogPost;
