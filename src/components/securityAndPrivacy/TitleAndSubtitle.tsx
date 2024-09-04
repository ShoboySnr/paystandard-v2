import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';

interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
  titleColor?: string;
  titleWeight?: string;
  subtitleWeight?: string;
  titleSize?: string;
  subtitleSize?: string;
}

const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({
  title,
  subtitle,
  titleColor,
  subtitleWeight,
  titleWeight,
  titleSize,
  subtitleSize,
}) => {
  return (
    <Grid size={'auto'} textAlign={'start'}>
      <Typography
        sx={{
          fontSize: {
            md: titleSize ? titleSize : '24px',
          },
          fontWeight: titleWeight ? titleWeight : '700',
          margin: 'auto 0 2px 0',
          color: titleColor ? titleColor : 'deep-blue-primary.main',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            md: subtitleSize ? subtitleSize : '18px',
          },
          fontWeight: subtitleWeight ? subtitleWeight : '400',
          margin: 'auto 0 2px 0',
          color: 'deep-blue-secondary.main',
        }}
      >
        {subtitle}
      </Typography>
    </Grid>
  );
};

export default TitleAndSubtitle;
