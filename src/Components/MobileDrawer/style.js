import { css, keyframes } from "styled-components";

import WithStyle from "../../utils/HOC/WithStyled"

const slideIn = keyframes`
    from {
        top: 100%;
    }
    to {
        top: 0;
    }
`

const slideOut = keyframes`
    from {
        top: 0%;
    }
    to {
        top: 100%;
    }
`;


const overLayFadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const overlayFadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`


const controllerFadeIn = keyframes`
    from {
        bottom: -100%;
    }
    to {
        bottom: 0;
    }
`

const style = ({ get , check}) => css`
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: ${typeof window != "undefined" ? `${window.pageYOffset}px` : 0};
    display: flex;
    align-items: flex-end;
    text-align: right;
    .overlay {
        height: 100%;
        width: 100%;
        background-color: #00000047;
        position: absolute;
        left: 0;
        top: 0;
        transition: .3s;
        animation: ${overLayFadeIn} 1s forwards alternate;

        &--deActive {
            animation : ${overlayFadeOut} 1s forwards alternate;
        }
    }

    .mobileDrawer {
        &__content {
            position: relative;
            left: 0;
            padding: 1.5rem;
            border-radius: 40px 40px 0 0;
            background-color: white;
            max-height: 90%;
            overflow-y: auto;
            padding-bottom: 4.5rem;
            &--active {
                animation : ${slideIn} .5s forwards alternate;
            }

            &--deActive {
                animation: ${slideOut} 1s forwards alternate;
            }
        }
        &__controller {
            position: fixed;
            left: 50%;
            transform : translateX(-50%);
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 1rem 6%;
            animation: ${props => props.isOnClosing ? keyframes`from {bottom : 0%} to {bottom : -100%}` : controllerFadeIn} .6s forwards alternate;
            button {
                width: 47%;
                padding: .4rem;
            }
        }

        &__title {
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`;

export default WithStyle(style);