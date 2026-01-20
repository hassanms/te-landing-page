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
        title="Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities - Tech Emulsion"
        description="Custom projects feel flexible. They are also the hardest way to scale. Productized internal tools solve that problem. Learn how agencies can pivot from custom builds to repeatable capabilities."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog/productized-internal-tools"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Insights", url: "https://techemulsion.com/blog" },
            {
              name: "Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities",
              url: "https://techemulsion.com/blog/productized-internal-tools",
            },
          ],
        }}
      />
      <Head>
        <title>Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities - Tech Emulsion</title>
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
          <Heading as="h1" size="3xl" color={titleColor} fontWeight="normal" lineHeight="1.2" mb="4">
            Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities
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
              January 14, 2026
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
                    "url(/assets/blog/Productized-Internal-Tools.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Introduction Paragraph - After Image */}
              <Box mb="8">
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  Custom projects feel flexible.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  They are also the hardest way to scale.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  Productized internal tools solve that problem.
                </Text>
              </Box>

              {/* Section: The Real Problem */}
              <Box id="the-real-problem" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Real Problem
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Many agencies live in a cycle of custom work. Every client wants something slightly different. New requirements appear mid project. Timelines shift. Scope grows. Margins shrink.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Even when the work is successful, the agency starts again from zero with the next client. New specs. New architecture decisions. New edge cases. Very little of the previous work compounds.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  From the client side, custom projects feel risky. Outcomes are unclear. Timelines feel long. Maintenance feels expensive. Ownership is vague.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Both sides lose energy over time.
                </Text>
              </Box>

              {/* Section: The Shift */}
              <Box id="the-shift" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Shift
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  As software becomes easier to build, the real value shifts to repeatability.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Businesses do not want endless customization. They want specific capabilities that slot cleanly into how they already work. They want tools that solve one operational problem very well.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This is the shift from building custom apps to delivering productized internal tools.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Instead of asking what should we build for this client, the agency asks which capability do businesses repeatedly need.
                </Text>
              </Box>

              {/* Section: The Field Explained */}
              <Box id="the-field-explained" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Field Explained
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Productized internal tools are focused systems that deliver one clear operational function.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  They are not broad SaaS platforms. They are not generic dashboards. They are tightly scoped tools designed to support a specific workflow.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Examples include an operations control panel, a lead qualification and routing console, a support triage dashboard, a booking management system, or an internal review and approval tool.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The key is that the core logic stays the same across clients. Configuration changes. Branding changes. Integration points adjust. But the system itself is stable.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This allows agencies to refine quality over time instead of reinventing solutions.
                </Text>
              </Box>

              {/* Section: Examples */}
              <Box id="examples" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Examples
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Consider internal reporting.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A custom approach builds a new dashboard for every client.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A productized approach builds one reporting engine that connects to common data sources, applies known metrics, and presents insights in a consistent way.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Or consider internal approvals.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A custom approach builds bespoke workflows per client.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A productized approach builds a standard approval system with configurable rules, roles, and notifications.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  In both cases, the value comes from consistency and clarity, not uniqueness.
                </Text>
              </Box>

              {/* Section: How Agencies Should Package This */}
              <Box id="how-agencies-should-package" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  How Agencies Should Package This
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Productized internal tools should be sold as capabilities, not projects.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The agency defines the problem the tool solves, the workflows it supports, and the outcomes it enables. Clients buy access to that capability with setup and ongoing ownership.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Delivery becomes faster because the system already exists. Pricing becomes clearer because scope is known. Maintenance becomes simpler because improvements benefit all clients.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This model also pairs naturally with retainers, because the tool is part of daily operations and must evolve with the business.
                </Text>
              </Box>

              {/* Section: Common Mistakes */}
              <Box id="common-mistakes" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Common Mistakes
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A common mistake is trying to build a full SaaS product too early. Productized tools are not about mass distribution. They are about repeatable value.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Another mistake is allowing too much customization. When every client gets a different version, the product breaks.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Some agencies also underestimate the importance of internal usability. These tools are used daily by teams. They must be simple and reliable.
                </Text>
              </Box>

              {/* Section: The Next Step */}
              <Box id="the-next-step" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Next Step
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  If you want to move toward productized internal tools, ask one question.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Which problem have we solved repeatedly for different clients.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  That problem is your starting point.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  Build one tool that solves it well. Package it as a capability. Improve it with every deployment.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  That is how custom work turns into a scalable moat.
                </Text>
              </Box>

              {/* Related Articles */}
              <Box mt="12" pt="8" borderTop="1px solid" borderColor={borderColor}>
                <Heading as="h2" size="lg" color={titleColor} mb="6">
                  Read What Next
                </Heading>
                <VStack align="stretch" spacing="4">
                  <NextLink href="/blog/ai-systems-engineering" passHref>
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
                        AI & ML Development
                      </Text>
                      <Heading as="h3" size="md" color={titleColor} mb="2">
                        AI Systems Engineering: Why "AI Apps" Will Get Commoditized and "AI Systems" Will Not
                      </Heading>
                      <Text fontSize="sm" color={textColor}>
                        January 8, 2026
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
