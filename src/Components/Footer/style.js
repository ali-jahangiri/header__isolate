import styled from "styled-components";

export const FooterWrapper = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 1rem ;

    & > div {
        flex : 1;
    }
    & .certificates {
        display: 'flex';
		justify-content: 'center';
		align-items: 'center';
		width: '100%';
		margin: '10px 0';
		flex-wrap: 'wrap';
    }
    & .certificateItem {
        width: 120;
			height: 120;
			margin: 5;
			display: 'flex';
			justify-content: 'center';
			align-items: 'center';
			
            img {
                width: 100;
            }
    }
    .footer {
        &__content {
            color : ${({ $style }) => $style.check() ? $style.get() : "black"};
            height : 100%;
            display : flex;
            justify-content : center;
            align-items: flex-end;
            flex-direction : column;
            div {
                display : flex;
                justify-content : flex-end;
                svg {
                    width : 1.6rem;
                    height : 1.6rem;
                }

                // style of image witch user uploaded (fallback style)
                img {
                    max-width : 3rem;
                }
            }
        }
        &__socialIcons {
            display: flex;
            justify-content : space-around;
            width : 100%;
            a {
                border-radius : 50px;
                background-color : ${({ $style }) => $style.check('socialIconsBgColor') ? $style.get("socialIconsBgColor") : "white"};
                display : flex;
                padding : 0.8rem;
            }
            svg ,img {
                width : 1.5rem;
                height : 1.5rem;
            }
        }
        &__logo {
            img {
                max-width : 200px;
            }
        }
        &__divider {
            height : ${({ $style  })=> $style.check("dividerHeight") ? $style.get("dividerHeight") : "7rem"};
            width : 0.3rem;
            display : block;
            flex : 0.1;
            border-left : 2px solid ${({ $style }) => $style.check("dividerColor") ? $style.get("dividerColor") : "grey" };
        }
        &__license {

        }
        &__section {
            display: flex;
            flex-direction : column;
            align-items : center;
        }

        &__item {
            color : ${({ $style }) => $style.check("footerItemColor") ? $style.get("footerItemColor") : "black"}; 
        }

        &__icon {
            &--email {
                    fill : ${({ $style }) => $style.check("emailIconColor") ? $style.get("emailIconColor") : 'grey'}
            }
            &--phon {
                fill : ${({ $style }) => $style.check("phonIconColor") ? $style.get("phonIconColor") : 'grey'}
            }
            &--address {
                fill : ${({ $style }) => $style.check("addressIconColor") ? $style.get("addressIconColor") : 'grey'}
            }
            &--instagram {
                fill : ${({ $style }) => $style.check("instagramIconColor") ? $style.get("instagramIconColor") : 'grey'}
            }
            &--telegram {
                fill : ${({ $style }) => $style.check("telegramIconColor") ? $style.get("telegramIconColor") : 'grey'}                
            }
        }
    }
`;

