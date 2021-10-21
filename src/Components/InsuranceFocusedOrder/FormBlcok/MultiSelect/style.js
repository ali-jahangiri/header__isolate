import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = () => css`
    width: 100%;
    margin-top: 2rem;
    
    ${({ haveList }) => haveList && css`
        .ant-select-search {
            height: 38px !important;
        }
    `};

    .ant-select {
        width: 100%;
        background-color: transparent;
    }
    .ant-select-selection {
        background-color: transparent;
        border: none;
        box-shadow : none;
        border-radius: 0;
        border-bottom: 2px solid #5392FF50;
        color: white;
        text-align: right;
        transition : .3s;
    }

    .ant-select-search {
        transition : .3s  !important;
    }

    .ant-select-selection__choice {
        border: 2px solid #5392FF;
        color: white;
        background-color: #5392FF50;
        height: 38px !important;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            margin: 0;
        }
    }

    .ant-select-selection__placeholder {
        font-size: 1rem;
    }

    .ant-select-selection__choice__remove {
        color: white;
        &:hover {
            color: white !important;
        }
    }

    & > .bottomDivider {
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
`


export default WithStyled(style);