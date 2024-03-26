import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#FFF7ED',
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FB923C',
      500: '#F97316',
      600: '#EA580C',
      700: '#C2410C',
      800: '#9A3412',
      900: '#7C2D12',
      950: '#431407',
    },
    secondary: {
      50: '#F9FAFB',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
      950: '#052E16',
    },
    accent: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
      950: '#030712',
    },
    warning: {
      50: '#FEFCE8',
      100: '#FEF9C3',
      200: '#FDE047',
      300: '#EAB308',
    },
    error: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FCA5A5',
      300: '#EF4444',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  config: {
    initialColorMode: 'light'
  },
});
