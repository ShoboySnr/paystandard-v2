'use client';
import { Grid } from '@mui/system';
import { Box, Divider, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ArrowRight from '~/assets/icons-common/arrow-right.svg';
import ArrowRightLight from '~/assets/icons-common/arrow-right-white.svg';
import leadingOrg1Light from '~/assets/leading-organizations/image1.svg';
import leadingOrg1 from '~/assets/leading-organizations/image1_dark.svg';
import leadingOrg2Light from '~/assets/leading-organizations/image2.svg';
import leadingOrg2 from '~/assets/leading-organizations/image2_dark.svg';
import leadingOrg3Light from '~/assets/leading-organizations/image3.svg';
import leadingOrg3 from '~/assets/leading-organizations/image3_dark.svg';
import leadingOrg4Light from '~/assets/leading-organizations/image4.svg';
import leadingOrg4 from '~/assets/leading-organizations/image4_dark.svg';
import leadingOrg5Light from '~/assets/leading-organizations/image5.svg';
import leadingOrg5 from '~/assets/leading-organizations/image5_dark.svg';
import leadingOrg6Light from '~/assets/leading-organizations/image6.svg';
import leadingOrg6 from '~/assets/leading-organizations/image6_dark.svg';
import Icon2 from '~/assets/home/pillars/icon2.svg';
import Icon3 from '~/assets/home/pillars/icon3.svg';
import Icon2Light from '~/assets/home/pillars/icon2_light.svg';
import Icon3Light from '~/assets/home/pillars/icon3_light.svg';
import Link from 'next/link';

const cardStyling = {
  minHeight: '200px',
  border: '1px solid #525252;',
  borderRadius: '35px',
  backgroundBlendMode: 'hard-light',
  backgroundSize: 'cover',
  padding: { sm: '45px', md: '20px', lg: '45px', xs: '20px' },
  transition: 'all 0s ease-in-out',
  '&:hover': {
    backgroundColor: 'primary.main',
    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.2)',
    backgroundBlendMode: 'multiply',
    color: 'white.main',
  },
};

interface HoverableImageProps {
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  altText: string;
  height: number;
  isParentHovered: boolean;
}

const HoverableImage: React.FC<HoverableImageProps> = ({
  lightImage,
  darkImage,
  altText,
  height,
  isParentHovered,
}) => {
  return (
    <>
      {isParentHovered ? (
        <Image
          priority={true}
          src={lightImage}
          alt={altText}
          height={height}
          style={{ transition: 'opacity 0s ease-in-out' }}
        />
      ) : (
        <Image
          priority={true}
          src={darkImage}
          alt={altText}
          height={height}
          style={{ transition: 'opacity 0s ease-in-out' }}
        />
      )}
    </>
  );
};

