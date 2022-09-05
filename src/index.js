import { PreLoading } from './components/pre-loading';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PreLoading loading={
    <React.StrictMode>
      <App />
    </React.StrictMode>
  } />
);