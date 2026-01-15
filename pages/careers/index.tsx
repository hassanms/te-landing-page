import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { CareersHeroSection } from "components/careers/hero-section";
import { JobListingsGrid } from "components/careers/job-listings-grid";
import jobs from "data/jobs/jobs";

const CareersPage = () => {
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
          <Stack spacing={16}>
            <JobListingsGrid jobs={jobs} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default CareersPage;

