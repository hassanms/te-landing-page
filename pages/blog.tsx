import type { NextPage } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import NextLink from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Link,
  Button,
  Divider,
  SimpleGrid,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link/button-link";

// Filter categories
const filterCategories = [
  "All Insights",
  "Business Strategy",
  "AI & ML Development",
  "Data Engineering",
  "Software Development",
  "Project Management",
  "Chatbot Development",
  "DevOps",
  "Game Development",
  "Mobile App Development",
];

const allPosts = [
  {
    title: "Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities",
    fullTitle: "Productized Internal Tools: The Agency Pivot From Custom Builds to Repeatable Capabilities",
    date: "2026-01-14",
    url: "/blog/productized-internal-tools",
    excerpt: "Custom projects feel flexible. They are also the hardest way to scale. Productized internal tools solve that problem. Learn how agencies can pivot from custom builds to repeatable capabilities.",
    image: "/assets/blog/Productized-Internal-Tools.png",
    featured: false,
    category: "Business Strategy",
  },
  {
    title: "AI Ops and Ownership: The Missing Layer That Makes AI Reliable in Production",
    fullTitle: "AI Ops and Ownership: The Missing Layer That Makes AI Reliable in Production",
    date: "2026-01-13",
    url: "/blog/ai-ops-and-ownership",
    excerpt:
      "Most AI systems do not fail on launch. They fail quietly after launch. AI Ops exists to prevent that silence. Learn how AI Ops makes AI reliable in production.",
    image: "/assets/blog/AI-Ops-and-Ownership.png",
    featured: false,
    category: "Business Strategy",
  },
  {
    title: "Vertical AI Solutions: How Agencies Win by Owning One Industry's Workflows",
    fullTitle: "Vertical AI Solutions: How Agencies Win by Owning One Industry's Workflows",
    date: "2026-01-12",
    url: "/blog/vertical-ai-solutions",
    excerpt:
      "Trying to serve everyone makes you replaceable. Owning one industry makes you indispensable. Learn how vertical AI solutions help agencies win by focusing on one industry's workflows.",
    image: "/assets/blog/Vertical-AI-Solutions.png",
    featured: false,
    category: "Business Strategy",
  },
  {
    title: "Automation First Consulting: The Pivot From Building Features to Building Outcomes",
    fullTitle: "Automation First Consulting: The Pivot From Building Features to Building Outcomes",
    date: "2026-01-09",
    url: "/blog/automation-first-consulting",
    excerpt:
      "Most businesses do not have a software problem. They have a workflow problem. Automation first consulting exists to solve that difference and pivot agencies from building features to building outcomes.",
    image: "/assets/blog/Automation-First-Consulting.png",
    featured: false,
    category: "Business Strategy",
  },
  {
    title: "AI Systems Engineering: Why AI Apps Will Get Commoditized and AI Systems Will Not",
    fullTitle: "AI Systems Engineering: Why \"AI Apps\" Will Get Commoditized and \"AI Systems\" Will Not",
    date: "2026-01-08",
    url: "/blog/ai-systems-engineering",
    excerpt: "AI apps are becoming easy to build. Reliable AI systems are not. That difference will decide which software agencies survive the next decade. Learn about AI Systems Engineering and why it matters.",
    image: "/assets/blog/AI-Systems-Engineering.png",
    featured: false,
    category: "AI & ML Development",
  },
  {
    title: "Beyond Vibe Coding: The New Moats for Software Agencies in 2026",
    fullTitle: "Beyond Vibe Coding: The New Moats for Software Agencies in 2026",
    date: "2026-01-06",
    url: "/blog/beyond-vibe-coding",
    excerpt: "AI is changing software development. Learn how software agencies can pivot into work that stays valuable even as AI makes building faster and cheaper. Explore the five pivots that create new moats for agencies in 2026.",
    image: "/assets/blog/Beyond-Vibe-Coding-main-image.png",
    featured: true,
    category: "Business Strategy",
  },
  {
    title: "Generative AI Integration Strategies",
    fullTitle: "Generative AI Integration Strategies",
    date: "2024-10-10",
    url: "/blog/generative-ai-integration",
    excerpt:
      "Discover how to integrate generative AI into your existing workflows and unlock new possibilities for automation. Learn about the latest tools, frameworks, and best practices for seamlessly incorporating AI capabilities into your business processes.",
    image: "/assets/blog/generative-ai-integration.jpg",
    featured: false,
    category: "AI & ML Development",
  },
];

