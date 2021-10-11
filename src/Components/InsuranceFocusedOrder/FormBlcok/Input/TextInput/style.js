import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../../utils/HOC/WithStyled';

const style = () => css`
    input {
        transition: .3s;
    }
`



export default WithStyled(style);