import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function CustomDrawer({
   children,
   open,
   onClose,
   anchor,
   drawerStyles,
}) {
   return (
      <React.Fragment>
         <Drawer anchor={anchor} open={open} onClose={onClose}>
            <Box
               sx={{
                  width: '420px',
                  maxWidth: '100%',
                  p: 2,
                  background: '#f3f3f3',
                  position: 'relative',
                  height: '100vh',
                  ...drawerStyles,
               }}
            >
               <IconButton
                  sx={{
                     position: 'absolute',
                     left: 1,
                     top: 1,
                     cursor: 'pointer',
                  }}
               >
                  <CloseIcon onClick={onClose} />
               </IconButton>
               {children}
            </Box>
         </Drawer>
      </React.Fragment>
   );
}
