import type { Metadata } from 'next';
import { Box, Divider, Typography } from '@mui/material';
import AppContainer from '@/components/layout/AppContainer';
import Image from 'next/image';
import IndexIcon from '~/assets/audit-product/audit-index-icon.svg';
import QuoteCard from '@/components/product/QuoteCard';
import ScheduleDemoForm from '@/components/product/ScheduleDemoForm';
import React from 'react';
import QuoteImage from '~/assets/audit-product/autit-quote-image.png';
import AuditBannerCard from '@/components/audit-product/AuditBannerCard';
import AuditKeyFeatures from '@/components/audit-product/AuditKeyFeatures';
import Icon4 from '~/assets/icons-common/core-benefits/icon_4.svg';
import Icon6 from '~/assets/icons-common/core-benefits/icon_6.svg';
import Icon7 from '~/assets/icons-common/core-benefits/icon_7.svg';
import Icon8 from '~/assets/icons-common/core-benefits/icon_8.svg';
import Icon9 from '~/assets/icons-common/core-benefits/icon_9.svg';
import Icon10 from '~/assets/icons-common/core-benefits/icon_10.svg';
import CoreBenefits from '@/components/product/CoreBenefits';
import styles from '@/app/_scss/global.module.scss';

const bannerCardContent: { title: string; paragraph: string } = {
  title: 'Power Your Year-End Pay Process',
  paragraph:
    'Pay Audit is your go-to solution for the year-end compensation review process - including all features and benefits from the Pay Index and more. It empowers you to take action to make better pay decisions at year-end, protecting you with legal safeguards along the way, helping you to mitigate your legal risk, and optimizing your spend',
};

const quoteCardContent = {
  image: QuoteImage,
  quote:
    '71% of companies consider pay equity a critical component of their people and business strategy, yet an astounding 95% of companies struggle with it.',
  company: 'The Josh Bersin Company',
};

const coreBenefits = [
  {
    icon: Icon6,
    text: 'Make Better Overall Pay Decisions at Year-End',
  },
  {
    icon: Icon7,
    text: 'Improve Your Company’s Pay Equity',
  },
  {
    icon: Icon8,
    text: (
      <>
        No Additional <br /> Spend <br /> Required
      </>
    ),
  },
  {
    icon: Icon9,
    text: 'Reduce Legal Fees and Remediation ',
  },
  {
    icon: Icon10,
    text: (
      <>
        Avoid <br /> Reputational <br /> Risk
      </>
    ),
  },
  {
    icon: Icon4,
    text: 'See Where You’re Out of Compliance',
  },
];

export const metadata: Metadata = {
  title: 'Pay Audit',
  description:
    'Pay Audit empowers you to make data-driven pay decisions during your annual year-end compensation process, optimizing your compensation budget.',
};

const AuditProduct = () => {
  return (
    <Box className={styles.removeHeaderMargin}>
      <Box
        className={styles.addHeaderPadding}
        sx={{
          height: '1130px',
          backgroundImage: `url('/assets/audit-product/audit-product-bg.png')`,
          backgroundSize: { xs: '250%', md: 'cover' },
          backgroundPosition: { xs: 'center top', md: 'center' },
          zIndex: 1,
        }}
      >
        <AppContainer>
          <Box
            sx={{
              textAlign: 'center',
              pt: { xs: 6, md: 12 },
              color: 'black.main',
            }}
          >
            <Image width={71} src={IndexIcon} alt="Pay Index" className="tw-m-auto" />
            <Box
              sx={{
                fontSize: { xs: '32px', md: '40px' },
                fontWeight: '700',
                px: { xs: 6, md: 0 },
                mt: 5,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Pay Audit{' '}
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
                mt: 3.5,
                mx: 'auto',
                fontWeight: '400',
                fontSize: { xs: '18px', lg: '24px' },
              }}
            >
              Pay Audit empowers you to make data-driven pay decisions during your annual year-end
              compensation process, optimizing your compensation budget.
            </Box>
          </Box>
        </AppContainer>
      </Box>
      <AppContainer>
        <AuditBannerCard title={bannerCardContent.title} paragraph={bannerCardContent.paragraph} />
        <Box>
          <Typography
            sx={{
              fontSize: { xs: '28px', md: '32px' },
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
              width: { xs: '360px', md: '616px' },
              borderWidth: '2.5px',
              mx: 'auto',
              mb: { xs: 5, md: 6 },
            }}
          />
        </Box>

        <AuditKeyFeatures />

        <Box sx={{ mt: 12 }}>
          <CoreBenefits data={coreBenefits} />
        </Box>
      </AppContainer>
      <Box sx={{ mt: { xs: -28, md: -14 } }} id="demo">
        <ScheduleDemoForm
          hubspotFormId={'92923574-35b8-4773-8407-99bb806c9530'}
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
              Learn How to Leverage Pay Audit to Simplify the <br />
              Year-End Pay Process at Your Company
              {/*Learn How to Leverage the Pay Audit*/}
              {/*<span className={'tw-size-32 tw-font-normal'}>™ </span> <br /> at Your Company*/}
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default AuditProduct;
