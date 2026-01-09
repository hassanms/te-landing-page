import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'
import { colors, brandColors } from './foundations/colors'

// Inter font 
import '@fontsource/inter/variable.css'

const styles = {
  global: (props: any) => ({
    body: {
      color: 'charcoal.800',
      bg: 'white',
      fontSize: 'lg',
      // fontFamily: '"Montserrat", sans-serif', // Montserrat font 
      fontFamily: 'Inter, sans-serif', // Inter font 
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
    fonts: {
      // Montserrat font (active - comment out and uncomment Inter below to switch back)
      body: '"Montserrat", sans-serif',
      heading: '"Montserrat", sans-serif',
      // Inter font (commented out - uncomment this and comment out Montserrat above to switch back to Inter)
      // body: 'Inter, sans-serif',
      // heading: 'Inter, sans-serif',
    },
    styles,
    fontSizes,
    components,
  },
  theme
)
