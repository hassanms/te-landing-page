import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";

export const CareersHeroSection: React.FC = () => {
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box bg={useColorModeValue("white", "charcoal.900")} pt={{ base: 20, md: 24 }} pb={16}>
      <Container maxW="container.xl">
        <Stack spacing={10} align="center" textAlign="center">
          <Stack spacing={4} maxW="3xl">
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "3.5xl" }}>
              We&apos;re more than just a workplace. We&apos;re a family.
            </Heading>
            <Text fontSize="lg" color={textColor}>
              We know that finding a meaningful and rewarding career can be a long journey.
              Our goal is to make that process easy for you and to create a work environment
              that&apos;s enriching—one that you&apos;ll look forward to every day.
            </Text>
            <Box>
              <ButtonLink
                href="#open-roles"
                size="lg"
                colorScheme="teal"
                onClick={(event: any) => {
                  if (typeof window !== "undefined") {
                    event.preventDefault();
                    const el = document.getElementById("open-roles");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    } else {
                      window.location.hash = "#open-roles";
                    }
                  }
                }}
              >
                View Open Roles
              </ButtonLink>
            </Box>
          </Stack>

          <Box w="100%">
            <Image
              src="/assets/career/career-banner-updated-03.svg"
              alt="Careers at Tech Emulsion"
              objectFit="contain"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default CareersHeroSection;

