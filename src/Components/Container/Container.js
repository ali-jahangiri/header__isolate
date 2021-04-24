import ContainerWrapper from './ContainerWrapper';


const Container = ({ children , $style , ...rest}) => {
    if(!Array.isArray($style)) throw new TypeError("invalid Styles list passed to Container component")
    return (
        <ContainerWrapper $style={$style}
        {...rest} >
            {children}
        </ContainerWrapper>
    )
}

export default Container;