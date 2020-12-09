import React from 'react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import {
  render,
  RenderOptions,
  RenderResult,
  Queries,
} from '@testing-library/react';

import { theme as HubTheme } from '~/styles';

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={HubTheme}>
      <CSSReset /> {children}
    </ChakraProvider>
  );
};

export function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q>,
): RenderResult {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
}

export * from '@testing-library/react';

export { customRender as render };
