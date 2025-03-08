import {
  Box,
  chakra,
  HTMLChakraProps,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import lightLogo from "../public/assets/logo/logo.png";
import darkLogo from "../public/assets/logo/logo (1).png";

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
      <img
        src={
          colorMode === "light"
            ? "/assets/logo/logo.png"
            : "/assets/logo/logo (1).png"
        }
        alt="Logo"
        loading="eager"
        style={{
          width: "100px",
          height: "30px",
          objectFit: "contain",
          fontSize: "0.25rem",
        }}
      />
    </Box>
  );
};
