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

const coreBenifits: { icon: string; text: string }[] = [
  {
    icon: Icon6,
    text: 'Make Better Overall Pay Decisions Year-Round',
  },
  {
    icon: Icon11,
    text: 'Monitor and Sustain Pay Equity',
  },
  {
    icon: Icon12,
    text: 'Integrate With Your HCM Platform',
  },
  {
    icon: Icon13,
    text: 'Leverage a Fine-Tuned Pay Range ',
  },
  {
    icon: Icon14,
    text: 'Reduce Legal and Reputational Risk',
  },
];

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
                pt: { xs: 6, lg: 12 },
                color: 'black.main',
              }}
            >
              <Image width={71} src={PayPilotIcon} alt="Pay Index" className="tw-m-auto" />
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
                Pay Pilot{' '}
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
                Pay Pilot helps you make better everyday pay decisions to sustain your pay equity
                progress through an easy-to-use software platform.
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
                fontSize: { xs: '32px', lg: '40px' },
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
                width: { xs: '360px', lg: '500px' },
                borderWidth: '2.5px',
                mx: 'auto',
                mb: { xs: 5, md: 6 },
              }}
            />
          </Box>

          <KeyFeatures />
          <CoreBenefits data={coreBenifits} />
        </AppContainer>
        <Box sx={{ mt: { xs: -28, md: -14 } }} id="demo">
          <ScheduleDemoForm
            hubspotFormId={'451c25dc-4078-4874-9318-7e7f1fa7dda5'}
            titleText={
              <Typography
                sx={{
                  fontSize: { xs: '25px', md: '28px' },
                  fontWeight: '700',
                  textAlign: 'center',
                  lineHeight: '140%',
                  pt: 2,
                }}
              >
                Learn How Pay Pilot Will Empower Year-Round Pay <br /> Decisions and Facilitate Pay
                Transparency For Your Company
                {/*  Learn How to Leverage the Pay Pilot*/}
                {/*<span className={'tw-size-32 tw-font-normal'}>™ </span> <br />*/}
                {/*at Your Company*/}
              </Typography>
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default IndexProduct;
