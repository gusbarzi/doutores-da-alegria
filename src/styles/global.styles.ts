import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: 'Helvetica Neue', 'Arial', 'Sans-Serif';
    background-color: #fbfbfb;
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;