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

// Fetch job server-side so crawlers get full HTML (no dependency on API self-call)
export const getServerSideProps: GetServerSideProps<JobDetailPageProps> = async (
  context,
) => {
  const jobId = context.params?.jobId as string;
  if (!jobId) return { notFound: true };

  function stripHtml(html: string): string {
    if (!html) return "";
    return html
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  try {
    const { getSupabaseAdmin } = await import("lib/supabase/server");
    const supabase = getSupabaseAdmin();

    let { data: row, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("slug", jobId)
      .single();

    if (error || !row) {
      const res = await supabase.from("jobs").select("*").eq("id", jobId).single();
      row = res.data;
      error = res.error;
    }

    if (error || !row) {
      return { notFound: true };
    }

    const desc = stripHtml((row.description as string) || "");
    const shortDesc = desc.length > 150 ? desc.slice(0, 150) + "..." : desc;
    const job: Job = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      company: "Tech Emulsion",
      employmentType: (row.employment_type as Job["employmentType"]) || "Full-time",
      department: (row.department as string) || "",
      locations: row.location ? [row.location as string] : [],
      region: "APAC",
      country: "Pakistan",
      industry: "Technology",
      shortDescription: shortDesc,
      description: (row.description as string) || "",
      requirements: (row.requirements as string[]) || [],
      responsibilities: [],
      experienceLevel: "Mid-level",
      skills: [],
      benefits: [],
      postedDate: (row.created_at as string) || "",
      applicationDeadline: null,
      status: (row.status as Job["status"]) || "open",
      totalPositions: (row.total_positions as number | null) ?? null,
    };

    return { props: { job } };
  } catch (e) {
    console.error("Error in getServerSideProps for /careers/[jobId]:", e);
    return { notFound: true };
  }
};

export default JobDetailPage;

