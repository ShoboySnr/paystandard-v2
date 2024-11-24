import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import TitleAndSubtitle from '@/components/securityAndPrivacy/TitleAndSubtitle';

const DataProtection = () => {
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
          Data Protection
        </Typography>
      </Grid>
      {/* content */}
      <Grid container size={12} columnSpacing={8} rowSpacing={4}>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <TitleAndSubtitle
            title={'Data at rest'}
            subtitle={
              'All datastores with customer data, in addition to S3 buckets, are encrypted at rest. Sensitive collections and tables also use row-level encryption.'
            }
            titleColor={'#283167'}
          />
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
            This means the data is encrypted even before it hits the database so
            that neither physical access, nor logical access to the database, is
            enough to read the most sensitive information.
          </Typography>
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <TitleAndSubtitle
            title={'Data in transit'}
            subtitle={
              'PayStandards uses TLS 1.2 or higher everywhere data is transmitted over potentially insecure networks. We also use features such as HSTS (HTTP Strict Transport Security) to maximize the security of our data in transit. Server TLS keys and certificates are managed by AWS and deployed via Application Load Balancers.'
            }
            titleColor={'#283167'}
          />
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <TitleAndSubtitle
            title={'Secret management'}
            subtitle={
              'Encryption keys are managed via AWS Key Management System (KMS). KMS stores key material in Hardware Security Modules (HSMs), which prevents direct access by any individuals, including employees of Amazon & PayStandards. The keys stored in HSMs are used for encryption and decryption via Amazon&apos;s KMS APIs.'
            }
            titleColor={'#283167'}
          />
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
            Application secrets are encrypted and stored securely via AWS
            Secrets Manager and Parameter Store, and access to these values is
            strictly limited.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataProtection;
