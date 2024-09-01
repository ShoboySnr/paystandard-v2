import { Box, Button } from '@mui/material';
import Image from 'next/image';

const Banner = () => {
  return (
    <Box
      sx={{
        p: {
          md: '70px 70px 42px 70px',
          xs: '15px',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '511px',
        }}
      >
        <Box
          sx={{
            fontSize: '40px',
            fontWeight: 'bold',
          }}
        >
          Make Pay Decisions With Your <u>Bottom Line</u> In Mind.
        </Box>
        <Box
          sx={{
            fontSize: '18px',
            fontWeight: 'normal',
            mt: '16px',
            color: 'black',
          }}
        >
          <Box>
            From pay equity and pay transparency to employee engagement and retention, Total Rewards
            professionals have a lot at stake.
          </Box>
          <Box>
            The PayStandards platform gives you pay recommendations that consider the right things,
            while helping you save time, stay compliant, optimize your company’s #1 expense, and
            prioritize your biggest asset – your people.
          </Box>
        </Box>
        <Box
          sx={{
            mt: '40px',
            display: 'flex',
            gap: '20px',
          }}
        >
          <Button className={'!tw-rounded-full'} variant="contained">
            Book a Demo
          </Button>
          <Button className={'!tw-rounded-full !tw-text-btn-outline-text'} variant="outlined">
            Take a Tour
          </Button>
        </Box>
        <Box
          sx={{
            px: '40px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '100px',
            gap: '20px',
            mt: '50px',
            borderRadius: '25px',
            backgroundColor: 'rgba(255, 255, 255, 0.80)',
          }}
        >
          <Box>Trusted by industry leaders:</Box>
          <Box>
            <Image src="/assets/home/fortune-500.png" width={57} height={74} alt="fortune-500" />
          </Box>
          <Box>
            <Image src="/assets/home/ftse-100.png" width={102} height={19} alt="fortune-500" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: '-10',
        }}
      >
        <Image src="/assets/home/home.png" width={1080} height={840} alt="banner.png" />
      </Box>
    </Box>
  );
};

export default Banner;
