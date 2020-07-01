import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './global.css';
import Header from './components/Nav';
import Routes from './routes';

function App() {
  
  return (
           <BrowserRouter>
            <Header/>
            <Routes />
           </BrowserRouter>
  );
}
 
export default App;
