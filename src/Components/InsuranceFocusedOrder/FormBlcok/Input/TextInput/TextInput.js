import React from 'react';

import Wrapper from "./style";

const TextInput = ({ value , onChange }) => {
    return (
        <Wrapper>
            <input
                placeholder="Enter something"
                value={value} 
                onChange={({ target : { value } }) => onChange(value)} />
        </Wrapper>
    )
}


export default TextInput;