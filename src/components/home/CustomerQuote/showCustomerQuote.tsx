'use client';
import { useMediaQuery } from '@mui/material';
import theme from '@/theme';
import CustomerQuoteUpdated from '@/components/home/CustomerQuoteUpdated';
import CustomerQuote from '@/components/home/CustomerQuote';
import AppContainer from '@/components/layout/AppContainer';

const ShowCustomerQuote = (props: any) => {
  return (
    <>
      <AppContainer>
        {useMediaQuery(theme.breakpoints.up('md')) ? <CustomerQuoteUpdated /> : <CustomerQuote />}
      </AppContainer>
    </>
  );
};

export default ShowCustomerQuote;
