import React from "react";
import { Box, Button, Container, Flex, Stack, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { GetServerSideProps } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { Job } from "data/jobs/types";
import { JobDetailHeader } from "components/careers/job-detail-header";
import { JobDescription } from "components/careers/job-description";
import { JobInformationSidebar } from "components/careers/job-information-sidebar";
import CareersBreadcrumb from "components/layout/careers-breadcrumb";
import axios from "axios";

interface JobDetailPageProps {
  job: Job | null;
  error?: string;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ job, error }) => {
  const textColor = useColorModeValue("gray.600", "gray.100");

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
    <Box>
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

      <JobDetailHeader job={job} />

      <Container maxW="container.xl" pb={{ base: 16, md: 24 }}>
        <Box mb={4}>
          <CareersBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: "Job details" },
            ]}
          />
        </Box>
        <Flex direction={{ base: "column", md: "row" }} gap={{ base: 12, md: 16 }}>
          <JobDescription job={job} />
          <JobInformationSidebar job={job} />
        </Flex>

        <Stack align="center" mt={{ base: 12, md: 16 }}>
          <Button
            as={NextLink}
            href="/careers"
            variant="outline"
            colorScheme="teal"
            size="sm"
          >
            View all jobs
          </Button>
        </Stack>
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

