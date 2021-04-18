
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    width: ${props => props.checkDefault("containerWidth") ? props.getStyles("containerWidth") : "100%"};
    display: flex;
    align-self: center;
    margin: ${props => props.checkDefault("containerMargin") ? props.getStyles("containerMargin") : 'auto'};
    border : ${props => props.checkDefault("containerBorder") ? props.getStyles("containerBorder") : "none"};
    border-radius : ${props => props.checkDefault("containerBorderRadius") ? props.getStyles("containerBorderRadius") : "0"};
    background-color : ${props => props.checkDefault("containerBgColor") ? props.getStyles('containerBgColor') : "white"};
    padding : ${props => props.checkDefault("containerPadding") ? props.getStyles("containerPadding") : 0};
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


const Container = ({ children , checkDefault , getStyles , ...rest}) => {
    return (
        <ContainerWrapper checkDefault={checkDefault} getStyles={getStyles} className="container" {...rest}>
        {children}
    </ContainerWrapper>
    )
}

export default Container