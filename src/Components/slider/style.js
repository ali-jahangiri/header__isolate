import { css } from "styled-components";
import withStyleWrapper from '../../HOC/withStyleWrapper';

const sliderStyle = ({ get , check }) => css`
    .slider {
        position: relative;
        &__item {
            height : 30rem;
            background-position : center;
            background-repeat : no-repeat;
            transition : background-size 0.6s;
            outline : none;
            
            @media(min-width : 700px) {
                background-size : 100%;
            }

            @media(max-width :700px ) {
                background-size : cover;
            }
            &--active {
                .slider__item__content {
                    top : -50%;
                }
                @media(min-width : 700px) {background-size : 110%;}
            }
            &__content {
                position: relative;
                width : 80%;
                height : 180%;
                top : 100%;
                background-color : ${ check("itemBgColor") ? get("itemBgColor") : "#ffa07ab0" } ;
                position: relative;
                display : flex;
                justify-content : start;
                align-items: center;
                clip-path: polygon(0 0, 50% 50%, 100% 100%, 0% 100%);
                transition : 0.3s;
                color : ${check("itemTextColor") ? get("itemTextColor") : "black"};
                font-size : ${check("itemTextFontSize") ? get("itemTextFontSize") : "1.1rem"};
                div {
                    width : 50%;
                    display: flex;
                    justify-content : center;
                    align-items : center;
                    flex-direction : column;
                    transform : translateY(100%);
                    a {
                        color : ${check("itemLinkColor") ? get("itemLinkColor") : "blue"};
                        text-decoration : none;
                        font-size : ${check("itemLinkFontSize") ? get("itemLinkFontSize") : "0.9rem"};
                    }
                }

                &:hover {
                    background-color : ${check("itemBgColorHover") ? get("itemBgColorHover") : "#ffa07ade"} ;
                    height : 170%;
                }


                @media(max-width : 350px) {
                    width : 125%;
                }
            }
        }

        &__overlay {
            width : 100%;
            height : 100%;
            position: absolute;
            display: block;
            z-index : 0;
            transition : 0.1s;
            background-color : transparent;
            opacity : 0;
            &--active {
                background-color : black;
                /* opacity : 0.5; */
            }
        }
        .slick-active {
            button {
                &::before {
                    color : ${check("activeDotColor") ? get("activeDotColor") : "grey"};
                }
            }
        }
    }
`


export default withStyleWrapper('div')(sliderStyle);