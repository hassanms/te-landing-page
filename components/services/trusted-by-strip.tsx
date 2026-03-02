import { Box, Heading, Text, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { trustedByLogos } from "data/services";

export const TrustedByStrip = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "gray.100");
  const mainHeadingColor = useColorModeValue("black", "white");
  const logoFilterLight = "brightness(0)";
  const logoFilterDark = "brightness(0) invert(1)";
  const logoFilter = useColorModeValue(logoFilterLight, logoFilterDark);

  return (
    <Box py={{ base: 10, md: 12 }} overflow="hidden">
      <Box mb={5} maxW="100%" textAlign="center" px={{ base: 2, sm: 4 }}>
        <Heading
          as="h2"
          size="md"
          color={colorMode === "dark" ? "white" : "teal.500"}
          sx={{ textTransform: "uppercase" }}
        >
          Trusted by
        </Heading>
        <Heading
          as="h1"
          mt={2}
          color={mainHeadingColor}
          fontSize={{ base: "1.75rem", sm: "2rem", md: "2rem" }}
          fontWeight="bold"
        >
          Leading Brands
        </Heading>
        <Text
          color={textColor}
          fontSize="16px"
          fontWeight="500"
          mt={5}
          px={{ base: 2, sm: 4, md: 10 }}
          maxW="2xl"
          mx="auto"
          textAlign="center"
          mb={8}
        >
          We&apos;re proud to have worked with clients across industries, delivering
          impactful solutions that drive results.
        </Text>
      </Box>
      <Box
        maxW="6xl"
        mx="auto"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={{ base: 5, sm: 6, md: 8 }}
        px={{ base: 3, sm: 4 }}
      >
        {trustedByLogos.map((logo, index) => {
          const logoData = logo as { keepOriginal?: boolean };
          return (
            <Tooltip key={`${index}-${logo.alt}`} label={logo.alt} hasArrow>
              <Box
                position="relative"
                flex="0 0 auto"
                w={{ base: "72px", sm: "90px", md: "100px" }}
                h={{ base: "38px", sm: "48px", md: "52px" }}
                minW={{ base: "72px", sm: "90px", md: "100px" }}
                cursor="pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{
                    objectFit: "contain",
                    filter: logoData.keepOriginal ? "none" : logoFilter,
                  }}
                  sizes="(max-width: 480px) 72px, (max-width: 768px) 90px, 100px"
                />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};
