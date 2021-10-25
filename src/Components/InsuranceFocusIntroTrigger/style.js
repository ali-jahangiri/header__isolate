import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';


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
        overflow: hidden;
        transition: .4s .5s;


        &--visible {
            top: 0 !important;
            left: 0 !important;
            height: 100vh !important;
            width : 100vw !important;
        }
    }
    
`



export default WithStyled(style);