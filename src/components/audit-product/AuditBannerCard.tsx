'use client';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Image from 'next/image';
import BannerImage from '~/assets/audit-product/employee-for-review.png';
import Link from 'next/link';
import React, { useState } from 'react';
import HubspotForm from '@/components/models/HubspotFormDialog';

const src = 'https://www.youtube.com/embed/x91MPoITQ3I?si=6WdYf-CPNY0pQoqh';
const AuditBannerCard = ({ title, paragraph }: { title: string; paragraph: string }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

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
            <Image
              src={BannerImage}
              alt="emplyees for review"
              className={
                'tw-absolute tw-left-1/2 md:tw-top-[39.6%] tw-top-[46%] tw-z-10 tw-h-[230px] tw-w-[320px] md:tw-w-[505px]  tw--translate-x-1/2 tw--translate-y-1/2 md:tw-h-[345px]'
              }
            />
            {/*</Box>*/}
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
            onClick={handleDialogOpen}
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
        </Grid>
      </Grid>
      <HubspotForm
        formId={'92923574-35b8-4773-8407-99bb806c9530'}
        portalId={'46454267'}
        isOpen={dialogOpen}
        handleClose={handleDialogClose}
        uniqueId={'hubspot-form-audit-button'}
      />
    </Paper>
  );
};

export default AuditBannerCard;
