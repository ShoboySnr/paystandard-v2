import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import styles from '@/app/_scss/global.module.scss';
import { Grid } from '@mui/system';
import Image from 'next/image';
import BlogImage from '~/assets/resources/blog-image.png';
import Link from 'next/link';
import ArrowRight from '~/assets/icons-common/arrow-right.svg';

export default function ResourcesBanner() {
  return (
    <Box
      className={styles.removeHeaderMargin}
      sx={{
        background:
          'linear-gradient(180deg, rgba(56, 96, 255, 0.20) 0%, rgba(56, 96, 255, 0.00) 100%)',
        height: { xs: 'auto', md: '640px' },
        padding: {
          xs: '70px 15px 40px 15px',
          md: ' 0 0 106px 0',
        },
      }}
      display="flex"
      justifyContent="center"
      alignItems="end"
    >
      <Grid
        maxWidth="lg"
        sx={{ height: { md: '320px', sm: 'auto' } }}
        container
        spacing={{ xs: '20px', sm: '60px' }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={BlogImage}
            alt="live demo"
            className="tw-rounded-3xl tw-border md:tw-h-[320px] md:tw-w-full md:tw-border-black"
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            paddingRight: { md: '60px' },
            display: 'flex',
            flexDirection: 'column',
            height: { md: '320px', xs: 'auto' },
            gap: { md: '0', xs: '24px' },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  md: '16px',
                  xs: '16px',
                },
                fontWeight: '400',
                color: 'deep-blue-secondary.main',
              }}
            >
              Featured Resource
            </Typography>
            <Divider
              sx={{
                borderColor: 'deep-blue-secondary.main',
                borderRadius: '40px',
                width: '195px',
                borderWidth: '1px',
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'dark-gray.main',
            }}
          >
            Mind The Gap! 3 Strategies To Close The Gender Pay Gap
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'dark-gray.main',
            }}
          >
            Every year on March 12th, the United States recognizes “Equal Pay
            Day”. That date is meant to represent how far into the year the
            average woman must work for her earnings to catch up with the
            average man’s earnings from the year prior ...
          </Typography>
          <Link href={'#'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'deep-blue-secondary.main',
                }}
              >
                Read More
              </Typography>
              <Image src={ArrowRight} alt={'arrow-right'} />
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
