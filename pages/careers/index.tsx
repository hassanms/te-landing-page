import { Box, Container, Stack, Text, Spinner } from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { CareersHeroSection } from "components/careers/hero-section";
import { JobListingsGrid } from "components/careers/job-listings-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Job } from "data/jobs/types";

const CareersPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/jobs");
      setJobs(response.data.jobs || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs. Please try again later.");
      // Fallback to empty array
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

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

        <Stack spacing={16} mt={8}>
          {loading ? (
            <Box textAlign="center" py={10}>
              <Spinner size="xl" />
              <Text mt={4}>Loading jobs...</Text>
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

export default CareersPage;

