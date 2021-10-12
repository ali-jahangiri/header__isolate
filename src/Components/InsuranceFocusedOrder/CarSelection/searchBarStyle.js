import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const style = () => css`
    width: calc(100% - 2rem);
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    border: 2px solid #5392FF80;
    transition: .3s;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 55;
    background-color: black;
    max-height: 10rem;
    opacity: 1;
    
    input {
        width: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 1.2rem;
        padding: .5rem;

    }

    div {
        display: flex;
        width: 3rem;
        align-items: center;
        justify-content: center;
        transform : .3s;
        border-right: 0px solid #5392FF;

        svg {
            transition : .3s;
            width: 1rem;
            height: 1rem;
            fill: #5392FF;
        }
    }

    ${({ isFocused }) => isFocused && css`
        border-color: #5392FF;

        div {
            background-color: #5392FF80;
            border-right-width: 2px;

            svg {
                transform: rotate(45deg);
            }
        }
    `};

    ${({getHide}) => getHide && css`
        max-height: 0;
        opacity: 0;
    `};
`


export default WithStyled(style);