import { css } from "styled-components"
import WithStyled from "../../utils/HOC/WithStyled";

const style = ({ get , check }) => css`
    .indexTab {
        &__row {
            display: flex;
            justify-content: space-between; 
        }
        &__item {
            flex: 1;
            position: relative;
            &__container {
                width: 90%;
                height: 125px;
                padding: 1rem 0;
                margin: 0 auto;
                background-color: lightgrey;
                box-shadow : 1px 15px 20px -5px #80808030;
                /* TODO replace this border-radius with gStyle */
                position: relative;
                border-radius: 16px;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-evenly;
                p {
                    font-weight: 600;
                    color: #505050;
                }
            }

        &__headerIcon {
            display: flex;
            width: 3rem;
            height: 3rem;
            justify-content: center;
            align-items: center;
            top:-37px;
            background-color: #ffffff4a;
            padding: .2rem;
            border-radius: 10px;
            svg {
                fill: grey;
                width: 1.2rem;
            }
        }
        &__action {
            position: absolute;
            display: flex;
            width: 2.5rem;
            height: 2.5rem;
            justify-content: center;
            bottom: -20px;
            /* TODO change bgcolor */
            background-color: white;
            border-radius: 10px;
        }
        }
    }
`

export default WithStyled(style);