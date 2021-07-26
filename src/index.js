import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router/>
   
  </React.StrictMode>,
  document.getElementById('root')
);