import { Grid } from '@mui/system';
import { Typography } from '@mui/material';

const BorderedText = ({
  text,
  textWeight,
}: {
  text: string;
  textWeight?: string;
}) => {
  return (
    <Grid
      size={12}
      sx={{
        height: '100%',
        border: '1px solid',
        borderColor: 'gray.main',
        padding: '20px 24px 20px 24px',
        margin: '20 0 20px 0',
        borderRadius: '15px',
      }}
    >
      <Typography
        sx={{
          fontSize: {
            md: '20px',
            xs: '18px',
          },
          fontWeight: textWeight ? textWeight : '400',
          margin: '0 0 0 0',
          padding: '0 0 0 0',
          color: 'deep-blue-secondary.main',
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default BorderedText;
