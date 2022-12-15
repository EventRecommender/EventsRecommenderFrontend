import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Login from './Pages/Loginpage2';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Student2 from './Pages/Student2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);