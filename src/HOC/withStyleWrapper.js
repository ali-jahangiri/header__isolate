
import styled from "styled-components";
import styleConstructor from "../utils/styleConstructor";


const withStyleWrapper = (styledComponentTagname = 'div') => componentStyleCss => {
    // creation fas
    const Element = styled[styledComponentTagname]``;
    const executeOnce = (function() {
        let executed = false;
        let ComponentInstance;
        return function({ $style , children , ...rest }) {
            if (!executed) {
                const { get , check } = styleConstructor($style);
                executed = true;
                const style = componentStyleCss({ get , check });
                ComponentInstance = styled(Element)`${style}`;
                return <ComponentInstance {...rest}>{children}</ComponentInstance>
            }else return <ComponentInstance {...rest}>{children}</ComponentInstance>
        };
    })();
    return props => {
        // injection fas
        // TODO get static gStyle
        return executeOnce(props)
    }
}

export default withStyleWrapper;