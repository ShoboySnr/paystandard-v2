import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import exp from 'node:constants';

const Products = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '35px 45px',
        borderRadius: '25px',
        background: 'linear-gradient(180deg, #2641B0 0%, #152461 99.27%)',
      }}
    >
      <Box
        sx={{
          flex: '6',
        }}
      >
        <img src="/assets/home/portal-ss.png" alt="portal-ss.png" />
      </Box>
      <Box
        sx={{
          flex: '4',
          p: '10px 22px',
        }}
      >
        <Box
          sx={{
            color: '#FFF',
          }}
        >
          <Typography sx={{ fontSize: '40px', lineHeight: '125%', fontWeight: '400' }}>
            Raise the Standard
            <br /> of Your Pay
          </Typography>
          <Typography sx={{ fontSize: '18px', mt: '22px', fontWeight: '400' }}>
            Powered by the market-leading pay algorithm, real-time analytics, and an easy-to-use
            software platform, PayStandards makes pay recommendations that consider only the right
            things. PayStandards delivers true pay equity and pay transparency – without the
            headache.
          </Typography>
        </Box>
        <Box sx={{ mt: '36px', display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <Image height={70} width={70} src="/assets/home/index.svg" alt="image" />
            <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: '10px' }}>
              Pay Index
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <Image height={70} width={70} src="/assets/home/audit.svg" alt="image" />
            <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: '10px' }}>
              Pay Audit
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <Image height={70} width={70} src="/assets/home/pilot.svg" alt="image" />
            <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: '10px' }}>
              Pay pilot
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
