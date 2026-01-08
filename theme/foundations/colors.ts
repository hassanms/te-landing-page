// Tech Emulsion Brand Colors
// Based on Brand Kit v0.1

export const colors = {
  // Primary Brand Colors
  teal: {
    50: '#E6F7F7',
    100: '#B3E5E5',
    200: '#80D3D3',
    300: '#4DC1C1',
    400: '#1AAFAF',
    500: '#008080', // Primary TEAL
    600: '#006666',
    700: '#004C4C',
    800: '#003333',
    900: '#001A1A',
  },
  evergreen: {
    50: '#E6F0EF',
    100: '#B3D3D0',
    200: '#80B6B1',
    300: '#4D9992',
    400: '#1A7C73',
    500: '#003530', // Primary EVERGREEN
    600: '#002A26',
    700: '#001F1C',
    800: '#001412',
    900: '#000A08',
  },
  charcoal: {
    50: '#E8E8E8',
    100: '#C5C5C5',
    200: '#A2A2A2',
    300: '#7F7F7F',
    400: '#5C5C5C',
    500: '#414141', // CHARCOAL GREY
    600: '#353535',
    700: '#292929',
    800: '#1E1E1E', // Primary CHARCOAL
    900: '#121212',
  },
  
  // Secondary Colors - For Teal
  mutedTeal: {
    50: '#F0F9F6',
    100: '#D4EDE0',
    200: '#B8E1CA',
    300: '#9CD5B4',
    400: '#92C9B1', // Primary MUTED TEAL
    500: '#7AB89A',
    600: '#629783',
    700: '#4A766C',
    800: '#325555',
    900: '#1A343E',
  },
  darkSlateGrey: {
    50: '#E8EBEA',
    100: '#C4CBC9',
    200: '#A0ABA8',
    300: '#7C8B87',
    400: '#586B66',
    500: '#3B605E', // Primary DARK SLATE GREY
    600: '#2F4D4B',
    700: '#233A38',
    800: '#172725',
    900: '#0B1412',
  },
  
  // Secondary Colors - For Evergreen
  pearlAqua: {
    50: '#F0FCFB',
    100: '#D3F5F2',
    200: '#B6EEE9',
    300: '#99E7E0',
    400: '#7CE0D7',
    500: '#5FC9BC', // Primary PEARL AQUA
    600: '#4CA196',
    700: '#397970',
    800: '#26514A',
    900: '#132924',
  },
  blueSpruce: {
    50: '#E6F5F3',
    100: '#B3E0D9',
    200: '#80CBBF',
    300: '#4DB6A5',
    400: '#1AA18B',
    500: '#008474', // Primary BLUE SPRUCE
    600: '#006A5D',
    700: '#005046',
    800: '#00362F',
    900: '#001C18',
  },
  
  // Neutral Colors
  lightGrey: {
    50: '#FFFFFF',
    100: '#F5F5F5',
    200: '#EBEBEB',
    300: '#E1E1E1',
    400: '#D9D9D9', // Primary LIGHT GREY
    500: '#C5C5C5',
    600: '#B1B1B1',
    700: '#9D9D9D',
    800: '#898989',
    900: '#757575',
  },
  
  // Legacy support - map old colors to new brand colors
  brand: {
    // Primary brand color (TEAL)
    primary: '#008080',
    // Secondary brand color (Evergreen)
    secondary: '#003530',
    // Dark background (Charcoal)
    dark: '#1E1E1E',
    // Light accent
    light: '#D9D9D9',
  },
}

// Chakra UI color scheme mapping
export const brandColors = {
  // Map teal as the primary color scheme
  primary: colors.teal,
  // Map evergreen as secondary
  secondary: colors.evergreen,
  // Map charcoal for dark mode
  gray: colors.charcoal,
}

