
import styleConstructor from "../utils/styleConstructor";

const executeOnce = (function() {
    let executed = false;
    let ComponentInstance;
    return function(WrapperC , { get , check} , gStyle) {
        if (!executed) {
            executed = true;
            ComponentInstance = WrapperC({check, get , gStyle});
            return ComponentInstance
        }else return ComponentInstance
    };
})();

const withStyleWrapper = WrappedComponent => props => {
    const style = styleConstructor(props.$style);
    const gStyle = {
        name : "ali",
        age : 20
    }
    
    const EnhancedWrapper = executeOnce(WrappedComponent , style , gStyle)
    return <EnhancedWrapper  {...props}>{props.children}</EnhancedWrapper>
}

export default withStyleWrapper;