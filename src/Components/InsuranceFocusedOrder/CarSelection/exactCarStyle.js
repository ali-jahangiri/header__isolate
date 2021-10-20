import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const initialAnimation = keyframes`
    from {
        opacity: 0;
    }
    
    to {
        opacity: 1;
    }
`


const carUsageAnime = keyframes`
    from {
        max-height : 0px;
        opacity: 0;
    }
    to {
        max-height: 100rem;
        opacity: 1;
    }
`

const style = () => css`
    flex: 1 0 150px;
    transition : .3s;

    & > div {
        position: relative;
        background-color: #5392FF30;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #5392FF;
        border-radius: 5px;
        margin: .5rem;
        min-height: 4rem;
        max-height: 4rem;
        transition : .3s;
        opacity: 0;
        animation: ${initialAnimation} .3s forwards alternate;
        
        &:hover {
            background-color: #5392FF50;
        }
        
        p {
            margin: 0;
        }
    }
    
    .exactCarSelection {
        
        &__carNameContainer {
            cursor: pointer;
            width: 100%;
            height: 4rem;
            text-align: center;
            user-select: none;
            position: absolute;
            left: 0;
            top: 0;


            p {
                width: fit-content;
                transition : .3s;
                left: 50%;
                top: 50%;
                transform: translate(-50% , -50%);
                /* transform: translate(-120% , -50%); */
                position: absolute;
            }
        }
        
        &__carTypeContainer {
            margin-top: 4rem;
            width: 100%;
            max-height: 0;
            opacity: 0;
            animation: ${carUsageAnime} .6s .9s forwards alternate;
        }


        &__carNameChangeTrigger {
            position: absolute;
            left: 5%;
            top: 1.5rem;
            z-index: 55;
            opacity: 0;
            animation: ${initialAnimation} .5s .3s forwards alternate;

            p {
                cursor: pointer;
                transition: .3s;
            }

        }

    }

    

    ${({isSelected}) => isSelected && css`
        width: 100%;
        & > div {
            margin: 0;
            max-height: 100rem;

            &:hover {
                background-color: #5392FF30 !important;
            }
        }

        .exactCarSelection {

            &__carNameContainer {
                cursor: default;
                p {
                    transition : all .3s , left .3s .5s;
                    left: 95%;
                    font-size: 1.2rem;
                    transform: translate(-100% , -50%);
                }
            }
        }
    `};

    
    ${({ isDisabled }) => isDisabled && css`
        flex: 0 0 0;
        overflow: hidden;
        opacity: 0;

    `};


`


export default WithStyled(style);