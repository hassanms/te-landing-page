import type { NextPage, GetServerSideProps } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
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
  Tag,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link/button-link";
import { getSupabaseAdmin } from "lib/supabase/server";

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
  post: BlogPost;
  relatedPosts: RelatedPost[];
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post, relatedPosts }) => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const bgColor = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "white");
  const sidebarBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Generate table of contents from content
  const [tocItems, setTocItems] = useState<{ id: string; label: string }[]>([]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
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
  }, [post.content]);

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
  const processedContent = post.content.replace(
    /<(h[1-3])([^>]*)>(.*?)<\/h[1-3]>/gi,
    (match, tag, attrs, content) => {
      const id = content
        .replace(/<[^>]*>/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `<${tag}${attrs} id="${id}" style="scroll-margin-top: 100px;">${content}</${tag}>`;
    }
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Box bg={bgColor} minH="100vh" py="20">
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

      <Container maxW="container.xl" py="10">
        {/* Breadcrumb Navigation */}
        <Box px="15" mt={10} mb="4">
          <ButtonGroup
            style={{
              backgroundColor: "none",
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
            <FaChevronRight size={15} />
            <Text
              as="span"
              ml="2"
              sx={{
                color: colorMode === "light" ? "#004c4c !important" : "white",
              }}>
              {post.category}
            </Text>
          </ButtonGroup>
        </Box>

        {/* Title */}
        <Box px="15" mb="8">
          <Heading as="h1" size="3xl" color={titleColor} fontWeight="normal" lineHeight="1.2" mb="4">
            {post.title}
          </Heading>
        </Box>

        {/* Author Info */}
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
              {post.author_name}
            </Text>
            <Text fontSize="sm" color={textColor}>
              {formatDate(post.published_at)}
            </Text>
          </VStack>
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
              {post.featured_image && (
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
              )}

              {/* Blog Content */}
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

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
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
              )}
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogPostPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    return { notFound: true };
  }

  try {
    const supabaseAdmin = getSupabaseAdmin();

    // Fetch the blog post
    const { data: post, error: postError } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (postError || !post) {
      return { notFound: true };
    }

    // Increment view count (fire and forget)
    supabaseAdmin
      .from("blog_posts")
      .update({ view_count: (post.view_count || 0) + 1 })
      .eq("id", post.id)
      .then(() => {})

    // Fetch related posts (same category, excluding current)
    const { data: relatedPosts } = await supabaseAdmin
      .from("blog_posts")
      .select("id, slug, title, excerpt, featured_image, category, published_at, reading_time_minutes")
      .eq("is_published", true)
      .eq("category", post.category)
      .neq("id", post.id)
      .order("published_at", { ascending: false })
      .limit(3);

    return {
      props: {
        post,
        relatedPosts: relatedPosts || [],
      },
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return { notFound: true };
  }
};
