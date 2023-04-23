// React
import React from 'react';
import { createRoot } from 'react-dom/client';
// Import main app
import Me from './me';
// SCSS Styling
import '../sass/main.scss';

const root = document.getElementById('root');

createRoot(root).render(<Me />);