import { Grid, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';

const Concern = () => {
  return (
    <Grid
      container
      sx={{
        px: {
          xs: '10px',
        },
        pb: {
          md: '0',
          xs: '10px',
        },
      }}
    >
      <Grid container textAlign={'center'} justifyContent={'center'}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              padding: '0 0 0 0',
              color: 'gray.main',
            }}
          >
            Responsible Disclosure
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: '32px',
                xs: '32px',
              },
              fontWeight: '700',
              margin: 'auto 0 2px 0',
              padding: '0 0 10px 0',
              color: 'gray.main',
              '& br': {
                display: { md: 'none', xs: 'inline' }, // Hide line break on desktop
              },
            }}
          >
            Looking to report a<br />
            security concern?
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              padding: '0 0 10px 0',
              color: 'gray.main',
            }}
          >
            Please visit our{' '}
            <Link href="/contact-us" className={'tw-text-blue tw-underline'}>
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
