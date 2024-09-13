'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/theme';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../home/customerQuote.scss';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';

import CustomerImage from '~/assets/home/customer-quotes/image1.png';
import Image from 'next/image';

const customerQuotes = [
  {
    title: 'This is a huge unlock.',
    description: 'Head of Total Rewards',
    subtitle: 'Fortune 100 Industrial Company',
    image: CustomerImage,
  },
  {
    title: 'The user experience is seamless.',
    description: 'Head of Compensation',
    subtitle: 'Fortune 500 services company',
    image: CustomerImage,
  },
  {
    title: 'PayStandards is the nirvana of pay.',
    description: 'Head of Total Rewards',
    subtitle: 'Fortune 200 Financial Company',
    image: CustomerImage,
  },
];

const CustomerQuote = () => {
  return (
    <>
      <Swiper
        slidesPerView={useMediaQuery(theme.breakpoints.up('md')) ? 2 : 1.5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={'tw-w-full tw-px-5'}
      >
        {customerQuotes.map((quote, index) => (
          <React.Fragment key={index}>
            <SwiperSlide className={'tw-w-[825px] tw-px-0 md:tw-px-[20px]'} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: {
                    md: 'row',
                    xs: 'column',
                  },
                  alignItems: 'center',
                  border: '1px solid black',
                  borderRadius: {
                    md: '35px',
                    xs: '12px',
                  },
                  height: {
                    md: '300px',
                    xs: '340px',
                  },
                }}
              >
                <Image
                  src={quote.image}
                  alt="image.png"
                  className={
                    'tw-h-[160px] tw-object-cover tw-mt-0 tw-w-full tw-rounded-[10px] md:tw-h-[300px] md:tw-w-[196px] md:tw-rounded-[35px]'
                  }
                />
                <Box
                  sx={{
                    padding: { lg: '50px', md: '20px', xs: '15px 22px 0px' },
                    // minWidth: {
                    //   md: '500px',
                    // },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: '32px', xs: '20px' },
                      textAlign: { xs: 'center', md: 'left' },
                      color: 'black.main',
                      fontWeight: '600',
                    }}
                  >
                    “{quote.title}”
                  </Typography>
                  <Divider
                    sx={{
                      my: { md: '10px', xs: '10px' },
                      mx: { xs: 'auto', md: '0' },
                      borderColor: 'primary.main',
                      width: { md: '100px', xs: '134px' },
                      borderWidth: '3px',
                      borderRadius: '5px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { md: '18px', xs: '14px' },
                      textAlign: { xs: 'center', md: 'left' },
                      color: 'black.main',
                      fontWeight: '400',
                    }}
                  >
                    {quote.description}, <br /> {quote.subtitle}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </>
  );
};

export default CustomerQuote;
