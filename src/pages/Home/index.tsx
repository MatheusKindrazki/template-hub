import React, { useCallback } from 'react';

import { Box, Button } from '@chakra-ui/react';
import { toast } from 'react-toastify';

import Logo from '~/components/Logo';

import history from '~/services/history';
import documentTitle from '~/utils/documentTitle';

const Home: React.FC = () => {
  documentTitle('Home');

  const handleToast = useCallback(() => {
    toast.success('Toast disparado com sucesso =)');
  }, []);

  const handleRoute = useCallback(() => {
    history.push('/example');
  }, []);

  return (
    <Box p="4" margin="0 auto" maxW="500px">
      <Logo />
      <Box mt="3" w="100%">
        <Button
          onClick={() => handleToast()}
          type="button"
          colorScheme="blue"
          m="2"
        >
          Testar toast
        </Button>

        <Button
          onClick={() => handleRoute()}
          type="button"
          colorScheme="red"
          m="2"
        >
          Testar rotas
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
