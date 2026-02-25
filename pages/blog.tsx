import type { NextPage } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  Link,
  Button,
  Divider,
  SimpleGrid,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import axios from "axios";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featured_image: string | null;
  category: string;
  author_name: string;
  is_featured: boolean;
  published_at: string;
  reading_time_minutes: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const Blog: NextPage = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "gray.100");
  const headingColor = useColorModeValue("gray.800", "white");
  const titleColor = useColorModeValue("gray.800", "white");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const [selectedFilter, setSelectedFilter] = useState("All Insights");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsRes, categoriesRes] = await Promise.all([
          axios.get("/api/blog"),
          axios.get("/api/blog/categories"),
        ]);
        setPosts(postsRes.data.posts || []);
        setCategories(categoriesRes.data.categories || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Failed to load insights. Please try again later.");
        setPosts([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Build filter categories from database categories
  const filterCategories = ["All Insights", ...categories.map((c) => c.name)];

  // Get featured post (first post with is_featured: true, or first post)
  const featuredPost = posts.find((p) => p.is_featured) || posts[0];
  const allInsightsPosts = posts.filter((p) => p !== featuredPost);

  // Filter posts based on selected category
  const filteredPosts =
    selectedFilter === "All Insights"
      ? allInsightsPosts
      : allInsightsPosts.filter((post) => post.category === selectedFilter);

  return (
    <Box position="relative" minH="100vh" color={headingColor}>
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

      {/* Full-page gradient - same as portfolio, services, careers */}
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

      {/* Top margin - clear fixed navbar */}
      <Box pt={{ base: 20, md: 24 }} />
      <Container maxW="container.xl" pt={6} pb={20} position="relative" zIndex={1}>
        {/* Breadcrumb */}
        <Flex justify="flex-end" mb={8}>
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
              Insights
            </Text>
          </ButtonGroup>
        </Flex>

        {/* Header section - same layout as portfolio, services, careers */}
        <Box
          minH={{ base: "280px", md: "35vh" }}
          display={{ base: "block", md: "grid" }}
          gridTemplateColumns={{ md: "1fr 1fr" }}
          borderTopWidth="1px"
          borderColor={dividerColor}
          mx={-6}
          px={6}
        >
          {/* Left: Heading - top aligned */}
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
              Insights
            </Heading>
          </Box>
          {/* Right: Description - bottom aligned */}
          <Box
            pl={{ base: 0, md: 6 }}
            py={{ base: 4, md: 8 }}
            display="flex"
            alignItems={{ base: "flex-start", md: "flex-end" }}
            justifyContent={{ base: "flex-start", md: "flex-end" }}
          >
            <Text
              color={textColor}
              fontSize="lg"
              lineHeight="tall"
              textAlign={{ base: "left", md: "left" }}
              maxW={{ md: "420px" }}
            >
              Explore our latest articles, insights, and updates on digital
              transformation, AI solutions, custom software development, and
              technology trends.
            </Text>
          </Box>
        </Box>

        {/* Divider bar - matches portfolio, services, careers */}
        <Box
          bg="transparent"
          py={2}
          px={6}
          mx={-6}
          borderTopWidth="1px"
          borderColor={dividerColor}
        />

        {/* Body Content */}
        <Box mt={8}>
        {loading ? (
          <Box textAlign="center" py={16}>
            <Box color="teal.500" display="inline-block">
              <Spinner size="xl" />
            </Box>
            <Text mt={4} color={textColor}>
              Loading insights...
            </Text>
          </Box>
        ) : error ? (
          <Box textAlign="center" py={16}>
            <Text color="red.500">{error}</Text>
          </Box>
        ) : (
          <>
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
                    backgroundImage: featuredPost.featured_image
                      ? `url(${featuredPost.featured_image})`
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
                  <NextLink
                    href={`/blog/${featuredPost.slug}`}
                    passHref
                    onMouseEnter={() => router.prefetch(`/blog/${featuredPost.slug}`)}
                  >
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
          </>
        )}
        </Box>
      </Container>
    </Box>
  );
};

function PostCard({ post }: { post: BlogPost }) {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const titleColor = useColorModeValue("gray.800", "white");

  return (
    <NextLink
      href={`/blog/${post.slug}`}
      passHref
      onMouseEnter={() => router.prefetch(`/blog/${post.slug}`)}
    >
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
              backgroundImage: post.featured_image
                ? `url(${post.featured_image})`
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
            {post.title}
          </Heading>
          <Text
            fontSize="sm"
            color={textColor}
            opacity={0.8}>
            {new Date(post.published_at).toLocaleDateString("en-US", {
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
