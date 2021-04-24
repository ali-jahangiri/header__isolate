import styled, { css } from "styled-components";
import withStyleWrapper from "../../HOC/withStyleWrapper";


const headerStyle = ({ get , check }) =>  css`
    width: 100%;
    background-color : ${check("headerBackground") ? get("headerBackground") : "#265247"};
    position : ${check("headerSticky") ? get("headerSticky") === "yes" ? "fixed" : "relative" : "fixed"};
    top : 0;
    left : 0;
    transition: all 0.25s ease-in-out;
    
    // fallback for user background setting
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .header {

        &__container {
            transition : 0.3s;
            display : flex;
            justify-content : center;
            align-items : center;
            width : 96%;
            margin : 0 auto;
            height : ${check("headerHeight") ? get("headerHeight") : "auto"};
            @media (max-width : 768px) {
                .header__item {display : none;}
                flex-direction : row-reverse;
            }

            // TODO base header height after scroll in condition
            &--afterScroll {
                height : ${check("headerHeightAfterScroll") && get("headerHeightAfterScroll") }
            }
        }

        &__insertedBanner {
            width : 100%;
        }

        &__hamburgerIcon {
            flex : 0.5;
            display : flex;
            justify-content : flex-end;
            padding-right : 1rem;
            @media(min-width : 768px) {display : none;}

            svg {
                fill : white;
                width: 1.5rem;
                height : 1.5rem;
                cursor: pointer;
                }
        }

        &__action {
            position : relative;
            /* margin-right : ${({ position }) => position === "right" ? "" : "auto"} ; */
            /* margin-left : ${({ position }) => position === "left" ? "" : "auto"}; */
            display : flex;
            justify-content : center;
            flex : .5;
            justify-content : flex-start;
            padding-left : 1rem;
            
            &--hideInMobile {
              @media (max-width : 768px) {display : none;};  
            }
            
            &--left {margin-left : auto;}

            &--right {margin-right : auto;}
        }

        &__item {
            color : ${check("linkColor") ?  get("linkColor") : "whitesmoke" };
            cursor: pointer;
            height : 100%;
            font-weight : ${check("linkWight") ? get("linkWight") : "normal"};
            display : flex;
            align-items : center;
            justify-content : center;
            transition : 0.3s;
            padding : 2rem 1rem;
            font-size : 0.9rem;
            border-left: 2px solid #41736721;
            border-right: 2px solid #41736721;
            
            :hover {
                background-color : #24584a;
                color : ${check("linkColorHover") ?  get("linkColorHover") : "#00bf8f" };
            }
        }


        &__logo {
            position : relative;
            border-left : 2px solid #24584a;
            border-right : 2px solid #24584a;
            display : ${check("logoDisplay") ? get("logoDisplay") === "yes" ? "flex" : "none" : "flex"};
            align-items : center;
            justify-content : center;
            
            img {
                max-height : 87px;
                @media(max-width : 768px) {
                max-height : 60px;
                }
            }
            &::after {
                content : "";
                width : 0%;
                height : 3rem;
                position : absolute;
                top : 100%;
                left : 50%;
                transform : translateX(-50%);
                border-right: 65px solid transparent;
                border-left: 65px solid transparent;
                border-top : 40px solid #265247;
                @media(max-width : 768px) {
                    top : 70%;
                    z-index : -2;
                }
            }

        }

        &__icon {
            &--mobile {
                display : flex;
                justify-content : center;
                svg {
                    width : 2rem;
                    height : 2rem;
                    display : block;
                }
                @media(min-width : 768px) {display : none;};
            }
        }
    }

        svg {
            width : 20%;
            path {
                stroke : white;
                transition : 0.3s;
                :nth-child(2) {
                    fill : transparent;
                    stroke : transparent;
                }
                :not(:nth-child(2)) {fill : rgba(255,255,255,.15);}
            }

            :hover {
                path {:not(:nth-child(2)) {fill : rgb(255 255 255 / 54%);}}
            }

            @media(max-width : 960px) {
                display : none;
            }
        }
        p {
            position : absolute;
            top : 25%;
            left : 24%;
            color : ${check("actionColor") ? get("actionColor") : "whitesmoke"};
            cursor: pointer;

            @media(max-width : 960px) {
                top : 50%;
                left: 50%;
                transform  :translate(-50% , -50%);
            }
            @media(max-width : 768px) {
                display : none;
            }
        }
        }

`;


export default withStyleWrapper()(headerStyle)
// export const DropdownTextWrapper = styled.a`
//     color : whitesmoke;
//     cursor: pointer;
//     transition : 0.3s;
//     padding : 2rem 1rem;
//     font-size : 0.9rem;
//     border-left: 2px solid #41736721;
//     border-right: 2px solid #41736721;

//     :hover {
//         background-color : #24584a;
//         color : #00bf8f;
//     }
// `

