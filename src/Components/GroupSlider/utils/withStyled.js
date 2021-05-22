import styled from "styled-components";
import { styleConstructor } from "../../utils";

const WithStyled = (css , tagName) => {
    return ({ children , style , ...rest }) => {
        const { get , check } = styleConstructor(style)
        return <div {...rest} css={css({ get , check })}>{children}</div>;
    }
}

export default WithStyled;