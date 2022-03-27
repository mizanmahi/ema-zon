import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Loader = () => {
   return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
         <CircularProgress />
      </Box>
   );
};

export default Loader;
