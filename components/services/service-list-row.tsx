import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";

export interface ServiceListRowProps {
  slug: string;
  title: string;
  description: string;
}

export const ServiceListRow = ({ slug, title, description }: ServiceListRowProps) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const linkColor = useColorModeValue("teal.500", "pearlAqua.400");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <LinkBox
      py={6}
      borderBottomWidth="1px"
      borderColor={borderColor}
      _last={{ borderBottomWidth: 0 }}
      _hover={{ "& .service-title": { color: linkColor } }}
      transition="color 0.2s"
    >
      <LinkOverlay
        as={NextLink}
        href={`/services/${slug}`}
        _hover={{ textDecoration: "none" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 8 }}
          align={{ base: "flex-start", md: "flex-start" }}
        >
          <Heading
            as="h3"
            className="service-title"
            size="md"
            fontWeight="bold"
            color={headingColor}
            flex={{ md: "0 0 280px" }}
            transition="color 0.2s"
          >
            {title}
          </Heading>
          <Text color={textColor} fontSize="md" lineHeight="1.6" flex={1}>
            {description}
          </Text>
          <Icon
            as={FiArrowUpRight}
            boxSize={5}
            color={linkColor}
            flexShrink={0}
            opacity={0.7}
          />
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
};
