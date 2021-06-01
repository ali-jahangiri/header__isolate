import { css, keyframes } from "styled-components"
import WithStyled from "../../utils/HOC/WithStyled"

const anime = keyframes`
    from {
        opacity: 0;
        transform: scale(.99);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`


const style = ({ get , check }) => css`
    transition: .3s;
    margin-bottom: ${props => props.isNavActive ? "8rem" : 0};
    animation: ${anime} 1s forwards;
    .tabPageMobile {
        &__header {
            background: lightgray;
            border-radius: 0 0 20px 20px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            padding: 2rem 10% 15% 10%;
            div {
                width: 2.5rem;
                height: 2.5rem;
                background: #80808021;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                position: relative;
            }
            p {
                font-weight: 600;
                font-size: 1.3rem;
                position: relative;
            }
        }

        &__bodyContainer {
            width: 88%;
            margin: 0 auto;
            margin-top: -10%;
            background: white;
            border-radius: 10px;
            padding: 1rem;
            box-shadow : 0px 20px 50px -28px #00000047;
            margin-bottom: 1rem;
            position: relative;
            z-index: 5;
        }
    }

    svg {
        width: 2rem;
        fill: grey;
    }
    ${props => css`${props.extendStyle}`};
`   


export default WithStyled(style)