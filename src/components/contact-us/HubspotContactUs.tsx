'use client';
import React, { useEffect } from 'react';
import { Box } from '@mui/material';

const HubspotContactUs = () => {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46454267',
          formId: '18290551-5232-471c-9127-29d9b506ac61',
          target: `#demo-page`,
        });
      }
    }, 0);
  });

  return (
    <>
      <Box id={'demo-page'}></Box>
    </>
  );
};

export default HubspotContactUs;
