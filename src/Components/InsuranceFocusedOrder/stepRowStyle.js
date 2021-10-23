import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';

const style = ({ get }) => css`
    position: relative;
    transition: .3s;
    opacity: .3;
    


    &:not(&:first-child) {
        margin: 6rem 0;
        padding-top: 4rem;

    }


    .stepRow {

        &__preventUserInteract {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            z-index: 2;

            @media (max-width : 480px) {
                display: none;
            }

        }



        &__mainContent {
            max-height: 65vh;
            overflow: hidden;
            overflow-y: scroll;
            margin-top: 1rem;
            position: relative;

            &__scrollOverlayHelper {
                width: 100%;
                height: 0rem;
                background: linear-gradient(180deg, #000000c4, transparent);
                position: sticky;
                left: 0;
                top: 0;
                opacity: 0;
                transition: .22s;
                z-index: 55;
                
                &--visible {
                    height: 3rem;
                    opacity: 1;
                }
            }

            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background: transparent;
            }

            ::-webkit-scrollbar-thumb {
                background: ${get("primaryColor") + 50};
                border-radius: 3px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: ${get("primaryColor")};
            }
        }


        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width : 480px) {
            }

            & > div {
                @media (max-width : 480px) {
                    flex-direction: column-reverse;

                    .stepRow__header__index {
                        align-self: flex-end;
                    }
                }
            }

            p {
                margin: 0;
            }
            
            &__label {
                font-size: 1.5rem;
                text-align: right;
            }

            &__help {
                cursor : pointer;
                

                &__content {
                    max-width: 450px;
                    background-color: red;
                }

                & div {
                    position: relative;
                    padding: .5rem 1rem;
                    background-color: #2e2e2e;

                    span {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 0;
                        height: 2px;
                        background-color: ${get("primaryColor")};
                        transition: .3s .3s;

                        &:last-child {
                            background-color: ${get("primaryColor")};
                            top: 100%;
                            width: 0;
                            left: 100%;
                            transform: rotate(180deg);
                            transform-origin: top left;
                            transition-delay: .9s;
                        }
                    }

                    &::after , &::before {
                        position : absolute;
                        left: 0;
                        bottom : 0;
                        content: "";
                        height: 0;
                        transition: .3s;
                        width: 2px;
                        background-color: ${get("primaryColor")};

                    }

                    &::before {
                        top: 0 !important;
                        left: 100% !important;
                        transition-delay: .6s;
                    }
                }

                &:hover {
                    & div {
                        span {
                            width: 100%;
                        }
                        &::after, &::before {
                            height: 100%;
                        }
                    }
                }
            }

            &__index {
                font-size: 1.2rem;
                /* primary */
                color: ${get("primaryColor")};
                display: flex;
                align-items: center;

                div {
                    display: flex;
                    align-items: center;
                    margin: 0 .5rem 0 .7rem;
                    
                    svg {
                        width: 1.2rem;
                        height: 1.2rem;
                        /* primary */
                        fill: ${get("primaryColor")};
                    }
                }

            }
        }
    }

    ${({isActive}) => isActive && css`
        opacity: 1;
    `};


    @media (max-width : 480px) {
        max-height: 100vh;
        height: 100vh;

        .stepRow {
            &__header {
                padding-top: 30%;

                &__help {
                    margin-right: .5rem;
                }
            }

        }
    }
`


export default WithStyled(style);