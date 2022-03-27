import { Container } from '@mui/material';
import { Box, styled } from '@mui/system';
import logo from '../../images/Logo.svg';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

const StyledBadge = styled(Badge)(({ theme }) => ({
   '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
   },
}));

const Header = ({ name }) => {
   return (
      <HeaderWrapper>
         <Container maxWidth='lg'>
            <Flex>
               <img src={logo} alt='logo' />
               <Menu>
                  <a href='/'>Home</a>
                  <a href='/manage-inventory'>Manage Inventory</a>
                  <a href='/order-review'>Order Review</a>
                  <IconButton aria-label='cart' color='secondary' sx={{ml: 1}}>
                     <StyledBadge badgeContent={4} color='secondary'>
                        <ShoppingCartIcon sx={{ fontSize: '30px' }} />
                     </StyledBadge>
                  </IconButton>
               </Menu>
            </Flex>
         </Container>
      </HeaderWrapper>
   );
};

export default Header;
