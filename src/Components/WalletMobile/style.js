import { css } from "styled-components";
import WithStyled from "../../utils/HOC/WithStyled";

const style = ({ get , check }) => css`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
    align-items: center;
    border: 2px solid ${props => props.isActive ? "#8080801f" : "transparent"};
    padding: ${props => props.isActive ? ".5rem" : "0"} 0;
    border-radius: 10px;
    transition: .3s;
    .ant-collapse-header {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        margin: .5rem 0;
    }
    .ant-collapse-content {
        transition: .3s;
        /* padding-top: 1rem; */
    }
    .anticon {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            transition: .3s;
        }
    }
    .walletItemMobile { 
        &__index {
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 2rem;
            border-radius: 10px;
            margin-left: 1rem;
            transform: translateY(${props => props.isActive ? "-30px" : 0});
            transition: .3s;
            &--added {
                background-color: #d6ebd6;
                color: #00800073;
            }
            &--reduced {
                color: #ff000073;
                background-color: #ffd1d1;
            }
        }
        &__desc {
            direction: rtl;
            width: 92%;
            margin: 0 auto;
            span {
                color: grey;
                margin: 1rem 0;
                font-size: .75rem;
            }
        }
        &__date {
            font-size: .75rem;
            color: grey;
        }
    }
`


export default WithStyled(style);