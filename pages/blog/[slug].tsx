import type { NextPage, GetServerSideProps } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  HStack,
  Stack,
  Link,
  Divider,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  Tag,
  Wrap,
  WrapItem,
  Image,
  Spinner,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link/button-link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  category: string;
  author_name: string;
  tags: string[];
  is_featured: boolean;
  published_at: string;
  reading_time_minutes: number;
  view_count: number;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  canonical_url: string | null;
  og_image: string | null;
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featured_image: string | null;
  category: string;
  published_at: string;
  reading_time_minutes: number;
}

interface BlogPostPageProps {
  post?: BlogPost;
  relatedPosts?: RelatedPost[];
}

const BlogPostPage: NextPage<BlogPostPageProps> = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const bgColor = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "white");
  const sidebarBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Generate table of contents from content
  const [tocItems, setTocItems] = useState<{ id: string; label: string }[]>([]);
  const [activeSection, setActiveSection] = useState("");

  // Fetch blog post data client-side
  useEffect(() => {
    if (!slug || typeof slug !== "string") return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            router.push("/404");
            return;
          }
          throw new Error("Failed to load blog post");
        }
        const data = await response.json();
        setPost(data.post);
        setRelatedPosts(data.relatedPosts || []);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, router]);

  useEffect(() => {
    if (!post?.content) return;
    
    // Extract headings from content for TOC
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = post.content;
    const headings = tempDiv.querySelectorAll("h1, h2, h3");
    const items: { id: string; label: string }[] = [];

    headings.forEach((heading, index) => {
      const text = heading.textContent || `Section ${index + 1}`;
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      items.push({ id, label: text });
    });

    setTocItems(items);
  }, [post?.content]);

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
        (section: any) => section && section.top <= 100 && section.bottom >= 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  // Add IDs to headings in the content
  const processedContent = post?.content?.replace(
    /<(h[1-3])([^>]*)>(.*?)<\/h[1-3]>/gi,
    (match, tag, attrs, content) => {
      const id = content
        .replace(/<[^>]*>/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `<${tag}${attrs} id="${id}" style="scroll-margin-top: 100px;">${content}</${tag}>`;
    }
  ) || "";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Box bg={bgColor} minH="100vh" py="20">
      {post && (
        <EnhancedSEO
          title={post.meta_title || `${post.title} - Tech Emulsion`}
          description={post.meta_description || post.excerpt}
          pageType="blog"
          canonicalUrl={post.canonical_url || `https://techemulsion.com/blog/${post.slug}`}
          ogImage={post.og_image || post.featured_image || undefined}
          breadcrumbData={{
            items: [
              { name: "Home", url: "https://techemulsion.com" },
              { name: "Insights", url: "https://techemulsion.com/blog" },
              {
                name: post.title,
                url: `https://techemulsion.com/blog/${post.slug}`,
              },
            ],
          }}
          articleData={{
            title: post.meta_title || post.title,
            description: post.meta_description || post.excerpt,
            image: post.og_image || post.featured_image || undefined,
            authorName: post.author_name,
            datePublished: post.published_at,
            url: post.canonical_url || `https://techemulsion.com/blog/${post.slug}`,
          }}
        />
      )}

      <Container maxW="container.xl" py="10">
        {/* Breadcrumb - matches portfolio style */}
        <Flex justify="flex-end" mb={8} px={{ base: 0, md: 6 }}>
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
            <ButtonLink
              href="/blog"
              size="lg"
              sx={{
                bg: "none",
                color: textColor,
                p: 0,
                "&:hover": { bg: "none", color: headingColor },
              }}
            >
              Insights
            </ButtonLink>
            <Icon as={FaChevronRight} color={textColor} boxSize={4} />
            {loading ? (
              <Skeleton height="20px" width="100px" ml="2" />
            ) : (
              <Text as="span" ml="2" color={headingColor}>
                {post?.category || "Loading..."}
              </Text>
            )}
          </ButtonGroup>
        </Flex>

        {/* Title */}
        <Box px="15" mb="8">
          {loading ? (
            <VStack align="flex-start" spacing={4}>
              <Skeleton height="40px" width="80%" />
              <Skeleton height="40px" width="60%" />
            </VStack>
          ) : error ? (
            <Text color="red.500">{error}</Text>
          ) : (
            <Heading as="h1" size="3xl" color={titleColor} fontWeight="normal" lineHeight="1.2" mb="4">
              {post?.title || "Loading..."}
            </Heading>
          )}
        </Box>

        {/* Author Info */}
        <Box
          position="relative"
          pl="4"
          mb="8"
          borderLeft="4px solid"
          borderColor="teal.500"
          maxW={{ base: "100%", lg: "800px" }}>
          {loading ? (
            <VStack align="flex-start" spacing={2}>
              <Skeleton height="16px" width="100px" />
              <Skeleton height="16px" width="150px" />
              <Skeleton height="16px" width="120px" />
            </VStack>
          ) : post ? (
            <VStack align="flex-start" spacing="1">
              <Text fontSize="sm" fontWeight="semibold" color={titleColor}>
                Written by:
              </Text>
              <Text fontSize="sm" color={textColor}>
                {post.author_name}
              </Text>
              <Text fontSize="sm" color={textColor}>
                {formatDate(post.published_at)}
              </Text>
            </VStack>
          ) : null}
        </Box>

        {/* Two Column Layout */}
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
              {tocItems.length > 0 && (
                <>
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
                            transition="color 0.2s"
                            noOfLines={2}>
                            {item.label}
                          </Text>
                        </Link>
                        {idx < tocItems.length - 1 && <Divider mt="2" />}
                      </Box>
                    ))}
                  </VStack>
                </>
              )}

              {/* Solutions & Services Section */}
              <Box mt={tocItems.length > 0 ? "8" : "0"} pt={tocItems.length > 0 ? "6" : "0"} borderTop={tocItems.length > 0 ? "1px solid" : "none"} borderColor={borderColor}>
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
              {loading ? (
                <Skeleton height="400px" borderRadius="lg" mb="8" />
              ) : post?.featured_image ? (
                <Box
                  w="100%"
                  h="400px"
                  bg="charcoal.800"
                  borderRadius="lg"
                  overflow="hidden"
                  mb="8"
                  sx={{
                    backgroundImage: `url(${post.featured_image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : null}

              {/* Blog Content */}
              {loading ? (
                <Box>
                  <SkeletonText mt="4" noOfLines={10} spacing="4" />
                  <SkeletonText mt="4" noOfLines={8} spacing="4" />
                  <SkeletonText mt="4" noOfLines={6} spacing="4" />
                </Box>
              ) : error ? (
                <Box textAlign="center" py={10}>
                  <Text color="red.500" fontSize="lg">{error}</Text>
                </Box>
              ) : post ? (
                <Box
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                  sx={{
                    "& h1, & h2, & h3, & h4, & h5, & h6": {
                    color: titleColor,
                    fontWeight: "bold",
                    mt: "5",
                    mb: "2",
                  },
                  "& h1": { fontSize: "2xl" },
                  "& h2": { fontSize: "xl" },
                  "& h3": { fontSize: "lg" },
                  "& p": {
                    color: textColor,
                    fontSize: "md",
                    lineHeight: "1.7",
                    mb: "3",
                  },
                  "& ul, & ol": {
                    color: textColor,
                    pl: "6",
                    mb: "3",
                  },
                  "& li": {
                    mb: "1",
                    lineHeight: "1.7",
                  },
                  "& blockquote": {
                    borderLeft: "4px solid",
                    borderColor: "teal.500",
                    pl: "4",
                    py: "1",
                    my: "4",
                    fontStyle: "italic",
                    color: textColor,
                  },
                  "& pre": {
                    bg: "gray.900",
                    p: "4",
                    borderRadius: "md",
                    overflowX: "auto",
                    my: "3",
                  },
                  "& code": {
                    bg: colorMode === "light" ? "gray.100" : "gray.700",
                    px: "2",
                    py: "0.5",
                    borderRadius: "sm",
                    fontSize: "sm",
                  },
                  "& pre code": {
                    bg: "transparent",
                    p: "0",
                  },
                  "& a": {
                    color: "teal.500",
                    textDecoration: "underline",
                    _hover: {
                      color: "teal.600",
                    },
                  },
                  "& img": {
                    borderRadius: "lg",
                    my: "4",
                    maxW: "100%",
                  },
                  "& hr": {
                    my: "5",
                    borderColor: borderColor,
                  },
                }}
              />
              ) : null}

              {/* Related Articles */}
              {loading ? (
                <Box mt="12" pt="8" borderTop="1px solid" borderColor={borderColor}>
                  <Skeleton height="32px" width="200px" mb="6" />
                  <VStack align="stretch" spacing="4">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} height="120px" borderRadius="lg" />
                    ))}
                  </VStack>
                </Box>
              ) : relatedPosts.length > 0 ? (
                <Box mt="12" pt="8" borderTop="1px solid" borderColor={borderColor}>
                  <Heading as="h2" size="lg" color={titleColor} mb="6">
                    Read What Next
                  </Heading>
                  <VStack align="stretch" spacing="4">
                    {relatedPosts.map((relatedPost) => (
                      <NextLink key={relatedPost.id} href={`/blog/${relatedPost.slug}`} passHref>
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
                            {relatedPost.category}
                          </Text>
                          <Heading as="h3" size="md" color={titleColor} mb="2">
                            {relatedPost.title}
                          </Heading>
                          <Text fontSize="sm" color={textColor}>
                            {formatDate(relatedPost.published_at)} · {relatedPost.reading_time_minutes} min read
                          </Text>
                        </Link>
                      </NextLink>
                    ))}
                  </VStack>
                </Box>
              ) : null}
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogPostPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Return empty props to allow immediate rendering
  // Data will be fetched client-side for faster page load
  return {
    props: {},
  };
};
