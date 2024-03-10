import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyNav from './MyNav';
import MyFooter from './MyFooter'
import Welcome from './Welcome'
import AllTheBooks from './AllTheBooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import data from "./Books/fantasy.json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyNav />
    <Welcome />
    <AllTheBooks />
    <MyFooter />
  </React.StrictMode>
);
