import { Container, Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ShopWrapper = styled(Box)(({ theme }) => ({
   margin: '2rem auto',
}));

const Shop = () => {
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
            setProductsError(err.message);
            setProductsLoading(false);
         });
   }, []);

   return (
      <ShopWrapper>
         <Container maxWidth='lg'>
            {productsLoading ? (
               <h2>Loading ...</h2>
            ) : productsError ? (
               <h2>{productsError}</h2>
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
         </Container>
      </ShopWrapper>
   );
};

export default Shop;
