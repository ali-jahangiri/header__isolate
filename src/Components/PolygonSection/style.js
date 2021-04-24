import { css } from 'styled-components'
import withStyleWrapper from '../../HOC/withStyleWrapper';

const polygonStyle = ({ get , check }) => css`
    width : 100%;
    justify-content : space-between;
    
    .polygonSection {
        &__item {
            width : 100%;
            height : 100%;
            display : flex;
            justify-content : center;
            align-items : center;
            flex-direction : column;
            color : ${ check("polygonTextColor") ? get("polygonTextColor") : "black"};
            background-color : lightblue;
            cursor: pointer;
            transition : 0.3s;

            img {
                width : 30%;
                height : 30%;
            }
            &:hover {
                background-color : ${check('polygonItemBgColorHover') ? get("polygonItemBgColorHover") : "white"};
            }
        }
    }
`


export default withStyleWrapper()(polygonStyle);