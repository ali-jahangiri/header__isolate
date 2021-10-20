import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';

const animateStepper = keyframes`
    from {
        transform: translateY(110%);
    }

    to {
        transform: translateY(0);
    }

`

const style = () => css`
    width : 100%;
    height: 100%;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    .insFocus {
        
        &__container {
            width: 65%;
            margin: 0 auto;
            position: relative;
            flex: 1;
            overflow: hidden;
        }

        &__preventUserChangeValueAfterSubmitOverlay {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 55;
            width: 100%;
            height: 9999px;
            background-color: transparent;
        }

        &__stepper {
            width: 65%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding: 1rem 0;
            transform: translateY(110%);
            animation: ${animateStepper} .8s .3s forwards alternate;
            transition: .3s;

            &__overlay {
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                height: calc(100% - 1rem);
                z-index: 5;
                transform: translateY(-50%);
                background-color: #000000b8;
                transition: .3s;

                &--getHide {
                    opacity: 0;
                }
            }

            &__timeline {
                width: 75%;
                background-color: #192841;
                height: .2rem;
                border-radius: 10px;
                margin-right: auto;
                overflow: hidden;

                &__activePart {
                    transition: .3s;
                    width: 50%;
                    background-color: #5392FF;
                    height: 100%;
                }
            }

            &__controller {
                display: flex;
                width: 22%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                transition: .3s;
                overflow: hidden;

                button {
                    width: 45%;
                    background-color: #5392FF;
                    border: none;
                    cursor: pointer;
                    text-align: center;
                    padding: .5rem;
                    transition: .3s;
                    white-space: nowrap;

                    &:disabled {
                        opacity : 0.5;
                        cursor: default;
                    }

                }

            }

            &--submitted {
                .insFocus {
                    &__stepper {
                        &__controller {
                            width: 0 !important;
                            opacity: 0;
                        }

                        &__timeline {
                            width: 100%;
                        }
                    }
                }
            }

        }


        &__header {
            width : 80%;
            margin: 0 auto;
            padding: 1rem 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            &__controller {
                button {
                    height: 100%;
                    background-color: transparent;
                    padding: .5rem 1rem;
                    cursor: pointer;
                    border: none;
                    transition: .3s;

                    &:disabled {
                        opacity: .5;
                        cursor: default;
                        
                        &:hover {
                            color: white !important;
                        }
                    }

                    &:hover {
                        color: #5392FF;
                    }

                }
            }

            &__title {
                font-size: 1.5rem;
                font-weight : 900;
            }
        }
    }
`




export default WithStyled(style);