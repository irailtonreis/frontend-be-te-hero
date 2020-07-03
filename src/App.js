import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './global';
import Header from './components/Nav';
import Routes from './routes';

function App() {
  
  return (
           <BrowserRouter>
            <Header/>
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
            <Routes />
           </BrowserRouter>
  );
}
 
export default App;
