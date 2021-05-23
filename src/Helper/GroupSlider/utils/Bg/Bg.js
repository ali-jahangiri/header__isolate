import BgStyleWrapper from "./BgStyle";

/**
 * NOTE
 * background container of a inner component witch get componentStyle and filter the properties
 * witch start with "bg"
 */

const Bg = ({ children  , get , check , extendCss , ...restProps}) => (
    <BgStyleWrapper extendCss={extendCss} {...restProps} get={get} check={check}>
        {children}
    </BgStyleWrapper>
)
export default Bg;