import { Box, Divider, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CoreBenefitTypography = {
  fontSize: { xs: '20px', lg: '24px' },
  lineHeight: '140%',
  fontWeight: '400',
  color: '#fff',
  textAlign: 'center',
};
const CoreBenefitStyle = {
  display: 'flex',
  flex: { xs: 2, lg: 1 },
  minWidth: '150px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
};

interface Benefits {
  data: {
    icon: string;
    text: string;
  }[];
}

const CoreBenefits: React.FC<Benefits> = ({ data }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: { xs: '25px', lg: '35px' },
        background: 'linear-gradient(180deg, #2641B0 0%, #152461 99.27%)',
        border: '1px solid #525252',
        my: 8,
        py: { xs: 4, lg: 5 },
        px: { xs: 2, lg: 5 },
        pb: { xs: 6, lg: 9 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '32px', lg: '40px' },
          fontWeight: '400',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        Core Benefits
      </Typography>
      <Divider
        sx={{
          borderColor: 'primary.main',
          mx: 'auto',
          mt: 2.5,
          mb: 5.5,
          borderRadius: '40px',
          width: { xs: '100%', lg: '600px' },
          borderWidth: '2px',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          flexWrap: 'wrap',
          alignItems: 'start',
          gap: { xs: '30px 20px', md: '40px' },
        }}
      >
        {data.map((item, index) => (
          <Box sx={CoreBenefitStyle} key={index}>
            <Image src={item.icon} alt="benefit-icon" />
            <Typography sx={CoreBenefitTypography}>{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default CoreBenefits;
