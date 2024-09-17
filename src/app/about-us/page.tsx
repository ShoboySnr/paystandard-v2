import type { Metadata } from 'next';
import { Grid } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ProfileCard from '@/components/aboutUs/ProfileCard';
import leadingOrg1 from '~/assets/leading-organizations/image1_dark.svg';
import leadingOrg2 from '~/assets/leading-organizations/image2_dark.svg';
import leadingOrg3 from '~/assets/leading-organizations/image3_dark.svg';
import leadingOrg4 from '~/assets/leading-organizations/image4_dark.svg';
import leadingOrg5 from '~/assets/leading-organizations/image5_dark.svg';
import leadingOrg6 from '~/assets/leading-organizations/image6_dark.svg';
import AppContainer from '@/components/layout/AppContainer';
import styles from '@/app/_scss/global.module.scss';

export const metadata: Metadata = {
  title: 'About PayStandards',
  description: 'Pay for the Right Things. Drive the Bottom Line',
};

const AboutUs = () => {
  return (
    <>
      {/*  heading and subtitle */}
      <Grid
        className={styles.removeHeaderMargin}
        container
        size={12}
        sx={{
          background:
            'linear-gradient(180deg, rgba(56, 96, 255, 0.20) 0%, rgba(56, 96, 255, 0.00) 100%)',
        }}
      >
        <Grid
          justifyContent={'center'}
          alignItems={'center'}
          offset={{ md: 3 }}
          size={{
            md: 6,
            xs: 12,
          }}
          sx={{
            textAlign: 'center',
            pt: {
              md: '235px',
              xs: '100px',
            },
            px: {
              md: '40px',
              xs: '10px',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                md: '40px',
                xs: '32px',
              },
              fontWeight: '700',
              color: 'black.main',
            }}
          >
            Our Mission is to
            <br className={'md:tw-hidden'} /> Raise the
            <br className={'md:tw-hidden'} /> Standard of Pay
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: '24px',
                xs: '18px',
              },
              fontWeight: '400',
              margin: 'auto 2px 2px 2px',
              lineHeight: '33.6px',
              color: 'black.main',
            }}
          >
            PayStandards is the bottom line-driven compensation software platform that delivers true
            pay equity and pay transparency.
          </Typography>
        </Grid>
      </Grid>
      <AppContainer>
        <Grid
          container
          sx={{
            pb: {
              md: '50px',
            },
          }}
        >
          {/*   LeaderShip Card  */}
          <Grid container sx={{ color: 'deep-blue-secondary.main' }}>
            <Box
              sx={{
                borderRadius: '35px',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 'inherit', // Matches the parent border radius
                  padding: '1px', // Adjust padding to the border width you want
                  background: 'linear-gradient(0deg, #525252 19.67%, #52525200 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                  zIndex: 0,
                  pointerEvents: 'none',
                },
                backgroundColor: '#FAFAFA',
              }}
            >
              <Grid
                container
                size={12}
                sx={{
                  py: '50px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid size={12} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '32px',
                        xs: '28px',
                      },
                      fontWeight: '700',
                      margin: 'auto 0 2px 0',
                    }}
                  >
                    Leadership
                  </Typography>
                </Grid>
                <ProfileCard />
                <Typography
                  sx={{
                    fontSize: {
                      md: '28px',
                      xs: '24px',
                    },
                    fontWeight: '400',
                    margin: 'auto 0 2px 0',
                    lineHeight: '39.2px',
                    color: 'deep-blue-secondary.main',
                  }}
                >
                  From Leading Organizations
                </Typography>
                <Grid
                  rowSpacing={4}
                  size={{
                    md: 12,
                    xs: 12,
                  }}
                  justifyContent={'space-around'}
                  alignItems={'center'}
                  container
                  sx={{
                    padding: {
                      md: '50px',
                      xs: '30px',
                    },
                  }}
                >
                  <Grid
                    size={{
                      md: 'auto',
                    }}
                    container
                    justifyContent={'center'}
                  >
                    <Image height={70} src={leadingOrg1} alt={'Leading Org'} />
                  </Grid>
                  <Grid
                    size={{
                      md: 'auto',
                    }}
                    container
                    justifyContent={'center'}
                  >
                    <Image height={60} src={leadingOrg2} alt={'Leading Org'} />
                  </Grid>
                  <Grid
                    size={{
                      md: 'auto',
                    }}
                    container
                    justifyContent={'center'}
                  >
                    <Image height={45} src={leadingOrg3} alt={'Leading Org'} />
                  </Grid>
                  <Grid
                    size={{
                      md: 'auto',
                    }}
                    container
                    justifyContent={'center'}
                  >
                    <Image height={45} src={leadingOrg4} alt={'Leading Org'} />
                  </Grid>
                  <Grid
                    size={{
                      md: 'auto',
                      xs: 6,
                    }}
                    container
                    justifyContent={'center'}
                  >
                    <Image height={50} src={leadingOrg5} alt={'Leading Org'} />
                  </Grid>
                  <Grid
                    size={{
                      md: 'auto',
                    }}
                    container
                    justifyContent={'center'}
                  >
                    <Image height={70} src={leadingOrg6} alt={'Leading Org'} />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/*    join our team  card */}
          <Grid
            container
            justifyContent={'space-around'}
            alignItems={'center'}
            size={12}
            sx={{
              pt: '80px',
              pb: '66px',
            }}
          >
            <Grid
              size={{
                md: 7,
                xs: 12,
              }}
              sx={{ textAlign: 'center' }}
            >
              <Typography
                sx={{
                  fontSize: '32px',
                  fontWeight: '700',
                  margin: 'auto 0 4px 0',
                  lineHeight: '44px',
                  color: 'deep-blue-secondary.main',
                }}
              >
                Join Our
                <br className={'tw-block sm:tw-hidden'} /> Growing Team
              </Typography>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: '400',
                  margin: 'auto 0 4px 0',
                  color: 'deep-blue-secondary.main',
                  mt: '16px',
                }}
              >
                Passionate about using
                <br className={'sm:tw-hidden'} /> technology to help people?
                <br /> Join our journey to raise the <br className={'sm:tw-hidden'} /> standard of
                pay worldwide.
              </Typography>
              <Box sx={{ mt: '45px' }}>
                <Link href={'mailto: hello@paystandards.com'}>
                  <Button
                    className={'!tw-rounded-full'}
                    variant="contained"
                    sx={{ height: '44px', px: '25px' }}
                  >
                    Explore Openings
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </AppContainer>
    </>
  );
};

export default AboutUs;
