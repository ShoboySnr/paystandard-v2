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
import Image from 'next/image';
import CheckedBox from '../../../public/assets/demo/checkedbox.png';
import LiveDemo from '../../../public/assets/demo/live-demo.png';
import React from 'react';
import { Grid } from '@mui/system';
import AppContainer from '@/components/layout/AppContainer';

const Demo = () => {
  return (
    <Box
      sx={{
        color: 'deep-blue.secondary',
      }}
    >
      <AppContainer>
        <Box
          sx={{
            pt: { xs: 6, lg: 8 },
            px: { xs: 0, lg: 10 },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: '32px', lg: '40px' },
              fontWeight: 'bold',
              px: { xs: 6, lg: 0 },
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            Schedule a Personalized Demo
          </Box>
          <Box
            sx={{
              fontSize: { xs: '18px', lg: '20px' },
              fontWeight: { xs: '400', lg: '600' },
              textAlign: { xs: 'center', lg: 'left' },
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
                  Reduce pay gaps by 40% or more in the first year alone
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
                  Save 6-8 weeks of pay equity analysis
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            pt: { xs: 1, md: 5 },
            pb: { xs: 7.5 },
            px: { xs: 2, md: 7 },
            mt: { xs: 4, md: 6 },
            mb: 7.5,
            borderRadius: '35px',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
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
                <div>
                  <TextField fullWidth required id="outlined-required" label="First Name" />
                </div>
                <div>
                  <TextField fullWidth required id="outlined-required" label="Last Name" />
                </div>
                <div>
                  <TextField fullWidth required id="outlined-required" label="Email" />
                </div>

                <Box
                  sx={{
                    display: { xs: 'block', md: 'flex' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    sx={{
                      mb: 2.5,
                      fontSize: '16px',
                      px: '16px',
                      py: '10px',
                    }}
                    className={'!tw-rounded-full'}
                    variant="contained"
                  >
                    Next Step: Pick a Date & Time
                  </Button>
                  <Typography
                    sx={{
                      mb: 2.5,
                      color: '#7B83B2',
                      fontSize: '14px',
                    }}
                  >
                    <Typography variant="span" sx={{ color: 'red.main' }}>
                      *
                    </Typography>{' '}
                    Indicates a required field.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: '#7B83B2' }}>
                    By submitting the form you agree to the PayStandards terms of use and master
                    service agreement.
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
                    variant="span"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    Global Head of Total Rewards,
                  </Typography>
                  <br />
                  <Typography
                    variant="span"
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
      </AppContainer>
    </Box>
  );
};

export default Demo;
