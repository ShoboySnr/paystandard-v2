import React from 'react';
import { Grid } from '@mui/system';

import AppContainer from '@/components/layout/AppContainer';
import BlogImage from '~/assets/resources/blog-image.png';
import ResourceImage from '~/assets/resources/resourceLibrary.svg';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ResourcesBanner from '@/components/resources/ResourcesBanner';

const resources = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Blog',
    image: BlogImage,
  },

  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'eBook',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Infographic',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Blog',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'eBook',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Blog',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'eBook',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Blog',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Infographic',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Blog',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Blog',
    image: BlogImage,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Daviolo',
    date: '14 August, 2024',
    type: 'Blog',
    image: BlogImage,
  },
];

export default function Resources() {
  return (
    <>
      <ResourcesBanner />

      <AppContainer>
        <Box>
          <Box
            sx={{
              marginBottom: '60px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { md: 'row', xs: 'column' },
              padding: { xs: '0 15px', md: '0 0' },
            }}
          >
            <Box
              sx={{
                width: { md: '500px', xs: 'auto' },
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <Image src={ResourceImage} alt="live demo" className="" />
                <Typography
                  sx={{
                    fontSize: '32px',
                    fontWeight: '400',
                    color: 'dark-gray.main',
                  }}
                >
                  Resource Library
                </Typography>{' '}
              </Box>

              <Divider
                sx={{
                  mx: { xs: 'auto', md: '0' },
                  borderColor: 'blue',
                  borderRadius: '40px',
                  width: { md: '500px', xs: '100%' },
                  borderWidth: '3.27px',
                }}
              />
            </Box>

            <Box>
              <FormControl
                sx={{ width: { md: '500px', xs: '100%' }, paddingBottom: '26px' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="search" edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                  sx={{ borderRadius: '42px' }}
                />
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: { md: 'space-between', xs: 'center' },
                  alignItems: { xs: 'center', md: '' },
                  gap: { xs: '21px', md: '0' },
                }}
              >
                <Box
                  sx={{
                    paddingLeft: '11px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: '400',
                      color: 'deep-blue-secondary.main',
                      display: 'inline',
                    }}
                  >
                    Sort By: Type
                  </Typography>
                  <ExpandMoreIcon className="tw-text-[18px]" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayArrowIcon sx={{ color: 'lightgray', transform: 'rotate(180deg)' }} />
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: '400',
                      color: 'deep-blue-secondary.main',
                      display: 'inline',
                    }}
                  >
                    Page 1 of 10
                  </Typography>
                  <PlayArrowIcon sx={{ color: 'dark-gray.main' }} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Grid
            container
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              alignContent: 'flex-start',
              justifyContent: 'center',
              gap: '32px 16px',
              flexWrap: 'wrap',
            }}
          >
            {resources.map((resource, index) => (
              <Grid key={index} component="div">
                <Box className="tw-rounded-xl tw-border tw-shadow-md tw-w-[300px] tw-h-[350px]">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    width={300}
                    height={180}
                    className="tw-w-full tw-h-[121px] tw-object-cover tw-rounded-t-xl"
                  />
                  <Box
                    sx={{
                      padding: '26px 23px 20px 23px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '229px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          md: '18px',
                          xs: '14px',
                        },
                        fontWeight: '500',
                        color: 'deep-blue-secondary.main',
                      }}
                    >
                      {resource.title}
                    </Typography>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            md: '14px',
                            xs: '14px',
                          },
                          fontWeight: '400',
                          color: 'deep-blue-secondary.main',
                        }}
                      >
                        By {resource.author}
                      </Typography>
                      <Divider
                        sx={{
                          mx: { xs: 'auto', md: '0' },
                          borderColor: 'dark-gray.main',
                          borderRadius: '40px',
                          width: '100%',
                          borderWidth: '1px',
                          margin: '8px 0',
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              md: '14px',
                              xs: '14px',
                            },
                            fontWeight: '400',
                            color: 'deep-blue-secondary.main',
                          }}
                        >
                          {resource.date}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              md: '14px',
                              xs: '14px',
                            },
                            fontWeight: '500',
                            color: 'deep-blue-secondary.main',
                          }}
                        >
                          {resource.type}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ padding: '60px 0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PlayArrowIcon sx={{ color: 'lightgray', transform: 'rotate(180deg)' }} />
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '400',
                color: 'deep-blue-secondary.main',
                display: 'inline',
              }}
            >
              Page 1 of 10
            </Typography>
            <PlayArrowIcon sx={{ color: 'dark-gray.main' }} />
          </Box>
        </Box>
      </AppContainer>
    </>
  );
}
