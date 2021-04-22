
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import VerticalSlider from './Components/verticalSlider/VerticalSlider';

import "./reset.css";

const App = () => (
  <div style={{ margin : "10rem 0" }}>
    <VerticalSlider />
  </div>
)

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App}  />      
    </BrowserRouter>,
  document.getElementById('root')
);
