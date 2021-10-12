import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`
    width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem;
    cursor : pointer;
    padding: 1rem;
    border-radius: 5px;
    border: 2px solid #5392FF90;
    transition : .3s;
    user-select: none;
    margin-top: 0;
    flex: 1 0 150px;
    max-width: 190px;
    
    &:hover {
        opacity: 1 !important;
    }

    img {
        width: 80%;
    }

    p {
        margin: 0;
        margin-top: 1rem;
    }

    &:hover {
        border-color: #5392FF;
    }

    /* ${({ isSelected }) => isSelected ? css`
        background-color: #5392FF80;
        font-weight: 900;
        opacity: 1 !important;
    ` : isSelected === false && css`
            opacity: 0;
            max-width: 0;
            flex: 0 0 0;
            padding: 0;
            margin: 0;
            overflow: hidden;
            border-width: 0;
    ` } */
`


export default WithStyled(style)