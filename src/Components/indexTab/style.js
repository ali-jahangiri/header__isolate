import { css } from "styled-components"
import WithStyled from "../../HOC/WithStyled"

const style = ({ get , check }) => css`
    .indexTab {
        &__row {
            display: flex;
            justify-content: space-between;
            margin: 3rem 0;
        }
        &__item {
            display: flex;
            flex-direction: column;
            /* TODO replace this border-radius with gStyle */
            border-radius: 16px;
            position: relative;
            padding: 2rem;
            box-shadow : 1px 15px 20px -5px #80808030;
            &__action {
                position: absolute;
                display: flex;
                bottom: -20px;
                /* TODO change bgcolor */
                background-color: white;
                border-radius: 10px;
            }
        }
    }
`

export default WithStyled(style);