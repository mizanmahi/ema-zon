import { ThemeProvider } from '@mui/system';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { theme } from './theme/theme';

function App() {
   

   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <Header  />
            <Shop />
            <Cart />
         </div>
      </ThemeProvider>
   );
}

export default App;
