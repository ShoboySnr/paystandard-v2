import type { Metadata } from 'next';
import { Suspense } from 'react';
import Head from 'next/head';
import './globals.css';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import React from 'react';
import { Box } from '@mui/material';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'PayStandards',
  description: 'Our Mission is to Raise the Standard of Pay',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={'tw-bg-[#FAFAFA]'}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppHeader />
            <Box
            // sx={
            //   {
            //     mt: {
            //       md: '115px',
            //       xs: '50px',
            //     },
            //   }
            // }
            >
              <main>{children}</main>
            </Box>
            <Suspense fallback={''}>
              <AppFooter />
            </Suspense>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Script src="https://js.hsforms.net/forms/v2.js" strategy={'beforeInteractive'} />
      </body>
    </html>
  );
}
