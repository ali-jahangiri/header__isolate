import styled from "styled-components";
import withStyleWrapper from "../../playground/withStyleWrapper";

const SixEdgePolygonWrapper = ({ get , check }) => styled.div`
    width : 26.2rem;
    position : relative;
    @media(max-width : 700px) {width : 19rem;}
    
    .sixEdge {
        &__row {
            width : 100%;
            display : flex;
            justify-content : center;
            @media(max-width : 700px) {
                flex-direction : column;
                .sixEdge__wrapper {align-self : flex-start;}
                &:last-child {
                    .sixEdge__wrapper {align-self : flex-end;}
                }
            }
            &--withSpace {
                justify-content : space-between;
                margin : -5rem 0 ;
                @media(max-width : 700px) {
                    .sixEdge__wrapper {
                        align-self : flex-end;
                        &:last-child {align-self : flex-start;}
                        &:nth-child(2) {
                            margin-top : -4rem;
                        }
                    }
                }
            }
            &--center {
                margin : 0.5rem 0;
                img {
                    max-width : 6.5rem;
                    max-height : 7rem;
                }
                .sixEdge__item {
                    background-color : ${check("centerItemBgColor") ? get("centerItemBgColor") : ''}
                }
                @media(max-width : 700px) {
                        position : absolute;
                        top : 0;
                        right : 0;
                        margin : 0;
                    .sixEdge__wrapper {
                        div {
                        height : auto;
                        width : auto;
                        img {
                            max-width : 7rem;
                            max-height : 4rem;
                        }
                            clip-path : none;
                        }
                    }
                    .sixEdge__wrapper {
                        align-self : flex-end;
                    }
                }
            }
        }
        &__item {
            width : 10rem;
            height : 10rem;
            background-color : ${check("itemBgColor") ? get("itemBgColor") : 'red'};
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
            z-index : 0;
            display: flex;
            justify-content : center;
            align-items :center;
            flex-direction : column-reverse;
            font-size : ${check("itemFontSize") ? get("itemFontSize") : "1rem"};
            color : ${check("itemTextColor") ? get("itemTextColor") : "black"};
        }

        &__wrapper {
            position : relative;
            z-index : 4;
            &:hover {
                &::after {box-shadow: 0 0 81px 13px ${check("itemShadow") ? get("itemShadow") : "#000000b8"};}
            }
            &::after {
                content: "";
                width: 50%;
                height: 50%;
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                border-radius: 50%;
                z-index: 0;
                transform: translate(-50%, -50%);
                z-index : -1;
                transition : 0.3s;
            }
            }
    }
`


export default withStyleWrapper(SixEdgePolygonWrapper);