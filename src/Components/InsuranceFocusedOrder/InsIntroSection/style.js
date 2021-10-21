import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';

const initialAnime = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const getHideAnime = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const style = () => css`
    height: 50vh;
    width: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    animation: ${initialAnime} .4s .2s forwards alternate;
    transition: .5s;
    position: relative;
    z-index: 555;


    .insIntroSection {

        &__title {
            font-size: 3.5rem;
            font-weight: 500;
            text-align: center;
            margin-bottom: 1rem;

            p {
                margin: 0;
            }
        }

        &__desc {
            opacity: 0;
            animation: ${initialAnime} .4s .4s forwards alternate;  
            text-align: center;
            direction: rtl;
            font-size: 1rem;
        }

        &__cta {
            width: 70%;
            margin: 0 auto;
            opacity: 0;
            animation: ${initialAnime} .4s .6s forwards alternate;  
            margin-top: 2rem;

            button {
                width: 100%;
                border: none;
                cursor: pointer;
                padding: .7rem 0;
                background-color: #5392FF50;
                border: 2px solid #5392FF;
                border-radius: 5px;
                transition: .3s;
                
                &:hover {
                    background-color: #5392FF80;
                }
            }
        }
    }

    ${({ submitted }) => submitted && css`
        height: 40vh;
    `};


    ${({shouldGetHide}) => shouldGetHide && css`
        overflow: hidden;
        height: 0;
        animation: ${getHideAnime} .3s forwards alternate;;
    `};

    @media (max-width : 480px) {
        width: 85%;
        height: 100vh;
        
        .insIntroSection {

            &__title {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }

            &__desc {
                font-size: 1rem;
            }

            &__cta {
                width: 100%;
            }
        }
    }
`


export default WithStyled(style);