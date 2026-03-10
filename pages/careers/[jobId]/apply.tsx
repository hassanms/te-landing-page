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

// Fetch job server-side so crawlers get full HTML (no dependency on API self-call)
export const getServerSideProps: GetServerSideProps<ApplyPageProps> = async (
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
    console.error("Error in getServerSideProps for /careers/[jobId]/apply:", e);
    return { notFound: true };
  }
};

export default ApplyPage;

