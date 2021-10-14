import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`
    margin-top: 1rem;

    .blockSelect {
        &__itemContainer {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            
        }
    }
`


export default WithStyled(style);