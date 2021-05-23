import { css } from "styled-components";
import withStyleWrapper from "../withStyleWrapper";

// TODO add bg image support
const BgStyle = ({ check , get }) => css`
    background-color : ${check("bgColor") ? get("bgColor") : "transparent"};
    padding-top : ${check("bgPaddingTop") ? get("bgPaddingTop" , "px") : "0"};
    padding-bottom : ${check("bgPaddingButton") ? get("bgPaddingButton" , "px") : "0"};
    margin-top : ${check("bgMarginTop") ? get("bgMarginTop" , "px") : "0"};
    margin-bottom : ${check("bgMarginButton") ? get("bgMarginButton" , "px") : "0"};

    background-position : center;
    background-repeat : no-repeat;
    background-size: cover;
`;

export default withStyleWrapper()(BgStyle);