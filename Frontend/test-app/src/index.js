import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import from 'react-dom/client'
import './index.css';
import App from './App';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create the root using ReactDOM.createRoot()
const root = ReactDOM.createRoot(rootElement);

// Use the root.render() method to render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
