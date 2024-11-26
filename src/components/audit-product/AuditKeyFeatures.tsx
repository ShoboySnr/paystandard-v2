import { Box, Divider, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Rating from '~/assets/audit-product/rating.png';
import Equity from '~/assets/audit-product/equity.png';
import Strategy from '~/assets/audit-product/strategy.png';
import Decision from '~/assets/audit-product/decision.png';
import Image from 'next/image';
import React from 'react';
// import ArrowRight from '~/assets/icons-common/arrow-right-blue.svg';
// import Link from 'next/link';

const AuditKeyFeatures = () => {
  return (
    <Box
      sx={{
        px: { xs: 0, sm: 1, md: 4, lg: 18 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          mt: { xs: 10, md: 12 },
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
                color: 'black',
              }}
            >
              Know Where You Stand
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black.main',
              }}
            >
              Transcend average-based summary statistics and view
              outlier-resistant metrics to get pay equity right for your
              employees.
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
                mt: 2,
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
                background:
                  'linear-gradient(162deg, #3860FF 6.11%, #090C1A 95.04%)',
                mb: -0.5,
              }}
            >
              <Image
                src={Rating}
                alt="standard rating"
                className="tw-absolute tw-bottom-0 tw-h-[265px] md:tw-h-[339px] tw-w-full"
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
                background:
                  'linear-gradient(243deg, #88A0FF 9.96%, #152461 97.23%)',
                borderRadius: '35px',
                height: { xs: '260px', md: '115%' },
                width: '80%',
                mt: { md: -3, xs: 0 },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: '0px',
                  top: '50%',
                  transform: 'translate(-0%, -50%)',
                  right: '-40px',
                }}
              >
                <Image
                  src={Strategy}
                  alt="standard rating"
                  className="tw-w-full tw-h-full"
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
              Choose A Strategy
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black.main',
              }}
            >
              Leverage your data to go beyond market comps with a new way to
              value your employees – PayStandards predicted pay.
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
            md: 'linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
            xs: 'linear-gradient(0deg, #FFF -0.33%, rgba(255, 255, 255, 0.00) 100.81%)',
          },
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 6, sm: 1, md: 6 }}>
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
              Make Better Pay Decisions
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black.main',
              }}
            >
              View discrepancies at the individual employee level – value your
              employees appropriately while mitigating your legal risk.
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
                mt: { md: '-30px', xs: '-15px' },
                height: { xs: '250px', md: '125%' },
                mr: -1,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  background:
                    'linear-gradient(108deg, #3860FF 0%, #152461 100%)',
                  borderRadius: '35px',
                  height: { xs: '250px', md: '345px' },
                  width: { xs: '80%', sm: '90%', lg: '80%' },
                  position: 'absolute',
                  top: '43.2%',
                  right: -1,
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  zIndex: 2,
                  position: 'absolute',
                  top: { md: '-3%', xs: '-4%' },
                  right: { xs: -1, md: -2 },
                }}
              >
                <Image
                  src={Decision}
                  alt="standard rating"
                  className="tw-w-[366px] md:tw-w-[476px] md:tw-h-[343px] tw-h-[235px] "
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
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              pt: { xs: '16px', md: '0' },
            }}
          >
            <Box
              className="tw-h-[214px] tw-w-full tw-rounded-[35px] md:tw-h-[315px] md:tw-w-[470px] xl:tw-w-full md:tw-top-[-10px] tw-relative"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background:
                  'linear-gradient(133deg, #88A0FF 3.98%, #152461 96.46%)',
                mb: -2,
              }}
            >
              <Box
                sx={{
                  width: { xs: '83%', sm: '50%', md: '87%' },
                  height: { xs: '110%', sm: '115%', md: '110%' },
                  background: '#fff',
                  borderTopLeftRadius: '35px',
                  borderTopRightRadius: '35px',
                  overflow: 'hidden',
                  border: '1px solid #525252',
                  borderBottom: '0px',
                  position: 'absolute',
                  bottom: 0,
                }}
              >
                <Image
                  src={Equity}
                  alt="Equity"
                  className="tw-w-[90%] tw-m-auto tw-h-full tw-px-6 tw-pt-5 tw-pb-0"
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
                color: 'black',
              }}
            >
              Achieve True Pay Equity
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
              }}
            >
              Close the gap while driving the bottom line by making overall
              better pay decisions that create pay equity.
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

export default AuditKeyFeatures;
