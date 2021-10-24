import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../../utils/HOC/WithStyled';

const style = ({ get }) => css`
    width: 100%;
    
    .carGroupDirectory {
        
        &__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            transition: all .3s , height .5s;
            max-height: 5000px;


            &:hover {
                .carGroupItem {
                    opacity: .7;
                }
            }


            &--hide {
                max-height: 0px;
                overflow: hidden;
                opacity: 0;
            }



            @media (max-width : 480px) {
                justify-content : center;
                padding-bottom: 2rem;
            }
        }


        &__overview {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 0;
            transition: .3s;
            overflow: hidden;
            opacity: 0;

            &__content {
                display: flex;
                align-items: center;
                font-size: 1.3rem;

                img {
                    width: 3rem;
                    height: 3rem;
                    
                }
                p {
                    margin: 0;
                    margin-right: 1rem;
                }
            }

            &__otherChoice {

                button {
                    border: 2px solid ${get("primaryColor")};
                    border-radius: 5px;
                    padding: .3rem 1rem;
                    background-color: ${get("primaryColor") + 50};
                    cursor: pointer;
                    transition : .3s;

                    &:hover {
                        background-color: ${get("primaryColor") + 80};
                    }
                }
            }

            

            &--visible {
                transition-delay: .6s;
                height: 3rem;
                opacity: 1;
            }
        }
    }
`


export default WithStyled(style);
