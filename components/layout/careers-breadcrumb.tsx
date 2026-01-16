import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";

interface CareersBreadcrumbProps {
  items: { label: string; href?: string }[];
}

export const CareersBreadcrumb: React.FC<CareersBreadcrumbProps> = ({
  items,
}) => {
  return (
    <Breadcrumb fontSize="sm" mb={4} color="gray.500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const content = item.href && !isLast ? (
          <BreadcrumbLink as={NextLink} href={item.href}>
            {item.label}
          </BreadcrumbLink>
        ) : (
          <BreadcrumbLink aria-current={isLast ? "page" : undefined}>
            {item.label}
          </BreadcrumbLink>
        );

        return <BreadcrumbItem key={`${item.label}-${index}`}>{content}</BreadcrumbItem>;
      })}
    </Breadcrumb>
  );
};

export default CareersBreadcrumb;

