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
    'Pay Audit is your go-to solution for the year-end compensation review process - including all features and benefits from the Pay Index and more. It empowers you to take action to make better pay decisions at year-end, protecting you with legal safeguards along the way, helping you to mitigate your legal risk, and optimizing your spend.',
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
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Make Better <br />
          Overall Pay <br />
          Decisions at <br />
          Year-End
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Make Better Overall Pay Decisions at Year-End
        </Box>
      </>
    ),
  },
  {
    icon: Icon7,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Improve Your <br />
          Company&apos;s Pay <br />
          Equity
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Improve Your Company&apos;s Pay Equity
        </Box>
      </>
    ),
  },
  {
    icon: Icon8,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          No Additional <br />
          Spend Required
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          No Additional Spend Required
        </Box>
      </>
    ),
  },
  {
    icon: Icon9,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Reduce Legal <br />
          Fees and <br />
          Remediation
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Reduce Legal Fees and Remediation
        </Box>
      </>
    ),
  },
  {
    icon: Icon10,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          Avoid <br />
          Reputational <br />
          Risk
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          Avoid Reputational Risk
        </Box>
      </>
    ),
  },
  {
    icon: Icon4,
    text: (
      <>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          See Where <br />
          You&apos;re Out of <br />
          Compliance
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          See Where You&apos;e Out of Compliance
        </Box>
      </>
    ),
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
              pt: { xs: 10, md: 12 },
              color: { xs: '#283167', md: 'black.main' },
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
                src={IndexIcon}
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
                mt: { xs: 2, md: 3.5 },
                mx: 'auto',
                fontWeight: '400',
                fontSize: { xs: '18px', lg: '24px' },
                color: { xs: '#283167', md: 'black.main' },
              }}
            >
              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                  textAlign: 'center',
                }}
              >
                Pay Audit lets you make <br />
                smarter, more empowered <br />
                pay decisions during your <br />
                annual year-end <br />
                compensation review <br />
                process – closing pay gaps <br />
                with greater insight and <br />
                visibility.
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                Pay Audit empowers you to make data-driven pay decisions during
                your annual year-end compensation process, optimizing your
                compensation budget.
              </Box>
            </Box>
          </Box>
        </AppContainer>
      </Box>
      <AppContainer>
        <AuditBannerCard
          title={bannerCardContent.title}
          paragraph={bannerCardContent.paragraph}
        />
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
                color: '#283167',
              }}
            >
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                Learn How to Leverage
                <br />
                the Pay Audit
                <span style={{ fontSize: '16px', verticalAlign: 'super' }}>
                  ™
                </span>
                <br />
                at Your Company
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                Learn How to Leverage Pay Audit to Simplify the
                <br />
                Year-End Pay Process at Your Company
              </Box>
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default AuditProduct;
