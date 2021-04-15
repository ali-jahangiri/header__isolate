

import styled from "styled-components";



// checkDefault('headerBackground') ? getStyles('headerBackground')+'px' : '#ddd'

export const HeaderWrapper = styled.div`
    width: 100%;
    background-color : ${props => props.checkDefault("headerBackground") ? props.getStyles("headerBackground") : "#265247"};
    position : ${props => props.checkDefault("headerSticky") ? props.getStyles("headerSticky") === "yes" ? "fixed" : "relative" : "fixed"};
    top : 0;
    left : 0;
    transition: all 0.25s ease-in-out;
    
    // fallback for user background setting
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    & .header__item {
        color : ${props => props.checkDefault("linkColor") ?  props.getStyles("linkColor") : "whitesmoke" };
        cursor: pointer;
        height : 100%;
        font-weight : ${props => props.checkDefault("linkWight") ? props.getStyles("linkWight") : "normal"};
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
            color : ${props => props.checkDefault("linkColorHover") ?  props.getStyles("linkColorHover") : "#00bf8f" };
        }
    }
    & .header__logo {
        
        position : relative;
        border-left : 2px solid #24584a;
        border-right : 2px solid #24584a;
        display : ${props => props.checkDefault("logoDisplay") ? props.getStyles("logoDisplay") === "yes" ? "flex" : "none" : "flex"};
        align-items : center;
        justify-content : center;
    img {
        max-height : 87px;
        @media(max-width : 768px) {
            max-height : 60px;
        }
    }
    ::after {
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
    & .header__action {
        position : relative;
        margin-right : ${({ position }) => position === "right" ? "" : "auto"} ;
        margin-left : ${({ position }) => position === "left" ? "" : "auto"};
        display : flex;
        justify-content : center;
        flex : .5;

        @media (max-width : 768px) {
            display : ${props => {
            return props.hideInMobile  ? "none" : 'flex'
        }};
        justify-content : flex-start;
        padding-left : 1rem;
        };

        .header__icon--mobile {
            display : flex;
            justify-content : center;
            svg {
                width : 2rem;
                height : 2rem;
                display : block;
            }
            @media(min-width : 768px) {
                display : none;
            };
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
            color : ${props => props.checkDefault("actionColor") ? props.getStyles("actionColor") : "whitesmoke"};
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
        & .header__container {
            transition : 0.3s;
            display : flex;
            justify-content : center;
            align-items : center;
            width : 96%;
            margin : 0 auto;
            height : ${props => props.checkDefault("headerHeight")  ? props.getStyles("headerHeight") : "auto"};
            @media (max-width : 768px) {
                .header__item {display : none;}
                flex-direction : row-reverse;
            }

            // TODO base header height after scroll in condition
            &--afterScroll {
                height : ${props => props.checkDefault("headerHeightAfterScroll") && props.getStyles("headerHeightAfterScroll") }
            }
        }
        & .header__insertedBanner {width : 100%;}
`;



export const DropdownTextWrapper = styled.a`
    color : whitesmoke;
    cursor: pointer;
    transition : 0.3s;
    padding : 2rem 1rem;
    font-size : 0.9rem;
    border-left: 2px solid #41736721;
    border-right: 2px solid #41736721;

    :hover {
        background-color : #24584a;
        color : #00bf8f;
    }
`


export const HamburgerIcon = styled.div`
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

`