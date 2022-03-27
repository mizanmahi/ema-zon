import { ThemeProvider } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { theme } from './theme/theme';

function App() {
   // drawer state
   const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <Header setIsCartDrawerOpen={setIsCartDrawerOpen} />
            <Shop
               isCartDrawerOpen={isCartDrawerOpen}
               setIsCartDrawerOpen={setIsCartDrawerOpen}
            />
         </div>
      </ThemeProvider>
   );
}

export default App;
