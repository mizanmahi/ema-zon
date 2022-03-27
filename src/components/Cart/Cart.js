import { Button, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CartWrapper = styled(Box)(({ theme }) => ({
   width: '400px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   height: '100%',
}));

const CartButton = styled(Button)((props) => {
   return {
      width: '100%',
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'center',
      color: props.delete ? '' : props.theme.palette.primary.main,
      padding: '10px',
      fontSize: '18px',
   };
});

const Cart = ({ cart }) => {
   const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
   const totalItems = cart.length;
   const shippingCost = cart.reduce((acc, curr) => acc + curr.shipping, 0);
   const tax = (totalPrice * 0.1).toFixed(2);
   const total = (totalPrice + shippingCost + parseFloat(tax)).toFixed(2);

   console.log(cart);

   return (
      <CartWrapper>
         <Box>
            <Typography
               sx={{
                  fontSize: '25px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  mb: 5,
                  background: '#fff',
                  borderRadius: '5px',
                  padding: '10px',
               }}
            >
               Order Summery
            </Typography>
            <Stack spacing={3} direction='column'>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Selected Items: {totalItems}
               </Typography>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Total Price: ${totalPrice}
               </Typography>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Total Shipping Charge: ${shippingCost}
               </Typography>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Tax: ${tax}
               </Typography>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Grand Total: ${total}
               </Typography>
            </Stack>

            <CartButton
               endIcon={<ArrowForwardIcon />}
               color='secondary'
               variant='contained'
               sx={{
                  mb: 2,
                  mt: 5,
                  '&:hover': {
                     backgroundColor: 'secondary.main',
                  },
               }}
            >
               Review Order
            </CartButton>
            <CartButton
               endIcon={<DeleteIcon />}
               color='error'
               variant='outlined'
               delete={true}
            >
               Clear Cart
            </CartButton>
         </Box>
      </CartWrapper>
   );
};

export default Cart;
