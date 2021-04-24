import { css } from "styled-components";
import withStyleWrapper from "../../HOC/withStyleWrapper";

const footerStyle = ({ get , check }) => css`
    width : 100%;
    // TODO change color (should be base on user current mode)
    color : white;
    border : ${check("border") ? get("border") : "none"};
    border-radius : ${check("borderRadius") ? get("borderRadius") : "none"};
    .footer {
        &__row {
            width: 100%;
            display: flex;
            justify-content : space-between;
            background-position : center;
            background-repeat : no-repeat;
            background-size : cover;
        }
        &__certificates {
            display: flex;
		    justify-content: flex-start;
		    align-items: center;
		    width: 100%;
		    margin: 10px 0;
		    flex-wrap: wrap;
            flex : 1;

            @media(max-width : 768px) {
                display : none;
            }
        }
        &__certificateItem {
            width: 120px;
			height: 120px;
			margin: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			
            img {
                width: 100px;
            }
        }

        &__mailbox {
            display : flex;
            justify-content : center;
            flex : .8;
            background-color : ${check("mailboxBgColor") ? get("mailboxBgColor") : "#399e5b"} ;
            padding : 1rem 0;
            position : relative;

            @media(max-width : 768px) {
                flex : 1;
            }
           
            input {
                border : none;
                color : white;
                padding : 0 0.5rem;
                background-color : transparent;
                outline : none;
                border-bottom : 1px solid #ffffff33;
                transition : 0.3s;  
                width : 50%;
                
                &&::placeholder {
                    color : grey;
                }
                        
                &:focus {
                    background-color : rgba(255,255,255,.09);
                }
            }
            button {
                background-color : ${check("mailboxBtnBgColor") ? get("mailboxBtnBgColor") : "#c4e2ce"};
                border  : none;
                padding : 1rem;
                transition : all 0.3s;
                border-radius : 0 3px 3px 0;
                cursor: pointer;
                outline : none;
                &:hover {
                    background-color : white;
                }
            }
            &::after {
                content : "";
                width : 5rem;
                height : 100%;
                display : block;
                background-color : ${check("mailboxBgColor") ? get("mailboxBgColor") : "#399e5b"};
                position: absolute;
                left : -10%;
                top : 0;
                transform : skewX(330deg);
                @media(max-width : 768px) {
                    display : none;
                }
            }
        }
        &__links {
            flex : 3;
            display : flex;
            flex-direction : column;
            padding : 0 1rem;
            @media(max-width : 768px) {
                margin : 3rem 0 ;
            }
        }
        &__desc {
            flex: 4;
            text-align : right;
            padding : 0 2rem;
            color : ${check("descColor") ? get("descColor") : "white"};
            direction : rtl;
        }
        &__heading {
            text-align : right;
            display : flex;
            justify-content : space-between;
            align-items : center;
            color : ${check("headingTextColor") ? get("headingTextColor") : "white"};
            span {
                flex : 0.95;
                background : ${check("headingDividerColor") ? get("headingDividerColor") : "linear-gradient(45deg, transparent, white) "};
                border-radius : 5px;
                height : 0.1rem;
                display : block;
            }
        }
        &__inner {
            width : 100%;
            display : flex;
            backdrop-filter : brightness(0.6);
            padding : 3rem 0;
            padding-bottom : 8rem;
            
            background-color : ${check("backgroundColor") ? get("backgroundColor") : "none"};
            @media(max-width : 768px) {
                flex-direction : column-reverse;
                padding-bottom : 10rem;
            }
        }
        &__logo {
            @media(max-width : 768px ) {
                display : flex;
                justify-content : center;
            }
        }
        &__linkContainer {
            display: flex;
            align-items : center;
            flex-direction : column;
            justify-content : center;
            margin : auto 0;
            
            div {
                display: flex;
                width : 80%;
                justify-content : space-between;
                
                @media(max-width : 768px ) {
                    margin : 1rem 0;
                }
                @media(min-width : 768px ) and (max-width : 992px) {flex-direction : column;}
                a {
                    color : ${check("footerItemColor") ? get("footerItemColor") : 'white'};
                }
            }
        }

        &__item {
            color : white;
            font-size : ${check("footerItemSize") ? get("footerItemSize") : "1rem"}
        }

        &__socialIcons {
           background-color : ${check("socialIconsContainerBgColor") ? get("socialIconsContainerBgColor") : "#399e5b"};
           flex : .8;
           position: relative;
           display : flex;
           justify-content : center;
           padding : 1rem 0 ;
           
           a {
               margin : 0 0.3rem;
               padding : 0.6rem;
               width : 4rem;
               height : 4rem;
               position : relative;
               display : flex;
               justify-content : center;
               align-items : center;
               &:hover {
                   & > .polygonShape {
                        transform : rotate(180deg);
                    }
                }
           }
           & .polygonShape {
               position : absolute;
               top : 0;
               left : 0;
               width : 100%;
               height : 100%;
               fill : ${check("socialIconsBgColor") ? get("socialIconsBgColor") : "#9ec7af"};
               transition : 0.5s;
            }

           &::after {
               content : "";
               height : 100%;
               width : 5rem;
               background-color : ${check("socialIconsContainerBgColor") ? get("socialIconsContainerBgColor") : "#399e5b"};
               transform : skewX(-330deg);
               position: absolute;
               right : -11%;
               top : 0;
               z-index : 20;
               @media(max-width : 768px ) {
                    display : none;
                }
           }
        }
        &__icon {
            position: relative;
            z-index : 5;
            width : 70%;

            &--telegram {
                fill : ${check("telegramIconColor") ? get("telegramIconColor") : "white"};
            }
            &--instagram {
                fill : ${check("instagramIconColor") ? get("instagramIconColor") : "white"};
            }
        }
        &__copyright {
            color : black;
            flex : 1.5;
            text-align : right;
            padding : 1rem;
            height : 50%;
            background-color : #ffffff45;
            margin-top : auto;
            backdrop-filter: blur(10px);
            direction : rtl;
        }

        &__end {
            position: absolute;
            bottom : 0;
            @media(max-width : 768px ) {
                flex-direction : column;
            }
        }
    }
`

export default withStyleWrapper()(footerStyle);