import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import TitleAndSubtitle from '@/components/securityAndPrivacy/TitleAndSubtitle';
import AICPALogo from '~/assets/security-and-privacy/AICPA-logo.png';
import GDPRLogo from '~/assets/security-and-privacy/GDPR-logo.png';

const Governance = () => {
  return (
    <>
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
            }}
          >
            Governance
          </Typography>
        </Grid>
        {/*   content */}
        <Grid
          size={{
            md: 8,
            xs: 12,
          }}
          textAlign={'start'}
        >
          <Typography
            sx={{
              fontSize: {
                md: '24px',
              },
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              color: 'deep-blue-secondary.main',
            }}
          >
            PayStandards’ Security and Privacy teams establish policies and controls, monitor
            compliance with those controls, and prove our security and compliance to third-party
            auditors.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: '18px',
              },
              fontWeight: '400',
              margin: 'auto 0 2px 0',
              color: 'deep-blue-secondary.main',
              pt: '18px',
            }}
          >
            Our policies are based on the following foundational principles:
          </Typography>
        </Grid>
        <Grid
          container
          size={12}
          spacing={4}
          sx={{
            pt: {
              md: '50px',
              xs: '30px',
            },
            px: 'auto',
          }}
        >
          {/*    points  */}
          <Grid
            columnSpacing={{
              md: 4,
              xs: 2,
            }}
            rowSpacing={{
              md: 2,
              xs: 4,
            }}
            container
            size={{
              md: 8,
              xs: 12,
            }}
          >
            <Grid
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <TitleAndSubtitle
                title={'01'}
                subtitle={
                  'Access should be limited to only those with a legitimate business need and granted based on the principle of least privilege.'
                }
              />
            </Grid>
            <Grid
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <TitleAndSubtitle
                title={'02'}
                subtitle={
                  'Access should be limited to only those with a legitimate business need and granted based on the principle of least privilege.'
                }
              />
            </Grid>
            <Grid
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <TitleAndSubtitle
                title={'03'}
                subtitle={
                  'Access should be limited to only those with a legitimate business need and granted based on the principle of least privilege.'
                }
              />
            </Grid>
            <Grid
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <TitleAndSubtitle
                title={'04'}
                subtitle={
                  'Access should be limited to only those with a legitimate business need and granted based on the principle of least privilege.'
                }
              />
            </Grid>
          </Grid>
          {/*  other information  */}
          <Grid
            size={{
              md: 4,
              xs: 12,
            }}
          >
            <TitleAndSubtitle
              title={'Security and Compliance at PayStandards'}
              subtitle={
                'PayStandards maintains a SOC 2 Type I attestation and a GDPR compliance certification. Our SOC 2 Type I report and GDPR certificates are available on our Trust Report.'
              }
              titleColor={'gray.main'}
            />
            <Typography
              sx={{
                fontSize: {
                  md: '20px',
                },
                fontWeight: '600',
                margin: 'auto 0 2px 0',
                color: 'gray.main',
                pt: '18px',
              }}
            >
              PayStandards maintains compliance with
            </Typography>
            <Grid
              container
              spacing={4}
              sx={{
                mt: {
                  md: '20px',
                  xs: '10px',
                },
              }}
            >
              <Image height={100} width={100} src={AICPALogo} alt="AICPA-logo" />
              <Image height={100} width={100} src={GDPRLogo} alt="GDPR-logo" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Governance;
