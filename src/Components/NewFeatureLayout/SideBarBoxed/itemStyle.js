import { css } from "styled-components";
import WithStyled from "../../../HOC/WithStyled";

const style = () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding : 1.5rem;
    cursor: pointer;
    border-top: 2px solid lightgray;
    width : 90%;
    margin: 0 auto;
    user-select: none;

    p {
        font-weight: 500;
    }

    &:last-child {
        border-bottom: 2px solid lightgray;
    }
    img {
        width: 1rem;
        height: 1rem;
        margin-bottom: .5rem;
    }
`

export default WithStyled(style);