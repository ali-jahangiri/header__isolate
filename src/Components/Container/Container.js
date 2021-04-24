import ContainerWrapper from './ContainerWrapper';

const Container = ({ children , $style , ...rest}) => {
    if(!Array.isArray($style)) throw new TypeError("invalid Styles list passed to Container component")
    console.log('inside container');
    return (
        <ContainerWrapper className="container" $style={$style}
        {...rest} >
            {children}
        </ContainerWrapper>
    )
}

export default Container;