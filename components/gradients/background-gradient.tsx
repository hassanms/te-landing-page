import { Box, useTheme, useColorModeValue } from "@chakra-ui/react";

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const customColors = ["#004c4c", "#66b2b2", "#008080", "#006666", "#b2d8d8"];

  let fallbackBackground = `radial-gradient(at top left, ${customColors[0]} 10%, transparent 80%), 
                            radial-gradient(at bottom, ${customColors[1]} 0%, transparent 70%), 
                            radial-gradient(at bottom left, ${customColors[2]} 0%, transparent 40%),
                            radial-gradient(at top right, ${customColors[3]}, transparent 80%), 
                            radial-gradient(at bottom right, ${customColors[4]} 0%, transparent 80%);`;

  let gradientOverlay = `linear-gradient(0deg, var(--chakra-colors-${useColorModeValue(
    "white",
    "gray-900"
  )}) 60%, rgba(0, 0, 0, 0) 100%);`;

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue("0.3", "0.5")}
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  );
};
