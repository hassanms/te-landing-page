import type { NextPage } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import Head from "next/head";
import NextLink from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const allPosts = [
  {
    title: "Welcome to the blog",
    date: "2022-01-01",
    url: "/blog/welcome-to-the-blog",
    excerpt: "Discover insights, tips, and updates from Tech Emulsion about digital transformation and technology trends.",
  },
  {
    title: "Introducing Contentlayer",
    date: "2022-01-02",
    url: "/blog/introducing-contentlayer",
    excerpt: "Learn about Contentlayer and how it can streamline your content management workflow.",
  },
  {
    title: "How to use Contentlayer",
    date: "2022-01-03",
    url: "/blog/how-to-use-contentlayer",
    excerpt: "A comprehensive guide on getting started with Contentlayer for your next project.",
  },
];

const Blog: NextPage = ({ posts }: any) => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const bgColor = useColorModeValue("white", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box bg={bgColor} minH="100vh" py="20">
      <EnhancedSEO
        title="Blog - Tech Emulsion"
        description="Read the latest articles, insights, and updates from Tech Emulsion about digital transformation, AI solutions, custom software development, and technology trends."
        pageType="blog"
        canonicalUrl="https://techemulsion.com/blog"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Blog", url: "https://techemulsion.com/blog" },
          ],
        }}
      />
      <Head>
        <title>Blog - Tech Emulsion</title>
      </Head>

      <Container maxW="container.xl" py="10">
        <Box textAlign="center" mb="12">
          <Heading
            as="h1"
            size="2xl"
            mb="4"
            color={colorMode === "dark" ? "white" : "gray.800"}>
            Tech Emulsion Blog
          </Heading>
          <Text fontSize="lg" color={textColor} maxW="600px" mx="auto">
            Read the latest articles, insights, and updates about digital
            transformation, AI solutions, and software development.
          </Text>
        </Box>

        <VStack spacing="6" align="stretch" maxW="800px" mx="auto">
          {posts.map((post: any, idx: number) => (
            <PostCard key={idx} {...post} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

function PostCard(post: any) {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Card
      bg={cardBgColor}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
        transition: "all 0.3s",
      }}
      transition="all 0.3s">
      <CardBody p="6">
        <Text fontSize="sm" color={textColor} mb="2" opacity={0.7}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </Text>
        <Heading as="h2" size="lg" mb="3">
          <NextLink href={post.url} passHref>
            <Link
              color={colorMode === "dark" ? "white" : "gray.800"}
              _hover={{
                color: "teal.500",
                textDecoration: "none",
              }}>
              {post.title}
            </Link>
          </NextLink>
        </Heading>
        {post.excerpt && (
          <Text color={textColor} fontSize="md" mb="4">
            {post.excerpt}
          </Text>
        )}
        <NextLink href={post.url} passHref>
          <Link
            color="teal.500"
            fontWeight="semibold"
            _hover={{
              textDecoration: "underline",
            }}>
            Read more →
          </Link>
        </NextLink>
      </CardBody>
    </Card>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
