import React from 'react';

import Example from '~/pages/Example';

import { render, fireEvent, waitFor } from '../testing-library';

const mockHistory = jest.fn();

jest.mock('react-toastify', () => {
  return {
    error: jest.fn(),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistory,
    }),
  };
});

describe('Exemplo de teste', () => {
  it('Deve preencher as informações corretamente', async () => {
    const { getByTestId, getByText } = render(<Example />);

    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');

    const submitButton = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockHistory).toHaveBeenLastCalledWith('/teste');
    });
  });
});
