import 'styled-components';

interface Colors {
  main: string;
  text: string;
  disabled?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      sm: string;
      md: string;
    };
    colors: {
      common: {
        black: string;
        white: string;
        offWhite: string;
        grey: string;
        greyDarker: string;
        greyDarkest: string;
        danger: string;
      };
      primary: Colors;
      // secondary: Colors;
    };
  }
}
