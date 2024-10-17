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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LESE5JQMGN"
          strategy="beforeInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LESE5JQMGN');
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              if (window.location.hostname === 'www.paystandards.com') {
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              }
            })(window, document, "clarity", "script", "o485wd6p6d");
          `}
        </Script>
        <Script
          src="https://js.hsforms.net/forms/v2.js"
          strategy={'beforeInteractive'}
        />
      </body>
    </html>
  );
}
