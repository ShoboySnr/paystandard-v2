import { Grid } from '@mui/system';
import { Box, Typography } from '@mui/material';
import React from 'react';
import AppContainer from '@/components/layout/AppContainer';
import CalenderImg from '~/assets/book-now/calender.png';
import Image from 'next/image';

const BookNow = () => {
  return (
    <>
      <AppContainer sx={{ px: { md: '45px', xs: '0' } }}>
        <Grid
          container
          sx={{
            pb: {
              md: '60px',
              xs: '60px',
            },
            pt: {
              md: '120px',
            },
          }}
        >
          {/* Book now card */}
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
                spacing={10}
                justifyContent={'center'}
                direction={{ md: 'row', xs: 'column' }}
                sx={{
                  py: '50px',
                  px: {
                    md: '100px',
                    xs: '20px',
                  },
                }}
              >
                {/* text area */}
                <Grid
                  size={{
                    md: 6,
                    xs: 12,
                  }}
                  justifyContent={'center'}
                  textAlign={{
                    md: 'start',
                    xs: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        md: '32px',
                        xs: '28px',
                      },
                      fontWeight: '700',
                      margin: '0 0 2px 0',
                      marginBottom: { md: '36px', xs: '40px' },
                    }}
                  >
                    Ready to <br className={'md:tw-hidden'} /> Schedule
                    <br /> a Call Now?
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '20px',
                        xs: '18px',
                      },
                      fontWeight: '400',
                      margin: 'auto 0 2px 0',
                      marginBottom: '20px',
                    }}
                  >
                    We’d love to learn more about your compensation program and how we can help you
                    optimize your #1 expense.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '20px',
                        xs: '18px',
                      },
                      fontWeight: '400',
                      margin: 'auto 0 2px 0',
                      marginBottom: '20px',
                    }}
                  >
                    Our goal is to help you deliver equitable, sustainable, efficient pay for your
                    employees.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '20px',
                        xs: '18px',
                      },
                      fontWeight: '700',
                      margin: 'auto 0 2px 0',
                    }}
                  >
                    Please use the calendar to find a meeting time that works for you.
                  </Typography>
                </Grid>
                {/*  image area */}
                <Grid
                  size={{
                    md: 6,
                    xs: 12,
                  }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      position: 'relative',
                      height: '100%',
                    }}
                  >
                    <Box
                      width={{
                        md: '511px',
                        xs: '360px',
                      }}
                      height={{
                        md: '205px',
                        xs: '144px',
                      }}
                      sx={{
                        position: 'absolute',
                        borderRadius: '35px',
                        bgcolor: 'rgba(136, 160, 255, 0.50)',
                      }}
                    ></Box>
                    <Box
                      width={{
                        md: '368px',
                        xs: '260px',
                      }}
                      height={{
                        md: '468px',
                        xs: '329px',
                      }}
                      sx={{
                        borderRadius: '35px',
                        position: 'relative',
                      }}
                    >
                      <Image
                        src={CalenderImg}
                        alt="calendar"
                        style={{
                          borderRadius: '35px',
                          maxWidth: '100%',
                          height: 'auto',
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </AppContainer>
    </>
  );
};

export default BookNow;
