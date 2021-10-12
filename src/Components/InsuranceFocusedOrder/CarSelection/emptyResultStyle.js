import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const style = () => css`
    color: white;
    width: 100%;
    height: 5rem;
    text-align: center;
    font-size: 1.2rem;
    margin-top: 1rem;
    border-radius: 5px ;
    border: 2px solid #5392FF40;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
        margin: 0;
    }
`

export default WithStyled(style);