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

const coreBenifits = [
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
    text: 'No Additional Spend Required',
  },
  {
    icon: Icon9,
    text: 'Reduce Legal Fees and Remediation ',
  },
  {
    icon: Icon10,
    text: 'Avoid Reputational Risk',
  },
  {
    icon: Icon4,
    text: 'See Where You’re Out of Compliance',
  },
];

const AuditProduct = () => {
  return (
    <Box>
      <Box
        sx={{
          mt: '-115px',
          height: '990px',
          background: `linear-gradient(
      to bottom, 
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 75%,
      rgba(255, 255, 255, 0.5) 95%, 
      rgba(255, 255, 255, 1) 100%
    ), 
    url('/assets/audit-product/audit-product-bg.png')`,
          backgroundSize: { xs: '250%', md: 'cover' },
          backgroundPosition: { xs: 'center top', md: 'center' },
          zIndex: 1,
        }}
      >
        <AppContainer
          sx={{
            pt: '115px',
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              pt: { xs: 6, lg: 12 },
              color: 'deep-blue-secondary.main',
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
              Pay Audit{' '}
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
              Pay Audit lets you make smarter, more empowered pay decisions during your annual
              year-end compensation review process - closing pay gaps with greater insight and
              visibility.
            </Box>
          </Box>
        </AppContainer>
      </Box>
      <AppContainer
        sx={{
          mt: 12,
        }}
      >
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
          <CoreBenefits data={coreBenifits} />
        </Box>
      </AppContainer>
      <Box>
        <AppContainer>
          <Box
            sx={{
              position: 'relative', // Ensures the card can position its children correctly
              px: { xs: 9.5, md: 18 },
              zIndex: 1, // Ensure the card is above the dividers
            }}
          >
            <QuoteCard content={quoteCardContent} />
          </Box>
        </AppContainer>
        <Box
          sx={{
            position: 'relative', // Ensures positioning of the dividers relative to this Box
            zIndex: 0, // Places the dividers below the card
            mt: { xs: -32.5, lg: -22 }, // Adjust as needed to align with card
          }}
        >
          <Divider
            sx={{
              mx: { xs: 'auto', md: '0' },
              borderColor: 'primary.main',
              borderWidth: '2px',
            }}
          />
          <Divider
            sx={{
              mt: 4.5,
              mx: { xs: 'auto', md: '0' },
              borderColor: 'primary.main',
              borderWidth: '2px',
            }}
          />
        </Box>
      </Box>
      <ScheduleDemoForm
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
            Learn How to Leverage the Pay Audit
            <span className={'tw-size-32 tw-font-normal'}>™ </span> <br /> at Your Company
          </Typography>
        }
      />
    </Box>
  );
};

export default AuditProduct;
