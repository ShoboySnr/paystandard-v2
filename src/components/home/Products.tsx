import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import IndexImage from '~/assets/home/index.svg';
import AuditImage from '~/assets/home/audit.svg';
import PilotImage from '~/assets/home/pilot.svg';
import Link from 'next/link';

const imageSectionStyling = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
};

const Products = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        padding: {
          md: '35px 45px',
          xs: '15px 15px 35px 15px',
        },
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
          p: {
            md: '10px 22px',
            xs: '40px 0 0 0',
          },
        }}
      >
        <Box
          sx={{
            color: '#FFF',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                md: '40px',
                xs: '32px',
              },
              lineHeight: '125%',
              fontWeight: '400',
            }}
          >
            Raise the Standard <br /> of Pay at Your Company
          </Typography>
          <Typography sx={{ fontSize: '18px', mt: '22px', fontWeight: '400' }}>
            Powered by a market-leading pay algorithm, real-time analytics, and an easy-to-use
            software platform, PayStandards makes pay recommendations that consider only the right
            things. PayStandards delivers true pay equity and pay transparency – without the
            headache.
          </Typography>
        </Box>
        <Box sx={{ mt: '36px', display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
          <Box sx={imageSectionStyling}>
            <Link href={'/index-product'}>
              <Image
                className={'tw-h-[50px] tw-w-[50px] md:tw-h-[70px] md:tw-w-[70px]'}
                src={IndexImage}
                alt="image"
              />
              <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: '10px' }}>
                Pay Index
              </Typography>
            </Link>
          </Box>
          <Box sx={imageSectionStyling}>
            <Link href={'/audit-product'}>
              <Image
                className={'tw-h-[50px] tw-w-[50px] md:tw-h-[70px] md:tw-w-[70px]'}
                src={AuditImage}
                alt="image"
              />
              <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: '10px' }}>
                Pay Audit
              </Typography>
            </Link>
          </Box>
          <Box sx={imageSectionStyling}>
            <Link href={'/dashboard-product'}>
              <Image
                className={'tw-h-[50px] tw-w-[50px] md:tw-h-[70px] md:tw-w-[70px]'}
                src={PilotImage}
                alt="image"
              />
              <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: '10px' }}>
                Pay Pilot
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
