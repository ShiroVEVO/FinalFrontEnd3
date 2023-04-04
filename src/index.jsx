import React from 'react';
import ReactDOM from 'react-dom/client';
import APIContextProvider from './contexts/APIContext';
import ThemeContext from './contexts/ThemeContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <APIContextProvider>
        <App/>
      </APIContextProvider>
  </React.StrictMode>
);


