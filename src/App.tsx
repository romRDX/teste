import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './AppProvider';

import GlobalStyle from './styles/global';

import * as categoryStore from './services/categoryStore';

// Creating categories in local storage
categoryStore.post();

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AppProvider>
       <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
