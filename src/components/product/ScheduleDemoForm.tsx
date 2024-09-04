import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import AppContainer from '@/components/layout/AppContainer';
import Image from 'next/image';
import LaptopIcon from '~/assets/icons-common/laptop.svg';

const ScheduleDemoForm = ({ titleText }: { titleText?: React.JSX.Element }) => {
  return (
    <Box
      sx={{
        pt: 7.5,
        pb: 11,
        mt: { xs: 38, lg: 25 },
        px: { xs: 1.5, md: 0 },
        background:
          'radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(100% 100% at 50% 0%, #FFF 0%, #CCD6FF 100%)',
      }}
    >
      <AppContainer>
        <Box
          sx={{
            maxWidth: '830px',
            mx: 'auto',
          }}
        >
          <Image src={LaptopIcon} alt="laptop" className="tw-m-auto" />
          {titleText ? (
            titleText
          ) : (
            <Typography
              sx={{
                fontSize: { xs: '28px', md: '32px' },
                fontWeight: '700',
                textAlign: 'center',
                lineHeight: '140%',
                pt: 2,
              }}
            >
              Schedule a Demo
            </Typography>
          )}
          <Typography sx={{ fontSize: '24px', textAlign: 'center', pt: 2.5, pb: 4 }}>
            Schedule your demo session with PayStandards.
          </Typography>

          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { mb: 2.5 }, px: { xs: 0, md: 7 } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Full Name"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#FFFFFF', // Set the input field background to white
                  },
                }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Work Email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#FFFFFF', // Set the input field background to white
                  },
                }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Company"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#FFFFFF', // Set the input field background to white
                  },
                }}
              />
            </div>

            <Box
              sx={{
                display: { xs: 'block', md: 'flex' },
                mt: 2,
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
                <span className={'tw-text-red'}>*</span> Indicates a required field.
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
              }}
            >
              <Typography sx={{ color: '#7B83B2' }}>
                By submitting the form you agree to the PayStandards terms of use and master service
                agreement.
              </Typography>
            </Box>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
};

export default ScheduleDemoForm;
