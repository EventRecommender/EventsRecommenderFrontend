import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './Student';
import Login from './Loginpage';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Login/>
  </React.StrictMode>
);