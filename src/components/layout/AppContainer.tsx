import { Container } from '@mui/material';
import React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

const baseSx: SxProps<Theme> = {
  px: 0,
};

const AppContainer = ({
  children,
  sx,
}: Readonly<{
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}>) => {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        ...baseSx,
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export default AppContainer;
