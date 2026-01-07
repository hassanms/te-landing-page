import {
  Box,
  HTMLChakraProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  const color = useColorModeValue("#231f20", "#fff");
  const { colorMode } = useColorMode();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2",
        textDecoration: "none",
      }}
    >
      <Image
        src={
          colorMode === "light"
            ? "/assets/logo/logo-dark.png"
            : "/assets/logo/logo-light.png"
        }
        alt="Logo"
        loading="eager"
        width={100}
        height={30}
        style={{
          objectFit: "contain",
          fontSize: "0.25rem",
        }}
      />
    </Box>
  );
};
