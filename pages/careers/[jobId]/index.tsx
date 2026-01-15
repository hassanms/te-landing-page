import { Box, Button, Container, Flex, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import jobs from "data/jobs/jobs";
import { Job } from "data/jobs/types";
import { JobDetailHeader } from "components/careers/job-detail-header";
import { JobDescription } from "components/careers/job-description";
import { JobInformationSidebar } from "components/careers/job-information-sidebar";
import CareersBreadcrumb from "components/layout/careers-breadcrumb";

interface JobDetailPageProps {
  job: Job;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ job }) => {
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
              { label: "Job listing", href: "/careers" },
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobs.map((job) => ({
    params: { jobId: job.slug || job.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<JobDetailPageProps> = async (
  context,
) => {
  const jobId = context.params?.jobId as string;
  const job =
    jobs.find((j) => j.slug === jobId) ||
    jobs.find((j) => j.id === jobId);

  if (!job) {
    return { notFound: true };
  }

  return {
    props: {
      job,
    },
  };
};

export default JobDetailPage;

