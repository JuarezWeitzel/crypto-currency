import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './styles/global.ts';
import { StyleSheetManager } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => !['profit', 'loss'].includes(prop)}>
      <GlobalStyle/>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
