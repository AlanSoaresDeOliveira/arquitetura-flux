import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from '../src/styles/global';

import Routes from './routes';
import Header from '../src/components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
