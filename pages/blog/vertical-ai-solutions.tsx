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
        title="Vertical AI Solutions: How Agencies Win by Owning One Industry's Workflows - Tech Emulsion"
        description="Trying to serve everyone makes you replaceable. Owning one industry makes you indispensable. Learn how vertical AI solutions help agencies win by focusing on one industry's workflows."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog/vertical-ai-solutions"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Insights", url: "https://techemulsion.com/blog" },
            {
              name: "Vertical AI Solutions: How Agencies Win by Owning One Industry's Workflows",
              url: "https://techemulsion.com/blog/vertical-ai-solutions",
            },
          ],
        }}
      />
      <Head>
        <title>
          Vertical AI Solutions: How Agencies Win by Owning One Industry's Workflows - Tech Emulsion
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
            Vertical AI Solutions: How Agencies Win by Owning One Industry's Workflows
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
              January 12, 2026
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
                  backgroundImage: "url(/assets/blog/Vertical-AI-Solutions.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Introduction Paragraph - After Image */}
              <Box id="introduction" sx={{ scrollMarginTop: "100px" }} mb="8">
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  Trying to serve everyone makes you replaceable.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  Owning one industry makes you indispensable.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="6">
                  That is the difference vertical focus creates.
                </Text>
              </Box>

              {/* Section: The Real Problem */}
              <Box id="the-real-problem" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Real Problem
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Most software agencies describe themselves the same way. They build web apps. They do
                  AI. They do automation. They work across many industries. On the surface, this
                  sounds flexible and impressive.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  In reality, it creates a problem.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Every new client starts from zero. New terminology. New workflows. New edge cases.
                  New tools. New expectations. The agency spends most of its time relearning instead
                  of compounding knowledge. Delivery feels slow. Pricing feels hard to justify. Trust
                  takes longer to earn.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  From the client's perspective, the agency feels capable but not deeply confident.
                  They must explain their business again and again. They must correct assumptions.
                  They must guide decisions that the agency should already understand.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  That friction limits growth.
                </Text>
              </Box>

              {/* Section: The Shift */}
              <Box id="the-shift" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Shift
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  As AI lowers the cost of building, buyers stop looking for general capability. They
                  look for relevance.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  They want partners who understand their business without being taught. Partners who
                  know the common problems, the usual bottlenecks, the risky edge cases, and the tools
                  already in use.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This is the shift from horizontal services to vertical solutions.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Instead of selling skills, you sell understanding.
                </Text>
              </Box>

              {/* Section: The Field Explained */}
              <Box id="the-field-explained" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Field Explained
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Vertical AI Solutions means focusing on one industry and mastering its workflows
                  deeply.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This does not mean building one product. It means learning how work actually flows
                  in that industry from lead to delivery to support. It means understanding what data
                  matters, what decisions repeat, what mistakes are costly, and what automation
                  creates real impact.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Over time, this knowledge turns into reusable systems. Qualification flows. Routing
                  logic. Escalation rules. Dashboards. Integrations. Playbooks.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  AI becomes more effective in this context because it operates within familiar
                  patterns. The questions are known. The intents repeat. The outputs are predictable.
                  The guardrails are clear.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The result is faster delivery, higher quality, and stronger trust.
                </Text>
              </Box>

              {/* Section: Examples */}
              <Box id="examples" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Examples
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Consider ecommerce businesses.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A general agency builds a chatbot.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A vertical agency builds a system that handles order questions, refund rules,
                  delivery tracking, cart recovery, winback campaigns, and CRM updates, all aligned to
                  ecommerce realities.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Or consider home services.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A general agency builds a scheduling form.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A vertical agency builds a system that answers calls, qualifies jobs, checks
                  service areas, books estimates, escalates emergencies, and logs everything into
                  the same operational view.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  In both cases, the advantage comes from knowing the workflow before the project
                  begins.
                </Text>
              </Box>

              {/* Section: How Agencies Should Package This */}
              <Box id="how-agencies-should-package" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  How Agencies Should Package This
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Vertical AI Solutions should be packaged as repeatable systems, not custom
                  experiments.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A strong vertical offer clearly defines the problem it solves, the workflows it
                  automates, and the outcomes it delivers. Discovery becomes shorter because
                  assumptions are already validated. Implementation becomes faster because patterns are
                  reused.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Pricing becomes easier because value is understood. Retainers become natural because
                  the system lives inside daily operations.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The agency stops pitching. The solution speaks for itself.
                </Text>
              </Box>

              {/* Section: Common Mistakes */}
              <Box id="common-mistakes" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  Common Mistakes
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  A common mistake is choosing a vertical that is too broad. Healthcare, real estate,
                  or ecommerce alone are not specific enough. Focus should be narrow enough that
                  workflows repeat.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Another mistake is jumping between verticals too quickly. Compounding only happens
                  when you stay long enough to refine systems.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Some agencies also confuse branding with focus. Vertical expertise must show up in
                  delivery, not just messaging.
                </Text>
              </Box>

              {/* Section: The Next Step */}
              <Box id="the-next-step" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="lg" color={titleColor} mb="4" mt="8">
                  The Next Step
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  If you want to move toward vertical solutions, ask one question.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Which industry do we already understand better than most.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  The answer is often hidden in past projects, not future ideas.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  Choose that industry. Stay there. Build systems that fit it perfectly.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  That is how vertical focus becomes a moat.
                </Text>
              </Box>

              {/* Related Articles */}
              <Box mt="12" pt="8" borderTop="1px solid" borderColor={borderColor}>
                <Heading as="h2" size="lg" color={titleColor} mb="6">
                  Read What Next
                </Heading>
                <VStack align="stretch" spacing="4">
                  <NextLink href="/blog/automation-first-consulting" passHref>
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
                        Automation First Consulting: The Pivot From Building Features to Building
                        Outcomes
                      </Heading>
                      <Text fontSize="sm" color={textColor}>
                        January 9, 2026
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
