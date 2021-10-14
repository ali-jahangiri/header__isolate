import { css } from "styled-components";
import WithStyled from "../../../../utils/HOC/WithStyled";



const style = () => css`
    .customAppDatePicker {
        &__container {
            position: relative;
            display: flex;
            cursor: pointer;
            padding: 1rem;
            border-radius: 5px;
            border: 2px solid lightgrey;
            align-items: center;
            justify-content: center;

            p {
                margin: 0;
            }


            div {
                background-color: #1bff001c;
                padding: .5rem;
                margin-left: 1rem;
                width: 2rem;
                height : 2rem;
                border-radius: 5px;
            }

            svg {
                fill: green;
            }
        }
    }
`


export default WithStyled(style);