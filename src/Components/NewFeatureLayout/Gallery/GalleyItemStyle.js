import { css, keyframes } from "styled-components";
import WithStyled from "../../../HOC/WithStyled";

const anime = keyframes`
    from {
        left : 50%;
    }
    to {
        left : -100%;
    }
`;


const _direction = {
    left : "flex-start",
    center : "center",
    right : "flex-end"
}


const style = () => css`
    flex: 1;
    height : 100vh;
    position: relative;
    transition: .3s;
    cursor: ${({ isActive }) => isActive === true ? "default" : 'pointer'};
    overflow: hidden;

    &:hover {
        flex: 1.5;
    }

    ${({ isActive }) => {
        if(isActive === null) return;
        if(isActive === true) 
            return css`
                flex: 25;
                .galleryItem__content {
                    left : 90% !important;
                }

            `
        else if(isActive === false)
             return css`
                flex: 0;
        `;
    } };


    .galleryItem {


        &__fadeOverlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width : 100%;
            z-index: 10;
            transition: .3s;
            
            
            &--active {
                background: #2e2e2e31;
                backdrop-filter: blur(1px);
            }
        }


        &__controller {
            position: absolute;
            left: -10%;
            top: 50%;
            padding : 20px;
            cursor: pointer;
            transition: .3s;
            z-index : 555555;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translate(-50% , -50%);
            svg {
                margin-right: .5rem;
                width : 1rem;
                height : 1rem;
                transition: .3s;
            }

            &:hover  {
                background-color: #ffffff75;
                backdrop-filter: blur(10px);
                svg {
                    transform: translateX(-5px);
                }
            }


            &--active {
                left: 10%;
            }
        }



        &__quickCta {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #2e2e2e31;
            padding: 1rem;
            align-self: flex-start;
            width : auto;
            transition: .3s;
            opacity: 0;
            backdrop-filter: blur(10px);
            margin-top : 1rem;
            user-select: none;

            svg {
                width : 1rem;
                height : 1rem;
                margin-left: 1rem;
                transition: .3s;
            }

            &:hover {
                svg {
                    transform: translateX(5px);
                }
            }


            &--visitable {
                opacity: 1;
            }
        }

        &__content {
            padding : 1rem;
            position: absolute;
            z-index : 5555;
            display: flex;
            flex-direction: column;

            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
            transition: .3s .3s;
            width : 100%;
        }



        &__video {
            &__loadingOverlay {
                width: 100%;
                height : 100vh;
                position: absolute;
                overflow: hidden;
                left: 0;
                top: 0;
                z-index: 5;
                
                &::after {
                    content: "";
                    width : 100%;
                    height : 100%;
                    top: 0;
                    background : linear-gradient(90deg,#ffffffc7,#a7a7a721,#a7a7a700);
                    position: absolute;
                    animation: ${anime} 2s forwards infinite;
                }

            }
        }
    }

    video {
        height : 100%;
        width : 100%;
        object-fit: cover;
    }
`


export default WithStyled(style);