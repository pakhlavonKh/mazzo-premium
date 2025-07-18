import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n.js';
import './css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BasketProvider } from './context/BasketContext';
import ScrollToTop from './components/ScrollToTop.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <ScrollToTop />
    <BasketProvider>
      
      <App />
      </BasketProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
