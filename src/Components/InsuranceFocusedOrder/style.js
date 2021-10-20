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

        &__mobileHeader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            transition: .3s .3s;
            border-bottom: 3px solid transparent;
            overflow: hidden;
            background: black;
            z-index: 9999;

            
            &__controller {
                button {
                    background: #5392ff30;
                    padding: .5rem 1rem;
                    border: 2px solid #5392ff50;
                    border-radius: 5px;
                }
            }
            
            &__container {
                padding: 0 1rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: linear-gradient(0deg, #5392ff50, #5392FF20);
                
            }

            &__details {
                font-weight: 600;
                font-size: 1.1rem;
                opacity: 0;
                transition: .3s .5s;

                p {
                    margin: 0;
                }
            }

            &--active {
                height: 15vh;
                border-color: #5392FF;
            
                .insFocus {
                    &__mobileHeader {
                        &__details {
                            opacity: 1;
                        }
                    }
                }
            }
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

    @media (max-width : 480px) {
        .insFocus {
            &__container {
                width: 90%;
            }

            &__stepper {
                position: fixed;
                width: 100%;
                flex-direction: column-reverse;
                bottom: 0;
                left: 0;
                background: linear-gradient(0deg, black, transparent);

                &__timeline {
                    width: 90%;
                    margin: 0 auto;
                }

                &__controller {
                    width: 90%;
                    margin-bottom: 1rem;
                    button {
                        padding: .8rem 0;
                    }
                }
            }
        }
    }
`




export default WithStyled(style);