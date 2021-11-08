import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';

const style = () => css`
    display: flex;
    justify-content: space-between;


    input {
        display: none;
        
    }


    .switchItem {
        text-align: center;
        user-select: none;
        border-radius: 5px;
        border: 1px solid lightgrey;
        margin: -2px 0;
        width: 49%;
        cursor : pointer;
        transition : .3s;
        position: relative;
        background-color: white;

        p {
            margin: 0;
        }

        &:hover {
            background-color: lightgrey;
            border-color: grey;
        }

        &--selected {
            background-color: #b3b3b3;
            border-color: grey;

            &:hover {
                background-color: #b3b3b3;  
            }
        }
    }


    .switchFlasher {
        width : 2rem;
        height: 2rem;
        border-radius: 50%;
        position: absolute;
        background-color: #00800057;
        left: 50%;
        top: 50%;
        transform: translate(-50% , -50%);
        z-index: -5;
        transition : .3s;
        opacity: 0;

        svg {
            width: 1rem;
            height: 1rem;
            fill: green;
        }

        &--show {
            top: -80%;
            opacity : 1;
        }
    }


    
`

export default WithStyled(style);