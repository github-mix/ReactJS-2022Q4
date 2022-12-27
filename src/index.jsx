import './styles/base.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Showcase from './Showcase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const showcase = ReactDOM.createRoot(document.getElementById('showcase'));
showcase.render(<Showcase />);
