import { Container } from '@mui/material';
import React from 'react';

const ShopWrapper = styled(Box)(({ theme }) => ({}));

const Shop = () => {
   return (
      <ShopWrapper>
         <Container maxWidth='lg'>
            <div>Shop</div>
         </Container>
      </ShopWrapper>
   );
};

export default Shop;
