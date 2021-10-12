import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const initialAnimation = keyframes`
    from {
        opacity: 0;
    }
    
    to {
        opacity: 1;
    }
`

const style = () => css`
    flex: 1 0 150px;

    & > div {
        padding: 1rem;
        background-color: #5392FF30;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #5392FF;
        border-radius: 5px;
        margin: .5rem;
        height: 4rem;
        cursor: pointer;
        transition : .3s;
        text-align: right;
        opacity: 0;
        animation: ${initialAnimation} .3s forwards alternate;

        &:hover {
            background-color: #5392FF50;
        }

        p {
            margin: 0;
        }
    }


`


export default WithStyled(style);