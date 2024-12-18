import { Grid } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import ImageCover from '~/assets/home/book-demo/image1.png';
import Image from 'next/image';

const BookDemo = () => {
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
              width: { md: 'fit-content', xs: '230px' },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: '32px', xs: '28px' },
                textAlign: { md: 'left', xs: 'center' },
                fontWeight: '700',
                color: 'deep-blue.main',
              }}
            >
              Learn how you can achieve true
              <br /> pay equity and pay transparency
              <br /> – without the headache.
            </Typography>
            <Box>
              <Button
                className={'!tw-rounded-full'}
                variant="contained"
                sx={{ height: '44px', px: '25px' }}
              >
                Book a Demo
              </Button>
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
              height={320}
              alt="Book a Demo"
            />
            <Box
              sx={{
                zIndex: -10,
                borderRadius: '35px',
                position: 'absolute',
                height: 'fill-available',
                width: 'fill-available',
                background:
                  'radial-gradient(184.83% 144.26% at 27.98% -27.37%, #3860FF 0%, #152461 100%)',
                top: 0,
                margin: '63px -43px 25px -43px',
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDemo;
