import ContainerWrapper from './ContainerWrapper';

const Container = ({ children , ...rest}) =>  (
    <ContainerWrapper
        {...rest} >
            {children}
    </ContainerWrapper>
)

export default Container;