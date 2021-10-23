import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = ({ get }) => css`
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
    border: 2px solid ${get("primaryColor") + 90};
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
        border-color: ${get("primaryColor")};
    }

`


export default WithStyled(style)