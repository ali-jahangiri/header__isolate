import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = ({ get }) => css`

    width: 49%;
    font-size: 1rem;
    border-radius: 5px;
    border: 2px solid ${get("primaryColor") + 80};
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 45%;
    margin: .3rem;
    
    
    
    button {
        transition: .3s;
        cursor: pointer;
        user-select: none;
        padding: 1.2rem;
        background-color: ${get("primaryColor") + 30};
        border: none;
        width: 100%;
        height: 100%;

        p {
            margin: 0;
        }

        
        &:hover {
            background-color: ${get("primaryColor") + 50};
        }

        &:active {
            background-color: ${get("primaryColor") + 60};
        }
    }

    

    ${({ isSelected }) => isSelected && css`
        button {
            background-color: ${get("primaryColor") + 70};

            &:hover {
                background-color: ${get("primaryColor") + 65};
            }
        }
    `};
`


export default WithStyled(style);