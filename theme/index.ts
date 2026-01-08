import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'
import { colors, brandColors } from './foundations/colors'

import '@fontsource/inter/variable.css'

const styles = {
  global: (props: any) => ({
    body: {
      color: 'charcoal.800',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'charcoal.800', // Use brand charcoal instead of gray.900
      },
    },
  }),
}

export default extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors: {
      ...colors,
      // Map primary to teal for Chakra UI components
      primary: brandColors.primary,
      secondary: brandColors.secondary,
      // Override gray with charcoal
      gray: brandColors.gray,
    },
    styles,
    fontSizes,
    components,
  },
  theme
)
