import { Box, Button, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const BannerCard = ({
  title,
  paragraph,
  src,
  image,
  showBorder = false,
}: {
  title: React.ReactNode;
  paragraph: string;
  src?: string;
  image?: any;
  showBorder?: boolean;
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        py: { xs: 2, md: 7 },
        px: { xs: 2, md: 6 },
        pb: { xs: 7.5, md: 7 },
        position: 'relative',
        mt: { xs: -69, md: -64 },
        border: '1px solid #525252',
        backgroundColor: '#FFFFFF',
        borderRadius: { xs: '25px', md: '35px' },
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          {src ? (
            <Box className="tw-relative tw-m-auto tw-h-[235px] tw-w-[330px] lg:tw-h-[325px] lg:tw-w-[440px]">
              <Box
                className="tw-absolute tw-z-0 tw-h-[235px] tw-w-[330px] tw-rounded-[35px] tw-bg-gradient-to-r tw-from-[#3860FF] tw-to-[#090C1A] lg:tw-h-[325px] lg:tw-w-[440px]"
                sx={{
                  background:
                    'linear-gradient(162deg, #3860FF 6.11%, #090C1A 95.04%)',
                }}
              />

              <Image
                src={image}
                alt="Youtube Player"
                className={`tw-absolute tw-left-1/2 tw-top-1/2 tw-z-10 tw-h-[210px] tw-min-w-[110%] tw--translate-x-1/2 tw--translate-y-1/2 tw-transform lg:tw-h-[294px] lg:tw-min-w-[530px] ${showBorder ? 'tw-border tw-rounded-[25px] tw-border-black md:tw-p-[20px] tw-p-[10px] tw-bg-white' : ''}`}
              />
            </Box>
          ) : image ? (
            <Box
              className="tw-relative tw-h-[214px] tw-w-full tw-rounded-[35px] md:tw-h-[278px] md:tw-w-full"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background:
                  'radial-gradient(120.08% 112.73% at 50% 50%, #88A0FF 0%, #152461 100%)',
                // mb: -1.5,
                mt: { xs: 6, md: 3 },
              }}
            >
              <Image
                src={image}
                alt="standard rating"
                className="tw-absolute tw-bottom-0 tw-h-[120%] md:tw-h-[110%]"
              />
            </Box>
          ) : null}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: '400',
              lineHeight: '125%',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: '400',
              lineHeight: '150%',
            }}
          >
            {paragraph}
          </Typography>
          <Link href={'#demo'}>
            <Button
              variant="contained"
              sx={{
                height: '44px',
                width: '160px',
                borderRadius: '33px',
                fontSize: '16px',
                mt: 3.5,
              }}
            >
              Book a Demo
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BannerCard;
