import React from "react";
import { Box, Button, Container, Flex, Icon, Stack, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowRight, FiList } from "react-icons/fi";
import { GetServerSideProps } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Job } from "data/jobs/types";
import { JobDetailHeader } from "components/careers/job-detail-header";
import { JobDescription } from "components/careers/job-description";
import { JobInformationSidebar } from "components/careers/job-information-sidebar";
import { ShareJobCard } from "components/careers/share-job-card";
import axios from "axios";

interface JobDetailPageProps {
  job: Job | null;
  error?: string;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ job, error }) => {
  const textColor = useColorModeValue("gray.600", "gray.100");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  if (error) {
    return (
      <Box minH="100vh" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Text color="red.500" fontSize="lg" mb={4}>
            {error}
          </Text>
          <Button as={NextLink} href="/careers" colorScheme="teal">
            View all jobs
          </Button>
        </Container>
      </Box>
    );
  }

  if (!job) {
    return (
      <Box minH="100vh" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Box color="teal.500" display="inline-block">
            <Spinner size="xl" />
          </Box>
          <Text mt={4} color={textColor}>Loading job details...</Text>
        </Container>
      </Box>
    );
  }

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      <EnhancedSEO
        title={`${job.title} - Careers | Tech Emulsion`}
        description={job.shortDescription}
        pageType="about"
        canonicalUrl={`https://techemulsion.com/careers/${job.slug || job.id}`}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Careers", url: "https://techemulsion.com/careers" },
            {
              name: job.title,
              url: `https://techemulsion.com/careers/${job.slug || job.id}`,
            },
          ],
        }}
      />

      {/* Full-page gradient - same as careers, portfolio, services, blog */}
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
      <Container maxW="container.xl" pt={6} pb={{ base: 16, md: 24 }} position="relative" zIndex={1}>
        <JobDetailHeader job={job} />

        <Box pt={8}>
          <Flex direction={{ base: "column", md: "row" }} gap={{ base: 12, md: 16 }} align="flex-start">
            <JobDescription job={job} />
            <Stack spacing={6} w={{ base: "100%", md: "320px" }} flexShrink={0} align="stretch">
              <JobInformationSidebar job={job} />
              <ShareJobCard job={job} />
            </Stack>
          </Flex>
        </Box>

        {/* Divider bar - same width as header dividers */}
        <Box
          bg="transparent"
          py={2}
          px={6}
          mx={-6}
          mt={{ base: 12, md: 16 }}
          borderTopWidth="1px"
          borderColor={dividerColor}
        />

        <Flex justify="center" align="center" gap={4} mt={8} flexWrap="wrap">
          <Button
            as={NextLink}
            href="/careers"
            variant="outline"
            colorScheme="teal"
            size="lg"
            leftIcon={<Icon as={FiList} boxSize={4} />}
            transition="all 0.2s"
            sx={{
              "&:hover": {
                bg: "teal.500",
                borderColor: "teal.500",
                color: "white !important",
                "& *, & span, & svg": { color: "white !important" },
              },
            }}
          >
            View all jobs
          </Button>
          <Button
            as={NextLink}
            href={`/careers/${job.slug || job.id}/apply`}
            colorScheme="teal"
            size="lg"
            rightIcon={<Icon as={FiArrowRight} boxSize={4} />}
            _hover={{
              bg: "teal.600",
            }}
            transition="all 0.2s"
          >
            Apply now
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<JobDetailPageProps> = async (
  context,
) => {
  const jobId = context.params?.jobId as string;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
      (context.req.headers.host 
        ? `http${context.req.headers.host.includes('localhost') ? '' : 's'}://${context.req.headers.host}`
        : 'http://localhost:3000');
    
    const response = await axios.get(`${baseUrl}/api/jobs/${jobId}`);
    const job = response.data;

    if (!job) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        job,
      },
    };
  } catch (error: any) {
    console.error("Error fetching job:", error);
    
    if (error.response?.status === 404) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        job: null,
        error: "Failed to load job details. Please try again later.",
      },
    };
  }
};

export default JobDetailPage;

