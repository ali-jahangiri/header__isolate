import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../../utils/HOC/WithStyled';

const style = () => css`
    width: 90%;
    margin: 2rem auto;
    display: flex;

    .numberInput {
        
        &__btn {
            width: 15%;

            button {
                width: 100%;
                font-size: 1.5rem;
                background-color: transparent;
                border: 2px solid #5392FF95;
                border-radius: 5px;
                cursor: pointer;
                height: 100%;
                transition : .25s;
                
                &:hover {
                    border-color: #5392FF;
                }

                &:focus {
                    background-color: #5392FF50;
                }

                &:disabled {
                    opacity: .5;
                    cursor: default;

                    &:hover {
                        border-color: #5392FF95;
                    }
                }
            }

        }

        &__input {
            width: 70%;

            input {
                width: 100%;
                background-color: transparent;
                height: 100%;
                text-align: center;
                outline: none;
                border: none;
                border-top: 2px solid #5392FF50;
                border-bottom: 2px solid #5392FF50;
                font-weight: 900;
                font-size: 1.5rem;
                padding: .4rem 0;
                transition: .3s;
                letter-spacing: 2px;

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                -moz-appearance: textfield;
                


                &:focus {
                    background-color: #5392FF50;
                }
            }
        }
    }
`


export default WithStyled(style);