const Pillars = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <Grid
      container
      sx={{
        color: 'black.main',
      }}
    >
      <Grid size={12} sx={{ px: { md: '20px', xs: '15px' } }}>
        <Typography
          sx={{
            fontSize: { md: '32px', xs: '28px' },
            fontWeight: '500',
            textAlign: { xs: 'left', md: 'center' },
            mb: { xs: '4px', md: '5px' },
          }}
        >
          The Three Pillars of PayStandards
        </Typography>
        <Divider
          sx={{
            my: { xs: '0', md: '5px' },
            borderColor: 'primary.main',
            width: '100%',
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
            md: '20px',
          },
        }}
      >
        {/*first*/}
        <Grid
          spacing={1}
          container
          sx={{
            ...cardStyling,
            background:
              'url(assets/home/pillars/bg1.png) lightgray 50% / cover no-repeat;',
            marginTop: { xs: '40px', md: '0' },
          }}
          size={{
            md: 4,
            sm: 12,
          }}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            size={12}
          >
            <Grid size={'auto'} alignSelf={'center'}>
              {/*<Image*/}
              {/*  height={50}*/}
              {/*  src={leadingOrg1}*/}
              {/*  alt={'Leading Org'}*/}
              {/*/>*/}
              <HoverableImage
                lightImage={leadingOrg1Light}
                darkImage={leadingOrg1}
                altText={'Leading Organization 1'}
                height={50}
                isParentHovered={hoveredCard === 1}
              />
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <HoverableImage
                lightImage={leadingOrg2Light}
                darkImage={leadingOrg2}
                altText={'Leading Organization 2'}
                height={44}
                isParentHovered={hoveredCard === 1}
              />
              {/*<Image height={46} src={leadingOrg2} alt={'Leading Org'} />*/}
              {/*<Image height={46} src={leadingOrg2Dark} alt={'Leading Org'} />*/}
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <HoverableImage
                lightImage={leadingOrg3Light}
                darkImage={leadingOrg3}
                altText={'Leading Organization 3'}
                height={30}
                isParentHovered={hoveredCard === 1}
              />
              {/*<Image height={30} src={leadingOrg3} alt={'Leading Org'} />*/}
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
              <HoverableImage
                lightImage={leadingOrg4Light}
                darkImage={leadingOrg4}
                altText={'Leading Organization 4'}
                height={35}
                isParentHovered={hoveredCard === 1}
              />
              {/*<Image height={35} src={leadingOrg4} alt={'Leading Org'} />*/}
              {/*<Image height={35} src={leadingOrg4Dark} alt={'Leading Org'} />*/}
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <HoverableImage
                lightImage={leadingOrg5Light}
                darkImage={leadingOrg5}
                altText={'Leading Organization 5'}
                height={28}
                isParentHovered={hoveredCard === 1}
              />
              {/*<Image height={30} src={leadingOrg5} alt={'Leading Org'} />*/}
              {/*<Image height={30} src={leadingOrg5Dark} alt={'Leading Org'} />*/}
            </Grid>
            <Grid size={'auto'} alignSelf={'center'}>
              <HoverableImage
                lightImage={leadingOrg6Light}
                darkImage={leadingOrg6}
                altText={'Leading Organization 6'}
                height={50}
                isParentHovered={hoveredCard === 1}
              />
              {/*<Image height={50} src={leadingOrg6} alt={'Leading Org'} />*/}
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
              <Typography sx={{ fontSize: '28px', fontWeight: '700' }}>
                Expertise
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                We are a team of leading compensation practitioners and
                researchers – the methodologies underlying our software are
                based on tried and true compensation research and experience.
              </Typography>
            </Box>
            <Grid size={12} alignSelf={'self-end'} sx={{ mt: '20px' }}>
              <Link href={'/about-us'}>
                <Typography
                  sx={{ fontSize: '18px', fontWeight: '500', display: 'flex' }}
                >
                  <span className={'tw-mr-2'}>About Us</span>
                  {/*<Image src={ArrowRight} alt={'arrow-right'} />*/}
                  <HoverableImage
                    lightImage={ArrowRightLight}
                    darkImage={ArrowRight}
                    altText={'Arrow Right'}
                    height={20}
                    isParentHovered={hoveredCard === 1}
                  />
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>

        {/*Second*/}
        <Grid
          container
          sx={{
            ...cardStyling,
            background:
              'url(assets/home/pillars/bg2.png) lightgray 50% / cover no-repeat;',
            marginTop: { xs: '40px', md: '0' },
          }}
          size={{
            md: 4,
            sm: 12,
          }}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Grid size={12} alignSelf={'center'}>
            <HoverableImage
              lightImage={Icon2Light}
              darkImage={Icon2}
              altText={'Leading Organization'}
              height={110}
              isParentHovered={hoveredCard === 2}
            />
            {/*<Image src={Icon2} alt={'Leading Org'} height={110} />*/}
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
              <Typography sx={{ fontSize: '28px', fontWeight: '700' }}>
                Innovation
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                We are a technology company at our core. The insights we provide
                empower you with data-at-your fingertips to optimize your pay
                decisions.
              </Typography>
            </Box>
          </Grid>
          <Grid size={12} alignSelf={'self-end'} sx={{ mt: '20px' }}>
            <Link href={'/pay-audit'}>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', display: 'flex' }}
              >
                <span className={'tw-mr-2'}>Learn More</span>
                <HoverableImage
                  lightImage={ArrowRightLight}
                  darkImage={ArrowRight}
                  altText={'Arrow Right'}
                  height={20}
                  isParentHovered={hoveredCard === 2}
                />
              </Typography>
            </Link>
          </Grid>
        </Grid>

        {/*Third*/}
        <Grid
          container
          sx={{
            ...cardStyling,
            background:
              'url(assets/home/pillars/bg3.png) lightgray 50% / cover no-repeat;',
            marginTop: { xs: '40px', md: '0' },
          }}
          size={{
            md: 4,
            sm: 12,
          }}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Grid size={12} alignSelf={'center'}>
            {/*<Image src={Icon3} alt={'Leading Org'} height={110} />*/}
            <HoverableImage
              lightImage={Icon3Light}
              darkImage={Icon3}
              altText={'Leading Organization'}
              height={110}
              isParentHovered={hoveredCard === 3}
            />
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
              <Typography sx={{ fontSize: '28px', fontWeight: '700' }}>
                Security
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                We take data security seriously. PayStandards is SOC 2 Type II
                compliant and takes the necessary precautions to keep your data
                safe.
              </Typography>
            </Box>
          </Grid>
          <Grid size={12} alignSelf={'self-end'} sx={{ mt: '20px' }}>
            <Link
              href={'https://trust.paystandards.com/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', display: 'flex' }}
              >
                <span className={'tw-mr-2'}>Trust Center</span>
                <HoverableImage
                  lightImage={ArrowRightLight}
                  darkImage={ArrowRight}
                  altText={'Arrow Right'}
                  height={20}
                  isParentHovered={hoveredCard === 3}
                />
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pillars;
