import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const style = () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
`

export default WithStyled(style);