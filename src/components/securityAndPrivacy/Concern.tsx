import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';

const Concern = () => {
  return (
    <Grid
      size={12}
      sx={{
        px: { xs: '10px' },
        pb: { md: '0', xs: '10px' },
      }}
    >
      <Grid container size={12} textAlign="center" justifyContent="center">
        <Grid size={12}>
          <Typography
            sx={{
              fontSize: { md: '18px', xs: '16px' },
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              padding: '0 0 0 0',
              color: '#283167',
            }}
          >
            Responsible Disclosure
          </Typography>
          <Typography
            sx={{
              fontSize: { md: '32px', xs: '32px' },
              lineHeight: { xs: '38px', md: 'normal' },
              fontWeight: { xs: '500', md: '700' },
              margin: 'auto 0 2px 0',
              padding: '0 0 10px 0',
              color: '#283167',
              mb: { xs: 1, md: 0 },
              maxWidth: { xs: '311px', md: 'none' },
              mx: 'auto',
            }}
          >
            Looking to report a security concern?
          </Typography>
          <Typography
            sx={{
              fontSize: { md: '18px', xs: '16px' },
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              padding: '0 0 10px 0',
              color: '#283167',
            }}
          >
            Please visit our{' '}
            <Link
              href="/contact-us"
              style={{
                color: '#0000EE',
                textDecoration: 'underline',
              }}
            >
              Contact Us
            </Link>{' '}
            page.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Concern;
