import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// context providers
import { ApplicationContextProvider } from './context/ApplicationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <App />
    </ApplicationContextProvider>
  </React.StrictMode>
);
