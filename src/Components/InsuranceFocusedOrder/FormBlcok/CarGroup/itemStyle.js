import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`
    width: 150px;
    flex: 1 0 150px;
    max-width: 190px;
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


    @media (max-width : 591px) {
        opacity: 1;
        flex-direction: row-reverse;
        width: 100%;
        align-items: center;
        margin: 0.5rem;
        min-width: 100%;
        flex: 1 0 100%;

        p {
            margin-top: 0;
        }

        img {
            width: 2.5rem;
        }
    }

`


export default WithStyled(style)