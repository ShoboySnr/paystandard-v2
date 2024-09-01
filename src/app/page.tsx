import '@/scss/home.scss';
import { Box } from '@mui/material';
import Banner from '@/components/home/Banner';
import Products from '@/components/home/Products';
import CoreBenefits from '@/components/home/CoreBenefits';

const Home = () => {
  return (
    <Box className={'home-page'}>
      <Banner />
      <Products />
      <CoreBenefits className={'tw-mt-10'} />
    </Box>
  );
};
export default Home;
