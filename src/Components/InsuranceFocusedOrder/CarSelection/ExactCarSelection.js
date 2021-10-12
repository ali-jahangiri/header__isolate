import React from 'react';
import Wrapper from "./exactCarStyle";

const ExactCarSelection = ({ 
        dataName, 
        hasNestedData , 
        nestedData , 
        nestedDataName , 
        id , 
        selectExactHandler , 
        index }) => {
    return (
        <Wrapper>
            <div onClick={() => selectExactHandler(id)} style={{ animationDelay : `${index * 100}ms` }}>
                <p>{dataName}</p>
            </div>
        </Wrapper>
    )
}

export default ExactCarSelection;