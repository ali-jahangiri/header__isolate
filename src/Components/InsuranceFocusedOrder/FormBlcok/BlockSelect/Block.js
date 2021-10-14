import React from 'react';
import Wrapper from "./blockStyle";

const Block = ({ dataName , id  , selectHandler , isSelected }) => {
    return (
        <Wrapper isSelected={isSelected} onClick={() => selectHandler(id)}>
            <p>{dataName}</p>
        </Wrapper>
    )
}


export default Block;