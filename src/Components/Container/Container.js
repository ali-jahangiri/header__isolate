
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    width: ${({ $style }) => $style.check("containerWidth") ? $style.get("containerWidth") : "100%"};
    display: flex;
    align-self: center;
    margin: ${({ $style }) => $style.check("containerMargin") ? $style.get("containerMargin") : 'auto'};
    border : ${({ $style }) => $style.check("containerBorder") ? $style.get("containerBorder") : "none"};
    border-radius : ${({ $style }) => $style.check("containerBorderRadius") ? $style.get("containerBorderRadius") : "0"};
    background-color : ${({ $style }) => $style.check("containerBgColor") ? $style.get('containerBgColor') : "white"};
    padding : ${({ $style }) => $style.check("containerPadding") ? $style.get("containerPadding") : 0};
    @media (min-width: 480px) {
         &&& {
             max-width : 480px;
         }
    }
    @media(min-width: 576px)  {
        &&& {
            max-width : 576px;
        }
    }
    @media(min-width : 768px) {
        &&& {
            max-width : 768px;
        }
    }
    @media(min-width : 992px) {
        &&& {
            max-width : 992px;
        }
    }
    @media(min-width : 1200px) {
        &&& {
            max-width : 1200px;
        }
    }
`


const Container = ({ children , $style , ...rest}) => {
    return (
        <ContainerWrapper $style={$style} className="container" {...rest}>
            {children}  
        </ContainerWrapper>
    )
}

export default Container