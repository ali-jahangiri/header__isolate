import { css, keyframes } from "styled-components"
import WithStyled from "../../HOC/WithStyled"

const anime = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`

const style = ({ get , check }) => css`
    width: 100%;
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    .emptyState {
        &__title {
            color: #757575;
            font-weight: 500;
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }
        &__desc {
            color: #d2d2d2;
        }
        &__icon {
            svg {
            width: 5rem;
                path,polygon,path,rect  {
                    fill : #d2d2d2;
                }
            }
        }
        &__newAction {
            margin-top : .5rem;
            cursor: pointer;
            ${props => props.newActionStyle};
        }
    }
    .animated__container {
        animation: ${anime} 3s forwards infinite;
    }
    ${props => css`${props.extendStyle}`};
`



export default WithStyled(style)