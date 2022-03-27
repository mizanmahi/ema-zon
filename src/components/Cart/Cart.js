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
   console.log(props);
   return {
      width: '100%',
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'center',
      color: props.delete ? '' : props.theme.palette.primary.main,
   };
});

const Cart = ({ persons }) => {
   return (
      <CartWrapper>
         <Box>
            <Typography
               sx={{
                  fontSize: '25px',
                  textAlign: 'center',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 5,
               }}
            >
               Order Summery
            </Typography>
            <Stack spacing={3} direction='column'>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Selected Items:
               </Typography>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Tax: $114
               </Typography>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Total Shipping Charge: $5
               </Typography>
               <Typography sx={{ fontSize: '18px', color: 'primary.main' }}>
                  Grand Total: $1559
               </Typography>
            </Stack>

            <CartButton
               endIcon={<ArrowForwardIcon />}
               color='secondary'
               variant='contained'
               sx={{ mb: 2, mt: 5 }}
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
