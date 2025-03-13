import { Toaster as HotToaster } from "react-hot-toast";
import { useTheme } from "@chakra-ui/react";

export const Toaster = () => {
  const theme = useTheme();

  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          backdropFilter: "blur(6px)",
          background: theme.colors.gray[700], // Adjust based on Chakra theme
          color: theme.colors.white,
          boxShadow: theme.shadows.md, // Adjust based on Chakra theme
          borderRadius: "md",
        },
      }}
    />
  );
};
