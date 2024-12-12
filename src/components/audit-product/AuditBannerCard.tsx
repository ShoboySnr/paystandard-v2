'use client';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import Image from 'next/image';
import BannerImage from '~/assets/audit-product/employee-for-review.png';
import Link from 'next/link';
import React, { useState } from 'react';
import HubspotForm from '@/components/models/HubspotFormDialog';

const src = 'https://www.youtube.com/embed/x91MPoITQ3I?si=6WdYf-CPNY0pQoqh';
const AuditBannerCard = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
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
        py: { xs: 2, md: 7 },
        px: { xs: 2, md: 6 },
        pb: { xs: 7.5, md: 7 },
        position: 'relative',
        mt: { xs: -69, md: -64 },
        border: '1px solid #525252',
        backgroundColor: '#FFFFFF',
        borderRadius: '35px',
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            className="tw-relative tw-m-auto tw-rounded-[32px] tw-h-[235px] sm:tw-h-[295px] md:tw-h-[265px] tw-w-full sm:tw-mt-10 lg:tw-h-[321px] lg:tw-w-full"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              background: 'linear-gradient(108deg, #3860FF 0%, #152461 100%)',
              // mb: -1.5,
              mt: 5,
            }}
          >
            <Image
              src={BannerImage}
              alt="emplyees for review"
              className={
                'tw-absolute tw-bottom-0 tw-z-10 tw-w-[50%] md:tw-w-[85%] lg:tw-w-[90%] tw-h-[110%]'
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
              color: 'black.main',
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
              color: 'black.main',
            }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
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
