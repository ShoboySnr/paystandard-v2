import type { Metadata } from 'next';
import AppContainer from '@/components/layout/AppContainer';
import { Box, Divider, Typography } from '@mui/material';
import PayPilotIcon from '~/assets/products/dashboard/pay-pilot-icon.svg';
import YearRoundPay from '~/assets/products/dashboard/year-round-pay.svg';
import Image from 'next/image';
import BannerCard from '@/components/product/BannerCard';
import React from 'react';
import KeyFeatures from '@/components/product/dashboard/KeyFeatures';
import CoreBenefits from '@/components/product/CoreBenefits';
import ScheduleDemoForm from '@/components/product/ScheduleDemoForm';
import Icon6 from '~/assets/icons-common/core-benefits/icon_6.svg';
import Icon11 from '~/assets/icons-common/core-benefits/icon_11.svg';
import Icon12 from '~/assets/icons-common/core-benefits/icon_12.svg';
import Icon13 from '~/assets/icons-common/core-benefits/icon_13.svg';
import Icon14 from '~/assets/icons-common/core-benefits/icon_14.svg';
import styles from '@/app/_scss/global.module.scss';

const bannerCardContent: { title: string; paragraph: string } = {
  title: 'Power Your Year-Round Pay',
  paragraph:
    'Your one-stop-shop to pay transparency, the Pay Pilot helps you to publish pay ranges that are tailored to the job and empowers you to make better pay decisions from day one – including hiring, promotions, off-cycle salary increases, spot bonuses, and special incentives.',
};

const coreBenefits: { icon: string; text: string | React.ReactElement }[] = [
  {
    icon: Icon6,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Make Better <br />
          Overall Pay <br />
          Decisions Year- <br />
          Round
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Make Better Overall Pay Decisions Year-Round
        </Box>
      </>
    ),
  },
  {
    icon: Icon11,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Monitor and <br />
          Sustain Pay <br />
          Equity
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Monitor and Sustain Pay Equity
        </Box>
      </>
    ),
  },
  {
    icon: Icon12,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Integrate With <br />
          Your HCM <br />
          Platform
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Integrate With Your HCM Platform
        </Box>
      </>
    ),
  },
  {
    icon: Icon13,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Leverage a Fine- <br />
          Tuned Pay Range
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Leverage a Fine-Tuned Pay Range
        </Box>
      </>
    ),
  },
  {
    icon: Icon14,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Reduce <br />
          Legal and <br />
          Reputational Risk
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Reduce Legal and Reputational Risk
        </Box>
      </>
    ),
  },
];

export const metadata: Metadata = {
  title: 'Pay Pilot',
  description:
    'Pay Pilot helps you make better everyday pay decisions to sustain your pay equity progress through an easy-to-use software platform',
};

const IndexProduct = () => {
  return (
    <>
      <Box className={styles.removeHeaderMargin}>
        <Box
          className={styles.addHeaderPadding}
          sx={{
            height: '1130px',
            backgroundImage: `url('/assets/products/dashboard/dashboard-bg.png')`,
            backgroundSize: { xs: '250%', md: 'cover' },
            backgroundPosition: { xs: 'center top', md: 'center' },
            zIndex: 1,
          }}
        >
          <AppContainer>
            <Box
              sx={{
                textAlign: 'center',
                pt: { xs: 10, md: 12 },
                color: 'black.main',
              }}
            >
              <Box
                sx={{
                  width: { xs: '50px', md: '71px' },
                  height: { xs: '50px', md: '71px' },
                  margin: 'auto',
                }}
              >
                <Image
                  width={71}
                  height={71}
                  src={PayPilotIcon}
                  alt="Pay Index"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
              <Box
                sx={{
                  fontSize: { xs: '32px', md: '40px' },
                  fontWeight: '700',
                  px: { xs: 6, md: 0 },
                  mt: { xs: 2, md: 5 },
                  display: 'flex',
                  justifyContent: 'center',
                  color: { xs: '#283167', md: 'black.main' },
                }}
              >
                Pay Pilot{' '}
                <Typography
                  sx={{
                    mt: 0.8,
                    fontWeight: '400',
                    fontSize: '12px',
                    fontStyle: 'normal',
                  }}
                >
                  &#8482;
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '75%',
                  mt: { xs: 2, md: 3.5 },
                  mx: 'auto',
                  fontWeight: '400',
                  fontSize: { xs: '20px', md: '24px' },
                  color: '#283167',
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    textAlign: 'center',
                  }}
                >
                  PayPilot year-round is an <br />
                  easy-to-use software <br />
                  platform to help you make <br />
                  better everyday pay <br />
                  decisions, including hiring, <br />
                  promotions, and off-cycle <br />
                  salary increases to sustain <br />
                  your pay equity progress.
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  Pay Pilot helps you make better everyday pay decisions to
                  sustain your pay equity progress through an easy-to-use
                  software platform.
                </Box>
              </Box>
            </Box>
          </AppContainer>
        </Box>
        <AppContainer>
          <BannerCard
            title={bannerCardContent.title}
            paragraph={bannerCardContent.paragraph}
            image={YearRoundPay}
          />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '32px', md: '40px' },
                fontWeight: '400',
                textAlign: 'center',
                mt: { xs: 7.5, md: 10 },
              }}
            >
              Key Features
            </Typography>
            <Divider
              sx={{
                mt: 1,
                borderColor: 'primary.main',
                borderRadius: '40px',
                width: { xs: '360px', md: '500px' },
                borderWidth: '2.5px',
                mx: 'auto',
                mb: { xs: 5, md: 6 },
              }}
            />
          </Box>

          <KeyFeatures />
          <CoreBenefits data={coreBenefits} />
        </AppContainer>
        <Box sx={{ mt: { xs: -28, md: -14 } }} id="demo">
          <ScheduleDemoForm
            hubspotFormId={'451c25dc-4078-4874-9318-7e7f1fa7dda5'}
            titleText={
              <Typography
                sx={{
                  fontSize: { xs: '28px', md: '32px' },
                  fontWeight: '700',
                  textAlign: 'center',
                  lineHeight: '140%',
                  pt: 2,
                  color: '#283167',
                }}
              >
                {/* Mobile version */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  Learn How to Leverage
                  <br />
                  the Pay Pilot
                  <span style={{ fontSize: '16px', verticalAlign: 'super' }}>
                    ™
                  </span>
                  <br />
                  at Your Company
                </Box>
                {/* Desktop version */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  Learn How Pay Pilot Will Empower Year-Round Pay
                  <br />
                  Decisions and Facilitate Pay Transparency For Your Company
                </Box>
              </Typography>
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default IndexProduct;
