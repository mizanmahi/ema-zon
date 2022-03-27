import { Container, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CustomDrawer from '../Custom/Drawer/Drawer';
import Loader from '../Loader/Loader';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const ShopWrapper = styled(Box)(({ theme }) => ({
   margin: '2rem auto',
}));

const Shop = ({ isCartDrawerOpen, setIsCartDrawerOpen }) => {
   const [products, setProduct] = useState([]);
   const [productsLoading, setProductsLoading] = useState(true);
   const [productsError, setProductsError] = useState(false);

   useEffect(() => {
      setProductsLoading(true);
      fetch(
         'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'
      )
         .then((response) => response.json())
         .then((data) => {
            setProduct(data);
            setProductsLoading(false);
         })
         .catch((err) => {
            setProductsError('Failed to fetch data, Try again!');
            setProductsLoading(false);
         });
   }, []);

   return (
      <ShopWrapper>
         <Container maxWidth='lg'>
            {productsLoading ? (
               <Loader />
            ) : productsError ? (
               <Typography
                  color='error'
                  variant='h6'
                  sx={{ textAlign: 'center' }}
               >
                  {productsError}
               </Typography>
            ) : (
               <Grid
                  container
                  spacing={3}
                  sx={{ flexGrow: 1 }}
                  justifyContent='center'
               >
                  {products.map((product) => (
                     <Grid item xs='auto'>
                        <Product key={product.id} product={product} />
                     </Grid>
                  ))}
               </Grid>
            )}

            <CustomDrawer
               open={isCartDrawerOpen}
               onClose={() => setIsCartDrawerOpen(false)}
               anchor='right'
               drawerStyles={{
                  background: '#FFE0B3',
               }}
            >
               <Cart />
            </CustomDrawer>
         </Container>
      </ShopWrapper>
   );
};

export default Shop;
