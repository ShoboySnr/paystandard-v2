import { Box, Divider, Typography } from '@mui/material';
import Icon1 from '~/assets/home/benefits/icon1.png';
import Icon2 from '~/assets/home/benefits/icon2.svg';
import Icon3 from '~/assets/home/benefits/icon3.svg';
import Icon4 from '~/assets/home/benefits/icon4.png';
import Icon5 from '~/assets/home/benefits/icon5.svg';
import Icon6 from '~/assets/home/benefits/icon6.svg';
import Image from 'next/image';
import { Grid } from '@mui/system';
import React from 'react';

const corebenefits = [
  {
    icon: Icon1,
    title: 'Make Better',
    description: 'overall pay decisions\n vs. one-off adjustments',
  },
  {
    icon: Icon2,
    title: 'Elevate',
    description: 'performance as a\n driver of pay',
  },
  {
    icon: Icon3,
    title: 'Resolve',
    description: 'pay gaps effectively\n and cost-efficiently',
  },
  {
    icon: Icon4,
    title: 'Reduce',
    description: 'legal and\n reputational risks',
  },
  {
    icon: Icon5,
    title: 'Harness',
    description: 'the power\n of AI',
  },
  {
    icon: Icon6,
    title: 'Leverage',
    description: 'real-time data-\ndriven insights',
  },
];

const CoreBenefits = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction={{
          xs: 'column-reverse',
          md: 'row',
        }}
        sx={{
          pb: {
            md: '50px',
            xs: '55px',
          },
        }}
      >
        <Grid
          container
          alignSelf="center"
          rowSpacing={0}
          size={{
            xs: 12,
            md: 8,
          }}
          sx={{
            padding: { md: '25px', xs: '15px' },
            mt: { xs: '60px', md: '0' },
          }}
        >
          <Grid size={12}>
            <Box sx={{ display: 'flex', gap: '26px' }}>
              <Image src={'/assets/home/circle1.svg'} alt="image.png" height={70} width={70} />
              <Box
                sx={{
                  width: '100%',
                  alignSelf: 'flex-end',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: '32px', xs: '28px' },
                    lineHeight: '140%',
                    fontWeight: '400',
                    width: '100%',
                    margin: 'auto 0 2px 0',
                    color: 'black.main',
                    paddingBottom: '20px',
                  }}
                >
                  Core Benefits
                </Typography>
                <Divider
                  sx={{
                    mb: '3px',
                    borderColor: 'primary.main',
                    width: '100%',
                    borderWidth: '2px',
                    borderRadius: '5px',
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            container
            size={12}
            sx={{
              color: 'black.main',
              py: {
                md: '40px',
                xs: '40px',
              },
            }}
          >
            {corebenefits.map((benefit, index) => (
              <React.Fragment key={index}>
                <Grid
                  size={{
                    xs: 6,
                    md: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '18px',
                      alignItems: 'center',
                      textAlign: 'center',
                      py: '15px',
                    }}
                  >
                    <Image
                      src={benefit.icon}
                      alt="image.png"
                      className={'tw-h-[60px] tw-w-[60px]'}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: '16px', md: '20px' },
                          lineHeight: '140%',
                          fontWeight: '700',
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '16px', md: '20px' },
                          lineHeight: '140%',
                          fontWeight: '400',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <Divider
            sx={{
              mb: '3px',
              borderColor: 'primary.main',
              width: '100%',
              borderWidth: '2px',
              borderRadius: '5px',
            }}
          />
        </Grid>
        <Grid
          sx={{
            color: 'black.main',
          }}
          rowSpacing={5}
          container
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Grid
            sx={{
              color: 'black.main',
            }}
            rowSpacing={5}
            container
            size={12}
          >
            <Grid size={12}>
              <Box
                sx={{
                  height: { md: '360px', xs: '235px' },
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    color: 'black.main',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: '16px', xs: '10px' },
                      lineHeight: '140%',
                      fontWeight: '500',
                    }}
                  >
                    Outperforms
                    <br />
                    Traditional Approaches With
                  </Typography>
                  <Box
                    sx={{
                      fontSize: { md: '22px', xs: '14px' },
                      lineHeight: '140%',
                      fontWeight: '700',
                      display: 'flex',
                      color: 'black.main',
                    }}
                  >
                    <span style={{ marginRight: '-10px' }}>Up to</span>
                    <Typography
                      sx={{
                        fontSize: { md: '140px', xs: '67px' },
                        lineHeight: '80%',
                        fontWeight: '900',
                      }}
                    >
                      40
                    </Typography>{' '}
                    <span style={{ fontSize: '28px' }}>%</span>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { md: '28px', xs: '18px' },
                      lineHeight: '140%',
                      fontWeight: '900',
                      color: 'black.main',
                    }}
                  >
                    Pay Gap Reduction
                    <br />
                    in the First Year
                    <br />
                    Alone
                  </Typography>
                  <Divider
                    sx={{
                      my: '5px',
                      borderColor: 'primary.main',
                      width: { md: '100px', xs: '70px' },
                      mx: { xs: 'auto', md: '0' },
                      borderWidth: '3px',
                      borderRadius: '5px',
                    }}
                  />
                </Box>
                <img
                  src={'/assets/home/circle2.png'}
                  alt={'image.png'}
                  className={
                    'tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-mx-auto tw-w-[235px] md:tw-w-[360px]'
                  }
                />
              </Box>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Box
              sx={{
                height: { lg: '360px', md: '330px', xs: '235px' },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    fontSize: { md: '22px', xs: '14px' },
                    lineHeight: '140%',
                    fontWeight: '700',
                    color: 'black.main',
                  }}
                >
                  <span>Up to</span>
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontSize: { lg: '140px', md: '100px', xs: '78px' },
                        lineHeight: '80%',
                        fontWeight: '900',
                      }}
                    >
                      70
                    </Typography>{' '}
                    <span style={{ fontSize: '28px' }}>%</span>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: { lg: '28px', md: '20px', xs: '18px' },
                    lineHeight: '140%',
                    fontWeight: '900',
                  }}
                >
                  Remediation
                  <br /> Cost Reduction
                </Typography>
                <Divider
                  sx={{
                    my: '5px',
                    borderColor: 'primary.main',
                    width: { md: '100px', xs: '70px' },
                    mx: { xs: 'auto', md: '0' },
                    borderWidth: '3px',
                    borderRadius: '5px',
                  }}
                />
                <Typography sx={{ fontSize: '16px', lineHeight: '140%', fontWeight: '500' }}>
                  Relative to Traditional
                  <br /> Approaches
                </Typography>
              </Box>
              <img
                src={'/assets/home/circle3.png'}
                alt={'image.png'}
                className={
                  'tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-mx-auto tw-w-[235px] md:tw-w-[360px]'
                }
              />
              <Box
                sx={{
                  fontSize: { xs: '11px', md: '13px' },
                  my: 3,
                  justifyContent: 'center',
                  color: 'black.main',
                  fontWeight: '300',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '500',
                    mr: 1,
                    marginTop: '1px',
                  }}
                >
                  Note:
                </Typography>
                Above based on more than 200 simulations.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CoreBenefits;
