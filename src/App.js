import { ThemeProvider } from '@mui/system';
import './App.css';
import Header from './components/Header/Header';
import { theme } from './theme/theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <Header />
         </div>
      </ThemeProvider>
   );
}

export default App;
