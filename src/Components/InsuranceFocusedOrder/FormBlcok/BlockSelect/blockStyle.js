import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`

    width: 49%;
    font-size: 1rem;
    border-radius: 5px;
    border: 2px solid #5392FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1% 0;
    
    
    
    button {
        transition: .3s;
        cursor: pointer;
        user-select: none;
        padding: 1.2rem;
        background-color: #5392FF20;
        border: none;
        width: 100%;
        height: 100%;

        p {
            margin: 0;
        }

        
        &:hover {
            background-color: #5392FF35;
        }

        &:active {
            background-color: #5392FF55;
        }
    }

    

    ${({ isSelected }) => isSelected && css`
        button {
            background-color: #5392FF75;
        }
    `};
`


export default WithStyled(style);