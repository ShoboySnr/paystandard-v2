import React from 'react';
import type { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import AppContainer from '@/components/layout/AppContainer';

export const metadata: Metadata = {
  title: 'Release Note Changes',
  description: 'Read about changes to the release notes, with the most recent changes first',
};

export default function ReleaseNotes() {
  return (
    <Box
      sx={{
        color: 'deep-blue.secondary',
        marginTop: { md: '200px', xs: '120px' },
      }}
    >
      <AppContainer sx={{ px: { md: '215px', xs: '15px' } }}>
        <Box>
          <Typography
            sx={{
              mb: { xs: '15px', md: '0' },
              fontSize: { md: '40px', xs: '32px' },
              fontWeight: 400,
              color: 'dark-purple.main',
              textAlign: 'center',
            }}
          >
            Release Note <br className={'tw-block md:tw-hidden'} />
            Changes
          </Typography>

          <Typography
            sx={{
              mb: '20px',
              fontSize: '18px',
              fontWeight: 400,
              color: 'dark-purple.main',
              textAlign: 'center',
            }}
          >
            Read about changes to the release notes, <br className={'tw-block md:tw-hidden'} /> with
            the most recent changes first.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: { xs: '40px', md: '80px' },
            mb: { xs: '80px', md: '100px' },
            padding: { xs: '30px 30px 50px', md: '50px 60px 70px' },
            color: 'dark-purple.main',
            backgroundColor: 'white.main',
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              November 1, 2023
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Secure Login
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '20px',
              }}
              className="tw-list-disc"
            >
              <li>Users can login to the client portal with end-to-end encryption.</li>
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Client Onboarding
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '20px',
              }}
              className="tw-list-disc"
            >
              <li>
                Users can indicate detail on their pay practices and performance management prior to
                the launch of the Audit product.
              </li>
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Data Upload
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '30px',
              }}
              className="tw-list-disc"
            >
              <li>Users can upload employee data for analysis.</li>
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Audit Analytics
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '30px',
              }}
              className="tw-list-disc"
            >
              <li>Users can view both enterprise-level and fine-tuned pay equity analytics.</li>
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Pay Recommendations
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '30px',
              }}
              className="tw-list-disc"
            >
              <li>
                Users can view employee-tailored recommendations based on the predicted pay model.
              </li>
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Editable Pay Levels
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '30px',
              }}
              className="tw-list-disc"
            >
              <li>Users can make adjustments to the pay recommendations.</li>
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Remediation Effects
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '30px',
              }}
              className="tw-list-disc"
            >
              <li>Users can review projected effects and costs of pay decisions.</li>
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
              }}
            >
              Data Download
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '30px',
              }}
              className="tw-list-disc"
            >
              <li>Users can download the pay adjustment data in XLSX or CSV.</li>
            </Typography>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
