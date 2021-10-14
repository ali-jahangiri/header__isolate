import React, { useRef, useState } from 'react';
import CarUsage from './CarUsage';
import Wrapper from "./exactCarStyle";

const ExactCarSelection = ({ 
    dataName, 
    hasNestedData , 
    nestedData , 
    nestedDataName , 
    selectOtherCarHand,
    id , 
    selectExactHandler ,
    isSelected,
    index,
    haveSomeThingSelected,
    selectExactUsageHandler,
}) => {
    const [selectedUsage, setSelectedUsage] = useState(null);
    const usageContainerRef = useRef();
    
    // useLayoutEffect(() => {
    //     if(isSelected) {
    //         usageContainerRef.current.scrollIntoView({ behavior : "smooth" })
    //     }
    // } , [isSelected])

    const internalSelectUsageHandler = usageId => {
        selectExactUsageHandler(usageId);
        setSelectedUsage(usageId);
    }

    return (
        <Wrapper 
            isDisabled={haveSomeThingSelected && !isSelected} 
            isSelected={isSelected}>
            <div style={{ animationDelay : `${index * 100}ms` }}>
                <div
                    className="exactCarSelection__carNameContainer"
                    onClick={() => selectExactHandler(id)}
                >
                    <p>{dataName}</p>
                </div>
                {
                    haveSomeThingSelected && <div className="exactCarSelection__carNameChangeTrigger">
                        <p onClick={selectOtherCarHand}>Choice other Car</p>
                    </div>
                }
                {
                    isSelected && hasNestedData && <div ref={usageContainerRef} className="exactCarSelection__carTypeContainer">
                        <CarUsage
                            selectedItem={selectedUsage}
                            item={nestedData} 
                            selectHandler={internalSelectUsageHandler}
                         />
                    </div> 
                }
            </div>
        </Wrapper>
    )
}

export default ExactCarSelection;