import { css } from "styled-components";
import WithStyled from "../../utils/HOC/WithStyled";

const style = ({ get , check }) => css`
    display: flex;
    & > div {
        flex: 1;
        text-align: center;
    }
    align-items : center;
    &:not(&:last-child) {
        border-bottom: 2px solid #80808033;
    }
    &:first-child {
        /* padding-top: 2rem; */
    }
    padding: 1.5rem .5rem;
    /* margin: 1rem 0; */
    .insItemMobile {
        &__logo {
            flex: .6;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 80%;
            }
        }
        &__cta {
            flex: .5;
            svg {
                background-color: #b2cbd82e;
                border-radius: 10px;
                font-size: .75rem;
                width: 80%;
                margin: 0 auto;
                width: 2rem;
            }
        }
        &__title {
            font-weight: 500;
        }
    }
`

export default WithStyled(style)