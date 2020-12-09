import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { ChakraProvider } from '@chakra-ui/react';

import { store, persistor } from '~/store';
import { theme } from '~/styles';

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </PersistGate>
  </Provider>
);

export default AppProvider;
