import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { EnhancedSEO } from "components/seo/enhanced-seo";
import { ButtonLink } from "components/button-link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

type Position = {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  highlights: string[];
};

const positions: Position[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    type: "Full-time",
    location: "On-site",
    summary:
      "Build production-grade AI systems, LLM-powered features, and data pipelines that ship to real users.",
    highlights: [
      "Hands-on with LLM orchestration, vector search, and prompt optimization",
      "Own model evaluation, observability, and safety guardrails",
      "Collaborate with product and engineering to ship fast, measurable AI experiences",
    ],
  },
  {
    id: "mern-developer",
    title: "MERN Stack Developer",
    type: "Full-time",
    location: "On-site",
    summary:
      "Craft performant, scalable web apps across the full stack with React, Node.js, and modern tooling.",
    highlights: [
      "React/Next.js frontends with clean state management and reusable UI",
      "Secure, well-tested APIs with Node.js, Express/Nest, and MongoDB",
      "Performance tuning, CI/CD awareness, and ownership from design to deploy",
    ],
  },
  {
    id: "bds",
    title: "Business Development Specialist",
    type: "Full-time",
    location: "On-site",
    summary:
      "Grow relationships, open new markets, and shape solutions that solve real customer problems.",
    highlights: [
      "Prospect, nurture, and convert leads across multiple channels",
      "Partner with delivery teams to scope proposals and align value",
      "Own pipelines, reporting, and concise communication with clients",
    ],
  },
];

const Careers = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Position>(positions[0]);

  const handleApplyClick = (role: Position) => {
    setSelectedRole(role);
    router.push(`/careers-apply?role=${encodeURIComponent(role.title)}`);
  };

  return (
    <Box position="relative" overflow="hidden">
      <EnhancedSEO
        title="Careers - Tech Emulsion"
        description="Explore career opportunities at Tech Emulsion. Apply for AI Engineer, MERN Stack Developer, or Business Development Specialist roles."
        pageType="about"
        canonicalUrl="https://techemulsion.com/careers"
        breadcrumbData={{
          items: [
            { name: "Home", url: "https://techemulsion.com" },
            { name: "Careers", url: "https://techemulsion.com/careers" },
          ],
        }}
      />
      <Container maxW="container.xl" py={{ base: 14, lg: 20 }}>
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
          mb={10}>
          <Box>
            <Heading as="h2" size="lg">
              Careers Page
            </Heading>
            <Text
              color={textColor}
              fontSize="lg"
              mt="4"
              mr={10}
              width={["70%", null, "auto"]}>
              Explore open roles and apply to join the Tech Emulsion team.
              We&apos;re looking for builders who enjoy shipping real products
              and solving meaningful problems with us.
            </Text>
          </Box>

          <VStack
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4">
            <ButtonGroup
              style={{
                backgroundColor: " none",
                fontSize: "1rem",
                color: "muted",
                display: "flex",
                alignItems: "center",
              }}>
              <ButtonLink
                href="/"
                size="lg"
                sx={{
                  bg: "none",
                  color: "muted",
                  padding: "0",
                  "&:hover": {
                    bg: "none",
                  },
                }}>
                Home
              </ButtonLink>
              <FaChevronRight size={15} />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                }}>
                Careers
              </Text>
            </ButtonGroup>
          </VStack>
        </Box>

        <Stack spacing={{ base: 10, lg: 14 }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {positions.map((role) => (
              <Box
                key={role.id}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="xl"
                p={6}
                bg={cardBg}
                boxShadow="sm"
                transition="all 0.2s ease"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={3} align="center">
                    <Badge colorScheme="teal">{role.type}</Badge>
                    <Badge variant="subtle">{role.location}</Badge>
                  </Stack>
                  <Heading as="h3" size="md">
                    {role.title}
                  </Heading>
                  <Text color={textColor}>{role.summary}</Text>
                  <Stack spacing={2}>
                    {role.highlights.map((item) => (
                      <Text key={item} color={textColor} fontSize="sm">
                        • {item}
                      </Text>
                    ))}
                  </Stack>
                  <Button
                    alignSelf="flex-start"
                    mt={2}
                    colorScheme="teal"
                    variant="outline"
                    onClick={() => handleApplyClick(role)}>
                    Apply
                  </Button>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Careers;

