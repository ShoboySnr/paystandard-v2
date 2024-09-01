import { Box, Divider, Typography } from '@mui/material';
import Icon1 from '~/assets/home/benefits/icon1.svg';
import Icon2 from '~/assets/home/benefits/icon2.svg';
import Icon3 from '~/assets/home/benefits/icon3.svg';
import Icon4 from '~/assets/home/benefits/icon4.svg';
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
    description: 'performance as a driver\n of pay',
  },
  {
    icon: Icon3,
    title: 'Resolve',
    description: 'pay gaps effectively\n and cost-efficiently',
  },
  {
    icon: Icon4,
    title: 'Reduce',
    description: 'legal and reputational\n risks',
  },
  {
    icon: Icon5,
    title: 'Harness',
    description: 'the power\n of AI',
  },
  {
    icon: Icon6,
    title: 'Leverage',
    description: 'real-time data-driven\n insights',
  },
];

const CoreBenefits = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          pb: {
            md: '50px',
          },
        }}
      >
        <Grid
          container
          alignSelf="center"
          size={{
            xs: 12,
            md: 8,
          }}
          sx={{
            padding: '25px',
          }}
        >
          <Grid size={12}>
            <Box sx={{ display: 'flex', gap: '26px' }}>
              <Image src={'/assets/home/circle1.svg'} alt="image.png" height={70} width={70} />
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '140%',
                  fontWeight: '500',
                  width: '100%',
                  borderBottom: '4px solid',
                  borderColor: 'primary.main',
                  margin: 'auto 0 2px 0',
                  paddingBottom: '20px',
                }}
              >
                Core Benefits
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            size={12}
            sx={{
              color: 'deep-blue.main',
              py: {
                md: '75px',
              },
              borderBottom: '4px solid',
              borderColor: 'primary.main',
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
                    }}
                  >
                    <Image src={benefit.icon} alt="image.png" className={'h-[60px] w-[60px]'} />
                    <Box>
                      <Typography sx={{ fontSize: '20px', lineHeight: '140%', fontWeight: '700' }}>
                        {benefit.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '16px',
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
        </Grid>
        <Grid
          sx={{
            color: 'deep-blue.main',
          }}
          rowSpacing={5}
          container
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Grid size={12}>
            <Box
              sx={{
                height: '360px',
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
                <Typography sx={{ fontSize: '16px', lineHeight: '140%', fontWeight: '500' }}>
                  Outperforms
                  <br />
                  Traditional Approaches With
                </Typography>
                <Box
                  sx={{ fontSize: '22px', lineHeight: '140%', fontWeight: '700', display: 'flex' }}
                >
                  Up to{' '}
                  <Typography sx={{ fontSize: '140px', lineHeight: '80%', fontWeight: '900' }}>
                    40
                  </Typography>{' '}
                  %
                </Box>
                <Typography sx={{ fontSize: '28px', lineHeight: '140%', fontWeight: '900' }}>
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
                    width: '100px',
                    borderWidth: '3px',
                    borderRadius: '5px',
                  }}
                />
              </Box>
              <img
                src={'/assets/home/circle2.png'}
                alt={'image.png'}
                className={'tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-mx-auto tw-w-[360px]'}
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <Box
              sx={{
                height: '360px',
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
                <Box sx={{ fontSize: '22px', lineHeight: '140%', fontWeight: '700' }}>
                  Up to{' '}
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: '140px', lineHeight: '80%', fontWeight: '900' }}>
                      70
                    </Typography>{' '}
                    %
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '28px', lineHeight: '140%', fontWeight: '900' }}>
                  Remediation
                  <br /> Cost Reduction
                </Typography>
                <Divider
                  sx={{
                    my: '5px',
                    borderColor: 'primary.main',
                    width: '100px',
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
                className={'tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-mx-auto tw-w-[360px]'}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CoreBenefits;
