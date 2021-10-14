import React from 'react';
import ExactCarSelection from './ExactCarSelection';
import Wrapper from "./ExactDirectoryStyle";

const ExactCarDirectory = ({ itemList = [] , selectExactHandler , selectedItem , selectExactUsageHandler , selectOtherCarHand }) => {
    return (
        <Wrapper>
            {
                itemList.map((el , i) => (
                    <ExactCarSelection
                        selectOtherCarHand={selectOtherCarHand}
                        selectExactUsageHandler={selectExactUsageHandler}
                        haveSomeThingSelected={selectedItem}
                        isSelected={el.id === selectedItem}
                        selectExactHandler={selectExactHandler} 
                        key={i}
                        index={i + 1}
                        {...el} />
                ))
            }
        </Wrapper>
    )
}

export default ExactCarDirectory;