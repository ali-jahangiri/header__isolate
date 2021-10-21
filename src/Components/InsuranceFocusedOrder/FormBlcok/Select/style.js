import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`
    position: relative;
    margin: 2rem 0;
    
    .customSelect {
        width: 100%;
        height: 34px;

        .ant-select-selection__rendered {
            margin: 0;
        }

        .ant-select-selection-selected-value {
            p {
                font-weight: 500;
                font-size: 1.1rem;
            }
        }

        .ant-select-selection__placeholder {
            font-size: 1rem;
            color: #f0f0f0 !important;
        }

        .ant-select-selection {
            background-color: transparent;
            border: none;
            box-shadow : none;
            height: 34px;
            border-radius: 0;
            border-bottom: 2px solid #5392FF50;
            color: white;
            text-align: right;
        }

        &__bottomDivider {
            position: absolute;
            left: 50%;
            bottom: 0;
            transition: .3s;
            height: 2px;
            background-color: #5392FF;
            width: 0;

            &--grow {
                width: 20px;
                transform: scaleX(200);
            }
        }
        
    }
`


export default WithStyled(style);