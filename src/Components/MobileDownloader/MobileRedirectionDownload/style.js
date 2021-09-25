import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const animateSvg = keyframes`
    from {
        transform : rotate(0deg);
    }
    to {
        transform : rotate(360deg);
    }
`;

const style = () => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > div {
        background-color: lightblue;
        width: 96%;
        height: 95%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    svg {
        width: 2rem;
        height: 2rem;
        margin-bottom: 1rem;
    }

    .rotateIcon {
        animation: ${animateSvg} 5s infinite linear;
    }

    .redirectionTextContainer {
        display: flex;
        flex-direction: row-reverse;
    }
`


export default WithStyled(style);