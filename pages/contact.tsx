import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { ButtonLink } from "components/button-link";
import Contact from "components/Contact";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Contacts = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="services">
      <Head>
        <title>Contact Us - Tech Emulsion</title>
        <meta
          name="description"
          content="Get in touch with Tech Emulsion for your next project. We specialize in web development, SaaS solutions, Chrome extensions, QA testing, cloud services, and artificial intelligence."
        />
      </Head>
      <Container maxW="container.xl" py="20">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
          mb={10}
        >
          <Box>
            <Heading as="h2" size="lg">
              Contact Page
            </Heading>
            <Text
              color="muted"
              fontSize="lg"
              mt="4"
              width={["auto", null, "80%"]}
            >
              Whether you're looking for innovative software solutions, need to
              scale your development team, or want to discuss your next big
              project, we’d love to hear from you! At Tech Emulsion, we are
              dedicated to delivering exceptional results in web development,
              SaaS solutions, Chrome extensions, QA testing, cloud services, and
              artificial intelligence.
            </Text>
          </Box>

          {/* Explore Services */}
          <VStack
            spacing={4}
            display="flex"
            justifyContent={["flex-start", null, "flex-end"]}
            width={["100%", null, "auto"]}
            alignItems="end"
            mt="4"
          >
            <ButtonGroup
              style={{
                backgroundColor: " none",
                fontSize: "1rem",
                color: "muted",
                display: "flex",
                alignItems: "center",
              }}
            >
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
                }}
              >
                Home
              </ButtonLink>
              <FaChevronRight
                size={12}
                style={{
                  color: colorMode === "light" ? "#004c4c" : "white",
                }}
              />
              <Text
                as="span"
                ml="2"
                sx={{
                  color: colorMode === "light" ? "#004c4c !important" : "white",
                  whiteSpace: "nowrap",
                }}
              >
                Contact Page
              </Text>
            </ButtonGroup>
          </VStack>
        </Box>
        <Contact />
      </Container>
    </Box>
  );
};

export default Contacts;
