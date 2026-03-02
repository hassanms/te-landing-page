import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ButtonLink } from "components/button-link";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { FaChevronRight } from "react-icons/fa";
import {
  engagementModelsData,
  type EngagementModelItem,
} from "data/engagement-models";
import NextLink from "next/link";

interface EngagementModelPageProps {
  model: EngagementModelItem;
}

const EngagementModelPage = ({ model }: EngagementModelPageProps) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box minH="100vh" py={{ base: 20, md: 24 }}>
      <EnhancedSEO
        title={`${model.title} | Tech Emulsion`}
        description={`Tech Emulsion offers ${model.title.toLowerCase()} as part of our engagement models. Find the right way to work with us.`}
        pageType="website"
        canonicalUrl={`https://techemulsion.com/engagement-models/${model.slug}`}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Engagement models", url: "https://techemulsion.com/engagement-models" },
            {
              name: model.title,
              url: `https://techemulsion.com/engagement-models/${model.slug}`,
            },
          ],
        }}
      />
      <Container maxW="container.xl">
        <Flex
          as="nav"
          aria-label="Breadcrumb"
          align="center"
          gap={2}
          mb={8}
          flexWrap="wrap"
        >
          <NextLink href="/">Home</NextLink>
          <Icon as={FaChevronRight} boxSize={4} color={textColor} />
          <NextLink href="/engagement-models">Engagement models</NextLink>
          <Icon as={FaChevronRight} boxSize={4} color={textColor} />
          <Text as="span" color={headingColor} fontWeight="medium">
            {model.title}
          </Text>
        </Flex>

        <Box borderTopWidth="1px" borderColor={dividerColor} pt={8}>
          <Heading as="h1" size="2xl" color={headingColor} mb={4}>
            {model.title}
          </Heading>
          <Text color={textColor} fontSize="lg" mb={8}>
            Tech Emulsion delivers {model.title.toLowerCase()} to help you scale and succeed. Get in touch to discuss how we can support your goals.
          </Text>
          <ButtonLink href="/contact" colorScheme="teal" size="lg">
            Get a Quote
          </ButtonLink>
        </Box>
      </Container>
    </Box>
  );
};

export default EngagementModelPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = engagementModelsData.map((model) => ({
    params: { slug: model.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EngagementModelPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const model = engagementModelsData.find((m) => m.slug === slug);
  if (!model) return { notFound: true };
  return { props: { model } };
};
