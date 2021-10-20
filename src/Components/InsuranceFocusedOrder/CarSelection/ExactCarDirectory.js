import React from 'react';
import ExactCarSelection from './ExactCarSelection';
import Wrapper from "./ExactDirectoryStyle";

const ExactCarDirectory = ({ itemList = [] , selectExactHandler , selectedItem , selectExactUsageHandler , selectOtherCarHand , haveSelectedCarBefore }) => {
    return (
        <Wrapper>
            {
                itemList.map((el , i) => (
                    <ExactCarSelection
                        selectedBefore={haveSelectedCarBefore === el.id}
                        selectOtherCarHand={selectOtherCarHand}
                        selectExactUsageHandler={selectExactUsageHandler}
                        haveSomeThingSelected={selectedItem}
                        isSelected={el.id === selectedItem}
                        selectExactHandler={selectExactHandler} 
                        key={i}
                        index={haveSelectedCarBefore ? 0 : i + 1}
                        {...el} />
                ))
            }
        </Wrapper>
    )
}

export default ExactCarDirectory;