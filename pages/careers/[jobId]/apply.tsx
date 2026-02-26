import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Job } from "data/jobs/types";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { ApplicationHeader } from "components/careers/application-header";
import { ApplicationForm } from "components/careers/application-form";
import NextLink from "next/link";
import axios from "axios";

interface ApplyPageProps {
  job: Job | null;
  error?: string;
}

const ApplyPage: React.FC<ApplyPageProps> = ({ job, error }) => {
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
    <Box position="relative" minH="100vh" overflow="hidden">
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
      <Container maxW="container.xl" pt={6} pb={12} position="relative" zIndex={1}>
        <ApplicationHeader job={job} />

        <Box pt={8}>
          <Stack spacing={8}>
            <ApplicationForm
              job={job}
              cancelHref={`/careers/${job.slug || job.id}`}
              buttonsInFooter
            />
          </Stack>
        </Box>
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

