import styled , { css } from "styled-components";

import withStyleWrapper from "../../HOC/withStyleWrapper";

const FooterStyle = ({get , check }) => css`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 1rem ;
    background-color : ${check("backgroundColor") ? get("backgroundColor") : "transparent"};

    @media(max-width: 576px) {
        flex-direction : column-reverse;
        // adding gap between sections
        & > div {margin : 0.5rem 0;}
    }
    & > div {
        flex : 1;
    }
    .footer {
        &__content {
            color : ${check("contentTextColor") ? get("contentTextColor") : "black"};
            height : 100%;
            display: flex;
            flex-direction : column;
            justify-content: center;
            font-size : ${check("footerContentFontSize") ? get("footerContentFontSize") : ""};
            div {
                display : flex;
                justify-content : flex-end;
                svg {
                    width : 1.6rem;
                    height : 1.6rem;
                }
            }
        }
        &__socialIcons {
            display: flex;
            justify-content : space-around;
            width : 100%;
            svg ,img {
                width : 2rem;
                height : 2rem; 
            }
        }
        &__logo {
            img {
                max-width : ${check("logoSize") ? get("logoSize") : '200px'};
                @media(max-width : 567px) {
                     max-width : ${check("logoSizeMobile") ? get("logoSizeMobile") : "150px"};
                }
            }
        }
        &__divider {
            height : ${check("dividerSize") ? get("dividerSize") : "7rem"};
            width : 0.3rem;
            display : block;
            flex : 0.1;
            border-left : 2px solid ${check("dividerColor") ? get("dividerColor") : "grey" };

            @media(max-width : 567px) {
                width : 50%;
                border-bottom : ${check("dividerSizeMobile") ? get("dividerSizeMobile") : "2px"} solid red;
            }
        }

        &__section {
            display: flex;
            flex-direction : column;
            align-items : center;
        }
        &__item {
            color : ${check("footerItemColor") ? get("footerItemColor") : "black"};
            font-size : ${check("footerItemFontSize") ? get("footerItemFontSize") : ""};
        }
        &__icon {
            &--email {
                    fill : ${check("emailIconColor") ? get("emailIconColor") : 'grey'};
            }
            &--phon {
                fill : ${check("phonIconColor") ? get("phonIconColor") : 'grey'};
            }
            &--address {
                fill : ${check("addressIconColor") ? get("addressIconColor") : 'grey'};
            }
            &--instagram {
                fill : ${check("instagramIconColor") ? get("instagramIconColor") : 'grey'};
            }
            &--telegram {
                fill : ${check("telegramIconColor") ? get("telegramIconColor") : 'grey'};              
            }
        }
    }
`;


export default withStyleWrapper("div")(FooterStyle);