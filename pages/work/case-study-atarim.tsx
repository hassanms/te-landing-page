import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";

const CaseStudyAtarim = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="services">
      <Head>
        <title>Case Study: Atarim - Tech Emulsion</title>
        <meta
          name="description"
          content="Learn how Tech Emulsion helped Atarim, a leading SaaS company, scale their operations and improve customer satisfaction with custom software solutions."
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          Calendly.initBadgeWidget({
            url: "https://calendly.com/hassanms/30min",
            text: "Schedule time with me",
            color: "#004c4c",
            textColor: "#ffffff",
          });
        }}
      />
      <Container maxW="container.xl" py="20">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Box
          display={{ base: "block", md: "flex" }}
          px="15"
          mt={10}
          justifyContent={"space-between"}
          mb={10}
        >
          <Box
            sx={{
              width: "100%",
              backgroundImage:
                colorMode === "dark"
                  ? "url('/assets/background/pattern.jpg')"
                  : "url('/assets/background/light-pattern.jpg')",
              height: "350px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              py: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              h: "100%",
              textAlign: "center",
            }}
          >
            <Box>
              <Image
                src="/assets/portfolio/atarim.png"
                alt="Artis"
                width={502}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  marginTop: 25,
                }}
              />
            </Box>
            <Text
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="4xl"
              fontWeight={"500"}
              mt="4"
              width={"100%"}
              align={"center"}
            >
              Atarim – Case Study
            </Text>
            <Text
              color={
                colorMode === "dark" ? "rgba(255, 255, 255, 100)" : "GrayText"
              }
              fontSize="xl"
              mt="4"
              width={["auto", null, "60%"]}
            >
              Instantly comment on any design, from websites to graphics. Manage
              at scale and integrate your stack. Just click on any part to leave
              feedback and say goodbye to endless email/Slack Chains.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudyAtarim;