import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root'))