import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Catalog from './view/pages/catalog';
import Navbar from './view/components/navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Catalog/>
  </React.StrictMode>
);

reportWebVitals();
