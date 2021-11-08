import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';


const descAnime = keyframes`
    from {
        transform : translateX(100%);
        opacity : 0
    }
    to {
        transform : translateX(0);
        opacity : 1
    }
`

const style = () => css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

    .formGroupHeader {
        &__details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            p {
                text-align: right;
                margin: 0;

                &:first-child {
                    font-size: 1.5rem;
                    font-weight: 900;
                    animation: ${descAnime} .8s forwards alternate cubic-bezier(0.645, 0.045, 0.355, 1);
                }

                &:last-child {
                    color: grey;
                    animation: ${descAnime} .8s .1s forwards alternate cubic-bezier(0.645, 0.045, 0.355, 1);
                    opacity : 0;
                }
            }
        }

        &__icon {
            border-radius: 5px;
            background-color: lightgrey;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 1rem;
            img {

            }
        }
    }

`


export default WithStyled(style);