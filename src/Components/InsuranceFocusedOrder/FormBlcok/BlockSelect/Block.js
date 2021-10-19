import React from 'react';
import Wrapper from "./blockStyle";

const Block = ({ dataName , id  , selectHandler , isSelected }) => {
    return (
        <Wrapper isSelected={isSelected}>
            <button onClick={() => selectHandler(id)}>
                <p>{dataName}</p>
            </button>
        </Wrapper>
    )
}


export default Block;