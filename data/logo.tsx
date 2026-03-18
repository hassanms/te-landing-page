import {
  Box,
  HTMLChakraProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { getImageUrl } from "lib/supabase-storage";

export interface LogoProps extends HTMLChakraProps<"svg"> {
  useLightLogo?: boolean;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { useLightLogo, ...rest } = props;
  const color = useColorModeValue("#231f20", "#fff");
  const { colorMode } = useColorMode();
  const useLight =
    useLightLogo ?? (colorMode === "dark" ? true : false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2",
        textDecoration: "none",
      }}
      {...rest}
    >
      <Image
        src={
          useLight
            ? getImageUrl("assets/logo/logo-light.png")
            : getImageUrl("assets/logo/logo-dark.png")
        }
        alt="Tech Emulsion logo"
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
