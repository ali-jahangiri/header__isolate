import React from 'react';
import { css, keyframes } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';


const style = ({ get }) => css`

    height: 0;
    overflow: hidden;
    opacity: 0;
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


    ${({ visible }) => visible && css`
        opacity: 1;
        height: 500px;
    `};
`


export default WithStyled(style);