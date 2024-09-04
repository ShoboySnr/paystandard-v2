import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

interface IQuoteCard {
  image: any;
  quote: string;
  name?: string;
  company: string;
}

const QuoteCard = (props: { content: IQuoteCard }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#fff',
        flexDirection: {
          md: 'row',
          xs: 'column',
        },
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: {
          md: '35px',
          xs: '10px',
        },
        height: {
          md: '300px',
          xs: 'auto',
        },
      }}
    >
      <Image
        src={props.content.image}
        alt="image.png"
        className={
          'tw-border-1 tw-h-[150px] tw-w-full tw-rounded-[10px] tw-border-r tw-border-black tw-object-cover md:tw-h-[300px] md:tw-w-[196px] md:tw-rounded-[35px]'
        }
      />
      <Box
        sx={{
          padding: { lg: '50px', md: '20px', xs: '20px' },
        }}
      >
        <Typography
          sx={{
            fontSize: { md: '23px', xs: '20px' },
            textAlign: { xs: 'center', md: 'left' },
            color: 'black.main',
            fontWeight: '600',
            lineHeight: '140%',
          }}
        >
          ”{props.content.quote}”
        </Typography>

        <Divider
          sx={{
            my: { md: '10px', xs: '14px' },
            mx: { xs: 'auto', md: '0' },
            borderColor: 'primary.main',
            width: { md: '157px', xs: '134px' },
            borderWidth: '3px',
            borderRadius: '5px',
          }}
        />

        <Box
          sx={{
            fontSize: { md: '20px', xs: '14px' },
            textAlign: { xs: 'center', md: 'left' },
            color: 'black.main',
            fontWeight: '400',
          }}
        >
          <span>{props.content.name}</span> <br />
          {props.content.company}
        </Box>
      </Box>
    </Box>
  );
};

export default QuoteCard;
