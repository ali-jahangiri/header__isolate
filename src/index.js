import React from 'react';
import 'antd/dist/antd.css';

import "./reset.css";
import dayjs from "dayjs"
import reactDom from 'react-dom';

import jalaliday from "jalaliday";
import App from './App';

dayjs.extend(jalaliday);



reactDom.render(<App />,document.getElementById('root'));
