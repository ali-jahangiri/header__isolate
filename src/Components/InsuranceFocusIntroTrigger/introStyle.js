import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';


const style = ({ get }) => css`

    height: 500px;
    overflow: hidden;
    opacity: 1;
    background-color: black;
    width: 90%;
    margin: 0 auto;
    color: white;
    transition: .3s;
    
    & > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }

    .intro {
        
        &__title {
            font-size: ${get("introInsNameFontSize")};
            font-weight: 500;
            text-align: center;
            margin: 0;
        }

        &__desc {
            font-size: ${get("introInsDescFontSize")};
            text-align: center;
            direction: rtl;
            width: 90%;
            margin: 0 auto;
        }

        &__cta {
            width: 70%;
            margin: 0 auto;
            margin-top: 2rem;
            border: none;
            cursor: pointer;
            padding: .7rem 0;
            background-color: ${get("primaryColor") + 50};
            border: 2px solid ${get("primaryColor")};
            border-radius: 5px;
            transition: .3s;
            
            &:hover {
                background-color: ${get("primaryColor")};
            }
        }
    }

    ${({ getHide }) => {
        return getHide && css`
        opacity: 0;
        height: 0; 
        `
    }};

    @media (max-width : 480px) {
        .intro {
            &__title {
                font-size: 2rem;
                font-weight: 600;
            }

            &__desc {
                padding: 1rem;
                font-size: 1.1rem;
            }

            &__cta {
                font-size: 1.1rem;
                width: 90%;
            }
        }
    }


`


export default WithStyled(style);