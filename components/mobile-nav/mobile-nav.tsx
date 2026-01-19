import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  LinkProps,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
} from '@chakra-ui/react'
import { AnimatePresence, motion, useElementScroll } from 'framer-motion'
import useRouteChanged from 'hooks/use-route-changed'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RemoveScroll } from 'react-remove-scroll'

import siteConfig from 'data/config'
import { Logo } from 'components/layout/logo'
import { Link } from '@saas-ui/react'

interface NavLinkProps extends LinkProps {
  label: string
  href?: string
  isActive?: boolean
}

function NavLink({ href, children, isActive, onClick, ...rest }: NavLinkProps) {
  const { pathname } = useRouter()
  const bgActiveHoverColor = useColorModeValue('gray.100', 'whiteAlpha.100')

  const [, group] = href?.split('/') || []
  isActive = isActive ?? pathname.includes(group)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link
      href={href}
      display="inline-flex"
      flex="1"
      minH="40px"
      px="8"
      py="3"
      transition="0.2s all"
      fontWeight={isActive ? 'semibold' : 'medium'}
      borderColor={isActive ? 'purple.400' : undefined}
      borderBottomWidth="1px"
      color={isActive ? 'white' : undefined}
      _hover={{
        bg: isActive ? 'purple.500' : bgActiveHoverColor,
      }}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  )
}

interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => { } } = props
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const { pathname } = router
  const bgColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')

  useRouteChanged(onClose)

  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })

  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose()
    }
  }, [showOnBreakpoint, onClose])

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus()
      })
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              direction="column"
              w="100%"
              bg={bgColor}
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex="modal"
              pb="8"
              backdropFilter="blur(5px)"
            >
              <Box>
                <Flex justify="space-between" px="8" pt="4" pb="4">
                  <Logo />
                  <HStack spacing="5">
                    <CloseButton ref={closeBtnRef} onClick={onClose} />
                  </HStack>
                </Flex>
                <Stack alignItems="stretch" spacing="0">
                  {siteConfig.header.links.map(
                    ({ href, label, ...props }, i) => {
                      const handleLinkClick = (
                        e: React.MouseEvent<HTMLAnchorElement>
                      ) => {
                        // Close the menu when any link is clicked
                        onClose()
                        // For href links, let Next.js handle navigation
                        // The useRouteChanged hook will close the menu on route change
                      }

                      return (
                        <NavLink
                          href={href}
                          key={i}
                          onClick={handleLinkClick}
                          {...(props as any)}
                        >
                          {label}
                        </NavLink>
                      )
                    }
                  )}
                </Stack>
              </Box>
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  )
}

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'flex', md: 'none' }}
        fontSize="20px"
        color={useColorModeValue('gray.800', 'inherit')}
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
        aria-label="Open menu"
      />
    )
  }
)

MobileNavButton.displayName = 'MobileNavButton'
