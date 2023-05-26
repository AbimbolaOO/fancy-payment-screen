import { css, Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primaryBgColor: string;
      secondaryBgColor: string;
      tertiaryBgColor: string;
      primaryTextColor: string;
      secondaryTextColor: string;
      errorTextColor: string;
      inputFieldFocusColor: string;
      secondaryBorderColor: string;
      primaryBorderColor: string;
      primaryBtnBgColor: string;
      secondaryBtnBgColor: string;
      btnTextColor: string;
      timerTextColor: string;
      timerBgColor: string;
      logoTextColor: string;
    };
  }
}

export const theme: Theme = {
  palette: {
    primaryBgColor: '#FFFFFF',
    secondaryBgColor: '#015EFE',
    tertiaryBgColor: '#86b0cc',
    primaryTextColor: '#8b8b8c',
    secondaryTextColor: '#293155',
    errorTextColor: '#FF0000',
    inputFieldFocusColor: '#EBF3FE',
    primaryBorderColor: '#BEC4D5',
    secondaryBorderColor: '#015EFE',
    primaryBtnBgColor: '#015EFE',
    secondaryBtnBgColor: '#b3c1d9',
    btnTextColor: '#FFFFFF',
    timerTextColor: '#FFFFFF',
    timerBgColor: '#1D2A51',
    logoTextColor: '#1D2A51',
  },
};

const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    font-size: 1em;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: Arial, 'Work Sans', sans-serif;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
