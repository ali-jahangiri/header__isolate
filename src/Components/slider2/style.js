import styled from "styled-components";

const SliderTwoWrapper = styled.div`

    .slider {
        &__container {outline : none;}

        &__starter {
            color : ${({ $style }) => $style.check("sliderStarterTextColor") ? $style.get("sliderStarterTextColor") : ""};
            font-size : ${({ $style }) => $style.check("sliderStarterTextFontSize") ? $style.get("sliderStarterTextFontSize") : ""};
            padding : ${({ $style }) => $style.check("sliderStarterPadding") ? $style.get("sliderStarterPadding") : ""};
            text-align : ${({ $style }) => $style.check("sliderStarterTextAlignment") ? $style.get("sliderStarterTextAlignment") : ''};
            height : ${({ $style }) => $style.check("sliderStarterHeight") ? $style.get("sliderStarterHeight") : "30rem"};
            display : flex;
            justify-content : center;
            align-items : ${({ $style }) => {
                if($style.check("sliderStarterAlignment")) {
                    let result = $style.get("sliderStarterAlignment");
                    if(result === "center") return 'center'
                    else if(result === "start") return "flex-start"
                    else return "flex-end"
                }else {
                    return "center"
                }
            }};
            transition : 0.3s;

            p {
                width : ${({ $style }) => $style.check("sliderStarterWidth") ? $style.get("sliderStarterWidth") : "100%"};
                margin : 0 auto;
            }
            &--deActive {
                opacity : 0;
            }
        }
        &__item {
            height : ${({ $style }) => $style.check("sliderItemHeight") ? $style.get("sliderItemHeight") : "30rem"} ;
            background-color : lightblue;
            transition : 0.3s;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position : relative;
            overflow : hidden;
            border-radius : ${({ $style }) => $style.check("sliderItemBorderRadius") ? $style.get("sliderItemBorderRadius") : "10px"} ;
            font-size : ${({ $style }) => $style.check("sliderItemFontSize") ? $style.get("sliderItemFontSize") : "1rem"};
            border : ${({ $style }) => $style.check("sliderItemBorder") ? $style.get("sliderItemBorder") : "none"};
            &__overlay {
                position : absolute;
                border-radius : 10px;
                text-align : center;
                padding : 1rem;
                color : ${({ $style }) => $style.check("sliderItemTextColor") ? $style.get("sliderItemTextColor") : "white"};
                width : 100%;
                background : linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%);
                bottom : 0;
                left : 0;
                transition : 0.5s ease-in-out;
                opacity : 1;

            }
            &--deActive {
                transform : scale(0.5);
                filter : blur(${({ $style }) => $style.check("sliderItemDeActiveBlur") ? $style.get("sliderItemDeActiveBlur") : "2px"});
                .slider__item__overlay {
                    bottom : -100%;
                    opacity : 0;
                }
            }
        }
    }
`;

export default SliderTwoWrapper;