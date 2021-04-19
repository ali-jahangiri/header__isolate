import styled from "styled-components";

const SliderWrapper = styled.div`
    .slider {
        position: relative;
        &__item {
            height : 30rem;
            background-position : center;
            background-repeat : no-repeat;
            background-size : 100%;
            transition : background-size 0.6s;
            &--active {
                .slider__item__content {
                    top : -50%;
                }
                background-size : 110%;
            }
            &__content {
                position: relative;
                width : 80%;
                height : 180%;
                top : 100%;
                background-color : #ffa07ab0;
                position: relative;
                display : flex;
                justify-content : start;
                align-items: center;
                clip-path: polygon(0 0, 50% 50%, 100% 100%, 0% 100%);
                transition : 0.3s;

                div {
                    width : 50%;
                    display: flex;
                    justify-content : center;
                    align-items : center;
                    flex-direction : column;
                    transform : translateY(100%);
                    a {

                        text-decoration : none;
                    }
                }

                &:hover {
                    background-color : #ffa07ade;
                    height : 170%;
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
    }
`


export default SliderWrapper;