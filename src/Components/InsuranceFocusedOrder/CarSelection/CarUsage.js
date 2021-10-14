import React from 'react';
import Wrapper from "./carUsageStyle";

const CarUsage = ({ item = [] , selectHandler , selectedItem }) => {
    
    return item.map((el , i) => (
        <Wrapper isSelected={selectedItem === el.id} key={i} onClick={() => selectHandler(el.id)}>
            <p>{el.dataName}</p>
        </Wrapper>
    ))
}


export default CarUsage;