import * as React from 'react'
import NextLink from 'next/link'
import { Box, Flex, Heading, VisuallyHidden, Link } from '@chakra-ui/react'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  useLightLogo?: boolean
}

import siteConfig from 'data/config'

export const Logo = ({ href = '/', onClick, useLightLogo }: LogoProps) => {
  let logo
  if (siteConfig.logo) {
    logo = (
      <Box
        as={siteConfig.logo}
        height="32px"
        mt="-4px"
        useLightLogo={useLightLogo}
      />
    )
  } else {
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.seo?.title}
      </Heading>
    )
  }

  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      <Link
        as={NextLink}
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
      >
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
