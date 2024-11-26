'use client';
import { Grid } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import ImageCover from '~/assets/home/book-demo/image1.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import HubspotForm from '@/components/models/HubspotFormDialog';
// import { useState } from 'react';

const BookDemo = () => {
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  // const handleDialogClose = () => {
  //   setDialogOpen(false);
  // };
  //
  // const handleDialogOpen = () => {
  //   setDialogOpen(true);
  // };

  return (
    <>
      <Grid
        direction={{
          md: 'row',
          xs: 'column-reverse',
        }}
        container
        size={12}
        columnSpacing={4}
        rowSpacing={4}
      >
        <Grid
          container
          size={{
            md: 6,
            xs: 12,
          }}
          sx={{ px: { md: '20px', xs: '10px' } }}
          justifyContent={{ md: 'flex-end', xs: 'center' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { md: 'flex-start', xs: 'center' },
              gap: '29px',
              width: { md: 'fit-content', xs: '240px', sm: '450px' },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: '32px', xs: '28px' },
                textAlign: { md: 'left', xs: 'center' },
                fontWeight: '700',
                color: 'black.main',
              }}
            >
              Learn how you can achieve true
              <br className="tw-hidden lg:tw-block" /> pay equity and pay
              transparency
              <br className="tw-hidden lg:tw-block" /> – without the headache.
            </Typography>
            <Box>
              <Link href={'/demo'}>
                <Button
                  className={'!tw-rounded-full'}
                  variant="contained"
                  sx={{ height: '44px', px: '25px' }}
                >
                  Book a Demo
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{
            md: 6,
            xs: 12,
          }}
          sx={{
            pr: { md: '50px', xs: '10px' },
            pl: { md: '20px', xs: '10px' },
            mt: { md: '30px', lg: '0px' },
            mb: { xs: '30px', md: '0' },
          }}
        >
          <Box
            className="tw-relative tw-h-[204px] tw-w-full sm:tw-w-[510px] md:tw-w-[410px] lg:tw-w-[510px] tw-rounded-[35px] md:tw-rounded-[35px] md:tw-h-[200px] lg:tw-h-[238px] tw-mx-auto"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background:
                'radial-gradient(184.83% 144.26% at 27.98% -27.37%, #3860FF 0%, #152461 100%)',
            }}
          >
            <Image
              src={ImageCover}
              alt="Book a Demo"
              className="tw-absolute md:tw-w-[320px] lg:tw-w-[420px] tw-w-[80%] md:tw-top-[-35px] tw-rounded-[35px] tw-h-[240px] md:tw-h-[130%]"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDemo;
