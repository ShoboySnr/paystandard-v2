'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AppContainer from '@/components/layout/AppContainer';
import Image from 'next/image';
import LaptopIcon from '~/assets/icons-common/laptop.svg';

const NewsletterForm = ({
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
          target: `#newsletter-form`,
        });
      }
    });
  }, []);

  return (
    <Box>
      <AppContainer>
        <Box
          sx={{
            maxWidth: '100%',
            mx: 'auto',
          }}
        >
          <Box
            id={'newsletter-form'}
            sx={{ '& .MuiTextField-root': { mb: 2.5 }, px: { xs: 0, md: 0 } }}
          ></Box>
        </Box>
      </AppContainer>
    </Box>
  );
};

export default NewsletterForm;
