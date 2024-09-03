import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import AppContainer from '@/components/layout/AppContainer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Grid } from '@mui/system';
import Image from 'next/image';
import LiveDemo from '~/assets/contact/contact-us.jpeg';
import MailFrame from '~/assets/contact/mail.svg';

export default function Contact() {
  return (
    <Box
      sx={{
        color: 'deep-blue.secondary',
        marginTop: { md: '200px' },
      }}
    >
      <AppContainer sx={{ px: { md: '45px', xs: '0' } }}>
        <Box
          sx={{
            pt: { xs: 1, md: 5 },
            pb: { xs: 7.5 },
            // px: { xs: 2, md: 7 },
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
          <Grid container>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                px: { md: '60px', xs: '15px' },
              }}
            >
              <Box
                sx={{
                  pt: { xs: 6, lg: 8 },
                }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '32px' },
                    fontWeight: '700',
                    px: { xs: 6, lg: 0 },
                    textAlign: { xs: 'center', lg: 'left' },
                    color: '#283167',
                  }}
                >
                  Let’s Connect
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: '18px' },
                    fontWeight: { xs: '400' },
                    textAlign: { xs: 'center', lg: 'left' },
                    color: '#505069',
                    my: { md: '16px', xs: '70px' },
                  }}
                >
                  Have questions? Need support? Curious about PayStandards? <br />
                  <br />
                  We’d love to find out more about your unique compensation situation - and how we
                  can help you attain and sustain pay equity.
                </Box>
              </Box>

              <Box
                component="form"
                sx={{ '& .MuiTextField-root': { mb: 2.5 } }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField fullWidth required id="outlined-required" label="Email" />
                </div>
                <div>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    required
                    id="outlined-required"
                    label="Enter your message..."
                  />
                </div>
                <div>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      How did you hear about us? (Optional)
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      style={{ marginBottom: '20px' }}
                      fullWidth
                      label=" How did you hear about us? (Optional)"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <Box
                  sx={{
                    display: { xs: 'flex', md: 'flex' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    sx={{
                      mb: 2.5,
                      fontSize: '16px',
                      px: '16px',
                      py: 'md:10px md,v-12',
                    }}
                    className={'!tw-rounded-full'}
                    variant="contained"
                  >
                    Submit
                  </Button>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: '18px',
                      color: '#7B83B2',
                    }}
                  >
                    <span className="tw-inline tw-text-red">*</span> Indicates a required field.
                  </Typography>
                </Box>
                {/*<Box*/}
                {/*  sx={{*/}
                {/*    py: { xs: '50px', md: '0' },*/}
                {/*  }}*/}
                {/*>*/}
                {/*  <Grid container>*/}
                {/*    <Grid size={3}>*/}
                {/*      <Image src={Recaptcha} alt="live demo" className="" />*/}
                {/*    </Grid>*/}
                {/*    <Grid size={9}>*/}
                {/*      <Typography sx={{ color: '#7B83B2' }}>*/}
                {/*        By submitting the form you agree to the PayStandards terms of use and master*/}
                {/*        service agreement.*/}
                {/*      </Typography>*/}
                {/*    </Grid>*/}
                {/*  </Grid>*/}
                {/*</Box>*/}
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                px: { md: '60px', xs: '15px' },
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              <Image
                height={295}
                src={LiveDemo}
                alt="live demo"
                className="tw-rounded-3xl tw-border md:tw-h-[295px] md:tw-w-full md:tw-border-black"
              />

              <Box
                sx={{
                  mt: 3,
                  color: 'black.main',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#283167',
                  }}
                >
                  Looking for partnership opportunities? Think PayStandards would be a great
                  complement to your solution or service?{' '}
                </Typography>

                <div className="tw-flex tw-justify-center">
                  <Button
                    sx={{
                      mt: 2.5,
                      fontSize: '16px',
                      px: '16px',
                      py: 'md:10px md,v-12',
                    }}
                    startIcon={<MailOutlineIcon />}
                    // @ts-ignore
                    color="black.main"
                    className={'!tw-rounded-full tw-text-black'}
                    variant="outlined"
                  >
                    partner@paystandards.com
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            my: '70px',
            px: { xs: 2, md: 7 },
          }}
        >
          <Grid container spacing={2}>
            <Grid
              container
              justifyContent="center"
              size={{
                md: 1,
                xs: 12,
              }}
            >
              <Image src={MailFrame} alt="live demo" className="tw-h-[70px] tw-w-[70px]" />
            </Grid>
            <Grid
              container
              justifyContent="center"
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: '400',
                  margin: 'auto 0 4px 0',
                  color: '#283167',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Join the growing PayStandards
                <br className={'tw-block md:tw-hidden'} /> community
                <br className={'tw-hidden md:tw-block'} /> and be the first to
                <br className={'tw-block md:tw-hidden'} /> access new insight.
              </Typography>
            </Grid>
            <Grid
              size={{
                md: 5,
                xs: 12,
              }}
            >
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { mb: 2.5 },
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
                noValidate
                autoComplete="off"
                className="tw-h-full"
              >
                <div className="tw-flex tw-w-full tw-justify-center">
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Email"
                    className="!tw-m-0"
                    sx={{ width: { xs: '80%', md: '100%' } }}
                  />
                </div>
                <div>
                  <Button
                    sx={{
                      fontSize: '16px',
                      px: '16px',
                      py: 'md:10px md,v-12',
                    }}
                    className={'!tw-rounded-full'}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppContainer>
    </Box>
  );
}
