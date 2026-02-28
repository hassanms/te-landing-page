import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { getServiceIcon } from "./icon-map";

export interface ImpactItem {
  stat: string;
  label: string;
  icon: string;
}

export interface ImpactBarProps {
  items: ImpactItem[];
}

export const ImpactBar = ({ items }: ImpactBarProps) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.400");

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor={borderColor}
      py={6}
      mt={4}
    >
      {items.map((item, i) => (
        <Flex
          key={i}
          flex={1}
          direction="column"
          align="center"
          justify="center"
          py={4}
          px={6}
          borderRightWidth={{ base: 0, md: i < items.length - 1 ? "1px" : 0 }}
          borderBottomWidth={{ base: i < items.length - 1 ? "1px" : 0, md: 0 }}
          borderColor={borderColor}
          gap={2}
        >
          <Icon as={getServiceIcon(item.icon)} boxSize={8} color={accentColor} />
          <Text fontWeight="bold" fontSize="lg" color={headingColor}>
            {item.stat}
          </Text>
          <Text fontSize="sm" color={textColor}>
            {item.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
