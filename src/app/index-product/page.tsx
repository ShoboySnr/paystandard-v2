import AppContainer from '@/components/layout/AppContainer';
import { Box, Divider, Typography } from '@mui/material';
import IndexIcon from '~/assets/products/pay-index-icon.svg';
import QuoteImage from '~/assets/products/quote-image.png';
import Image from 'next/image';
import BannerCard from '@/components/product/BannerCard';
import React from 'react';
import KeyFeatures from '@/components/product/index/KeyFeatures';
import CoreBenefits from '@/components/product/CoreBenefits';
import QuoteCard from '@/components/product/QuoteCard';
import ScheduleDemoForm from '@/components/product/ScheduleDemoForm';
import Icon1 from '~/assets/icons-common/core-benefits/icon_1.svg';
import Icon2 from '~/assets/icons-common/core-benefits/icon_2.svg';
import Icon3 from '~/assets/icons-common/core-benefits/icon_3.svg';
import Icon4 from '~/assets/icons-common/core-benefits/icon_4.svg';
import Icon5 from '~/assets/icons-common/core-benefits/icon_5.svg';
import styles from '@/app/_scss/global.module.scss';

const bannerCardContent: { title: string; paragraph: string } = {
  title: 'Understand Your Pay with Acuity',
  paragraph:
    'Go beyond the traditional pay gap metrics and understand your true pay equity position. Assess pay equity beyond the enterprise level – looking across different geographies, job levels, business units, and more. A comprehensive view which will not only supercharge your disclosure, but also help you identify where to take action.',
};

const quoteCardContent = {
  image: QuoteImage,
  quote:
    '71% of companies consider pay equity a critical component of their people and business strategy, yet an astounding 95% of companies struggle with it.',
  name: 'Kathi Enderes',
  company: 'SVP, Research | Josh Bersin Company',
};

const coreBenefits = [
  {
    icon: Icon1,
    text: 'Know Where You Stand',
  },
  {
    icon: Icon2,
    text: 'Automate Pay Gap Disclosure',
  },
  {
    icon: Icon3,
    text: 'Monitor Trends',
  },
  {
    icon: Icon4,
    text: 'Identify Root Causes',
  },
  {
    icon: Icon5,
    text: 'Harness Your Data',
  },
];
const IframeSrc = 'https://www.youtube.com/embed/x91MPoITQ3I?si=6WdYf-CPNY0pQoqh';
import image from '~/assets/products/video-image.png';

const IndexProduct = () => {
  return (
    <>
      <Box className={styles.removeHeaderMargin}>
        <Box
          className={styles.addHeaderPadding}
          sx={{
            height: '1130px',
            backgroundImage: `url('/assets/products/index-product-bg.png')`,
            backgroundSize: { xs: '250%', md: 'cover' },
            backgroundPosition: { xs: 'center top', md: 'center' },
            zIndex: 1,
          }}
        >
          <AppContainer>
            <Box
              sx={{
                textAlign: 'center',
                pt: { xs: 6, lg: 12 },
                color: '#283167',
              }}
            >
              <Image width={71} src={IndexIcon} alt="Pay Index" className="tw-m-auto" />
              <Box
                sx={{
                  fontSize: { xs: '32px', lg: '40px' },
                  fontWeight: '700',
                  px: { xs: 6, lg: 0 },
                  mt: 5,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Pay Index{' '}
                <Typography
                  sx={{
                    mt: 0.8,
                    fontWeight: '400',
                    fontSize: '12px',
                    fontStyle: 'normal',
                  }}
                >
                  TM
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '75%',
                  mt: 3.5,
                  mx: 'auto',
                  fontWeight: '400',
                  fontSize: { xs: '18px', lg: '24px' },
                }}
              >
                Access standardized ratings, trends, and root-cause analytics that guide you through
                your company’s current pay equity position.
              </Box>
            </Box>
          </AppContainer>
        </Box>
        <AppContainer>
          <BannerCard
            title={bannerCardContent.title}
            paragraph={bannerCardContent.paragraph}
            image={image}
            src={IframeSrc}
          />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '32px', lg: '40px' },
                fontWeight: '400',
                textAlign: 'center',
                mt: { xs: 10, md: 12 },
              }}
            >
              Key Features
            </Typography>
            <Divider
              sx={{
                mt: 1,
                borderColor: 'primary.main',
                borderRadius: '40px',
                width: { xs: '360px', lg: '500px' },
                borderWidth: '2.5px',
                mx: 'auto',
                mb: { xs: 5, md: 6 },
              }}
            />
          </Box>

          <KeyFeatures />
          <CoreBenefits data={coreBenefits} />
        </AppContainer>
        {/*<Box>*/}
        {/*<AppContainer>*/}
        {/*  <Box*/}
        {/*    sx={{*/}
        {/*      position: 'relative', // Ensures the card can position its children correctly*/}
        {/*      px: { xs: 9.5, md: 18 },*/}
        {/*      zIndex: 1, // Ensure the card is above the dividers*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <QuoteCard content={quoteCardContent} />*/}
        {/*  </Box>*/}
        {/*</AppContainer>*/}
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    position: 'relative', // Ensures positioning of the dividers relative to this Box*/}
        {/*    zIndex: 0, // Places the dividers below the card*/}
        {/*    mt: { xs: -32.5, lg: -22 }, // Adjust as needed to align with card*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Divider*/}
        {/*    sx={{*/}
        {/*      mx: { xs: 'auto', md: '0' },*/}
        {/*      borderColor: 'primary.main',*/}
        {/*      borderWidth: '2px',*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  <Divider*/}
        {/*    sx={{*/}
        {/*      mt: 4.5,*/}
        {/*      mx: { xs: 'auto', md: '0' },*/}
        {/*      borderColor: 'primary.main',*/}
        {/*      borderWidth: '2px',*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Box>*/}
        {/*</Box>*/}
        <Box sx={{ mt: { xs: -28, md: -14 } }}>
          <ScheduleDemoForm
            hubspotFormId={'0eb98f1b-af62-4c4e-8677-5c24f7b36041'}
            titleText={
              <Typography
                sx={{
                  fontSize: { xs: '28px', md: '32px' },
                  fontWeight: '700',
                  textAlign: 'center',
                  lineHeight: '140%',
                  pt: 2,
                }}
              >
                Learn How Pay Index Can Bring You Clear <br /> Pay Analytics and Actionable Insight
                {/*Learn How the Pay Index<span className={'tw-size-32 tw-font-normal'}>™ </span> Can*/}
                {/*Bring Clear Pay Analytics and Actionable Insight*/}
              </Typography>
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default IndexProduct;
