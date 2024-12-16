'use client';
import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const HubspotDemoForm = () => {
  useEffect(() => {
    // setTimeout(() => {
    // @ts-ignore
    if (window.hbspt) {
      // @ts-ignore
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '46454267',
        formId: '0b6432d6-150f-4e80-b7fa-b735657a0e79',
        target: `#demo-page`,
      });
      // window.hbspt.forms.create({
      //   region: 'na1',
      //   portalId: '46454267',
      //   formId: '0b6432d6-150f-4e80-b7fa-b735657a0e79',
      //   target: `#product-page-form`,
      //   fieldLabels: {
      //     firstname: 'Full Name',
      //     email: 'Work Email',
      //     company: 'Company',
      //   },
      // });
    }
    // }, 0);
  }, []);

  return (
    <>
      <Box id={'demo-page'}></Box>
    </>
  );
};

export default HubspotDemoForm;
