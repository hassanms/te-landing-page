import React from "react";
import { Box, ButtonGroup, Text, useColorMode } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link/button-link";

interface CareersBreadcrumbProps {
  items: { label: string; href?: string }[];
}

export const CareersBreadcrumb: React.FC<CareersBreadcrumbProps> = ({
  items,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box mb="4">
      <ButtonGroup
        style={{
          backgroundColor: "none",
          fontSize: "1rem",
          color: "muted",
          display: "flex",
          alignItems: "center",
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (item.href && !isLast) {
            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <ButtonLink
                  href={item.href}
                  size="lg"
                  sx={{
                    bg: "none",
                    color: "muted",
                    padding: "0",
                    "&:hover": {
                      bg: "none",
                    },
                  }}
                >
                  {item.label}
                </ButtonLink>
                <FaChevronRight size={15} />
              </React.Fragment>
            );
          }

          return (
            <Text
              key={`${item.label}-${index}`}
              as="span"
              ml="2"
              sx={{
                color: colorMode === "light" ? "#004c4c !important" : "white",
              }}
            >
              {item.label}
            </Text>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};

export default CareersBreadcrumb;

