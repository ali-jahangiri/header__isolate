import styled, { css } from "styled-components";

const FlipCartWrapper = styled.div`
    perspective: ${props => props.perspective || "80rem"} ;
    .flipCart  {
        &__container {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: 0.5s;
            ${props => css`${props.containerStyle}`};
            & > div {
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                border-radius: 10px;
                ${props => css`${props.itemStyle}`};
                
            }
            &--active {
                transform: ${props => `rotate${props.direction.toUpperCase()}(180deg)`}; 
            }

        }
        &--frontSide {
            
        }

        &--backSide {
            position: absolute;
            top: 0;
            left: 0;
            transform: ${props => `rotate${props.direction.toUpperCase()}(180deg)`}; 
        }
    }
`




export default FlipCartWrapper;