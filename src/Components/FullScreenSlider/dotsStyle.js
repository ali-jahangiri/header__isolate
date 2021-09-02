import { css } from "styled-components";
import WithStyled from "../../HOC/WithStyled";

const style = ({ get , check }) => css`
    display: flex;
    flex-direction: column;
    height : 100%;
    user-select: none;

    .dotsItem {
        flex: 1;
        margin: .2rem 0;
        &:first-child {margin: 0;}
        &:last-child {margin: 0;}
        width : 1rem;
        height: 2rem;
        background-color: black;
        cursor: pointer;
        border-radius: 5px;
        transition: .2s;
        position: relative;
        
        p {
            color: white;
            transition: .3s;
            opacity: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50% , -50%);
        }

        &:hover {
            p {
                opacity: 1;
                left: 180%;
            }
        }

        &--active {
            flex: 2;
        }
    }


    @media(max-width : 660px) {
        flex-direction: row;
        align-items: center;
        height: auto;

        .dotsItem {
            height: 1rem;
            margin: 0 .5rem;

            &--active {
                flex: 3;
            }

            p {
                display: none;
            }
        }
    }
`


export default WithStyled(style);