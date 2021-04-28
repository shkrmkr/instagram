import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.common.offWhite};
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
