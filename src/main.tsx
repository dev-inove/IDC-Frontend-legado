import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from '~/routes/index';
import GlobalStyles from '~/styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>
);
