import * as React from "react";
import {
  Box,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
  useColorMode,
} from "@chakra-ui/react";

import { Section, SectionTitle, SectionTitleProps } from "components/section";

const Revealer = ({ children }: any) => {
  return children;
};

export interface FeaturesProps
  extends Omit<SectionTitleProps, "title" | "variant">,
    ThemingProps<"Features"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  features: Array<FeatureProps>;
  columns?: ResponsiveValue<number>;
  spacing?: string | number;
  aside?: React.ReactChild;
  reveal?: React.FC<any>;
  iconSize?: SystemProps["boxSize"];
  innerWidth?: SystemProps["maxW"];
  margin?: number;
}

export interface FeatureProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: any;
  iconPosition?: "left" | "top";
  iconSize?: SystemProps["boxSize"];
  ip?: "left" | "top";
  variant?: string;
  delay?: number;
  margin?: number;
}

export const Feature: React.FC<FeatureProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    iconSize = 4,
    ip,
    variant,
    margin = 8,
  } = props;
  const styles = useMultiStyleConfig("Feature", { variant });
  const { colorMode } = useColorMode();
  const pos = iconPosition || ip;
  const direction = pos === "left" ? "row" : "column";

  return (
    <Stack sx={styles.container} direction={direction}>
      {icon && (
        <Circle
          sx={{
            backgroundColor: colorMode === "dark" ? "#66b2b2" : "#d9ebeb",
            p: "2",

            marginTop: `${margin}px`,
            marginRight: "20px",
            marginBottom: "10px",
          }}
        >
          <Icon as={icon} boxSize={iconSize} color={"#004c4c"} />
        </Circle>
      )}
      <Box sx={styles.content} textAlign={pos === "left" ? "left" : "center"}>
        <Heading
          sx={styles.title}
          size="md"
          color={colorMode === "dark" ? "white" : "#004c4c"}
        >
          {title}
        </Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  );
};

export const Features: React.FC<FeaturesProps> = (props) => {
  const {
    title,
    description,
    features,
    columns = [1, 2, 3],
    spacing = 8,
    align: alignProp = "center",
    iconSize = 4,
    aside,
    reveal: Wrap = Revealer,
    margin,
    ...rest
  } = props;

  const align = !!aside ? "left" : alignProp;

  const ip = align === "left" ? "left" : "top";

  return (
    <Section {...rest}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          {(title || description) && (
            <Wrap>
              <SectionTitle
                title={title}
                description={description}
                align={align}
              />
            </Wrap>
          )}
          <SimpleGrid columns={columns} spacing={spacing}>
            {features.map((feature, i) => {
              return (
                <Wrap key={i} delay={feature.delay}>
                  <Feature
                    iconSize={iconSize}
                    margin={margin}
                    {...feature}
                    ip={ip}
                  />
                </Wrap>
              );
            })}
          </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p="8">
            {aside}
          </Box>
        )}
      </Stack>
    </Section>
  );
};
