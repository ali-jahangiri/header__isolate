import React from 'react';
import { css } from 'styled-components';
import WithStyled from '../../../utils/HOC/WithStyled';


const style = () => css`
    height: 100vh;
    display: flex;
    position: relative;
    display: flex;
    /* align-items: center; */
    
    
    .mobileIntroduction {
        
        &__container {
            width: 80%;
            margin: 0 auto;
            display: flex;
             align-items: center;
            justify-content: space-between; 
        }


        &__background {
            display: flex;
            align-items: center;
            width : 100%;
            z-index: -5;
            position: absolute;
            left: 0;
            top: 0;

            div {
                &:first-child {
                    background-color: lightblue;
                    flex: 0.5;
                    height: 100vh;
                }
                
                &:last-child {
                    background-color: white;
                    flex: 1;
                    height: 100vh;
                }
            }
        }

        &__phoneFrame {
            height: 100%;
            width: 38%;
            display: flex;
            align-items: center;
            
            img {
                width : 100%;
                height: 80%;
                border: 10px solid white;
                border-radius: 35px;
                transition: .3s;
                cursor: pointer;
                
                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 30px -15px #8080808c;
                }

            }

        }

        &__body {
            width: 55%;
            height: 77%;
            display: flex;
            flex-direction: column;
            /* justify-content: space-between; */
        }

        &__title {
            font-size: 2.6rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }

        &__desc {
            margin-bottom: 1rem;

        }

        &__featureList {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            margin-top: auto;
        }

        &__featureBox {
            flex : 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.5rem;
            padding: 1rem .5rem;

            div {
                display: flex;
                padding: 1rem;
                margin: 1rem 0;


                img {
                    position: relative;
                    width: 2rem;
                    height: 2rem;
                }
            }


            &:not(&:last-child) {
                margin-right: 1rem;
            }
        }

        &__prefix {
            color: grey;
        }

        &__actionContainer {
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__cta {
            background-color: grey;
            border: none;
            font-weight: 500;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 1rem;
            border-radius: 0;
        }


        @media(max-width : 992px) {
            &__background {
                display: none;
            }

            &__container {
                flex-direction: column;
                width: 100%;
            }

            &__body {
                width: 80%;
            }
        }
    }
`


export default WithStyled(style);