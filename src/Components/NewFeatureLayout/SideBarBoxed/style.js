import { css } from "styled-components";
import WithStyled from "../../../HOC/WithStyled";

const style = ({ get }) => css`
    height: 100vh;
    position: fixed;
    right: 0px;
    top: 0;
    z-index: 5555555;
    width : 150px;
    border-left: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .3s;
    background-color: white;


    ${({ isClosed }) => {
        console.log(isClosed , "isClosed ");
        
        if(!isClosed)
            return css`
                right: -160px;
            `;
        else return css`
                right: 0px;
            `
    }};

    .sideBarBoxed {


        &__openTrigger {
            display: flex;
            align-items: center;
            user-select: none;
            justify-content: center;
            cursor: pointer;
            position: absolute;
            left: -50%;
            top: 5%;
            background-color: ${get("openSideBarBgColor")};
            padding : 1rem;
            transform: translate(-50% , -50%);


            
            svg {
                width : 1rem;
                height: 1rem;
            }
        }

        &__itemContainer {
            margin-top: auto;
            width : 100%;
        }



        &__backTrigger {
            user-select: none;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-top: auto;
            padding : 1rem;
            border: 1px solid lightgray;
            width : 100%;
            color: lightgray;

            svg {
                fill: lightgray;
                width : 1rem;
                height: 1rem;
                margin-left: 1rem;
            }
        }
    }

`

export default WithStyled(style);