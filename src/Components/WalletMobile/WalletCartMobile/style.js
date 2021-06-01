import { css } from "styled-components";
import WithStyled from "../../../utils/HOC/WithStyled";

const style = ({ get , check }) => css`
    .walletCartMobile {
        &__lastTransaction {
            display: flex;
            justify-content: space-around;
            width: 100%;
            backdrop-filter: blur(10px);
            border-radius : 0 0 10px 10px;
            padding: .45rem 0;
            background : #ffffff70;
            & > div {
                display: flex;
                flex-direction: column;
                & > span {
                    opacity: .5;
                }
                div {
                    display: flex;
                    align-items: center;
                }
                span {
                    font-size: .65rem;
                    margin-right: .3rem;
                    text-align: right;
                }
            }
        }
        &__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 26%;
            padding: .8rem;
            margin: 0 auto;
            border-radius: 10px;
            background-color: #ffffff59;
            backdrop-filter: blur(32px);
            transform: translateY(-10px);
        }
        &__desc {
            padding: 0 1rem 1rem 1rem;
            direction: rtl;
        }
    }
    width: 100%;
    margin: 0 auto;
    background-color: lightslategray;
    border-radius: 10px;
    margin-bottom: 2rem;
    box-shadow : 0px 14px 30px -18px lightslategrey;
`


export default WithStyled(style)