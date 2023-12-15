import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import MoodProvider from './context/MoodContext.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MoodProvider>
      <App />
    </MoodProvider>
  </BrowserRouter>
);
