import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { ButtonLink } from "components/button-link/button-link";

interface CareersBreadcrumbProps {
  items: { label: string; href?: string }[];
}

export const CareersBreadcrumb: React.FC<CareersBreadcrumbProps> = ({
  items,
}) => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.100");

  return (
    <Box mb={8}>
      <Flex justify="flex-end">
        <ButtonGroup
          sx={{
            bg: "none",
            fontSize: "1rem",
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
                      color: textColor,
                      p: 0,
                      "&:hover": { bg: "none", color: headingColor },
                    }}
                  >
                    {item.label}
                  </ButtonLink>
                  <Icon as={FaChevronRight} color={textColor} boxSize={4} />
                </React.Fragment>
              );
            }

            return (
              <Text
                key={`${item.label}-${index}`}
                as="span"
                ml={isLast && index > 0 ? "2" : 0}
                color={headingColor}
              >
                {item.label}
              </Text>
            );
          })}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default CareersBreadcrumb;
