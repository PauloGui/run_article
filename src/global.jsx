import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Maven Pro';
  }

  :root {
    --color-base: #1675AA;
  }
`;
