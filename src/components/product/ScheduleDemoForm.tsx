'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AppContainer from '@/components/layout/AppContainer';
import Image from 'next/image';
import LaptopIcon from '~/assets/icons-common/laptop.svg';

const ScheduleDemoForm = ({
  titleText,
  hubspotFormId,
}: {
  titleText?: React.JSX.Element;
  hubspotFormId: string;
}) => {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46454267',
          formId: hubspotFormId,
          target: `#product-page-form`,
        });
      }
    });
  }, []);

  return (
    <Box
      sx={{
        pt: 7.5,
        pb: 11,
        mt: { xs: 38, md: 25 },
        px: { xs: 1.5, md: 0 },
        background:
          'radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(100% 100% at 50% 0%, #FFF 0%, #CCD6FF 100%)',
      }}
    >
      <AppContainer>
        <Box
          sx={{
            maxWidth: { sm: '600px', md: '830px' },
            mx: 'auto',
          }}
        >
          <Image src={LaptopIcon} alt="laptop" className="tw-m-auto" />
          {titleText ? (
            titleText
          ) : (
            <Typography
              sx={{
                fontSize: { xs: '28px', md: '32px' },
                fontWeight: '700',
                textAlign: 'center',
                lineHeight: '140%',
                pt: 2,
              }}
            >
              Schedule a Demo
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: '24px',
              textAlign: 'center',
              pt: 2.5,
              pb: 4,
              color: 'black.main',
              fontWeight: { xs: '50', md: '400' },
            }}
          >
            Book your demo with PayStandards.
          </Typography>

          <Box
            id={'product-page-form'}
            component="form"
            sx={{ '& .MuiTextField-root': { mb: 2.5 }, px: { xs: 0, md: 7 } }}
          ></Box>
        </Box>
      </AppContainer>
    </Box>
  );
};

export default ScheduleDemoForm;
