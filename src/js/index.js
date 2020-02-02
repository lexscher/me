// React
import React from 'react';
import Reactdom from 'react-dom';
// Import main app
import Me from './me';
// SCSS Styling
import '../sass/main.scss';

const root = document.getElementById('root');

Reactdom.render(<Me />, root);
