import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const style = () => css`
    color: white;
    width: 95%;
    margin: 0 auto;
    height: 5rem;
    text-align: center;
    font-size: 1.2rem;
    margin-top: 1rem;
    border-radius: 5px ;
    color: #5392FF;
    background: #5392FF30;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
        margin: 0;
    }
`

export default WithStyled(style);