// Index.js

import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import './pages/styles/index.css';
import './components/styles/navbar.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);