
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SliderTwo from './Components/slider2/SliderTwo';

import "./reset.css";


const App = () => (
  <div style={{ margin : "10rem 0" }}>
    <SliderTwo />
  </div>
)

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App}  />      
    </BrowserRouter>,
  document.getElementById('root')
);
