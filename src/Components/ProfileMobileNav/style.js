import { css } from "styled-components"
import WithStyled from "../../HOC/WithStyled";

const style = ({ get , check }) => css`
    position : fixed;
    background-color: white;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    
    div {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        background-color: white;
        transition: .3s ease-in-out;
        padding: 2rem;
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
                /* display: none; */
                font-size: .75rem;
            }
        }
       
    }
    svg {
        width: 3.5rem;
        fill: grey;
        transition: 0.5s;
    }
    @media (max-width : 364px ) {
        div {
            padding: 1rem 0 !important;
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
        background : linear-gradient(180deg, #0000000d, transparent);
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