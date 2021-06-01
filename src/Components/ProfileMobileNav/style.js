import { css } from "styled-components"
import WithStyled from "../../utils/HOC/WithStyled";;

const style = ({ get , check }) => css`
    position : fixed;
    background-color: white;
    bottom: ${props => props.active ? 0 : "-35%"};
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    transition : bottom .3s ease;
    div {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        background-color: white;
        transition: .3s ease-in-out;
        padding: .9rem;
        background : linear-gradient(180deg, white, transparent);
        border-top: 2px solid white;
        flex: 1;
        p {
            margin-top :.8rem;
            transition: .3s;
            color: grey;
        }
        @media (max-width : 500px ) {
            .navItem--active {
                p {
                    margin-top: .3rem;
                }
            }
            svg {
                width: 2rem;
            }
            p {
                
                font-size: .75rem;
            }
        }
       
    }
    svg {
        width: 2.7rem;
        fill: grey;
        transition: 0.5s;
    }
    @media (max-width : 364px) {
        div {
            padding: .6rem 0 !important;
            flex: 1;

            svg {
                width: 1.5rem;
            }
        }
        .navItem--active {
            margin-top: -20px !important;
        }
    }
    .navItem--active {
        margin-top: -50px;
        border-top: 3px solid black;
        background : linear-gradient(180deg, #f3f3f3, white);
        p {
            font-weight: 700;
            color: black;

        }
        svg {
            fill: black;
        }

    }

    .navItem--deActive {
        border-top: 2px solid #8080800a;

    }
`


export default WithStyled(style)