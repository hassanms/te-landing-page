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
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

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
    { id: "the-shift", label: "The Real Shift" },
    { id: "five-pivots", label: "The Five Pivots" },
    { id: "ai-systems-engineering", label: "AI Systems Engineering" },
    { id: "vertical-ai-solutions", label: "Vertical AI Solutions" },
    { id: "automation-first", label: "Automation First Consulting" },
    { id: "ai-ops", label: "AI Ops and Ownership" },
    { id: "productized-tools", label: "Productized Internal Tools" },
    { id: "conclusion", label: "Conclusion" },
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
        title="Beyond Vibe Coding: The New Moats for Software Agencies in 2026 - Tech Emulsion"
        description="AI is changing software development. Learn how software agencies can pivot into work that stays valuable even as AI makes building faster and cheaper. Explore the five pivots that create new moats for agencies in 2026."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog/beyond-vibe-coding"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Insights", url: "https://techemulsion.com/blog" },
            {
              name: "Beyond Vibe Coding: The New Moats for Software Agencies in 2026",
              url: "https://techemulsion.com/blog/beyond-vibe-coding",
            },
          ],
        }}
      />
      <Head>
        <title>Beyond Vibe Coding: The New Moats for Software Agencies in 2026 - Tech Emulsion</title>
      </Head>

      <Container maxW="container.xl" py="10">
        <Stack direction={{ base: "column", lg: "row" }} spacing="8" align="flex-start">
          {/* Left Sidebar - Table of Contents */}
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

          {/* Main Content */}
          <Box flex="1" maxW={{ base: "100%", lg: "800px" }}>
            <VStack align="stretch" spacing="6">
              {/* Category Tag */}
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="teal.500"
                textTransform="uppercase"
                letterSpacing="wide">
                Software Development
              </Text>

              {/* Title */}
              <Heading
                as="h1"
                size="2xl"
                color={titleColor}
                fontWeight="bold"
                lineHeight="1.2">
                Beyond Vibe Coding: The New Moats for Software Agencies in 2026
              </Heading>

              {/* Author Info */}
              <HStack spacing="4" mb="4">
                <Text fontSize="sm" color={textColor}>
                  By Hassan Sid (CEO of Tech Emulsion)
                </Text>
                <Text fontSize="sm" color={textColor}>
                  •
                </Text>
                <Text fontSize="sm" color={textColor}>
                  January 6, 2026
                </Text>
              </HStack>

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
                    "url(/assets/blog/Beyond-Vibe-Coding-main-image.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Introduction */}
              <Box id="introduction" sx={{ scrollMarginTop: "100px" }}>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  AI is changing software development in a way that feels both exciting and threatening, especially if you run a services business. Every week there is a new tool that turns vague instructions into working code, and it is easy to jump to the conclusion that software agencies are heading toward the same fate as many commodity industries, squeezed margins, faster delivery expectations, and clients asking, "Why does this cost so much when a tool can generate it?"
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  But the more accurate truth is simpler. AI is not killing agencies. It is killing the parts of agency work that were already becoming commodities. Building generic web apps, shipping standard CRUD dashboards, and selling hours as development capacity will keep getting cheaper and more crowded. If your business depends on being the team that can code, you will feel pressure from both directions, clients expecting lower pricing and faster timelines, and competitors delivering acceptable work using powerful tools.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  At the same time, something else is happening that creates a massive opportunity. As code becomes easier to produce, businesses demand more automation, more integration, and more reliability. They do not just want software. They want systems that run operations, produce measurable outcomes, and keep working as reality changes. Most importantly, they want someone to own those systems from start to finish, because operational software is not a one time build. It is a living part of the business.
                </Text>
              </Box>

              {/* Section: The Real Shift */}
              <Box id="the-shift" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  The Real Shift
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  This is the real shift. The winning agency is not the one that builds apps. The winning agency is the one that designs and operates systems driven by outcomes. Instead of selling features, you sell leverage. Instead of selling development, you sell operational transformation. Instead of delivering a project and leaving, you become an ownership partner for workflows that directly affect revenue, cost, and customer experience.
                </Text>
              </Box>

              {/* Section: The Five Pivots */}
              <Box id="five-pivots" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  The Five Pivots
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  That is what this series is about. It is a practical map for how a software services agency can pivot into work that stays valuable, even as AI makes building faster and cheaper. The five pivots are not abstract trends. They are real service lines that are already working in the market, and each one becomes more valuable as AI capability improves.
                </Text>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  First, we look at AI Systems Engineering, which is the discipline of building controlled and production ready AI systems that run real workflows, not toy AI apps. Then we explore Vertical AI Solutions, where agencies win by specializing in one industry and compounding domain expertise into repeatable deployments. Third is Automation First Consulting, a shift from shipping features to redesigning operations around measurable outcomes. Fourth is AI Ops and Ownership, the layer that keeps AI reliable in production through monitoring, evaluation, governance, and continuous improvement. Finally, we cover Productized Internal Tools, where agencies escape custom project chaos by selling repeatable capability systems that integrate deeply into how a business runs.
                </Text>
              </Box>

              {/* Section: AI Systems Engineering */}
              <Box id="ai-systems-engineering" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  AI Systems Engineering
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  First, we look at AI Systems Engineering, which is the discipline of building controlled and production ready AI systems that run real workflows, not toy AI apps.
                </Text>
              </Box>

              {/* Section: Vertical AI Solutions */}
              <Box id="vertical-ai-solutions" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  Vertical AI Solutions
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Then we explore Vertical AI Solutions, where agencies win by specializing in one industry and compounding domain expertise into repeatable deployments.
                </Text>
              </Box>

              {/* Section: Automation First Consulting */}
              <Box id="automation-first" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  Automation First Consulting
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Third is Automation First Consulting, a shift from shipping features to redesigning operations around measurable outcomes.
                </Text>
              </Box>

              {/* Section: AI Ops and Ownership */}
              <Box id="ai-ops" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  AI Ops and Ownership
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Fourth is AI Ops and Ownership, the layer that keeps AI reliable in production through monitoring, evaluation, governance, and continuous improvement.
                </Text>
              </Box>

              {/* Section: Productized Internal Tools */}
              <Box id="productized-tools" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  Productized Internal Tools
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="4">
                  Finally, we cover Productized Internal Tools, where agencies escape custom project chaos by selling repeatable capability systems that integrate deeply into how a business runs.
                </Text>
              </Box>

              {/* Section: Conclusion */}
              <Box id="conclusion" sx={{ scrollMarginTop: "100px" }}>
                <Heading as="h2" size="xl" color={titleColor} mb="4" mt="8">
                  Conclusion
                </Heading>
                <Text color={textColor} fontSize="lg" lineHeight="1.8" mb="8">
                  If you are building an agency in 2026, the question is not how to compete with AI tools. The better question is which work becomes more valuable because AI exists. When you answer that correctly, you stop fearing the tooling wave and start riding it.
                </Text>
              </Box>

              {/* Related Articles */}
              <Box mt="12" pt="8" borderTop="1px solid" borderColor={borderColor}>
                <Heading as="h2" size="lg" color={titleColor} mb="6">
                  Read What Next
                </Heading>
                <VStack align="stretch" spacing="4">
                  <NextLink href="/blog/generative-ai-integration" passHref>
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
                        Generative AI Integration Strategies
                      </Heading>
                      <Text fontSize="sm" color={textColor}>
                        January 11, 2026
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
