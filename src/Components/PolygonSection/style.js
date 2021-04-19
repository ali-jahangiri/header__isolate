import styled from 'styled-components'

const PolygonWrapper = styled.div`
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
            color : ${({ $style }) => $style.check("polygonTextColor") ? $style.get("polygonTextColor") : "black"};
            background-color : lightblue;
            cursor: pointer;
            transition : 0.3s;

            img {
                width : 30%;
                height : 30%;
            }
            &:hover {
                background-color : ${({ $style }) => $style.check('polygonItemBgColorHover') ? $style.get("polygonItemBgColorHover") : "white"};
            }
        }
    }
`


export default PolygonWrapper;