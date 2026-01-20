import { Box, Container, Stack, Text, Spinner } from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { CareersHeroSection } from "components/careers/hero-section";
import { JobListingsGrid } from "components/careers/job-listings-grid";
import CareersBreadcrumb from "components/layout/careers-breadcrumb";
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
    <Box position="relative" overflow="hidden">
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

      <BackgroundGradient height="100%" zIndex="-1" />

      <CareersHeroSection />

      <Box py={{ base: 10, md: 16 }}>
        <Container maxW="container.xl">
          {/* <Box mb={6}>
            <CareersBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Careers" },
              ]}
            />
          </Box> */}
          <Stack spacing={16}>
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
    </Box>
  );
};

export default CareersPage;

