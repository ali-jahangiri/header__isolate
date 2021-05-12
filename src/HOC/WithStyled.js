import { cloneElement } from "react";
import styled from "styled-components/macro";
import { styleConstructor } from "../utils/ImageFinder"

const WithStyled = (css , tagName) => {
    return ({ children , style , ...rest }) => {
        const { get , check } = styleConstructor(style)
        const Created = <div {...rest} css={css({ get , check })}>{children}</div>;
        return Created
    }
}


export default WithStyled;