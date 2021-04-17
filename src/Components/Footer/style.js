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
            color : ${props => props.checkDefault() ? props.getStyles() : "black"};
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
                background-color : ${props => props.checkDefault('socialIconsBgColor') ? props.getStyles("socialIconsBgColor") : "white"};
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
            height : ${props => props.checkDefault("dividerHeight") ? props.getStyles("dividerHeight") : "7rem"};
            width : 0.3rem;
            display : block;
            flex : 0.1;
            border-left : 2px solid ${props => props.checkDefault("dividerColor") ? props.getStyles("dividerColor") : "grey" };
        }
        &__license {

        }
        &__section {
            display: flex;
            flex-direction : column;
            align-items : center;
        }

        &__item {
            color : ${props => props.checkDefault("footerItemColor") ? props.getStyles("footerItemColor") : "black"}; 
        }

        &__icon {
            &--email {
                    fill : ${props => props.checkDefault("emailIconColor") ? props.getStyles("emailIconColor") : 'grey'}
            }
            &--phon {
                fill : ${props => props.checkDefault("phonIconColor") ? props.getStyles("phonIconColor") : 'grey'}
            }
            &--address {
                fill : ${props => props.checkDefault("addressIconColor") ? props.getStyles("addressIconColor") : 'grey'}
            }
            &--instagram {
                fill : ${props => props.checkDefault("instagramIconColor") ? props.getStyles("instagramIconColor") : 'grey'}
            }
            &--telegram {
                fill : ${props => props.checkDefault("telegramIconColor") ? props.getStyles("telegramIconColor") : 'grey'}                
            }
        }
    }
`;

