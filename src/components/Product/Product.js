import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductWrapper = styled(Box)(({ theme }) => ({
   width: '300px',
   height: '500px',
   boxSizing: 'border-box',
   borderRadius: '.5rem',
   border: `1px solid ${theme.palette.common.lightGray}`,
   padding: theme.spacing(1),
   position: 'relative',
   overflow: 'hidden',
   '& img': {
      width: '286px',
      maxWidth: '100%',
      height: '286px',
      borderRadius: '.5rem',
      margin: '0 auto',
      display: 'block',
   },
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
   backgroundColor: '#FFE0B3',
   position: 'absolute',
   bottom: '0',
   left: '0',
   borderRadius: '0 0 .4rem .4rem',
   '&:hover': {
      backgroundColor: theme.palette.secondary.main,
   },
}));

const Product = ({ product }) => {
   const { name, img, seller, price, ratings } = product;
   return (
      <ProductWrapper>
         <img src={img} alt='' />
         <Typography variant='h6' sx={{ mt: 2, fontSize: '19px' }}>
            {name.length > 20 ? `${name.substring(0, 20)}...` : name}
         </Typography>
         <Typography variant='body1' sx={{}}>
            Price: ${price}
         </Typography>
         <Typography variant='body1' sx={{ mt: 3 }}>
            Manufacturer Address: ${seller}
         </Typography>
         <Typography variant='body1' sx={{}}>
            Rating: {ratings} stars
         </Typography>
         <AddToCartButton endIcon={<ShoppingCartIcon />} fullWidth>
            Add To Cart
         </AddToCartButton>
      </ProductWrapper>
   );
};

export default Product;
