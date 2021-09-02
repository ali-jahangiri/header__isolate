import React from 'react';
import ReactDOM from 'react-dom';
import "./reset.css";

import FullScreenSlider from './Components/FullScreenSlider/FullScreenSlider';


const App = () => (
          <FullScreenSlider />
)

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
