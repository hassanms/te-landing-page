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

  // Chunk logos into rows of up to 7 so the last row can be centered
  const rows: typeof trustedByLogos[] = [];
  for (let i = 0; i < trustedByLogos.length; i += 7) {
    rows.push(trustedByLogos.slice(i, i + 7));
  }

  return (
    <Box py={{ base: 10, md: 12 }}>
      <Box mb={5} maxW="100%" textAlign="center">
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
          fontSize={{ base: "2rem", md: "2rem" }}
          fontWeight="bold"
        >
          Leading Brands
        </Heading>
        <Text
          color={textColor}
          fontSize="lg"
          fontWeight="500"
          mt={5}
          px={{ base: 4, md: 10 }}
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
        display="grid"
        gridTemplateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(5, 1fr)", md: "repeat(7, 1fr)" }}
        gap={{ base: 6, md: 8 }}
      >
        {rows.map((row, rowIndex) =>
          row.map((logo, colIndex) => {
            const logoData = logo as { keepOriginal?: boolean };
            const isLastRow = rowIndex === rows.length - 1;
            // First logo of last row in column 3, second in 4, third in 5 (explicit span for alignment)
            const gridColumn = isLastRow
              ? `${3 + colIndex} / ${4 + colIndex}`
              : undefined;
            return (
              <Tooltip key={`${rowIndex}-${logo.alt}`} label={logo.alt} hasArrow>
                <Box
                  position="relative"
                  w={{ base: "80px", sm: "90px", md: "100px" }}
                  h={{ base: "42px", sm: "48px", md: "52px" }}
                  cursor="pointer"
                  gridColumn={gridColumn}
                  alignSelf="center"
                  justifySelf="center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{
                      objectFit: "contain",
                      filter: logoData.keepOriginal ? "none" : logoFilter,
                    }}
                    sizes="100px"
                  />
                </Box>
              </Tooltip>
            );
          })
        )}
      </Box>
    </Box>
  );
};
