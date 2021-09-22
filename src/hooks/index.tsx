import React from 'react';

import { CartProvider } from './useCart';

export const AppProvider: React.FC = ({ children }) => (
  <CartProvider>
    {children}
  </CartProvider>
);


