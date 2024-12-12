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
              pt: { xs: 0, md: 7 },
              pb: 7,
              pl: { xs: 0, md: 6.5 },
              pr: { xs: 0, md: 0 },
              color: 'black.main',
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
                mb: 2,
              }}
            >
              Go beyond market data with a new way to value your employees –
              PayStandards predicted pay.
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
              display: { xs: 'none', md: 'flex' },
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
                background:
                  'linear-gradient(250deg, #3860FF 45.87%, #090C1A 96.34%)',
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
          <Grid
            size={{ xs: 12, md: 6 }}
            order={{ xs: 1, md: 2 }}
            sx={{
              position: 'relative',
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              justifyContent: 'end',
              pt: { xs: '16px', md: '0' },
            }}
          >
            <Box
              className="tw-relative tw-h-[214px] sm:tw-h-[314px] tw-w-full tw-rounded-[35px] md:tw-h-[300px] md:tw-w-full"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background:
                  'linear-gradient(250deg, #3860FF 45.87%, #090C1A 96.34%)',
                mb: -1.5,
              }}
            >
              <Image
                src={Offer}
                alt="offer"
                className="tw-absolute tw-bottom-[0px] tw-h-[243px] sm:tw-h-[342px] tw-w-auto md:tw-h-[347px]"
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
          {/* <Grid
            size={{ xs: 12, md: 6 }}
            order={{ xs: 1, md: 2 }}
            sx={{
              position: 'relative',
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              justifyContent: 'end',
              pt: { xs: '16px', md: '0' },
            }}
          >
            <Box
              className="tw-relative tw-h-[214px] sm:tw-h-[314px] tw-w-full tw-rounded-[35px] md:tw-h-[300px] md:tw-w-full"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background:
                  'linear-gradient(250deg, #3860FF 45.87%, #090C1A 96.34%)',
                mb: -1.5,
              }}
            >
              <Image
                src={Range}
                alt="Range"
                className="tw-absolute tw-bottom-[20px] sm:tw-bottom-[80px] tw-h-[243px] sm:tw-h-[342px] tw-w-[70%] md:tw-w-auto md:tw-h-[347px]"
              />
            </Box>
          </Grid> */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                background:
                  'linear-gradient(117deg, #88A0FF 7.12%, #152461 90.58%)',
                borderRadius: '35px',
                height: { xs: '253px', sm: '353px', md: '108%' },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                className="tw-h-[227px] tw-w-[325px] tw-rounded-[35px] md:tw-h-[300px] md:tw-w-[422px]"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                  mt: -2.5,
                }}
              >
                <Image
                  src={Range}
                  alt="range"
                  className="tw-w-full md:tw-w-[450px]"
                />
              </Box>
              <Box
                className="tw-relative tw-h-[214px] sm:tw-h-[314px] tw-w-full tw-rounded-[35px] md:tw-h-[300px] md:tw-w-full"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'center',
                  mb: -1.5,
                }}
              >
                <Image
                  src={Range}
                  alt="Range"
                  className="tw-absolute tw-bottom-[20px] sm:tw-bottom-[20px] tw-h-[243px] sm:tw-h-[342px] tw-w-[70%] md:tw-w-auto md:tw-h-[347px]"
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
                mb: 2,
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
              Create tailored pay ranges that meet pay transparency standards
              and that employees can easily understand.
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
        <Grid container spacing={{ md: 1, xs: 6 }}>
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
                mb: 2,
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
              From new hires to promotions to off-cycle salary increases,
              generate a fine-tuned pay recommendation that considers the right
              things.
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
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ pl: { md: 2, xs: 0 } }}
            order={{ xs: 1, md: 2 }}
          >
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
                  height: { xs: '215px', sm: '315px', md: '95%' },
                  borderRadius: '35px',
                  background:
                    'linear-gradient(135deg, #3860FF 0%, #090C1A 100%)',
                  position: 'relative',
                }}
              >
                <Image
                  src={Manage}
                  alt="standard rating"
                  className="tw-absolute tw-bottom-0 tw-h-[200px] sm:tw-h-[300px] md:tw-h-[250px] md:tw-bottom-[-14px] tw-w-[441px] tw-rounded-bl-[18px] tw-rounded-br-[25px] lg:tw-bottom-[-18px] lg:tw-h-full"
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
                background:
                  'linear-gradient(242deg, #88A0FF 5.89%, #152461 95.38%)',
                borderRadius: '35px',
                height: { xs: '246px', sm: '346px', md: '95%' },
                width: { xs: '100%', md: '95%' },
                mt: -4,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -15, md: 15 },
                  right: '-50px',
                }}
              >
                <Image
                  src={Graph}
                  alt="standard rating"
                  className="tw-mt-[11px] tw-h-[224px] sm:tw-h-[334px] tw-w-full md:tw-mt-[14px] md:tw-h-[292px]"
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
                mb: 2,
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
              Assess how pay practices are affecting your pay equity position –
              and tracking against your budget.
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
