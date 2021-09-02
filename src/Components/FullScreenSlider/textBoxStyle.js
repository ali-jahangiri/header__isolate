import { css } from "styled-components";
import WithStyled from "../../HOC/WithStyled";

const style = ({ get , check }) => css`
    width : 100%;
    height : 25rem;
    padding : 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
   
    .textBox {
        &__title {
            font-size: 2rem;
        }
        &__ctaContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width : 100%;
            margin-top: .5rem;
            
            svg {
                width : 1rem;
                height: 1rem;
                fill: white;
                margin: 0 .5rem;
                transition: .3s;
            }

            &:hover {
                svg {
                    transform: translateX(-5px);
                }
            }
        }
    }
`;

export default WithStyled(style)