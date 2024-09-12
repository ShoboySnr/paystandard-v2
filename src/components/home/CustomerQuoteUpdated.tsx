'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/theme';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../home/customerQuote.scss';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import InvertedComma1 from '~/assets/home/customer-quotes/quotation-sign-inverted.svg';
import InvertedComma2 from '~/assets/home/customer-quotes/quotation-sign.svg';
import RightTopCornerBorder from '~/assets/home/customer-quotes/right-top-corner-border.svg';
import LeftBottomCornerBorder from '~/assets/home/customer-quotes/left-bottom-corner-border.svg';
import Image from 'next/image';

const customerQuotes = [
  {
    title: 'PayStandards is a huge unlock.',
    designation: 'Head of Total Rewards',
    subtitle: 'Fortune 100 Industrial Company',
  },
  {
    title: 'PayStandards is a huge unlock.',

    designation: 'Head of Total Rewards',
    subtitle: 'Fortune 100 Industrial Company',
  },
  {
    title: 'PayStandards is a huge unlock.',
    designation: 'Head of Total Rewards',
    subtitle: 'Fortune 100 Industrial Company',
  },
  {
    title: 'PayStandards is a huge unlock.',
    designation: 'Head of Total Rewards',
    subtitle: 'Fortune 100 Industrial Company',
  },
];

const CustomerQuoteUpdated = () => {
  return (
    <>
      <Swiper
        slidesPerView={useMediaQuery(theme.breakpoints.up('md')) ? 1 : 1}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className={'tw-w-full tw-px-5 tw-flex tw-justify-center tw-items-center'}
      >
        {customerQuotes.map((quote, index) => (
          <React.Fragment key={index}>
            <SwiperSlide className={'tw-px-0 md:tw-px-[20px]'} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      md: 'row',
                      xs: 'column',
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: {
                      md: '35px',
                      xs: '10px',
                    },
                    height: {
                      md: '300px',
                      xs: '340px',
                    },
                    width: { md: '745px', xs: '100%' },
                  }}
                  className={'tw-relative tw-overflow-hidden tw-p-4'}
                >
                  {/*commas and border work */}
                  <Image
                    className={
                      'tw-absolute tw-top-0 tw-left-6 md:tw-top-0 md:tw-left-0 md:tw-ml-1.5 md:tw-mt-1.5 md:tw-h-[60px] xs:tw-h-[22px] '
                    }
                    src={InvertedComma1}
                    alt={'Inverted Comma'}
                  />
                  <Image
                    className={
                      'tw-absolute tw-bottom-0 tw-right-6 md:tw-bottom-0 md:tw-right-0 tw-mr-1.5 tw-mb-1.5 md:tw-h-[60px] xs:tw-h-[22px]'
                    }
                    src={InvertedComma2}
                    alt={'Inverted Comma'}
                  />

                  <Image
                    className={
                      'tw-absolute tw-top-1 md:tw-top-0 md:tw-right-3 -tw-right-10 md:tw-mr-1.5 md:tw-mt-1.5 md:tw-h-[220px] xs:tw-h-[80px]'
                    }
                    src={RightTopCornerBorder}
                    alt={'Right Top Corner Border'}
                  />
                  <Image
                    className={
                      'tw-absolute tw-bottom-1 md:tw-bottom-0 md:tw-left-3 -tw-left-10 md:tw-ml-1.5 md:tw-mb-1.5 md:tw-h-[220px] xs:tw-h-[80px]'
                    }
                    src={LeftBottomCornerBorder}
                    alt={'Left Bottom Corner Border'}
                  />

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: { lg: '50px', md: '20px', xs: '20px 62px 0px' },
                      // minWidth: {
                      //   md: '500px',
                      // },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: '33px', xs: '20px' },
                        textAlign: { xs: 'center', md: 'left' },
                        color: 'black.main',
                        fontWeight: '600',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {quote.title}
                    </Typography>
                    <Divider
                      sx={{
                        my: { md: '15px', xs: '14px' },
                        mx: { xs: 'auto', md: '0' },
                        borderColor: 'primary.main',
                        width: { md: '100px', xs: '134px' },
                        borderWidth: '1.5px',
                        borderRadius: '5px',
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: '20px', xs: '16px' },
                        textAlign: { xs: 'center', md: 'left' },
                        color: 'black.main',
                        fontWeight: '700',
                      }}
                    >
                      {quote.designation}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: '18px', xs: '14px' },
                        textAlign: { xs: 'center', md: 'left' },
                        color: 'black.main',
                        fontWeight: '400',
                      }}
                    >
                      {quote.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </>
  );
};

export default CustomerQuoteUpdated;
