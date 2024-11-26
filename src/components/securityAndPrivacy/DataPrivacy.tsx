import { Grid } from '@mui/system';
import { Typography, Box } from '@mui/material';
import React from 'react';
import TitleAndSubtitle from '@/components/securityAndPrivacy/TitleAndSubtitle';

const DataPrivacy = () => {
  return (
    <Grid
      size={12}
      sx={{
        px: {
          xs: '10px',
        },
        pb: {
          md: '100px',
          xs: '60px',
        },
      }}
    >
      {/*   heading */}
      <Grid
        size={{
          md: 6,
          xs: 12,
        }}
        textAlign={'start'}
        sx={{
          pb: '24px',
        }}
      >
        <Typography
          sx={{
            fontSize: {
              md: '32px',
              xs: '28px',
            },
            borderBottom: '4px solid',
            borderColor: 'primary.main',
            fontWeight: '400',
            margin: 'auto 0 2px 0',
            padding: '0 0 10px 0',
            color: 'gray.main',
          }}
        >
          Data Privacy
        </Typography>
      </Grid>
      {/*   content */}
      <Grid size={12} container>
        <Typography
          sx={{
            fontSize: {
              md: '18px',
            },
            fontWeight: '400',
            margin: 'auto 0 2px 0',
            color: 'gray.main',
          }}
        >
          At PayStandards, data privacy is a first-class priority—we strive to
          be trustworthy stewards of all sensitive data.
        </Typography>
        <Box sx={{ my: 4, display: { xs: 'block', md: 'none' } }}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '700',
              color: 'gray.main',
              mb: 1,
            }}
          >
            Regulatory compliance
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'gray.main',
              lineHeight: '1.5',
            }}
          >
            PayStandards evaluates updates to regulatory and emerging frameworks{' '}
            continuously to evolve our program.
          </Typography>
        </Box>

        <Box sx={{ mb: 4, display: { xs: 'block', md: 'none' } }}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '700',
              color: 'gray.main',
              mb: 1,
            }}
          >
            Privacy Policy and DPA
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'gray.main',
              lineHeight: '1.5',
            }}
          >
            View PayStandards' Privacy Policy
            <br />
            View our DPA
          </Typography>
        </Box>
        <Grid
          container
          size={12}
          spacing={8}
          sx={{
            mt: '30px',
          }}
        >
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <TitleAndSubtitle
              title={'Regulatory compliance'}
              subtitle={
                'PayStandards evaluates updates to regulatory and emerging frameworks continuously to evolve our program.'
              }
              titleColor={'gray.main'}
              titleSize={'18px'}
              subtitleSize={'18px'}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <TitleAndSubtitle
              title={'Privacy Policy and DPA'}
              subtitle={'View PayStandards Privacy Policy View our DPA'}
              titleColor={'gray.main'}
              titleSize={'18px'}
              subtitleSize={'18px'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataPrivacy;
