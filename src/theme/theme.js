import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#1c2b35',
         light: '#2a414f',
         dark: '#0e161a',
      },
      secondary: {
         main: '#ff9900',
         light: '#995c00',
         dark: '#4c2e00',
      },
      common: {
         black: '#000',
         white: '#fff',
         transparent: 'transparent',
         lightGray: '#95A0A7',
      },
   },

   typography: {
      fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
   },
});
