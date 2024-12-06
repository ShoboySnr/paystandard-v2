'use client';
import { Archivo } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
const { palette } = createTheme();

const archivo = Archivo({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1248,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: archivo.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#3860FF',
    },
    // @ts-ignore
    white: palette.augmentColor({ color: { main: '#FFFFFF' } }),
    black: palette.augmentColor({ color: { main: '#090C1A' } }),
    red: palette.augmentColor({ color: { main: '#F22C2C' } }),
    'dark-gray': palette.augmentColor({ color: { main: '#090C1A' } }),
    'deep-blue': palette.augmentColor({ color: { main: '#090C1A' } }),
    'deep-blue-secondary': palette.augmentColor({ color: { main: '#090C1A' } }),
    'light-blue': palette.augmentColor({ color: { main: '#88A0FF' } }),
    'light-blue-link': palette.augmentColor({ color: { main: '#3860FF' } }),
    'dark-purple': palette.augmentColor({ color: { main: '#240642' } }),
    gray: palette.augmentColor({ color: { main: '#090C1A' } }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: 'white',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '55px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid rgba(80, 80, 105, 0.50)',
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: '#F22C2C' },
      },
    },
  },
});

export default theme;
