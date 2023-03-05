import './scss/style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const CONTAINER = document.getElementById('root') as HTMLElement;
const ROOT = createRoot(CONTAINER);
ROOT.render(<App />);
