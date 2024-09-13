import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import type { Metadata } from 'next';
import Image from 'next/image';
import CheckedBox from '../../../public/assets/demo/checkedbox.png';
import LiveDemo from '../../../public/assets/demo/live-demo.png';
import React from 'react';
import { Grid } from '@mui/system';
import AppContainer from '@/components/layout/AppContainer';
import HubspotDemoForm from '@/components/demo/HubspotDemoForm';

export const metadata: Metadata = {
  title: 'Schedule a Demo',
  description:
    'Get a live look into the PayStandards platform and learn how your organization can leverage real-time analytics',
};

const Demo = () => {
  return (
    <Box
      sx={{
        color: 'deep-blue-secondary.main',
      }}
    >
      <AppContainer sx={{ px: { md: '45px', xs: '0' } }}>
        <Box
          sx={{
            pt: { xs: '50px', md: '60px' },
            px: { xs: '0', md: '50px' },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: '32px', md: '40px' },
              fontWeight: 'bold',
              px: { xs: 6, md: 0 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Schedule a Personalized Demo
          </Box>
          <Box
            sx={{
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: { xs: '400', md: '600' },
              textAlign: { xs: 'center', md: 'left' },
              my: 2,
            }}
          >
            Get a live look into the PayStandards platform and learn how your organization can
            leverage real-time analytics to:
          </Box>
          <List
            sx={{
              py: 1,
              px: 2,
            }}
          >
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'start',
                p: 0,
              }}
            >
              <Image
                height={25}
                width={25}
                src={CheckedBox}
                className="tw-mr-3"
                alt="Pay Standards"
              />
              <ListItemText sx={{ mt: 0 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                  }}
                >
                  Improve pay gaps by 40% or more in the first year alone
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'start',
                p: 0,
              }}
            >
              <Image
                height={25}
                width={25}
                src={CheckedBox}
                className="tw-mr-3"
                alt="Pay Standards"
              />
              <ListItemText sx={{ mt: 0 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                  }}
                >
                  Save up to 70% in remediation expenses compared to traditional approaches
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'start',
                p: 0,
              }}
            >
              <Image
                height={25}
                width={25}
                src={CheckedBox}
                className="tw-mr-3"
                alt="Pay Standards"
              />
              <ListItemText sx={{ mt: 0 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                  }}
                >
                  Reduce your pay equity analysis timeline by 6-8 weeks or more
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            borderRadius: '35px',
            position: 'relative',
            overflow: 'hidden',
            padding: '1px',
            mt: { xs: 4, md: 6 },
            mb: 7.5,
            '&::before': {
              zIndex: -1,
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'inherit', // Matches the parent border radius
              padding: '1px', // Adjust padding to the border width you want
              background: 'linear-gradient(0deg, #525252 19.67%, #52525200 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            },
            backgroundColor: 'transparent',
          }}
        >
          <Box
            sx={{
              borderRadius: '34px',
              pt: { xs: 1, md: 5 },
              pb: { xs: 7.5 },
              px: { xs: 2, md: 7 },
              backgroundColor: '#FAFAFA',
            }}
          >
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="form"
                  sx={{ '& .MuiTextField-root': { mb: 2.5 } }}
                  noValidate
                  autoComplete="off"
                >
                  <HubspotDemoForm />
                  <Box>
                    <Typography sx={{ color: '#d3d3d3', fontSize: '10px' }}>
                      By submitting the form you agree to the PayStandards terms of use.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  textAlign: { xs: 'center', md: 'start' },
                }}
              >
                <Image
                  height={245}
                  width={369}
                  src={LiveDemo}
                  alt="live demo"
                  className="tw-rounded-3xl tw-border md:tw-h-[274px] md:tw-w-[464px] md:tw-border-black"
                />

                <Box
                  sx={{
                    px: 2,
                    color: 'black.main',
                  }}
                >
                  <Typography sx={{ fontSize: '25px', fontWeight: '700', mt: 5 }}>
                    “PayStandards is the nirvana of pay.”
                  </Typography>

                  <Divider
                    sx={{
                      mt: 2,
                      mx: { xs: 'auto', md: '0' },
                      borderColor: 'primary.main',
                      borderRadius: '40px',
                      width: '105px',
                      borderWidth: '2.5px',
                    }}
                  />

                  <Box
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                    >
                      Global Head of Total Rewards,
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                      }}
                    >
                      Fortune 100 Services Company
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
};

export default Demo;
