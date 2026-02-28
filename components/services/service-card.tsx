import { Box, Heading, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";

export interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  tags?: string[];
  /** When true, shows compact layout for home page (no "Learn more" link) */
  compact?: boolean;
}

export const ServiceCard = ({
  slug,
  title,
  shortDescription,
  image,
  tags = [],
  compact,
}: ServiceCardProps) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const cardBg = useColorModeValue("white", "gray.800");
  const linkColor = useColorModeValue("teal.500", "pearlAqua.400");
  const tagBg = useColorModeValue("teal.50", "whiteAlpha.100");
  const tagColor = useColorModeValue("teal.600", "pearlAqua.400");

  return (
    <Box h="full">
      <NextLink href={`/services/${slug}`} passHref>
        <Box
          as="a"
          display="flex"
          flexDirection="column"
          h="full"
          bg={cardBg}
          overflow="hidden"
          role="group"
          transition="all 0.3s ease"
        >
          <Box
            position="relative"
            aspectRatio={4 / 3}
            overflow="hidden"
            flexShrink={0}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Portfolio-style teal overlay on hover */}
            <Box
              position="absolute"
              inset={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="teal.500"
              opacity={0}
              transition="opacity 0.3s"
              _groupHover={{ opacity: 0.55 }}
              zIndex={1}
            />
            <Heading
              as="h3"
              position="absolute"
              inset={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={2}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              px={6}
              py={4}
              lineHeight="tall"
              textShadow="0 2px 8px rgba(0,0,0,0.4)"
              opacity={0}
              transition="opacity 0.3s"
              _groupHover={{ opacity: 1 }}
            >
              {title}
            </Heading>
          </Box>
          <Box py={6} px={0} flex={1} display="flex" flexDirection="column">
            {tags.length > 0 && (
              <HStack spacing={2} mb={3} flexWrap="wrap">
                {tags.map((tag) => (
                  <Box
                    key={tag}
                    px={2}
                    py={1}
                    fontSize="xs"
                    fontWeight="semibold"
                    color={tagColor}
                    bg={tagBg}
                    borderRadius="md"
                  >
                    {tag}
                  </Box>
                ))}
              </HStack>
            )}
            <Heading as="h2" size="lg" color={headingColor} mb={3} fontWeight="semibold">
              {title}
            </Heading>
            <Text
              color={textColor}
              fontSize="md"
              lineHeight="1.65"
              mb={compact ? 0 : 4}
              flex={1}
            >
              {shortDescription}
            </Text>
            {!compact && (
              <Box
                as="span"
                color={linkColor}
                fontSize="sm"
                fontWeight="semibold"
                display="inline-flex"
                alignItems="center"
                gap={2}
              >
                Learn more
                <Icon as={FiArrowUpRight} boxSize={4} />
              </Box>
            )}
          </Box>
        </Box>
      </NextLink>
    </Box>
  );
};
