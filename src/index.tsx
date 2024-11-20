import App from '@pages/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './wdyr';

import React from 'react';
import './styles/global.css';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
