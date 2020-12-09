import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from '~/store';
import { theme } from '~/styles';

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        style={{
          borderRadius: 8,
        }}
        limit={3}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ChakraProvider>
    </PersistGate>
  </Provider>
);

export default AppProvider;
