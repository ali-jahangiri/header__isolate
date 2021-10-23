import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../../utils/HOC/WithStyled';

const style = ({ get }) => css`
    width: 100%;
    margin: 2rem auto;
    display: flex;

    .numberInput {
        
        &__btn {
            width: 15%;

            button {
                user-select: none;
                width: 100%;
                font-size: 1.5rem;
                background-color: transparent;
                border: 2px solid ${get("primaryColor") + 95};
                border-radius: 5px;
                cursor: pointer;
                height: 100%;
                transition : .25s;
                
                &:hover {
                    border-color: ${get("primaryColor")};
                }

                
                &:focus {
                    background-color: ${get("primaryColor") + 50};
                }

                &:disabled {
                    opacity: .5;
                    cursor: default;

                    &:hover {
                        border-color: ${get("primaryColor") +95};
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
                border-top: 2px solid ${get("primaryColor") + 50};
                border-bottom: 2px solid ${get("primaryColor") + 50};
                font-weight: 900;
                font-size: 1.5rem;
                padding: .4rem 0;
                transition: .3s;
                letter-spacing: 2px;


                &:focus {
                    background-color: ${get("primaryColor") + 20};
                }
            }


            &--haveValue {
                input {
                    background-color: ${get("primaryColor") + 30}
                }
            }

            &--invalidForced {
                input {
                    background-color: #ff000030;
                    border-color: #ff000035;
                }
            }


        }
    }
`


export default WithStyled(style);