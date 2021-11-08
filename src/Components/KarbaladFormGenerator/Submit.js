import React from 'react';
import Wrapper from "./submitStyle";

const Submit = ({  title }) => {
    return (
        <Wrapper>
            <button type="submit">{title || "ارسال"}</button>
        </Wrapper>
    )
}


export default Submit;