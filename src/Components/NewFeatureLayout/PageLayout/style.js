import { css } from "styled-components";
import WithStyled from "../../../HOC/WithStyled";



const style = () => css`
    width : 100%;
    max-height: 100vh;
    display: flex;
    justify-content: space-between;




    .pageLayout {
        &__bigPicture {
            width: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            div {
                width : 100%;
                max-height: 100%;
            }
        }

        &__contentContainer {
            width : 50%;
            max-height: 100px;
            max-height: 100%;
            overflow-y: scroll;
            padding : 15px;
        }



        @media(max-width : 768px) {
            &__bigPicture {
                display: none;
            }

            &__contentContainer {
                width : 100%;
            }
        }
    }
`;


export default WithStyled(style);