import { Box, Divider, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Offer from '~/assets/products/dashboard/offer.svg';
import Range from '~/assets/products/dashboard/range.svg';
import Manage from '~/assets/products/dashboard/manage.svg';
import Graph from '~/assets/products/dashboard/decisions.svg';
import Image from 'next/image';
import React from 'react';

const KeyFeatures = () => {
  return (
    <Box
      sx={{
        px: { xs: 0, md: 18 },
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
          backgroundColor: '#FFFFFF',
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid
            size={{ xs: 12, md: 6 }}
            order={{ xs: 2, md: 1 }}
            sx={{
              pt: { xs: 0, md: 7 },
              pb: 7,
              pl: { xs: 0, md: 6.5 },
              pr: { xs: 0, md: 0 },
              color: 'deep-blue-secondary.main',
            }}
          >
            <Typography
              sx={{
                fontSize: '28px',
                fontWeight: '700',
                mb: 2.5,
                mt: 1.5,
              }}
            >
              A New Way to Pay
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
                mb: 3.5,
              }}
            >
              Go beyond market data with a new way to value your employees – PayStandards predicted
              pay.
            </Typography>
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
              className="tw-h-[214px] tw-w-full tw-rounded-[35px] md:tw-h-[319px] md:tw-w-full"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'linear-gradient(250deg, #3860FF 45.87%, #090C1A 96.34%)',
                mb: -2.5,
              }}
            >
              <Image
                src={Offer}
                height={370}
                alt="standard rating"
                className="tw-absolute tw-top-[-15px] tw-h-[245px] md:tw-top-[-17px] md:tw-h-[346px]"
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
          backgroundColor: '#FFFFFF',
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                background: 'linear-gradient(117deg, #88A0FF 7.12%, #152461 90.58%)',
                borderRadius: '35px',
                height: { xs: '253px', md: '108%' },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                className="tw-h-[227px] tw-w-[325px] tw-rounded-[35px] md:tw-h-[310px] lg:tw-h-[300px] lg:tw-w-[422px]"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: -2.5,
                }}
              >
                <Image src={Range} alt="range" className="tw-w-full md:tw-w-[450px]" />
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
              Master Pay Transparency
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
              }}
            >
              Create tailored pay ranges that meet pay transparency standards and that employees can
              easily understand.
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
          backgroundColor: '#FFFFFF',
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
                color: 'black',
              }}
            >
              Manage Pay Equity Continuously
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
              }}
            >
              From new hires to promotions to off-cycle salary increases, generate a fine-tuned pay
              recommendation that considers only the right things.
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
                background: 'linear-gradient(135deg, #3860FF 0%, #090C1A 100%)',
                borderRadius: '35px',
                mt: -1,
                height: { xs: '215px', md: '95%' },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: { xs: '215px', md: '95%' },
                  borderRadius: '35px',
                  background: 'linear-gradient(135deg, #3860FF 0%, #090C1A 100%)',
                  position: 'relative',
                }}
              >
                <Image
                  src={Manage}
                  alt="standard rating"
                  className="tw-absolute tw-bottom-0 tw-h-[200px] tw-w-[441px] tw-rounded-bl-[18px] tw-rounded-br-[25px] md:tw-bottom-[-18px] md:tw-h-full"
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
          backgroundColor: '#FFFFFF',
          borderRadius: '35px',
          p: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                background: 'linear-gradient(242deg, #88A0FF 5.89%, #152461 95.38%)',
                borderRadius: '35px',
                height: { xs: '246px', md: '95%' },
                width: { xs: '90%', md: '95%' },
                mt: -4,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 15,
                  right: '-50px',
                }}
              >
                <Image
                  src={Graph}
                  alt="standard rating"
                  className="tw-mt-[11px] tw-h-[224px] tw-w-full md:tw-mt-[14px] lg:tw-h-[292px]"
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
              Monitor the Impact of Pay Decisions in Real-Time
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'black',
              }}
            >
              Assess how pay practices are affecting your pay equity position – and tracking against
              your budget.
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
