import { css } from "styled-components";
import WithStyled from "../../HOC/WithStyled";

const testStyle = ({ check , get }) => css`
    background-color : ${check("bgColor") ? get("bgColor") : "lightblue"};
`
export default WithStyled(testStyle , 'header')