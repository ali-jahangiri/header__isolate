import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';

const style = () => css`
    width: 100%;
    text-align: center;

    button {
        width: calc(100% - 2rem);
        font-weight: 800;
        font-size: 1rem;
        border-radius: 5px;
        margin: 0 1rem;
        padding: 1rem;
        border: none;
        outline: none;
        cursor : pointer;
    }
`



export default WithStyled(style);