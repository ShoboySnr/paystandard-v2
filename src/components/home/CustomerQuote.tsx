'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Box, Divider, Typography } from '@mui/material';

import CustomerImage from '~/assets/home/customer-quotes/image1.png';
import Image from 'next/image';
const customerQuotes = [
  {
    title: 'PayStandards is a huge unlock.',
    description:
      'It’s a game changer for us. It’s a game changer for our clients. It’s a game changer for the industry.',
    image: CustomerImage,
  },
  {
    title: 'PayStandards is a huge unlock.',
    description:
      'It’s a game changer for us. It’s a game changer for our clients. It’s a game changer for the industry.',
    image: CustomerImage,
  },
  {
    title: 'PayStandards is a huge unlock.',
    description:
      'It’s a game changer for us. It’s a game changer for our clients. It’s a game changer for the industry.',
    image: CustomerImage,
  },
  {
    title: 'PayStandards is a huge unlock.',
    description:
      'It’s a game changer for us. It’s a game changer for our clients. It’s a game changer for the industry.',
    image: CustomerImage,
  },
];

const CustomerQuote = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
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
            <SwiperSlide className={'tw-w-[825px]'}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid black',
                  borderRadius: '35px',
                  height: {
                    md: '300px',
                  },
                }}
              >
                <Image
                  src={quote.image}
                  alt="image.png"
                  height={300}
                  className={'tw-rounder-[35px]'}
                />
                <Box
                  sx={{
                    padding: '50px',
                    minWidth: {
                      md: '500px',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '32px',
                      color: 'black.main',
                      fontWeight: '700',
                    }}
                  >
                    “{quote.title}”
                  </Typography>
                  <Divider
                    sx={{
                      my: '10px',
                      borderColor: 'primary.main',
                      width: '100px',
                      borderWidth: '3px',
                      borderRadius: '5px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '18px',
                      color: 'black.main',
                      fontWeight: '400',
                    }}
                  >
                    {quote.description}
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
