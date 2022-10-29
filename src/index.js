import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Bigbox} from './function';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 className='head'>Styling using Functional and Class Components</h1>
    <Bigbox/>
  </>
);
