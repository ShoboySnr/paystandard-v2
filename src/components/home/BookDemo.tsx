'use client';
import { Grid } from '@mui/system';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import ImageCover from '~/assets/home/book-demo/image1.png';
import Image from 'next/image';
import Link from 'next/link';
import theme from '@/theme';
// import HubspotForm from '@/components/models/HubspotFormDialog';
// import { useState } from 'react';

const BookDemo = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
          justifyContent={{ md: 'flex-end', xs: 'center' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { md: 'flex-start', xs: 'center' },
              gap: '29px',
              width: { md: 'fit-content', xs: '240px' },
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
              {!isMobile && <br />} pay equity and pay transparency
              {!isMobile && <br />} – without the headache.
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
            px: '50px',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: 'fit-content',
            }}
          >
            <Image
              className={'tw-rounded-[35px]'}
              src={ImageCover}
              height={280}
              alt="Book a Demo"
            />
            <Box
              sx={{
                zIndex: -10,
                borderRadius: '35px',
                position: 'absolute',
                height: '70%',
                width: 'fill-available',
                background:
                  'radial-gradient(184.83% 144.26% at 27.98% -27.37%, #3860FF 0%, #152461 100%)',
                top: 0,
                margin: '40px -43px 25px -43px',
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDemo;
