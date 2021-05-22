import styled , { css } from "styled-components";

const BgStyleWrapper = styled.div`
    background-color : ${({ get , check }) => check("bgColor") ? get("bgColor") : "transparent"};
    padding-top : ${({ get , check }) => check("bgPaddingTop") ? get("bgPaddingTop" , "px") : "0"};
    padding-bottom : ${({ get , check }) => check("bgPaddingButton") ? get("bgPaddingButton" , "px") : "0"};
    margin-top : ${({ get , check }) => check("bgMarginTop") ? get("bgMarginTop" , "px") : "0"};
    margin-bottom : ${({ get , check }) => check("bgMarginButton") ? get("bgMarginButton" , "px") : "0"};

    background-position : center;
    background-size: cover;
    background-repeat : no-repeat;
    ${({ extendCss }) => css`${extendCss}`};
`;

export default BgStyleWrapper;