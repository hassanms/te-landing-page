import React from "react";
import { Box, Container, Flex, Link, Stack, Text, Spinner, useColorModeValue } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Job } from "data/jobs/types";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ApplicationHeader } from "components/careers/application-header";
import { ApplicationForm } from "components/careers/application-form";
import CareersBreadcrumb from "components/layout/careers-breadcrumb";
import NextLink from "next/link";
import axios from "axios";

interface ApplyPageProps {
  job: Job | null;
  error?: string;
}

const ApplyPage: React.FC<ApplyPageProps> = ({ job, error }) => {
  const separatorColor = useColorModeValue("gray.400", "gray.200");
  const textColor = useColorModeValue("gray.600", "gray.100");

  if (error) {
    return (
      <Box minH="100vh" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Text color="red.500" fontSize="lg" mb={4}>
            {error}
          </Text>
          <Link as={NextLink} href="/careers" color="teal.600" fontWeight="medium">
            View all jobs
          </Link>
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
        title={`Apply - ${job.title} | Tech Emulsion`}
        description={`Apply for the ${job.title} role at Tech Emulsion.`}
        pageType="about"
        canonicalUrl={`https://techemulsion.com/careers/${job.slug || job.id}/apply`}
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Careers", url: "https://techemulsion.com/careers" },
            {
              name: job.title,
              url: `https://techemulsion.com/careers/${job.slug || job.id}`,
            },
            {
              name: "Apply",
              url: `https://techemulsion.com/careers/${job.slug || job.id}/apply`,
            },
          ],
        }}
      />

      <ApplicationHeader job={job} />

      <Container maxW="container.xl" pb={{ base: 16, md: 24 }}>
        <Box mb={4}>
          <CareersBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: "Job details", href: `/careers/${job.slug || job.id}` },
              { label: "Job application" },
            ]}
          />
        </Box>
        <Stack spacing={8}>
          <ApplicationForm job={job} />
        </Stack>

        {/* Footer Links */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          gap={4}
          mt={12}
          mb={8}
        >
          <Link as={NextLink} href="/careers" color="teal.600" fontWeight="medium">
            View all jobs
          </Link>
          <Text color={separatorColor}>|</Text>
          <Link
            href="https://techemulsion.com"
            isExternal
            color="teal.600"
            fontWeight="medium"
          >
            Visit website
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<ApplyPageProps> = async (
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

export default ApplyPage;

