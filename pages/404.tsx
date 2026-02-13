import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ButtonLink } from "components/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { useColorMode } from "@chakra-ui/react";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Head from "next/head";
import { EnhancedSEO } from "components/seo/enhanced-seo";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const Custom404 = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} minH="100vh" position="relative" overflow="hidden">
      <Head>
        <title>404 - Page Not Found | Tech Emulsion</title>
      </Head>
      <EnhancedSEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to Tech Emulsion homepage."
        pageType="error"
        canonicalUrl="https://techemulsion.com/404"
      />
      
      <BackgroundGradient height="100%" zIndex={0} opacity={colorMode === "dark" ? 0.3 : 0.1} />
      
      <Container
        maxW="container.xl"
        py={{ base: 12, md: 20 }}
        position="relative"
        zIndex={1}
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <MotionVStack
          spacing={8}
          textAlign="center"
          maxW="3xl"
          mx="auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          {/* SVG Illustration */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            position="relative"
            w={{ base: "100%", md: "80%", lg: "70%" }}
            maxW="600px"
            mx="auto"
            mb={4}>
            <Box
              position="relative"
              width="100%"
              height="0"
              paddingBottom="66.4%"
              sx={{
                "& svg": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                },
              }}>
              <Image
                src="/assets/404/page-not-found.svg"
                alt="404 Page Not Found Illustration"
                fill
                style={{
                  objectFit: "contain",
                }}
                priority
              />
            </Box>
          </MotionBox>

          {/* Error Code */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <Heading
              fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, teal.500, pearlAqua.500)"
              bgClip="text"
              lineHeight="1"
              mb={4}>
              404
            </Heading>
          </MotionBox>

          {/* Error Message */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              color={headingColor}
              mb={4}>
              Oops! Page Not Found
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textColor}
              maxW="2xl"
              mx="auto"
              lineHeight="1.8">
              The page you're looking for seems to have wandered off into the digital void.
              Don't worry, let's get you back on track!
            </Text>
          </MotionBox>

          {/* Action Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            pt={4}>
            <VStack spacing={4} direction={{ base: "column", sm: "row" }}>
              <ButtonLink
                href="/"
                size="lg"
                colorScheme="teal"
                leftIcon={<FiHome />}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                borderRadius="xl"
                boxShadow="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s">
                Go Back Home
              </ButtonLink>
              
              <Button
                onClick={() => router.back()}
                size="lg"
                variant="outline"
                colorScheme="teal"
                leftIcon={<FiArrowLeft />}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                borderRadius="xl"
                borderWidth="2px"
                bg={cardBg}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                  bg: useColorModeValue("gray.50", "gray.700"),
                }}
                transition="all 0.3s">
                Go Back
              </Button>
            </VStack>
          </MotionBox>

          {/* Helpful Links */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            pt={8}>
            <Text fontSize="sm" color={textColor} mb={4}>
              Or explore our popular pages:
            </Text>
            <VStack spacing={2} fontSize="sm">
              <Link href="/portfolio-v3" style={{ color: "inherit" }}>
                <Text
                  as="span"
                  color="teal.500"
                  _hover={{ color: "teal.600", textDecoration: "underline" }}
                  transition="color 0.2s">
                  Portfolio
                </Text>
              </Link>
              <Link href="/services" style={{ color: "inherit" }}>
                <Text
                  as="span"
                  color="teal.500"
                  _hover={{ color: "teal.600", textDecoration: "underline" }}
                  transition="color 0.2s">
                  Services
                </Text>
              </Link>
              <Link href="/contact" style={{ color: "inherit" }}>
                <Text
                  as="span"
                  color="teal.500"
                  _hover={{ color: "teal.600", textDecoration: "underline" }}
                  transition="color 0.2s">
                  Contact Us
                </Text>
              </Link>
            </VStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  );
};

export default Custom404;
