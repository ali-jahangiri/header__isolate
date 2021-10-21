import React from 'react';
import { css } from "styled-components";
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`
    width: 150px;
    flex: 1 0 150px;
    max-width: 190px;
    border: 2px solid #5392FF90;
    user-select: none;
    transition : .3s;
    margin: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    cursor : pointer;
    padding: 1rem;
    text-align: right;

    img {
        width: 80%;
    }
    
    p {
        margin : 0;
    }

    &:hover {
        border-color: #5392FF;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            margin: 0;
            margin-top: .5rem;
        }
    }

    @media (max-width : 480px) {
        flex-direction: row-reverse;

        img {
            width: 2.5rem;
        }
    }
`

export default WithStyled(style);