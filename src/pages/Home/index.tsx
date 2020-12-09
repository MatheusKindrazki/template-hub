import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

import documentTitle from '~/utils/documentTitle';

import Example from '../Example';
import { Container } from './styles';

const Home: React.FC = () => {
  documentTitle('Home');

  return (
    <Box as={Container} p="4" margin="0 auto" maxW="450px">
      <Heading>Template Hub</Heading>

      <Text fontSize="xl" color="blue.500" mb="3">
        Exemplo de formulário
      </Text>

      <Example />
    </Box>
  );
};

export default Home;
