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
        p: {
          md: '70px 50px 42px 50px',
          xs: '40px 0 30px 0',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '511px',
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
          }}
        >
          Pay for the Right Things. Drive the <u> Bottom Line. </u>
        </Box>
        <Box
          sx={{
            fontSize: '18px',
            fontWeight: 'normal',
            mt: '16px',
            color: 'black',
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
              From pay equity and pay transparency to employee engagement and retention, Total
              Rewards professionals have a lot at stake.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '18px',
                lineHeight: '150%',
              }}
            >
              The PayStandards platform gives you pay recommendations that consider the right
              things, while helping you save time, stay compliant, optimize your company’s #1
              expense, and prioritize your biggest asset – your people.
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
          <Box>
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
          <Box>
            <Button
              className={'!tw-rounded-full !tw-text-btn-outline-text'}
              sx={{ height: '44px', width: '160px', fontSize: '16px' }}
              variant="outlined"
            >
              Take a Tour
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            padding: {
              md: '20px 40px',
              xs: '10px 40px',
            },
            display: 'flex',
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: {
              md: '20px',
              xs: '0',
            },
            mt: '50px',
            borderRadius: '25px',
            backgroundColor: 'rgba(255, 255, 255, 0.80)',
          }}
        >
          <Box>Trusted by industry leaders:</Box>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <Box>
              <Image src="/assets/home/fortune-500.png" width={57} height={74} alt="fortune-500" />
            </Box>
            <Box>
              <Image src="/assets/home/ftse-100.png" width={102} height={19} alt="fortune-500" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          overflow: 'hidden',
          right: {
            md: '-90px',
          },
          top: {
            md: '-110px',
            xs: 'unset',
          },
          bottom: {
            md: 'unset',
            xs: '0',
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
