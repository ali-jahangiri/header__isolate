import { css } from "styled-components";

import WithStyled from "../../HOC/WithStyled";

const style = ({ get , check }) => css`
    display: flex;
    width : 100vw;
    height: 100vh;
    background-color: lightgray;
    align-items: center;
    padding: 1rem;


    .fullScreenSliderInnerContainer {
        width: 95%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    .sliderContainer {
        flex: 3;
        width : 200px;
    }

    .fullScreenSliderItem {
        width : 100%;
        height : 30rem;
        position: relative;
        outline: none;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .textSliderContainer {
        flex: 1.5;
        display: flex;
        transform: translateX(-30px);
    }
    
    .textSliderInnerContainer {
        background-color: #171717;
        width : 20rem ;
        margin-right: 1rem;
    }


    .fullScreenSliderDotContainer {
        height: 400px;
    }

    @media(max-width : 660px) {
        .fullScreenSliderInnerContainer {
            flex-direction: column;
        }
        .fullScreenSliderItem {
            height: 25rem;
        }
        .sliderContainer {
            width : 90vw;
        }
        .textSliderInnerContainer {
            width : 100%;
        }
        .fullScreenSliderDotContainer {
            width : 100%;
            height: auto;
            margin-top: 1.5rem;
        }
        .textSliderContainer {
            flex-direction: column;
            transform: translateX(0px);
            width : 75vw;
            height: auto;
            margin-top: -5rem;
        }
    }

`


export default WithStyled(style);