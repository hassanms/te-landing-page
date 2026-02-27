import {
  Avatar,
  Box,
  BoxProps,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export interface TestimonialProps extends BoxProps {
  name: string;
  company?: string;
  description?: React.ReactNode;
  avatar: string;
  href?: string;
  children?: React.ReactNode;
  rating?: number;
}

const StarRating = ({
  rating = 5,
  color,
}: {
  rating?: number;
  color: string;
}) => {
  const fullStars = Math.min(5, Math.max(0, Math.floor(rating)));
  const emptyStars = 5 - fullStars;

  return (
    <Box display="flex" gap={1} mt={3} justifyContent="center">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} color={color} size={18} />
      ))}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaStar key={`empty-${i}`} color={color} style={{ opacity: 0.3 }} size={18} />
      ))}
    </Box>
  );
};

export const Testimonial = ({
  name,
  avatar,
  children,
  rating = 5,
  ...rest
}: TestimonialProps) => {
  const { colorMode } = useColorMode();
  const nameColor = useColorModeValue("gray.800", "white");
  const quoteColor = useColorModeValue("gray.700", "lightGrey.300");
  const starColor = useColorModeValue("#E8B923", "#E8B923");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      flexShrink={0}
      minW={{ base: "280px", md: "320px", lg: "360px" }}
      maxW={{ base: "280px", md: "320px", lg: "360px" }}
      px={{ base: 4, md: 6 }}
      {...rest}
    >
      <Box
        w="80px"
        h="80px"
        flexShrink={0}
        borderRadius="full"
        border="2px solid"
        borderColor={useColorModeValue("gray.300", "white")}
        overflow="hidden"
        bg="#004c4c"
      >
        <Avatar
          src={avatar || undefined}
          name={name}
          size="xl"
          bg="#004c4c"
          color="white"
          w="100%"
          h="100%"
          borderRadius="full"
          sx={{ border: "none" }}
        />
      </Box>
      <Heading
        as="h3"
        size="md"
        mt={4}
        fontWeight="bold"
        color={nameColor}
      >
        {name}
      </Heading>
      <Box mt={4} textAlign="left" w="100%">
        <Text
          as="span"
          fontSize="3xl"
          color={quoteColor}
          fontWeight="bold"
          lineHeight="1"
          mr={1}
        >
          &ldquo;
        </Text>
        <Text
          as="span"
          fontSize={{ base: "xl", md: "2xl" }}
          lineHeight="tall"
          color={quoteColor}
          fontWeight="500"
        >
          {children}
        </Text>
      </Box>
      <StarRating rating={rating} color={starColor} />
    </Box>
  );
};
