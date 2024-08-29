import {
  Box,
  chakra,
  HTMLChakraProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  const color = useColorModeValue("#231f20", "#fff");
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
        src="https://ca.slack-edge.com/T03GTEP0VHP-U04ESJG2S2J-784d9253e312-512"
        alt="Logo"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};
