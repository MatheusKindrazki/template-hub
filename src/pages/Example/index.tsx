import React, { useCallback, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { User, Lock } from 'phosphor-react';
import * as Yup from 'yup';

import { Input } from '~/components/Form';

import getValidationErrors from '~/utils/getValidationErrors';
import example from '~/validators/example';

const Example: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    formRef.current?.setErrors({});

    try {
      await example.validate(data, {
        abortEarly: false,
      });

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef?.current?.setErrors(errors);

        console.error('Erro encontrado!'); // eslint-disable-line
      }
    }
  }, []);

  return (
    <Box p="4" margin="0 auto" maxW="450px">
      <Heading>Template Hub</Heading>

      <Text fontSize="xl" color="blue.500" mb="3">
        Exemplo de formulário
      </Text>
      <Box maxW="450px" mb="20px">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            data-testid="email"
            placeholder="Digite seu e-mail"
            mb="5"
            iconLeft={<Box as={User} color="blue.500" size={18} />}
          />

          <Input
            name="password"
            data-testid="password"
            placeholder="Digite sua senha"
            iconLeft={<Box as={Lock} color="blue.500" size={18} />}
          />

          <Button mt="3" w="100%" type="submit" variant="solid">
            Entrar
          </Button>
        </Form>
      </Box>
      <Box as={Link} to="/dashboard" color="blue.500">
        voltar
      </Box>
    </Box>
  );
};

export default Example;
