import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { Global, ThemeProvider } from '@emotion/react';

import App from './App';
import GlobalStyles, { theme } from './globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </HelmetProvider>
);
