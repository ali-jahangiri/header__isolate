import styled from 'styled-components'

const PolygonWrapper = styled.div`
    width : 100%;
    justify-content : space-between;
    

    .polygonSection {
        &__row {
            width : 100%;
            justify-content : space-between;
            display: flex;

            
            @media(max-width : 768px ) {
                flex-wrap : wrap;
               
            }
            // middle row
            &:nth-child(2n) {
                width : calc(100% - ${props => props.checkDefault("countOfItemInOneRow") ? `${100 / (Number(props.getStyles("countOfItemInOneRow")))}%` :  "83%" });
                margin: -4rem auto;
                @media(max-width : 768px ) {
                width : 100%;
                margin : 1rem 0 ;
                align-items : flex-end;
            }
            }
        }
        &__item {
            position : relative;
            flex : 1;
            margin : 1rem 0;

            @media(max-width : 768px ) {
                flex : 50%;
                &:nth-child(3n) {
                    flex : 100%;
                    margin : -5rem auto;
                    div {
                        width : 11rem;
                        margin : 1rem auto;
                    }
                }
            }
            &:hover {
                &::after {
                    box-shadow: 0 0 100px #000000;
                }
            }
            div {
                /* // use this formula calc(100% - ${props => props}) */
                width : calc(100% - 1%);
                margin : auto;
                background-color : lightblue;
                height : 15rem;
                text-align : center;
                -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                z-index : 50;
                position : relative;
                display : flex;
                justify-content : center;
                align-items : center;
                cursor: pointer;

                /* shadow of polygon */
                /* &::after {
                content: "";
                width: 64%;
                height: 20%;
                position: absolute;
                bottom: 17%;
                left: 50%;
                z-index: 3;
                transform: translateX(-50%);
                transition : 0.3s;
                } */

                @media(max-width : 768px) {
                    width : 11rem;
                }
            }
            
        }
    }
`


export default PolygonWrapper