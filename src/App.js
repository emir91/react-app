import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App = () =>  {
  return (
    <BrowserRouter>
      <AppHeader />
        <p>Naslov</p>
        <p>Tekst</p>
      <AppFooter />
    </BrowserRouter>
  );
}

export default App;
