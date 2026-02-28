"use client";

import * as React from "react";
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { servicesData } from "data/services";

const COLS_PER_ROW = 4;

interface ServicesDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  useWhiteNav?: boolean;
}

function ServiceItem({
  title,
  href,
  isAccent,
  cardText,
  dividerColor,
  accentColor,
  itemHoverBg,
}: {
  title: string;
  href: string;
  isAccent: boolean;
  cardText: string;
  dividerColor: string;
  accentColor: string;
  itemHoverBg: string;
}) {
  return (
    <Link href={href}>
      <Flex
        align="center"
        justify="space-between"
        px={6}
        py={4}
        _hover={{ bg: itemHoverBg }}
        transition="background 0.2s"
      >
        <Text
          fontSize="sm"
          fontWeight={isAccent ? "semibold" : "medium"}
          color={isAccent ? accentColor : cardText}
          noOfLines={2}
          flex={1}
          minW={0}
        >
          {title}
        </Text>
        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          borderWidth="1px"
          borderColor={dividerColor}
          borderRadius="md"
          flexShrink={0}
          ml={3}
        >
          <Icon
            as={FiArrowUpRight}
            boxSize={4}
            color={isAccent ? accentColor : cardText}
          />
        </Box>
      </Flex>
    </Link>
  );
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  const cardText = useColorModeValue("gray.900", "white");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const accentColor = useColorModeValue("teal.500", "pearlAqua.400");
  const itemHoverBg = useColorModeValue("gray.50", "whiteAlpha.50");

  if (!isOpen) return null;

  return (
    <Box
      w="full"
      pt={0}
      pb={6}
      px={8}
      borderTopWidth="1px"
      borderColor={dividerColor}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Container maxW="container.xl" px={0}>
        <SimpleGrid columns={COLS_PER_ROW} gap={0}>
          {servicesData.map((service, idx) => (
            <Box
              key={service.id}
              borderRightWidth={idx % COLS_PER_ROW < COLS_PER_ROW - 1 ? "1px" : 0}
              borderBottomWidth="1px"
              borderColor={dividerColor}
            >
              <ServiceItem
                title={service.title}
                href={`/services/${service.slug}`}
                isAccent={false}
                cardText={cardText}
                dividerColor={dividerColor}
                accentColor={accentColor}
                itemHoverBg={itemHoverBg}
              />
            </Box>
          ))}
          <Box
            gridColumn="1 / -1"
            borderBottomWidth="1px"
            borderColor={dividerColor}
          >
            <ServiceItem
              title="All Services"
              href="/services"
              isAccent
              cardText={cardText}
              dividerColor={dividerColor}
              accentColor={accentColor}
              itemHoverBg={itemHoverBg}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
