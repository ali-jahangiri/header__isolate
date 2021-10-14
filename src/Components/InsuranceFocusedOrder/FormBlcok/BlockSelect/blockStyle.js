import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`
    /* flex: 1; */
    width: 49%;
    font-size: 1rem;
    border-radius: 5px;
    border: 2px solid #5392FF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    cursor: pointer;
    transition: .3s;
    background-color: #5392FF35;
    margin: 1% 0;

    &:hover {
        background-color: #5392FF55;
    }

    p {
        margin: 0;
    }

    ${({ isSelected }) => isSelected && css`
        background-color: #5392FF75;
    `};
`


export default WithStyled(style);