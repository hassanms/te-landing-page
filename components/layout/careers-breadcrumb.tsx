import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
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
      <Flex
        flexWrap="wrap"
        alignItems="center"
        gap={{ base: 1, md: 2 }}
        fontSize={{ base: "xs", md: "sm" }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (item.href && !isLast) {
            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <ButtonLink
                  href={item.href}
                  size={{ base: "xs", md: "sm" }}
                  sx={{
                    bg: "none",
                    color: "muted",
                    padding: "0",
                    fontSize: "inherit",
                    height: "auto",
                    minW: "auto",
                    "&:hover": {
                      bg: "none",
                    },
                  }}
                >
                  {item.label}
                </ButtonLink>
                <FaChevronRight size={10} style={{ flexShrink: 0 }} />
              </React.Fragment>
            );
          }

          return (
            <Text
              key={`${item.label}-${index}`}
              as="span"
              fontWeight="medium"
              sx={{
                color: colorMode === "light" ? "teal.700" : "teal.300",
              }}
            >
              {item.label}
            </Text>
          );
        })}
      </Flex>
    </Box>
  );
};

export default CareersBreadcrumb;

