import { css } from "styled-components"
import WithStyled from "../../utils/HOC/WithStyled"

const style = () => css`
    display: flex;
    margin: 1rem 0;
    transition:  0.3s;
    /* reset antd style for this component */
    .ant-collapse-header {
        width: 100% !important;
        & > span {
            transition: .3s;
            position: relative;
            left: ${props => props.isMoreControllerActive ? "100%" : "0"};
        }
        
    }
    .anticon {
        svg {
            transition : 0.3s !important;
        }
    }
    .ant-motion-collapse-leave {
        /* display: none; */
    }
    .ant-collapse-content {
        transition: .3s !important;
    }
    .reminderItemMobile {

        &--disabled {
            background-color: #efefef;
            border-radius: 10px;
            opacity: .2;
        }

        &__header {
            display: flex;
            width: 100%;
            justify-content : flex-end;
            margin-top: -35px;
            align-items: flex-end;
        }
        &__controller {
            display: flex;
            align-items: center;
            position: absolute;
            height: 100%;
            width: 5rem;
            transition: .3s;
            left: -20%;
            border-radius: 10px;
            overflow: hidden;
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                flex: 1;
                &:first-child {
                    background-color: #ff00002e;
                    svg {
                        fill: #ff000073;
                    }
                }
                &:last-child {
                    background-color: #00800029;
                    svg {
                        fill: #00800073;
                    }
                }
            }
            svg {
                width: 1rem;
            }
        }
        &__index {
            margin-left: 1rem;
            color: grey;
            font-weight: 500;
            font-size: 0%.75rem;
            background-color: #80808020;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            display: flex;
            border-radius: 10px;
        }
        &__moreDetail {
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            text-align: right;
            margin-top: 1rem;
            span {
                color: grey;
                margin: 1rem 0;
                font-size: .75rem;
                margin: 1rem 0;
            }
        }
        &__moreCta {
            display: flex;
            background-color: #8080800d;
            border-radius: 10px;
            width: 13%;
            height: 3.5rem;
            align-self: flex-start;
            justify-content: center;
            transition: .3s;
            svg {
                width: 1rem;
            }
        }
    }
    ${props => css`${props.extendStyle}`};
`


export default WithStyled(style)