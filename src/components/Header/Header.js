import { Container } from '@mui/material';
import { Box, styled } from '@mui/system';
import logo from '../../images/Logo.svg';

const HeaderWrapper = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.primary.main,
}));
const Flex = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   height: '80px',
}));

const Menu = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   '& a': {
      color: theme.palette.common.white,
      marginLeft: '20px',
      textDecoration: 'none',
      fontSize: '17px',
      fontWeight: 'bold',
      '&:hover': {
         color: theme.palette.secondary.main,
         transition: 'color 0.2s ease-in-out',
      },
   },
}));

const Header = () => {
   return (
      <HeaderWrapper>
         <Container maxWidth='lg'>
            <Flex>
               <img src={logo} alt='logo' />
               <Menu>
                  <a href='/'>Home</a>
                  <a href='/order'>Order</a>
                  <a href='/order-review'>Order Review</a>
                  <a href='/manage-inventory'>Manage Inventory</a>
               </Menu>
            </Flex>
         </Container>
      </HeaderWrapper>
   );
};

export default Header;
