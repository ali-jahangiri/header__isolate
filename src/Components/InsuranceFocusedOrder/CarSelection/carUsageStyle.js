import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const style = ({ get }) => css`
    width: 90%;
    margin: 0 auto;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    cursor : pointer;
    background-color: ${get("primaryColor") + 10};
    border-radius: 5px;
    border: 2px solid ${get("primaryColor") + 40};
    transition : .3s;
    margin-bottom: 1rem;
    user-select: none;

    &:hover {
        background-color: ${get("primaryColor") + 40};
    }

    ${({ isSelected }) => isSelected && css`
        background-color: ${get("primaryColor") + 60};
    `};

`



export default WithStyled(style);