const Blog: NextPage = ({ posts }: any) => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const bgColor = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "white");
  const cardBgColor = "charcoal.800";
  const [selectedFilter, setSelectedFilter] = useState("All Insights");

  // Get featured post (first post with featured: true, or first post)
  const featuredPost = posts.find((p: any) => p.featured) || posts[0];
  const allInsightsPosts = posts.filter((p: any) => p !== featuredPost);

  // Filter posts based on selected category
  const filteredPosts =
    selectedFilter === "All Insights"
      ? allInsightsPosts
      : allInsightsPosts.filter((post: any) => post.category === selectedFilter);

  return (
    <Box bg={bgColor} minH="100vh" py="20">
      <EnhancedSEO
        title="Insights - Tech Emulsion"
        description="Read the latest articles, insights, and updates from Tech Emulsion about digital transformation, AI solutions, custom software development, and technology trends."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Insights", url: "https://techemulsion.com/blog" },
          ],
        }}
      />
      <Head>
        <title>Insights - Tech Emulsion</title>
      </Head>

      <Container maxW="container.xl" py="10">
        {/* Breadcrumb Navigation - Top */}
        <Box mb="4">
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
            <FaChevronRight size={15} />
            <Text
              as="span"
              ml="2"
              sx={{
                color: colorMode === "light" ? "#004c4c !important" : "white",
              }}>
              Insights
            </Text>
          </ButtonGroup>
        </Box>

        {/* Main Heading */}
        <Box mb="8">
          <Heading
            as="h1"
            size="2xl"
            mb="4"
            color={titleColor}
            fontWeight="bold">
            Tech Emulsion Insights
          </Heading>
          <Divider />
        </Box>

        {/* Featured Blog Post */}
        {featuredPost && (
          <Box mb="16">
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing="8"
              align="stretch">
              {/* Featured Image */}
              <Box
                flex="1"
                aspectRatio="16/9"
                maxW={{ base: "100%", lg: "600px" }}
                overflow="hidden"
                bg="charcoal.800"
                position="relative"
                _hover={{
                  "& > div:first-of-type": {
                    filter: "grayscale(0%)",
                  },
                }}>
                <Box
                  w="100%"
                  h="100%"
                  sx={{
                    backgroundImage: featuredPost.image
                      ? `url(${featuredPost.image})`
                      : "linear-gradient(135deg, #1E1E1E 0%, #2A2A2A 100%)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%)",
                    transition: "filter 0.3s ease",
                  }}
                />
              </Box>

              {/* Featured Content */}
              <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between">
                {/* Category Title at Top */}
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="teal.500"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    mb="4">
                    {featuredPost.category}
                  </Text>
                </Box>

                {/* Heading, Text, and Button at Bottom */}
                <Box>
                  <Heading
                    as="h2"
                    size="xl"
                    mb="4"
                    color={titleColor}
                    fontWeight="bold">
                    {featuredPost.title}
                  </Heading>
                  <Text color={textColor} fontSize="lg" mb="6" lineHeight="1.8">
                    {featuredPost.excerpt}
                  </Text>
                  <NextLink href={featuredPost.url} passHref>
                    <Button
                      as="a"
                      size="lg"
                      bg="teal.500"
                      color="white"
                      _hover={{
                        bg: "teal.600",
                      }}
                      maxW="200px">
                      READ MORE
                    </Button>
                  </NextLink>
                </Box>
              </Box>
            </Stack>
          </Box>
        )}

        {/* Horizontal Divider */}
        <Divider mb="12" mt="8" />

        {/* All Insights Section */}
        <Stack direction={{ base: "column", lg: "row" }} spacing="8" align="flex-start">
          {/* Filters Sidebar - Left Side - Sticky */}
          <Box
            w={{ base: "100%", lg: "250px" }}
            flexShrink={0}
            position={{ base: "relative", lg: "sticky" }}
            top={{ base: "0", lg: "100px" }}
            alignSelf="flex-start"
            pt={{ base: "0", lg: "0" }}
            maxH={{ base: "none", lg: "calc(100vh - 120px)" }}
            overflowY={{ base: "visible", lg: "auto" }}>
            <VStack align="stretch" spacing="0">
              {filterCategories.map((category, idx) => (
                <Box key={idx}>
                  <Link
                    onClick={() => setSelectedFilter(category)}
                    _hover={{ textDecoration: "none" }}
                    display="block"
                    py="3"
                    px="0"
                    cursor="pointer">
                    <Text
                      fontSize="sm"
                      fontWeight={selectedFilter === category ? "semibold" : "normal"}
                      color={
                        selectedFilter === category
                          ? "teal.500"
                          : colorMode === "dark"
                          ? "lightGrey.400"
                          : "gray.600"
                      }
                      _hover={{
                        color: "teal.500",
                      }}
                      transition="color 0.2s">
                      {category}
                    </Text>
                  </Link>
                  {idx < filterCategories.length - 1 && <Divider mt="3" />}
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Main Content - Blog Posts */}
          <Box flex="1">
            <Heading
              as="h2"
              size="xl"
              mb="8"
              color={titleColor}
              fontWeight="bold">
              All Insights
            </Heading>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              spacing="6">
              {filteredPosts.map((post: any, idx: number) => (
                <PostCard key={idx} post={post} />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

function PostCard({ post }: any) {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const titleColor = useColorModeValue("gray.800", "white");

  return (
    <NextLink href={post.url} passHref>
      <Box
        w="100%"
        cursor="pointer"
        _hover={{
          "& > div:first-of-type": {
            transform: "translateY(-4px)",
            boxShadow: "xl",
            "& > div": {
              filter: "grayscale(0%)",
            },
          },
        }}
        transition="all 0.3s">
        {/* Card with Image - Square format */}
        <Box
          mb="4"
          position="relative"
          w="100%"
          aspectRatio="16/9"
          overflow="hidden"
          bg="charcoal.700"
          transition="all 0.3s">
          {/* Image with black and white filter by default, color on hover */}
          <Box
            w="100%"
            h="100%"
            position="relative"
            sx={{
              backgroundImage: post.image
                ? `url(${post.image})`
                : "linear-gradient(135deg, #1E1E1E 0%, #2A2A2A 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%)",
              transition: "filter 0.3s ease",
            }}
          />
        </Box>

        {/* Full Title, Date, and Link Below Card */}
        <VStack align="flex-start" spacing="2">
          <Heading
            as="h4"
            size="sm"
            color={titleColor}
            fontWeight="semibold"
            lineHeight="1.4">
            {post.fullTitle || post.title}
          </Heading>
          <Text
            fontSize="sm"
            color={textColor}
            opacity={0.8}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
          <Link
            as="span"
            color="teal.500"
            fontWeight="semibold"
            fontSize="sm"
            display="flex"
            alignItems="center"
            gap="2"
            _hover={{
              color: "teal.600",
            }}>
            READ POST
            <Icon as={FiArrowUpRight} />
          </Link>
        </VStack>
      </Box>
    </NextLink>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
