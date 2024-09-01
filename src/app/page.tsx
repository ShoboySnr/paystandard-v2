import '@/scss/home.scss';
import { Box } from '@mui/material';
import Banner from '@/components/home/Banner';
import Products from '@/components/home/Products';
import CoreBenefits from '@/components/home/CoreBenefits';
import CustomerQuote from '@/components/home/CustomerQuote';
import AppContainer from '@/components/layout/AppContainer';
import Pillars from '@/components/home/Pillars';
import BookDemo from '@/components/home/BookDemo';

const Home = () => {
  return (
    <Box className={'home-page'}>
      <AppContainer>
        <Banner />
      </AppContainer>
      <AppContainer>
        <Products />
      </AppContainer>
      <Box
        sx={{
          my: {
            md: '100px',
          },
        }}
      >
        <CustomerQuote />
      </Box>
      <AppContainer>
        <CoreBenefits />
      </AppContainer>
      <AppContainer>
        <Pillars />
      </AppContainer>
      <AppContainer
        sx={{
          padding: '50px 0 100px 0',
        }}
      >
        <BookDemo />
      </AppContainer>
    </Box>
  );
};
export default Home;
