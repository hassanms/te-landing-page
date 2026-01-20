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
      const sections = tocItems
        .map((item) => {
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
        })
        .filter(Boolean);

      const current = (sections as any[]).find(
        (section) => section.top <= 100 && section.bottom >= 100,
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
        title="Automation First Consulting: The Pivot From Building Features to Building Outcomes - Tech Emulsion"
        description="Most businesses do not have a software problem. They have a workflow problem. Learn how automation first consulting pivots agencies from building features to building outcomes."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog/automation-first-consulting"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Insights", url: "https://techemulsion.com/blog" },
            {
              name: "Automation First Consulting: The Pivot From Building Features to Building Outcomes",
              url: "https://techemulsion.com/blog/automation-first-consulting",
            },
          ],
        }}
      />
      <Head>
        <title>
          Automation First Consulting: The Pivot From Building Features to Building Outcomes - Tech
          Emulsion
        </title>
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
              Business Strategy
            </Text>
          </ButtonGroup>
        </Box>

        {/* Title - Below Breadcrumb */}
        <Box px="15" mb="8">
          <Heading
            as="h1"
            size="3xl"
            color={titleColor}
            fontWeight="normal"
            lineHeight="1.2"
            mb="4">
            Automation First Consulting: The Pivot From Building Features to Building Outcomes
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
              January 9, 2026
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
                  backgroundImage: "url(/assets/blog/Automation-First-Consulting.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Introduction Paragraph - After Image */}
              <Box id="introduction" sx={{ scrollMarginTop: "100px" }} mb="8">
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  Most businesses do not have a software problem.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  They have a workflow problem.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  Automation first consulting exists to solve that difference.
                </Text>
              </Box>

              {/* Section: The Real Problem */}
              <Box id="the-real-problem" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Real Problem
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  For years, agencies have started projects by asking what features to build.
                  Dashboards, forms, integrations, portals, and reports. The result is usually a
                  working product that looks complete, but the business still feels slow and
                  chaotic.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Leads are still missed. Follow ups are inconsistent. Data lives in too many
                  places. Teams copy and paste between tools. Decisions depend on people
                  remembering what to do next.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The software exists, but the pain remains.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This happens because features do not fix operations. Workflows do.
                </Text>
              </Box>

              {/* Section: The Shift */}
              <Box id="the-shift" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Shift
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  AI and automation make it possible to build faster than ever. But speed alone does
                  not create value. The real shift is moving from feature delivery to operational
                  leverage.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Automation first consulting starts with one question.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Where is the business leaking time, money, or focus today.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Instead of asking what to build, you ask what breaks when volume increases.
                  Instead of asking what screen is missing, you ask where humans are acting as glue
                  between systems. Instead of asking what looks impressive, you ask what changes
                  outcomes.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  That change in thinking is the moat.
                </Text>
              </Box>

              {/* Section: The Field Explained */}
              <Box id="the-field-explained" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Field Explained
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Automation first consulting is the practice of redesigning how work flows through
                  a business, then using automation and AI to enforce that flow.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The consultant does not begin with tools. They begin with the process.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  They map how leads arrive, how work is assigned, how decisions are made, how
                  approvals happen, and where handoffs occur. They identify bottlenecks where work
                  slows down or fails. They look for repetitive decisions that do not require human
                  judgment.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Only after that map is clear do they design automation.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  AI is used to understand inputs, extract intent, classify requests, summarize
                  context, and suggest actions. Automation handles routing, sequencing, validation,
                  reminders, and state changes.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The result is not a feature. It is a new operating rhythm.
                </Text>
              </Box>

              {/* Section: Examples */}
              <Box id="examples" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Examples
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Consider a sales pipeline.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A feature focused approach builds a CRM dashboard.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  An automation first approach ensures every inbound lead is captured, enriched,
                  followed up within minutes, escalated when intent is high, and tracked until
                  closed or disqualified. The system decides what happens next. Humans step in only
                  where judgment is needed.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Or consider operations.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A feature focused approach builds an internal tool.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  An automation first approach removes manual approvals, auto routes requests,
                  enforces rules, flags exceptions, and produces visibility without meetings.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  In both cases, the value is not the interface. The value is the flow.
                </Text>
              </Box>

              {/* Section: How Agencies Should Package This */}
              <Box id="how-agencies-should-package" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  How Agencies Should Package This
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Automation first consulting should be sold as a transformation sprint, not an open
                  ended build.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A strong package includes a short discovery phase where workflows are mapped and
                  bottlenecks are identified. Then one high impact automation is implemented end to
                  end. Finally, results are measured and expanded.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This allows agencies to sell outcomes with a clear timeline. It also creates a
                  natural path to ongoing work, because workflows evolve and systems improve over
                  time.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  When clients see immediate relief, they stay.
                </Text>
              </Box>

              {/* Section: Common Mistakes */}
              <Box id="common-mistakes" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Common Mistakes
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A common mistake is automating the wrong thing. If you automate a broken process,
                  you only make the problem faster.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Another mistake is trying to automate everything at once. This creates complexity
                  and resistance.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Some teams also focus too much on tools instead of flow. Tools change. Good
                  process design lasts.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Finally, many teams skip measurement. If you cannot measure impact, you cannot
                  prove value.
                </Text>
              </Box>

              {/* Section: The Next Step */}
              <Box id="the-next-step" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Next Step
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  If you want to know whether automation first consulting applies to your work, ask
                  this question.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  If this business doubled in volume tomorrow, where would it break first.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  That answer is your starting point.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  Fix that, and you stop building features. You start building leverage.
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
                        Productized Internal Tools: The Agency Pivot From Custom Builds to
                        Repeatable Capabilities
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

