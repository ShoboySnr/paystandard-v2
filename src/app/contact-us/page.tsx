import React from 'react';
import type { Metadata } from 'next';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import AppContainer from '@/components/layout/AppContainer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Grid } from '@mui/system';
import Image from 'next/image';
import LiveDemo from '~/assets/contact/contact-us.jpeg';
import MailFrame from '~/assets/contact/mail.svg';
import Link from 'next/link';
import HubspotContactUs from '@/components/contact-us/HubspotContactUs';
import NewsletterForm from './NewsletterForm';

export const metadata: Metadata = {
  title: `Let's·Connect`,
  description: 'Have questions? Need support? Curious about PayStandards?',
};

export default function Contact() {
  return (
    <Box
      sx={{
        color: 'deep-blue.secondary',
        marginTop: { md: '44px' },
      }}
    >
      <AppContainer sx={{ px: { md: '45px', xs: '0' } }}>
        <Box
          sx={{
            mb: '30px',
            borderRadius: '35px',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              zIndex: -1,
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'inherit', // Matches the parent border radius
              padding: '1px', // Adjust padding to the border width you want
              background:
                'linear-gradient(0deg, #525252 19.67%, #52525200 100%)',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            },
            backgroundColor: 'transparent',
          }}
        >
          <Box
            sx={{
              pb: { xs: '60px', md: '30px' },
            }}
          >
            <Grid container>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  px: { md: '40px', xs: '15px' },
                }}
              >
                <Box
                  sx={{
                    pt: { xs: 6, md: 2 },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { xs: '32px' },
                      fontWeight: '700',
                      px: { xs: 6, md: 0 },
                      pb: { xs: 6, md: 0 },
                      textAlign: { xs: 'center', md: 'left' },
                      color: 'deep-blue-secondary.main',
                    }}
                  >
                    Let&apos;s Connect
                  </Box>
                  <Box
                    sx={{
                      fontSize: { xs: '18px' },
                      fontWeight: { xs: '400' },
                      textAlign: { xs: 'center', md: 'left' },
                      color: 'black.main',
                      my: { md: '16px', xs: '30px' },
                    }}
                  >
                    Have questions? Need support? Curious about PayStandards?
                    <Box
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                      <br />
                      We&apos;d love to find out more about your unique
                      compensation situation - and how we can help you attain
                      and sustain pay equity.
                    </Box>
                  </Box>
                </Box>

                <Box
                  component="form"
                  sx={{ '& .MuiTextField-root': { mb: '20px' } }}
                  noValidate
                  autoComplete="off"
                >
                  <HubspotContactUs />
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  px: { md: '60px', xs: '15px' },
                  textAlign: { xs: 'center', md: 'start' },
                }}
              >
                <Image
                  height={295}
                  src={LiveDemo}
                  alt="live demo"
                  className="tw-rounded-3xl tw-border md:tw-h-[295px] md:tw-w-full md:tw-border-black"
                />

                <Box
                  sx={{
                    mt: '24px',
                    color: 'black.main',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: '400',
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    Looking for partnership opportunities? Think PayStandards
                    would be a great complement to your solution or service?
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: '400',
                      display: { xs: 'none', md: 'block' },
                    }}
                  >
                    Let&apos;s talk about how we might work together!
                    PayStandards can be a great compliment to your solution or
                    existing services.
                  </Typography>

                  <div className="tw-flex tw-justify-center">
                    <Link href="mailto:partner@paystandards.com">
                      Button with Mail SVG Image
                      <Button
                        sx={{
                          mt: '20px',
                          fontSize: '16px',
                          px: '24px',
                          py: { xs: '16px', md: '10px' },
                          borderRadius: '9999px',
                          border: '1px solid #E6E8F0',
                          '&:hover': {
                            border: '1px solid #E6E8F0',
                          },
                        }}
                        startIcon={
                          <Box
                            component="img"
                            src="/assets/contact/mail-01.svg"
                            alt="mail icon"
                            sx={{ width: '25px', height: '25px' }}
                          />
                        }
                        color="black.main"
                        variant="outlined"
                      >
                        partner@paystandards.com
                      </Button>
                    </Link>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            my: '70px',
            px: { xs: 2, md: 7 },
          }}
        >
          <Grid container spacing={2}>
            <Grid
              container
              justifyContent="center"
              size={{
                md: 1,
                xs: 12,
              }}
            >
              <Image
                src={MailFrame}
                alt="live demo"
                className="tw-h-[70px] tw-w-[70px]"
              />
            </Grid>
            <Grid
              container
              justifyContent="center"
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: '400',
                  margin: '0 0 4px 0',
                  color: '#090C1A',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  Join the growing PayStandards
                  <br />
                  community and be the first to
                  <br />
                  access new insights.
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  Join our newsletter and be the first to access insights from
                  PayStandards.
                </Box>
              </Typography>
            </Grid>
            <Grid
              size={{
                md: 5,
                xs: 12,
              }}
            >
              <Box
                sx={{
                  padding: {
                    md: 0,
                  },
                }}
                className="tw-h-full"
              >
                <div className="tw-w-full tw-justify-center">
                  <NewsletterForm
                    hubspotFormId={'016bb2fc-a1f1-4005-a8e0-bc1ca5f2cac7'}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppContainer>
    </Box>
  );
}
