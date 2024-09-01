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
    'deep-blue': palette.augmentColor({ color: { main: '#152461' } }),
    'light-blue': palette.augmentColor({ color: { main: '#88A0FF' } }),
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
  },
});

export default theme;
