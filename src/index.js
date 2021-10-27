// Index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Routes from "./Routes";

import './styles/index.css';
import './styles/navbar.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);