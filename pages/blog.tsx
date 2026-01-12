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
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

// Filter categories
const filterCategories = [
  "All Insights",
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
    title: "The AI-Orchestrated Development System",
    fullTitle: "The AI-Orchestrated Development System: Reimagining Software Project Execution",
    date: "2024-10-23",
    url: "/blog/ai-orchestrated-development",
    excerpt: "Discover how AI is revolutionizing software development workflows, from automated code generation to intelligent project management. Learn how modern development teams are leveraging AI to accelerate delivery and improve quality.",
    image: "/assets/whatWeDo/arseny-togulev-MECKPoKJYjM-unsplash.jpg",
    category: "AI & ML Development",
  },
  {
    title: "Inside Tech Emulsion's Toolkit",
    fullTitle: "Inside Tech Emulsion's Toolkit: How Our Internal AI Tools Shape Better Customer Projects",
    date: "2024-10-23",
    url: "/blog/internal-toolkit",
    excerpt: "Explore the cutting-edge AI tools and frameworks we use internally to deliver superior results for our clients.",
    image: "/assets/whatWeDo/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    category: "AI & ML Development",
  },
  {
    title: "What Kind of AI Do You Really Need?",
    fullTitle: "What Kind of AI Do You Really Need? A CEO & Tech Lead's Guide to LLMs vs. RAG Chatbots (and When to Use Each)",
    date: "2024-10-20",
    url: "/blog/ai-guide",
    excerpt: "A comprehensive guide to choosing the right AI solution for your business needs, comparing LLMs and RAG chatbots.",
    image: "/assets/whatWeDo/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
    category: "Chatbot Development",
  },
  {
    title: "The Logic Behind Match-3 Games",
    fullTitle: "The Logic Behind Match-3 Games: How Unity and C# Make the Magic Work",
    date: "2024-10-20",
    url: "/blog/match3-games",
    excerpt: "Dive deep into the game development mechanics that power popular match-3 games using Unity and C#.",
    image: "/assets/whatWeDo/growtika-fiao0RcVWBE-unsplash.jpg",
    category: "Game Development",
  },
  {
    title: "Building Scalable SaaS Applications",
    date: "2024-10-15",
    url: "/blog/scalable-saas",
    excerpt: "Learn the architecture patterns and best practices for building SaaS applications that scale with your business.",
    image: "/assets/whatWeDo/growtika-72dRZHuYJWE-unsplash.jpg",
    category: "Software Development",
  },
  {
    title: "Generative AI Integration Strategies",
    date: "2024-10-10",
    url: "/blog/generative-ai-integration",
    excerpt: "Discover how to integrate generative AI into your existing workflows and unlock new possibilities for automation. Learn about the latest tools, frameworks, and best practices for seamlessly incorporating AI capabilities into your business processes. From natural language processing to content generation, explore how generative AI can transform your operations, enhance productivity, and drive innovation across your organization. This comprehensive guide covers everything from initial planning and tool selection to implementation strategies and real-world use cases that demonstrate the transformative power of AI integration.",
    image: "/assets/whatWeDo/randa-marzouk-ilwI-AIAQr4-unsplash.jpg",
    featured: true,
    category: "AI & ML Development",
  },
  {
    title: "DevOps Best Practices for Modern Teams",
    date: "2024-10-05",
    url: "/blog/devops-best-practices",
    excerpt: "Essential DevOps practices that help teams deliver faster, more reliable software releases.",
    image: "/assets/whatWeDo/growtika-Am6pBe2FpJw-unsplash.jpg",
    category: "DevOps",
  },
  {
    title: "Mobile App Development Trends 2024",
    date: "2024-09-28",
    url: "/blog/mobile-app-trends",
    excerpt: "Explore the latest trends and technologies shaping the future of mobile application development.",
    image: "/assets/whatWeDo/automation.png",
    category: "Mobile App Development",
  },
  {
    title: "Custom Software Development Process",
    date: "2024-09-20",
    url: "/blog/custom-software-process",
    excerpt: "Understanding our proven methodology for delivering custom software solutions that meet your unique business needs.",
    image: "/assets/whatWeDo/arseny-togulev-MECKPoKJYjM-unsplash.jpg",
    category: "Software Development",
  },
  {
    title: "AI Chatbots for Customer Service",
    date: "2024-09-15",
    url: "/blog/ai-chatbots-customer-service",
    excerpt: "How intelligent chatbots are transforming customer service and improving user experiences across industries.",
    image: "/assets/whatWeDo/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    category: "Chatbot Development",
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
                aspectRatio="1"
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
          aspectRatio="1"
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
