import { css } from "styled-components";
import withStyleWrapper from "../../HOC/withStyleWrapper";

const ContainerWrapper = ({ get , check }) => css`
        width: ${check("containerWidth") ? get("containerWidth") : "100%"};
        display: flex;
        align-self: center;
        margin: ${ check("containerMargin") ? get("containerMargin") : 'auto'};
        border : ${ check("containerBorder") ? get("containerBorder") : "none"};
        border-radius : ${ check("containerBorderRadius") ? get("containerBorderRadius") : "0"};
        background-color : ${ check("containerBgColor") ? get('containerBgColor') : "white"};
        padding : ${check("containerPadding") ? get("containerPadding") : 0};

        @media (min-width: 480px) {
             &&& {max-width : 480px;}
        }
        @media(min-width: 576px)  {
            &&& {max-width : 576px;}
        }
        @media(min-width : 768px) {
            &&& {max-width : 768px;}
        }
        @media(min-width : 992px) {
            &&& {max-width : 992px;}
        }
        @media(min-width : 1200px) {
            &&& {max-width : 1200px;}
        }
`

const Wrapper = withStyleWrapper('div')(ContainerWrapper);
export default Wrapper;