import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const CoreBenefits = ({ className }: { className: String }) => {
  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '100px',
      }}
    >
      <Box
        sx={{
          flex: '7',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', gap: '26px' }}>
          <Image src={'/assets/home/circle1.svg'} alt="image.png" height={70} width={70} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: '4',
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
          color: 'deep-blue.main',
        }}
      >
        <Box
          sx={{
            height: '360px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography sx={{ fontSize: '16px', lineHeight: '140%', fontWeight: '500' }}>
              Outperforms
              <br />
              Traditional Approaches With
            </Typography>
            <Box sx={{ fontSize: '22px', lineHeight: '140%', fontWeight: '500', display: 'flex' }}>
              Up to{' '}
              <Typography sx={{ fontSize: '140px', lineHeight: '80%', fontWeight: '900' }}>
                40
              </Typography>{' '}
              %
            </Box>
            <Typography sx={{ fontSize: '28px', lineHeight: '140%', fontWeight: '500' }}>
              Pay Gap Reduction
              <br />
              in the First Year
              <br />
              Alone
            </Typography>
          </Box>
          <img
            src={'/assets/home/circle3.png'}
            alt={'image.png'}
            className={'tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-mx-auto tw-w-[360px]'}
          />
        </Box>
        <Box
          sx={{
            height: '360px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography sx={{ fontSize: '16px', lineHeight: '140%', fontWeight: '500' }}>
              Outperforms
              <br />
              Traditional Approaches With
            </Typography>
            <Box sx={{ fontSize: '22px', lineHeight: '140%', fontWeight: '500', display: 'flex' }}>
              Up to{' '}
              <Typography sx={{ fontSize: '140px', lineHeight: '80%', fontWeight: '900' }}>
                40
              </Typography>{' '}
              %
            </Box>
            <Typography sx={{ fontSize: '28px', lineHeight: '140%', fontWeight: '500' }}>
              Pay Gap Reduction
              <br />
              in the First Year
              <br />
              Alone
            </Typography>
          </Box>
          <img
            src={'/assets/home/circle2.png'}
            alt={'image.png'}
            className={'tw-absolute tw-left-0 tw-right-0 tw-top-0 tw-mx-auto tw-w-[360px]'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CoreBenefits;
