
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PolygonSection from './Components/PolygonSection/PolygonSection';

import "./reset.css";


const App = () => (
  <PolygonSection />
)

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App}  />      
    </BrowserRouter>,
  document.getElementById('root')
);
