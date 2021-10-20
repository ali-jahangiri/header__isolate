import React from 'react';
import Wrapper from "./carUsageStyle";

const CarUsage = ({ item = [] , selectHandler , selectedItem }) => {
    return <div>
        <div style={{ textAlign : "right" , paddingRight : "5%" , fontSize: ".9rem" , marginBottom : "1rem" }}>
            <p>انتخاب کاربری خودرو </p>
        </div>
      {
        item.map((el , i) => (
            <Wrapper isSelected={selectedItem === el.id} key={i} onClick={() => selectHandler(el.id)}>
                <p>{el.dataName}</p>
            </Wrapper>
        ))
      }
    </div>
}


export default CarUsage;