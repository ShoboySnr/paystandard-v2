import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import TitleAndSubtitle from '@/components/securityAndPrivacy/TitleAndSubtitle';
import BorderedText from '@/components/securityAndPrivacy/BorderedText';

const EnterpriseSecurity = () => {
  return (
    <Grid
      size={12}
      sx={{
        px: {
          xs: '15px',
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
          Enterprise Security
        </Typography>
      </Grid>
      {/*   content */}
      <Grid size={12} container spacing={3}>
        <Grid
          size={{
            md: 8,
            xs: 12,
          }}
        >
          <Grid
            size={12}
            sx={{
              pb: '40px',
            }}
          >
            <TitleAndSubtitle
              title={'Endpoint protection'}
              subtitle={
                'All corporate devices are equipped with mobile device management software and anti-malware protection. Endpoint security is monitored with 24/7/365 coverage. We use MDM software to enforce secure configuration of endpoints, such as disk encryption, screen lock configuration, and software updates.'
              }
              titleColor={'gray.main'}
            />
          </Grid>
          <Grid
            size={12}
            sx={{
              pb: '40px',
            }}
          >
            <TitleAndSubtitle
              title={'Secure remote access'}
              subtitle={
                'PayStandards secures remote access to internal resources using AWS’ VPN platform. We also use malware-blocking DNS servers to protect employees and their endpoints while browsing the internet.'
              }
              titleColor={'gray.main'}
            />
          </Grid>
          <Grid
            size={12}
            sx={{
              pb: '40px',
            }}
          >
            <TitleAndSubtitle
              title={'Security education'}
              subtitle={
                'PayStandards provides comprehensive security training to all employees upon onboarding and annually through educational modules. In addition, all new employees attend a mandatory live onboarding session centered around key security principles. All new engineers also attend a mandatory live onboarding session focused on secure coding principles and practices. PayStandards’ security team shares regular threat briefings with employees to inform them of important security and safety-related updates that require special attention or action.'
              }
              titleColor={'gray.main'}
            />
          </Grid>
          <Grid size={12}>
            <TitleAndSubtitle
              title={'Identity and access management'}
              subtitle={
                'PayStandards uses AWS to secure our identity and access management. We enforce the use of phishing-resistant authentication factors, using Cognito exclusively wherever possible.'
              }
              titleColor={'gray.main'}
            />
            <Typography
              sx={{
                fontSize: {
                  md: '20px',
                  xs: '18px',
                },
                fontWeight: '400',
                margin: '10px 0 2px 0',
                color: 'deep-blue-secondary.main',
              }}
            >
              PayStandards employees are granted access to applications based on
              their role, and automatically deprovisioned upon termination of
              their employment. Further access must be approved according to the
              policies set for each application.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          size={{
            md: 4,
            xs: 12,
          }}
        >
          <Grid
            size={12}
            sx={{
              pb: '24px',
            }}
          >
            <TitleAndSubtitle
              title={'Vendor security'}
              subtitle={
                'PayStandards uses a risk-based approach to vendor security. Factors which influence the inherent risk rating of a vendor include:'
              }
              titleColor={'gray.main'}
            />
          </Grid>
          <Grid
            container
            size={12}
            columnSpacing={{
              xs: '10px',
              md: '20px',
            }}
            rowSpacing={{
              xs: '20px',
              md: '20px',
            }}
            alignItems={'center'}
          >
            <Grid
              size={12}
              sx={{
                width: '100%',
              }}
            >
              <BorderedText
                text={'Integration with production environments'}
                textWeight={'500'}
              />
            </Grid>
            <Grid
              size={12}
              sx={{
                width: '100%',
              }}
            >
              <BorderedText
                text={'Potential damage to the PayStandards brand'}
                textWeight={'500'}
              />
            </Grid>
            <Grid
              size={12}
              sx={{
                width: '100%',
              }}
            >
              <BorderedText
                text={'Access to customer and corporate data'}
                textWeight={'500'}
              />
            </Grid>
          </Grid>
          <Grid
            size={12}
            sx={{
              mt: '24px',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  md: '20px',
                  xs: '18px',
                },
                fontWeight: '400',
                margin: '10px 0 2px 0',
                color: 'deep-blue-secondary.main',
              }}
            >
              Once the inherent risk rating has been determined, the security of
              the vendor is evaluated in order to determine a residual risk
              rating and an approval decision for the vendor.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EnterpriseSecurity;
