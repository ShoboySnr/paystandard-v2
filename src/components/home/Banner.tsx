import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
// import HubspotForm from '@/components/models/HubspotFormDialog';
// import { useState } from 'react';

const Banner = () => {
  // const [open, setOpen] = useState<boolean>(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        p: {
          md: '70px 50px 42px 50px',
          xs: '40px 0 30px 0',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: { sm: '65%', md: '511px' },
          px: {
            md: '0',
            xs: '15px',
          },
        }}
      >
        <Box
          sx={{
            fontSize: {
              md: '40px',
              xs: '32px',
            },
            fontWeight: 'bold',
            color: 'black.main',
            lineHeight: '135%',
          }}
        >
          Pay for the Right Things. Drive the <u> Bottom Line. </u>
        </Box>
        <Box
          sx={{
            fontSize: '18px',
            fontWeight: 'normal',
            mt: '16px',
            color: 'black.main',
            '@media (min-width: 450px) and (max-width: 600px)': {
              width: '70%',
            },
          }}
        >
          <Box
            sx={{
              mb: '14px',
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                lineHeight: '150%',
              }}
            >
              From pay equity and pay transparency to employee engagement and
              retention, Total Rewards professionals have a lot at stake.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '18px',
                lineHeight: '150%',
              }}
            >
              The PayStandards platform gives you pay recommendations based on
              the right things, like performance, helping you save time, stay
              compliant, and optimize your company’s most important expense and
              asset – your people.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: '40px',
            display: 'flex',
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
            gap: '20px',
          }}
        >
          <Box
            sx={{
              mb: {
                xs: '110px',
                md: '0',
              },
            }}
          >
            <Link href={'/demo'}>
              <Button
                // onClick={handleClickOpen}
                className={'!tw-rounded-full'}
                variant="contained"
                sx={{ height: '44px', width: '160px', fontSize: '16px' }}
              >
                Book a Demo
              </Button>
            </Link>
          </Box>
          {/*<Box>*/}
          {/*  <Button*/}
          {/*    className={'!tw-rounded-full !tw-text-btn-outline-text'}*/}
          {/*    sx={{ height: '44px', width: '160px', fontSize: '16px' }}*/}
          {/*    variant="outlined"*/}
          {/*  >*/}
          {/*    Take a Tour*/}
          {/*  </Button>*/}
          {/*</Box>*/}
        </Box>
        <Box
          sx={{
            padding: {
              md: '20px 40px',
              xs: '14px 40px',
            },
            display: 'flex',
            flexDirection: {
              sm: 'row',
              xs: 'column',
            },
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: '14px',
            mt: '50px',
            borderRadius: '25px',
            color: 'black.main',
            backgroundColor: 'rgba(255, 255, 255, 0.80)',
          }}
        >
          <Box>Trusted by industry leaders</Box>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <Box>
              <Image
                src="/assets/home/fortune-500.png"
                width={57}
                height={74}
                alt="fortune500"
              />
            </Box>
            <Box>
              <Image
                src="/assets/home/ftse-100.png"
                width={102}
                height={19}
                alt="ftse100"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          overflow: 'hidden',
          right: {
            md: '-150px',
            lg: '-90px',
          },
          top: {
            md: '-100px',
            xs: 'unset',
            sm: '50px',
          },
          bottom: {
            md: 'unset',
            xs: '-20px',
          },
          zIndex: '-10',
        }}
      >
        <Image
          className={'tw-hidden md:tw-block'}
          src="/assets/home/home.png"
          width={1040}
          height={840}
          alt="banner.png"
        />
        <Image
          className={'tw-block md:tw-hidden'}
          src="/assets/home/home-mobile.png"
          width={1080}
          height={840}
          alt="banner.png"
        />
      </Box>
      {/*<HubspotForm*/}
      {/*  formId={'0cd9751e-4f6c-4943-862f-79bb61e9f746'}*/}
      {/*  portalId={'46454267'}*/}
      {/*  isOpen={open}*/}
      {/*  handleClose={handleClose}*/}
      {/*  uniqueId={'hubspot-form-banner'}*/}
      {/*/>*/}
    </Box>
  );
};

export default Banner;
