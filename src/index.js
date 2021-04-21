
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SixEdgePolygon from './Components/sixEdgePolygon/sixEdgePolygon';


import "./reset.css";


const App = () => (
  <SixEdgePolygon />
)

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App}  />      
    </BrowserRouter>,
  document.getElementById('root')
);
