
import styled from "styled-components";
import styleConstructor from "../utils/styleConstructor";

const executeOnce = (function() {
    let executed = false;
    let ComponentInstance;
    return function(WrapperC , { get , check} , gStyle , componentStyleCss) {
        if (!executed) {
            executed = true;
            const style = componentStyleCss({ get , check , gStyle});
            ComponentInstance = styled[WrapperC]`${style}`;
            ComponentInstance.styledComponentId = `${ComponentInstance.styledComponentId}${Math.random() * 2000}`
            return ComponentInstance
        }else return ComponentInstance
    };
})();

const withStyleWrapper = styledComponentTagname => componentStyleCss => props => {
    const style = styleConstructor(props.$style);
    const gStyle = {
        name : "ali",
        age : 20
    }
    const EnhancedWrapper = executeOnce(styledComponentTagname , style , gStyle , componentStyleCss)
    const CreatedComponent = <EnhancedWrapper  {...props}>{props.children}</EnhancedWrapper>
    console.log('created' , CreatedComponent);
    return CreatedComponent;
}

export default withStyleWrapper;