import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';

const getFullScreen = keyframes`
    to {
        top: 0;
        left: 0;
        height: 100vh;
        width : 100vw;
    }
`


const style = () => css`
    width: 95%;
    height: 500px;
    border-radius: 5px;
    margin: 0 auto;

    .insFocus__portal {
        position: fixed;
        width: 90%;
        z-index: 999;
        height: 500px;
        animation: ${getFullScreen} .4s .5s forwards alternate cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }
    
`



export default WithStyled(style);