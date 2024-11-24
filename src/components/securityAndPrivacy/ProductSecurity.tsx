import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import BorderedText from '@/components/securityAndPrivacy/BorderedText';

const ProductSecurity = () => {
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
      {/* heading */}
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
            color: '#283167',
          }}
        >
          Product Security
        </Typography>
      </Grid>
      {/* content */}
      <Grid size={12}>
        <Typography
          sx={{
            fontSize: {
              md: '20px',
            },
            fontWeight: '700',
            margin: 'auto 0 2px 0',
            color: '#283167',
          }}
        >
          Vulnerability scanning
        </Typography>
        <Typography
          sx={{
            fontSize: {
              md: '18px',
            },
            fontWeight: '400',
            margin: '10px 0 2px 0',
            color: '#283167',
          }}
        >
          PayStandards requires vulnerability scanning at key stages of our
          Secure Development Lifecycle (SDLC):
        </Typography>
      </Grid>

      <Grid
        size={12}
        container
        columnSpacing={{
          xs: '10px',
          md: '20px',
        }}
        rowSpacing={{
          xs: '20px',
          md: '12px',
        }}
        sx={{
          mt: '20px',
        }}
        alignItems={'stretch'}
      >
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <BorderedText
            text={
              'Static analysis (SAST) testing of code during pull requests and on an ongoing basis'
            }
          />
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <BorderedText
            text={
              'Software composition analysis (SCA) to identify known vulnerabilities in our software supply chain'
            }
          />
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <BorderedText
            text={'Network vulnerability scanning on a period basis'}
          />
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <BorderedText
            text={
              'Malicious dependency scanning to prevent the introduction of malware into our software supply chain'
            }
          />
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <BorderedText
            text={'Dynamic analysis (DAST) of running applications'}
          />
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <BorderedText
            text={
              'External attack surface management (EASM) continuously running to discover new external-facing assets'
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductSecurity;
