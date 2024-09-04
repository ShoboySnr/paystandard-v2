import { Box, Button, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Image from 'next/image';
import BannerImage from '~/assets/audit-product/audit-banner-image.png';

const src = 'https://www.youtube.com/embed/x91MPoITQ3I?si=6WdYf-CPNY0pQoqh';
const AuditBannerCard = ({ title, paragraph }: { title: string; paragraph: string }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        py: { xs: 2, lg: 7 },
        px: { xs: 2, lg: 6 },
        pb: { xs: 7.5, lg: 7 },
        position: 'relative',
        mt: { xs: -69, lg: -64 },
        border: '1px solid #525252',
        backgroundColor: '#FFFFFF',
        borderRadius: '35px',
      }}
    >
      <Grid container spacing={{ xs: 4, lg: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="tw-relative tw-m-auto tw-h-[214px] tw-w-[360px] xs:tw-mt-10 lg:tw-h-[321px] lg:tw-w-[538px]">
            <Box
              className="tw-absolute tw-z-0 tw-h-[214px] tw-w-[360px] tw-rounded-[24px] tw-bg-gradient-to-r tw-from-[#3860FF] tw-to-[#090C1A] lg:tw-h-[300px] lg:tw-w-[538px]"
              sx={{ background: 'linear-gradient(108deg, #3860FF 0%, #152461 100%)' }}
            />
            <Box
              className={
                'tw-absolute tw-left-1/2 tw-top-[39.8%] tw-z-10 tw-h-[195px] tw-w-[360px] tw--translate-x-1/2 tw--translate-y-1/2 tw-transform tw-rounded-[35px] tw-border tw-border-deep-blue lg:tw-h-[345px] lg:tw-w-[505px]'
              }
              sx={{
                pt: {
                  xs: 2,
                  lg: 4,
                },
                pb: {
                  xs: 2,
                  lg: 0,
                },
                px: {
                  xs: 2,
                  lg: 4,
                },
                background: '#FFF',
              }}
            >
              <Image
                src={BannerImage}
                alt="emplyees for review"
                className={'tw-h-full tw-w-full'}
              />
            </Box>
          </Box>
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
          <Button
            variant="contained"
            sx={{ height: '44px', width: '160px', borderRadius: '33px', fontSize: '16px', mt: 3.5 }}
          >
            Book a Demo
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AuditBannerCard;
