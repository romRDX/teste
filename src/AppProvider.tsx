import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import HooksProvider from './hooks';

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <HooksProvider>
    {children}
    </HooksProvider>
  </Provider>
);

export default AppProvider;
