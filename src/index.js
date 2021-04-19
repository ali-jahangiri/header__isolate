
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Slider from './Components/slider/slider';

import "./reset.css";


const App = () => (
  <Slider />
)

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App}  />      
    </BrowserRouter>,
  document.getElementById('root')
);
