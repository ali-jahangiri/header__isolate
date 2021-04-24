
import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import PolygonSection from './Components/PolygonSection';
import Header from "./Components/Header";

import "./reset.css";

const App = () => (
  <Header />
)

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App}  />      
    </BrowserRouter>,
  document.getElementById('root')
);
