import { css } from "styled-components";
import WithStyled from "../../../utils/HOC/withStyled";

const style = ({ get , check }) =>  css`
    
    & > div {
        flex-direction: ${check("sliderDirection") ? get("sliderDirection") === "leftToRight" && "row-reverse" : "row"};
    }

    @media (max-width : 992px) {
        flex-direction: column-reverse !important;
        .groupSlider__gap {
            width: 100%;
            &:first-child {
                width: 100% !important;
                flex-direction: row !important;
            }

        }
        .groupSlider__column {
            width : 100% !important;
            width: 100%;
            &:first-child {
                margin-top: 1rem;
            }
        }


        .groupSlider__controller {
            & > div {
            height: 5rem !important;
            width: 5rem !important;
            top: -50%;
            left: 0;
            transform: translateY(-50%);
            /* disable hover effect in mobile view */
                &:hover {
                    transform: translate(0 , -50%) !important;
                }
            }
        }
    }
    /* @media (max-width : ) {
        .groupSlider__slide {
            img {
                height: auto !important;
            }
        }
    } */
    .groupSlider {
        &__container {
            height: 500px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }
        &__singleColumn {
        display: flex;

        flex-direction : column;
        width: 100%;
        .groupSlider__container {
            height: auto !important;
        }
        .groupSlider__slide {
            img {
                height: auto !important;
            }
        }
        }
        &__column {
            height : 500px;
            /* small part */
            &:first-child {
                width : 40%;
                .slick-list {height: 100%;}
                .groupSlider__gap {
                    display : flex;
                    flex-direction : column;
                    height : 100%;
                    justify-content: space-between;
                    .groupSlider__container {
                        height : 49%;
                        .slick-slider {
                            height: 100%;
                        }
                    }
                }
                .groupSlider__slide {
                    
                    img {
                        height : 250px;
                    }
                }
            }
            
            /* big part */
            &:last-child {
                width : 60%;
                img {
                    height : 500px;
                }
            }
        }
        &__slideDots {
            bottom : 3%;
            z-index : 2000;
            li >  button {
                &::before {
                    color : ${check("dotColor") ? get("dotColor") : "white"}!important;
                    font-size: ${check("dotSize") ? get("dotSize" , "px") : "16px"};
                }
            }
        }
        &__gap {
            width : 98%;
            margin : 0 auto;
        }
        &__slide {
            img {
                min-height : 250px;
                width : 100%;
                height : 500px;
            }
        }

        &__controller {
            position : absolute;
            top : 50%;
            width: 97%;
            height: 0;
            left: 50%;
            z-index: 5000;
            transform: translate(-50% , -50%);
            display: flex;
            justify-content: space-between;
            div {
                width: 2rem;
                height: 2rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: .3s;

                &:hover {
                    svg {
                        fill: ${check("sliderControllerHoverColor") ? get("sliderControllerHoverColor") : "white"};
                    }
                    transform: translateX(3px);
                    &:first-child {
                        transform : translateX(-3px);
                    }
                }
                
            }
            svg {
                width: 1.6rem;
                transition: .3s;
                fill : ${check("sliderControllerColor") ? get("sliderControllerColor") : "white"}  ;
            }
        }
    }
    
`



export default WithStyled(style)