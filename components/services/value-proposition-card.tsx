import { Circle, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { getServiceIcon } from "./icon-map";

export interface ValuePropositionCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ValuePropositionCard = ({
  title,
  description,
  icon,
}: ValuePropositionCardProps) => {
  const titleColor = useColorModeValue("#004c4c", "white");
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  const circleBg = useColorModeValue("#d9ebeb", "#66b2b2");
  const iconColor = "#004c4c";

  const IconComponent = getServiceIcon(icon);

  return (
    <VStack align="start" spacing={4} p={6} h="full">
      <Circle size="12" bg={circleBg} p={2}>
        <Icon as={IconComponent} boxSize={6} color={iconColor} />
      </Circle>
      <Heading as="h3" size="md" color={titleColor} fontWeight="bold">
        {title}
      </Heading>
      <Text color={textColor} fontSize="md" lineHeight="1.6">
        {description}
      </Text>
    </VStack>
  );
};
