import styled, { keyframes } from "styled-components";
import withStyleWrapper from "../../HOC/withStyleWrapper";

const anime = keyframes`
    0% {
        transform : scale(1);
    }
    100% {
        transform : scale(0.5);
    }
`


const fadeIn = keyframes`
    from {transform : scale(0.5);}
    to {transform : scale(1);}
`

const imageFadeIn = keyframes`
    from {
        height : 40%;
    }
    to {
        height : 50%;
    }
`

const imageFadeOut = keyframes`
    from {
        height : 50%;
    }
    to {
        height : 35%;
    }
`

const VerticalSliderWrapper = ({ check , get }) => styled.div`
    position : relative;
    div {outline : none;}
    
    .slider {
        background-color : ${check("containerOfSliderBgColor") ? get("containerOfSliderBgColor") : "#212121"} ;
        &__controller {
            position: absolute;
            top : 50%;
            right : 2%;
            z-index : 500;
            transform : translateY(-50%);
            display: flex;
            flex-direction : column;
            svg {
                height : ${check("sliderControllerSize") ? get("sliderControllerSize") : "2rem"} ;
                width : ${check("sliderControllerSize") ? get("sliderControllerSize") : "2rem"} ;
                cursor: pointer;
                margin : 0.5rem 0;
                transition : 0.3s;
                fill : ${check("sliderControllerColor") ? get("sliderControllerColor") : '#626262'};
                &:hover  {
                    fill : ${check("sliderControllerHoverColor") ? get("sliderControllerHoverColor") : "grey"}
                }
            }
            &--next {
                transform : rotate(270deg);
                &:hover {transform : translateY(-30%)  rotate(270deg);}
            }
            &--prev {
                transform : rotate(90deg);
                &:hover {transform : translateY(30%)  rotate(90deg);}
            }
        }
        &__item {
            height : ${check("sliderHeight") ? get("sliderHeight") : "30rem"} ;
            background-color : ${check("containerOfSliderBgColor") ? get("containerOfSliderBgColor") : "#212121"};

             &--active {
                .slider__inner {
                    animation : ${fadeIn} 0.5s forwards alternate 1s;
                }
                .slider__outline {
                    opacity : 1;
                }
                .slider__img {
                    animation : ${imageFadeIn} 0.5s alternate forwards 1.5s;
                }
            }
            
            &--deActive {
                .slider__inner {
                    animation : ${anime} 0.5s forwards alternate;
                }
                .slider__img {
                    animation : ${imageFadeOut} 0.5s forwards alternate ;
                }
            } 
                
        }

        &__inner {
            position : relative;
            background-color : ${check("slideBgColor") ? get("slideBgColor") : "#c5cac5"} ;
            width : 100%;
            height : 100%;
            transition : 0.5s cubic-bezier(0.2, 0.3, 0.25, 0.9);
            transition-delay : 3s;
            display: flex;
            justify-content : center;
            align-items : center;   
            transform : scale(0.5);
            img {
                width : 50%;
                height : 50%;
            }
        }
        &__outline {
            width : 98%;
            height : 90%;
            display: block;
            border : ${check("sliderInnerBorderSize") ? get("sliderInnerBorderSize") : "1px"} solid ${check("sliderInnerBorderColor") ? get("sliderInnerBorderColor") : "black"};
            position : absolute;
            left : 50%;
            top : 50%;
            transform : translate(-50% , -50%);
            transition : 0.3s;
            transition-delay : 1s;
            opacity : 0;
        }

        &__text {
            position : absolute;
            left : 30%;
            top : 50%;
            transform : translate(-50% , -50%);
            z-index : 20;
            font-size : ${check("sliderFontSize") ? get("sliderFontSize") : "3.9rem"};
            color : ${check("sliderFontColor") ? get("sliderFontColor") : "white"} ;
            font-weight : bolder;
            overflow : hidden;
            p {
                transition : 0.3s;
                transition-delay : 0.3s;
                transform : translateY(0%);
            }

            &--hide {
                p {transform : translateY(100%);}
            }

            @media(max-width : 768px) {
                font-size : ${check("sliderFontSizeMobile") ? get("sliderFontSizeMobile") : "2.5rem"} ;
                left : 40%;
            }
        }


        &__img {
            width : ${check("sliderImageSize") ? get("sliderImageSize") : "80%"} ;
            height : 40%;
            background-size : cover;
            background-position : center;
            background-repeat : no-repeat;
            transition : 0.3s;
        }
    }
`

export default withStyleWrapper(VerticalSliderWrapper);