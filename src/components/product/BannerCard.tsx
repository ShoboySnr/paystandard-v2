import { Box, Button, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';

const src = 'https://www.youtube.com/embed/x91MPoITQ3I?si=6WdYf-CPNY0pQoqh';
const BannerCard = ({ title, paragraph }: { title: string; paragraph: string }) => {
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
          <Box className="tw-relative tw-m-auto tw-h-[220px] tw-w-[302px] lg:tw-h-[325px] lg:tw-w-[440px]">
            <Box
              className="tw-absolute tw-z-0 tw-h-[220px] tw-w-[302px] tw-rounded-[35px] tw-bg-gradient-to-r tw-from-[#3860FF] tw-to-[#090C1A] lg:tw-h-[325px] lg:tw-w-[440px]"
              sx={{ background: 'linear-gradient(162deg, #3860FF 6.11%, #090C1A 95.04%)' }}
            />
            <iframe
              width="100%"
              src={src}
              title="Youtube Player"
              frameBorder="0"
              allowFullScreen
              className="tw-absolute tw-left-1/2 tw-top-1/2 tw-z-10 tw-h-[195px] tw-w-[360px] tw--translate-x-1/2 tw--translate-y-1/2 tw-transform tw-rounded-[20px] tw-border tw-border-deep-blue lg:tw-h-[294px] lg:tw-w-[530px]"
            />
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

export default BannerCard;
