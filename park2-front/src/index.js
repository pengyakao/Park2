import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/commons/header/Header'
import Home from './components/pages/home/Home'
import Footer from './components/commons/footer/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Header />
    <Home />
    <Footer />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
