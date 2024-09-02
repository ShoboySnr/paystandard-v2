import { Grid } from '@mui/system';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowRight from '~/assets/icons-common/arrow-right.svg';
import leadingOrg1 from '~/assets/leading-organizations/image1.svg';
import leadingOrg2 from '~/assets/leading-organizations/image2.svg';
import leadingOrg3 from '~/assets/leading-organizations/image3.svg';
import leadingOrg4 from '~/assets/leading-organizations/image4.svg';
import leadingOrg5 from '~/assets/leading-organizations/image5.svg';
import leadingOrg6 from '~/assets/leading-organizations/image6.svg';
import Icon2 from '~/assets/home/pillars/icon2.svg';
import Icon3 from '~/assets/home/pillars/icon3.svg';

const cardStyling = {
  minHeight: '200px',
  border: '1px solid #525252;',
  borderRadius: '35px',
  backgroundBlendMode: 'hard-light',
  backgroundSize: 'cover',
  padding: { md: '45px', xs: '20px' },
  // '&:hover': {
  //   backgroundColor: 'primary.main',
  //   boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.2)',
  //   backgroundBlendMode: 'multiply',
  // },
};

const Pillars = () => {
  return (
    <Grid
      container
      sx={{
        color: '#283167',
      }}
    >
      <Grid size={12}>
        <Typography
          sx={{
            fontSize: { md: '32px', xs: '28px' },
            px: { md: '0', xs: '18px' },
            fontWeight: '500',
          }}
        >
          The Three Pillars of PayStandards
        </Typography>
        <Divider
          sx={{
            my: '5px',
            borderColor: 'primary.main',
            width: { md: '100%', xs: '95%' },
            mx: { xs: 'auto', md: '0' },
            borderWidth: '2px',
            borderRadius: '5px',
          }}
        />
      </Grid>
      <Grid
        container
        size={12}
        columnSpacing={2}
        sx={{
          my: {
            md: '50px',
          },
          px: {
            xs: '15px',
            md: '0',
          },
        }}
      >
        <Grid
          spacing={2}
          container
          sx={{
            ...cardStyling,
            background: 'url(assets/home/pillars/bg1.png) lightgray 50% / cover no-repeat;',
            marginTop: { xs: '40px', md: '0' },
          }}
          size={{
            md: 4,
            sm: 12,
          }}
        >
          <Grid
            size={12}
            justifyContent={'space-between'}
            alignItems={'center'}
            container
            direction={'row'}
          >
            <Grid size={'auto'} alignSelf={'center'}>
              <Image height={50} src={leadingOrg1} alt={'Leading Org'} />
              {/*<Image height={50} src={leadingOrg1Dark} alt={'Leading Org'} />*/}
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <Image height={46} src={leadingOrg2} alt={'Leading Org'} />
              {/*<Image height={46} src={leadingOrg2Dark} alt={'Leading Org'} />*/}
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <Image height={30} src={leadingOrg3} alt={'Leading Org'} />
              {/*<Image height={30} src={leadingOrg3Dark} alt={'Leading Org'} />*/}
            </Grid>
          </Grid>
          <Grid
            size={12}
            justifyContent={'space-between'}
            alignItems={'center'}
            container
            alignSelf={'center'}
          >
            <Grid size={'auto'} alignSelf={'center'}>
              <Image height={35} src={leadingOrg4} alt={'Leading Org'} />
              {/*<Image height={35} src={leadingOrg4Dark} alt={'Leading Org'} />*/}
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <Image height={30} src={leadingOrg5} alt={'Leading Org'} />
              {/*<Image height={30} src={leadingOrg5Dark} alt={'Leading Org'} />*/}
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <Image height={30} src={leadingOrg6} alt={'Leading Org'} />
              {/*<Image height={30} src={leadingOrg6Dark} alt={'Leading Org'} />*/}
            </Grid>
          </Grid>
          <Grid
            sx={{
              pt: '45px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Typography sx={{ fontSize: '28px', fontWeight: '700' }}>Expertise</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                We are a team of leading compensation practitioners and researchers – the
                methodologies underlying our software are based on tried and true compensation
                research and experience.
              </Typography>
            </Box>
            <Grid size={12} alignSelf={'self-end'} sx={{ mt: '20px' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: '500', display: 'flex' }}>
                <span className={'tw-mr-2'}>Trust Center</span>
                <Image src={ArrowRight} alt={'arrow-right'} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            ...cardStyling,
            background: 'url(assets/home/pillars/bg2.png) lightgray 50% / cover no-repeat;',
            marginTop: { xs: '40px', md: '0' },
          }}
          size={{
            md: 4,
            sm: 12,
          }}
        >
          <Grid size={12} alignSelf={'center'}>
            <Image src={Icon2} alt={'Leading Org'} height={110} />
          </Grid>
          <Grid
            sx={{
              pt: '45px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Typography sx={{ fontSize: '28px', fontWeight: '700' }}>Innovation</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                We are a technology company at our core. The insights we provide empower you with
                data-at-your fingertips to optimize your pay decisions.
              </Typography>
            </Box>
          </Grid>
          <Grid size={12} alignSelf={'self-end'} sx={{ mt: '20px' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '500', display: 'flex' }}>
              <span className={'tw-mr-2'}>Learn More</span>
              <Image src={ArrowRight} alt={'arrow-right'} />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            ...cardStyling,
            background: 'url(assets/home/pillars/bg3.png) lightgray 50% / cover no-repeat;',
            marginTop: { xs: '40px', md: '0' },
          }}
          size={{
            md: 4,
            sm: 12,
          }}
        >
          <Grid size={12} alignSelf={'center'}>
            <Image src={Icon3} alt={'Leading Org'} height={110} />
          </Grid>
          <Grid
            sx={{
              pt: '45px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Typography sx={{ fontSize: '28px', fontWeight: '700' }}>Protection</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                We take data security seriously. PayStandards is SOC 2 Type II compliant and takes
                the necessary precautions to keep your data safe.
              </Typography>
            </Box>
          </Grid>
          <Grid size={12} alignSelf={'self-end'} sx={{ mt: '20px' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '500', display: 'flex' }}>
              <span className={'tw-mr-2'}>Trust Center</span>
              <Image src={ArrowRight} alt={'arrow-right'} />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pillars;
