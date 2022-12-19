import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import OuterLayer from './Components/OuterLayer/OuterLayer';
import AuthRouter from './Components/AuthRouter/AuthRouter';
import AuthLayer from './Components/AuthLayer/AuthLayer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CreateUser from './Pages/CreateUser';
import NotFound from './Pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<OuterLayer />} >
        <Route element={<AuthRouter />}>
          <Route element={<AuthLayer />}>
            <Route index path='/home' element={<Home />} />
          </Route>
        </Route>
        <Route path='/' element={<Login />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);