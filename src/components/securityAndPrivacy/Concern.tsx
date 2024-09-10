import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';

const Concern = () => {
  return (
    <Grid
      size={12}
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
      <Grid container size={12} textAlign={'center'} justifyContent={'center'} sx={{}}>
        <Grid size={12}>
          <Typography
            sx={{
              fontSize: {
                md: '18px',
                xs: '28px',
              },
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
                xs: '28px',
              },
              fontWeight: '700',
              margin: 'auto 0 2px 0',
              padding: '0 0 10px 0',
              color: 'gray.main',
            }}
          >
            Looking to report a security concern?
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: '18px',
                xs: '28px',
              },
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              padding: '0 0 10px 0',
              color: 'gray.main',
            }}
          >
            <span>Please visit our</span>&nbsp;
            <Link href="/contact-us" className={'tw-text-blue tw-underline'}>
              Contact Us
            </Link>
            &nbsp;
            <span>page.</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Concern;
