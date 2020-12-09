import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  body {
    -webkit-font-smoothing: antialiased;
    overflow: initial;
  }

  button {
    cursor: pointer;
    box-shadow: none;
  }
`;
