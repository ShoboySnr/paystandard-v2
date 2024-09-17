import { Box, Divider, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Rating from '~/assets/audit-product/rating.png';
import Disclosure from '~/assets/products/disclosure.png';
import Graphs from '~/assets/products/graphs.png';
import Analysis from '~/assets/products/analysis.png';
import Image from 'next/image';
import React from 'react';
// import ArrowRight from '~/assets/icons-common/arrow-right-blue.svg';
// import Link from 'next/link';

const KeyFeatures = () => {
  return (
    <Box
      sx={{
        px: { xs: 0, sm: 1, md: 4, lg: 18 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          mt: { xs: 5, md: 8.5 },
          border: '1px solid #525252',
          borderTop: { xs: '0', md: '1px solid #525252' },
          borderLeft: { xs: '0', md: '1px solid #525252' },
          borderRight: { xs: '0', md: '1px solid #525252' },
          backgroundColor: {
            md: 'linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
            xs: 'linear-gradient(0deg, #FFF -0.33%, rgba(255, 255, 255, 0.00) 100.81%)',
          },
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid
            size={{ xs: 12, md: 6 }}
            order={{ xs: 2, md: 1 }}
            sx={{
              pt: { xs: 0, md: 7.5 },
              pb: 7.5,
              pl: { xs: 0, md: 6.5 },
              pr: { xs: 0, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: '28px',
                fontWeight: '700',
                mb: 2.5,
                mt: 1.5,
                color: 'black.main',
              }}
            >
              Access Standardized Rating
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black.main',
                mt: 2,
                mb: 2,
              }}
            >
              Quantify company performance into verified metrics with PayStandards’ proprietary pay
              rating.
            </Typography>

            {/*<Link href={'/about-us'}>*/}
            {/*  <Typography*/}
            {/*    sx={{*/}
            {/*      display: 'flex',*/}
            {/*      fontSize: '20px',*/}
            {/*      fontWeight: '400',*/}
            {/*      color: 'black',*/}
            {/*      mt: 2,*/}
            {/*      mb: 2,*/}
            {/*      color: 'light-blue-link.main',*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <span className={'tw-mr-2'}>Why This Matters </span>*/}
            {/*    <Image src={ArrowRight} alt={'arrow-right'} />*/}
            {/*  </Typography>*/}
            {/*</Link>*/}
            <Divider
              sx={{
                borderColor: 'primary.main',
                borderRadius: '40px',
                width: '134px',
                borderWidth: '2.5px',
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            order={{ xs: 1, md: 2 }}
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              pt: { xs: '16px', md: '0' },
            }}
          >
            <Box
              className="tw-relative tw-h-[214px] tw-w-full tw-rounded-[35px] md:tw-h-[300px] md:tw-w-full"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'linear-gradient(162deg, #3860FF 6.11%, #090C1A 95.04%)',
                mb: -1.5,
              }}
            >
              <Image
                src={Rating}
                alt="standard rating"
                className="tw-absolute tw-bottom-[0px] tw-h-[242px] tw-w-auto md:tw-h-[347px]"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          mt: { xs: 7.5, md: 12 },
          border: '1px solid #525252',
          borderTop: { xs: '0', md: '1px solid #525252' },
          borderLeft: { xs: '0' },
          borderRight: { xs: '0', md: '1px solid #525252' },
          backgroundColor: {
            md: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
            xs: 'linear-gradient(0deg, #FFF -0.33%, rgba(255, 255, 255, 0.00) 100.81%)',
          },
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                background: 'linear-gradient(258deg, #3860FF 1.93%, #090C1A 98.15%)',
                borderRadius: '35px',
                height: { xs: '246px', md: '125%' },
                width: '90%',
                mt: -4,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: '-40px',
                  transform: { xs: 'translateY(50%)', md: 'translateY(55%)' },
                }}
              >
                <Image
                  src={Graphs}
                  alt="standard rating"
                  className="tw-h-[122px] md:tw-h-[159px] md:tw-w-full"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              pr: { xs: 0, md: 6.5 },
              pt: { xs: 0, md: 7.5 },
              pb: 7.5,
            }}
          >
            <Typography
              sx={{
                fontSize: '28px',
                fontWeight: '700',
                mb: 3,
                color: 'black.main',
              }}
            >
              Assess Trends
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black.main',
              }}
            >
              Visualize the current and future state of pay equity across a company’s workforce.
            </Typography>

            <Divider
              sx={{
                borderColor: 'primary.main',
                borderRadius: '40px',
                width: '134px',
                mt: 2,
                borderWidth: '2.5px',
              }}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          mt: { xs: 7.5, md: 12 },
          border: '1px solid #525252',
          borderTop: { xs: '0', md: '1px solid #525252' },
          borderLeft: { xs: '0', md: '1px solid #525252' },
          borderRight: { xs: '0', md: '1px solid #525252' },
          backgroundColor: {
            md: 'linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)    ',
            xs: 'linear-gradient(0deg, #FFF -0.33%, rgba(255, 255, 255, 0.00) 100.81%)',
          },
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid
            size={{ xs: 12, md: 6 }}
            order={{ xs: 2, md: 1 }}
            sx={{
              pl: { xs: 0, md: 6.5 },
              pt: { xs: 0, md: 7.5 },
              pb: 7.5,
            }}
          >
            <Typography
              sx={{
                fontSize: '28px',
                fontWeight: '700',
                mb: 3,
                color: 'black.main',
              }}
            >
              Diagnose Root Cause
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black.main',
              }}
            >
              See and assess root causes to identify specific actions to take.
            </Typography>
            <Divider
              sx={{
                borderColor: 'primary.main',
                mt: 2,
                borderRadius: '40px',
                width: '134px',
                borderWidth: '2.5px',
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                background: 'linear-gradient(163deg, #3860FF 6.51%, #090C1A 95.97%)',
                borderRadius: '35px',
                mt: 1,
                height: { xs: '215px', md: '112%' },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: -1.5,
                }}
              >
                <Image
                  src={Analysis}
                  height={310}
                  alt="standard rating"
                  className="tw-absolute tw-top-[-34px] tw-h-[238px] tw-w-auto md:tw-h-[325px]"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          mt: { xs: 7.5, md: 12 },
          border: '1px solid #525252',
          borderTop: { xs: '0', md: '1px solid #525252' },
          borderLeft: { xs: '0' },
          borderRight: { xs: '0', md: '1px solid #525252' },
          backgroundColor: {
            md: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
            xs: 'linear-gradient(0deg, #FFF -0.33%, rgba(255, 255, 255, 0.00) 100.81%)',
          },
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                background: 'linear-gradient(241deg, #88A0FF 12.95%, #152461 95.37%)',
                borderRadius: '35px',
                height: { xs: '253px', md: '112%' },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                className="tw-h-[250px] tw-w-[330px] tw-rounded-[35px] md:tw-h-[278px] md:tw-w-[420px]"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: -2.5,
                }}
              >
                <Image src={Disclosure} alt="standard rating" />
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              pr: { xs: 0, md: 6.5 },
              pt: { xs: 0, md: 7.5 },
              pb: 7.5,
            }}
          >
            <Typography
              sx={{
                fontSize: '28px',
                fontWeight: '700',
                mb: 3,
                color: 'black.main',
              }}
            >
              Facilitate Disclosure
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black.main',
              }}
            >
              Automate your pay gap reporting for your Board and the public.
            </Typography>

            <Divider
              sx={{
                borderColor: 'primary.main',
                mt: 2,
                borderRadius: '40px',
                width: '134px',
                borderWidth: '2.5px',
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default KeyFeatures;
