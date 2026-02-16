import type { NextPage } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
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
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const bgColor = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "white");
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

        {/* Body Content - loading state */}
        {loading ? (
          <Box textAlign="center" py={16}>
            <Spinner size="xl" color="teal.500" />
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
                  <NextLink href={`/blog/${featuredPost.slug}`} passHref>
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
      </Container>
    </Box>
  );
};

function PostCard({ post }: { post: BlogPost }) {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const titleColor = useColorModeValue("gray.800", "white");

  return (
    <NextLink href={`/blog/${post.slug}`} passHref>
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
