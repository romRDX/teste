import React from 'react';
import { ToastProvider } from './toast';

const HooksProvider: React.FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default HooksProvider;
