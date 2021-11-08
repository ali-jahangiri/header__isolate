import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../utils/HOC/WithStyled';

const style = () => css`
    .formGeneratorCustomUploader {
        width: 100% !important;
        height: 64px;
        background-color: white;
        border: 2px dashed #d3d3d37a !important;
        user-select: none;
        transition : .3s;


        &:hover {
            border-color: lightgrey !important;
        }


        .afterUploadContainer {
            color: #0080009c;

            img {
                width: 40px;;
                height: 40px;
                border: 2px solid #00800033;
                border-radius: 5px;
                margin-left: .5rem;
            }
        }

        span {
            div {
                display: flex;
                align-items: center;
                justify-content: center;


                .svgContainer {
                    background-color: #d3d3d333;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: .5rem;
                    margin-right: .5rem;


                    svg {
                        width: .9rem;
                        height: .9rem;
                        fill: grey;
                    }
                }
            }
        }

    }
`



export default WithStyled(style);
