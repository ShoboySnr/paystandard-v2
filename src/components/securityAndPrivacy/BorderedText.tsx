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
        borderColor: '#283167',
        padding: '20px 24px 20px 24px',
        margin: '20 0 20px 0',
        borderRadius: '15px',
      }}
    >
      <Typography
        sx={{
          fontSize: '17px',
          fontWeight: textWeight ? textWeight : '400',
          margin: '0 0 0 0',
          padding: '0 0 0 0',
          color: '#283167',
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default BorderedText;
