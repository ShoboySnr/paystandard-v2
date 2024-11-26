import { Typography } from '@mui/material';
import { Grid } from '@mui/system';
import React from 'react';
import type { Metadata } from 'next';
import AppContainer from '@/components/layout/AppContainer';
import Governance from '@/components/securityAndPrivacy/Governance';
import DataProtection from '@/components/securityAndPrivacy/DataProtection';
import ProductSecurity from '@/components/securityAndPrivacy/ProductSecurity';
import EnterpriseSecurity from '@/components/securityAndPrivacy/EnterpriseSecurity';
import DataPrivacy from '@/components/securityAndPrivacy/DataPrivacy';
import Concern from '@/components/securityAndPrivacy/Concern';

export const metadata: Metadata = {
  title: 'Security and Privacy at PayStandards',
  description:
    'Security is at the heart of what we do—our security and compliance posture is critical to our business',
};

const SecurityAndPrivacy = () => {
  return (
    <>
      <Grid
        container
        size={12}
        sx={{
          pt: {
            md: '100px',
            xs: '60px',
          },
          pb: {
            md: '100px',
            xs: '60px',
          },
        }}
      >
        {/* heading and subtitle  */}
        <Grid size={12} textAlign={'center'}>
          <Typography
            sx={{
              fontSize: {
                md: '40px',
                xs: '32px',
              },
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              color: 'gray.main',
            }}
          >
            Security and Privacy at
            <br className={'md:tw-hidden'} /> PayStandards
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: '20px',
                xs: '18px',
              },
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              color: 'deep-blue-secondary.main',
            }}
          >
            Security is at the heart of what we do—our{' '}
            <br className={'md:tw-hidden'} /> security and compliance{' '}
            <br className={'tw-hidden md:tw-block'} /> posture is critical to{' '}
            <br className={'md:tw-hidden'} /> our business.
          </Typography>
        </Grid>
        <Grid
          size={12}
          sx={{
            mt: {
              md: '100px',
              xs: '60px',
            },
          }}
        >
          {/* Governance */}
          <AppContainer>
            <Governance />
          </AppContainer>
          <AppContainer>
            <DataProtection />
          </AppContainer>
          <AppContainer>
            <ProductSecurity />
          </AppContainer>
          <AppContainer>
            <EnterpriseSecurity />
          </AppContainer>
          <AppContainer>
            <DataPrivacy />
          </AppContainer>
          <AppContainer>
            <Concern />
          </AppContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default SecurityAndPrivacy;
