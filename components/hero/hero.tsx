import { Container, Flex, FlexProps, Text, VStack, useColorModeValue } from "@chakra-ui/react";

interface HeroProps extends Omit<FlexProps, "title"> {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  const textColor = useColorModeValue("gray.600", "lightGrey.400");
  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text
            as="h1"
            textStyle="h1"
            textAlign="left"
            fontSize={{ base: "2rem", md: "2.5rem" }}>
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color={textColor}>
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  );
};
