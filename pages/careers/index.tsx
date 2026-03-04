import type { GetServerSideProps } from "next";
import { Box, Container, Stack, Text, Spinner, useColorModeValue } from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { CareersHeroSection } from "components/careers/hero-section";
import { JobListingsGrid } from "components/careers/job-listings-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Job } from "data/jobs/types";
import { getSupabaseAdmin } from "lib/supabase/server";

function stripHtmlTags(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export interface CareersPageProps {
  initialJobs: Job[];
}

const CareersPage = ({ initialJobs = [] }: CareersPageProps) => {
  const textColor = useColorModeValue("gray.600", "gray.100");
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [loading, setLoading] = useState(initialJobs.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialJobs.length > 0) return;
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/jobs");
        setJobs(response.data.jobs || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [initialJobs.length]);

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
        portfolioListData={{
          name: "Tech Emulsion Careers",
          description: "Open positions and career opportunities at Tech Emulsion.",
          items: jobs.map((job) => ({
            name: job.title,
            url: `https://techemulsion.com/careers/${job.slug}`,
            description: job.shortDescription || undefined,
          })),
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
          {loading ? (
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
          ) : (
            <JobListingsGrid jobs={jobs} />
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<CareersPageProps> = async () => {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("status", "open")
      .order("created_at", { ascending: false });

    if (error) {
      return { props: { initialJobs: [] } };
    }

    const initialJobs: Job[] = (data || []).map((job: any) => {
      const plain = stripHtmlTags(job.description || "");
      const shortDesc = plain.length > 150 ? plain.substring(0, 150) + "..." : plain;
      return {
        id: job.id,
        slug: job.slug,
        title: job.title,
        company: "Tech Emulsion",
        employmentType: job.employment_type,
        department: job.department,
        locations: [job.location],
        region: "APAC",
        country: "Pakistan",
        industry: "Technology",
        shortDescription: shortDesc,
        description: job.description,
        requirements: job.requirements || [],
        responsibilities: [],
        experienceLevel: "Mid-level",
        skills: [],
        benefits: [],
        postedDate: job.created_at,
        applicationDeadline: null,
        status: job.status,
        totalPositions: job.total_positions || null,
      };
    });
    return { props: { initialJobs } };
  } catch {
    return { props: { initialJobs: [] } };
  }
};

export default CareersPage;

