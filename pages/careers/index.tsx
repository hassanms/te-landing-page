import type { GetStaticProps } from "next";
import { Box, Container, Stack, Text, Spinner, useColorModeValue } from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { CareersHeroSection } from "components/careers/hero-section";
import { JobListingsGrid } from "components/careers/job-listings-grid";
import { useState } from "react";
import { Job } from "data/jobs/types";

interface CareersPageProps {
  initialJobs: Job[];
}

const CareersPage = ({ initialJobs }: CareersPageProps) => {
  const textColor = useColorModeValue("gray.600", "gray.100");
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      <EnhancedSEO
        title="Careers - Tech Emulsion"
        description="Explore career opportunities at Tech Emulsion. Discover open roles and apply to join our team."
        pageType="about"
        canonicalUrl="https://techemulsion.com/careers"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Careers", url: "https://techemulsion.com/careers" },
          ],
        }}
      />

      {/* Full-page gradient - same as services and portfolio */}
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
      <Container maxW="container.xl" pt={6} pb={20} position="relative" zIndex={1}>
        <CareersHeroSection />

        <Stack spacing={16}>
          {loading && jobs.length === 0 ? (
            <Box textAlign="center" py={10}>
              <Box color="teal.500" display="inline-block">
                <Spinner size="xl" />
              </Box>
              <Text mt={4} color={textColor}>Loading jobs...</Text>
            </Box>
          ) : error ? (
            <Box textAlign="center" py={10}>
              <Text color="red.500">{error}</Text>
            </Box>
          ) : jobs.length === 0 ? (
            <Box textAlign="center" py={10}>
              <Text color={textColor}>No open positions</Text>
            </Box>
          ) : (
            <JobListingsGrid jobs={jobs} />
          )}
        </Stack>
      </Container>
    </Box>
  );
};

// Pre-render job listings for crawlability (ISR keeps it fresh).
export const getStaticProps: GetStaticProps<CareersPageProps> = async () => {
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
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("status", "open")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Careers getStaticProps Supabase error:", error);
      return { props: { initialJobs: [] }, revalidate: 900 };
    }

    const initialJobs: Job[] = (data || []).map((job: Record<string, unknown>) => {
      const desc = stripHtml((job.description as string) || "");
      const shortDesc = desc.length > 150 ? desc.slice(0, 150) + "..." : desc;
      return {
        id: job.id as string,
        slug: job.slug as string,
        title: job.title as string,
        company: "Tech Emulsion",
        employmentType: (job.employment_type as Job["employmentType"]) || "Full-time",
        department: (job.department as string) || "",
        locations: job.location ? [job.location as string] : [],
        region: "APAC",
        country: "Pakistan",
        industry: "Technology",
        shortDescription: shortDesc,
        description: (job.description as string) || "",
        requirements: (job.requirements as string[]) || [],
        responsibilities: [],
        experienceLevel: "Mid-level",
        skills: [],
        benefits: [],
        postedDate: (job.created_at as string) || "",
        applicationDeadline: null,
        status: (job.status as Job["status"]) || "open",
        totalPositions: (job.total_positions as number | null) ?? null,
      };
    });

    return { props: { initialJobs }, revalidate: 900 };
  } catch (e) {
    console.error("Error in getStaticProps for /careers:", e);
    return { props: { initialJobs: [] }, revalidate: 900 };
  }
};

export default CareersPage;

