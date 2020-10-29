import React, { useCallback, useRef } from 'react';

import { useHistory } from 'react-router-dom';

import { Box, Button } from '@chakra-ui/core';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { User, Lock } from 'phosphor-react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Input } from '~/components/Form';

import getValidationErrors from '~/utils/getValidationErrors';
import example from '~/validators/example';

const Example: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      formRef.current?.setErrors({});

      try {
        await example.validate(data, {
          abortEarly: false,
        });

        history.push('/teste');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef?.current?.setErrors(errors);

          toast.error('Erro encontrado!');
        }
      }
    },
    [history],
  );

  return (
    <Box maxW="450px">
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

        <Button
          mt="3"
          w="100%"
          type="submit"
          variant="solid"
          variantColor="blue"
        >
          Entrar
        </Button>
      </Form>
    </Box>
  );
};

export default Example;
