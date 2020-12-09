import React from 'react';

import { Box } from '@chakra-ui/react';

const Dashboard: React.FC = ({ children }) => {
  return (
    <Box
      w="100%"
      h="100vh"
      d="flex"
      justifyContent="center"
      flexDirection="column"
      backgroundColor="blue.50"
    >
      {children}
    </Box>
  );
};

export default Dashboard;
