import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';

import { AppProvider } from './hooks/';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { GlobalStyles } from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
