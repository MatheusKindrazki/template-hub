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

  .Toastify__toast{
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

`;
