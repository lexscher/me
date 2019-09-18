// React
import React from 'react';
import Reactdom from 'react-dom';
// React Router
import { BrowserRouter } from 'react-router-dom';
// Import main app
import Me from './me';
// SCSS Styling
import '../sass/main.scss';

Reactdom.render(
  <BrowserRouter>
    <Me />
  </BrowserRouter>,
  document.getElementById('root')
);
