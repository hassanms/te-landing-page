import { Box, useColorMode } from "@chakra-ui/react";

/**
 * Section divider matching the style between "About us" and "What We Do" on the homepage.
 * Gradient line: transparent → teal → transparent, 1px height, 0.6 opacity.
 */
export const SectionDivider: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      h="1px"
      w="100%"
      bgGradient={
        colorMode === "dark"
          ? "linear(to-r, transparent, teal.400, transparent)"
          : "linear(to-r, transparent, teal.500, transparent)"
      }
      opacity={0.6}
    />
  );
};
