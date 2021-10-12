import React from 'react';
import ExactCarSelection from './ExactCarSelection';
import Wrapper from "./ExactDirectoryStyle";

const ExactCarDirectory = ({ itemList = [] , selectExactHandler}) => {
    return (
        <Wrapper>
            {
                itemList.map((el , i) => (
                    <ExactCarSelection 
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