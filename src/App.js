import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from '../src/styles/global';

import Routes from './routes';
import Header from '../src/components/Header';

import store from './store';

function App() {
  return (
    <Provider  store={store}>    
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
