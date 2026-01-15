import { Box, Container, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import jobs from "data/jobs/jobs";
import { Job } from "data/jobs/types";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ApplicationHeader } from "components/careers/application-header";
import { ApplicationForm } from "components/careers/application-form";
import CareersBreadcrumb from "components/layout/careers-breadcrumb";
import NextLink from "next/link";

interface ApplyPageProps {
  job: Job;
}

const ApplyPage: React.FC<ApplyPageProps> = ({ job }) => {
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
        <CareersBreadcrumb
          items={[
            { label: "Job listing", href: "/careers" },
            { label: "Job details", href: `/careers/${job.slug || job.id}` },
            { label: "Job application" },
          ]}
        />
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
          <Text color="gray.400">|</Text>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobs.map((job) => ({
    params: { jobId: job.slug || job.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ApplyPageProps> = async (
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

export default ApplyPage;

