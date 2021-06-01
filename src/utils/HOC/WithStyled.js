import styled from "styled-components/macro";
import { useContext } from "react";
import { styleConstructor } from "../utils"

// Import globalVariables context


const RenderComponent = ({ cssCallback , style ,  children , ...rest }) => {
    // const gStyle = useContext(Context);
    const { get , check } = styleConstructor(style)
    return (
        <div {...rest} css={cssCallback({ get , check })}>{children}</div>
    )
}

const WithStyled = (cssString , tagName) => {
    return ({ style ,  ...rest }) => <RenderComponent {...rest} style={style} cssCallback={cssString} />
}


export default WithStyled;