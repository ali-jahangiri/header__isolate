import React, { useEffect, useRef } from 'react';
import CarGroupItem from './CarGroupItem';
import Wrapper from "./directoryStyle";
import ExactCarItemGroup from "./ExactCarItemInGroup";

const CarGroupDirectory = ({ list = [] , onSelect , selectedItem , exactCarList }) => {
    // TODO replace Image component
    const overviewNodeRef = useRef();

    useEffect(() => {

    } , [])

    const resetSelectedItemHandler = () => {
        onSelect(null);
    }

    return (
        <Wrapper>
            <div ref={overviewNodeRef} className={`carGroupDirectory__overview ${selectedItem ? "carGroupDirectory__overview--visible" : ""}`}>
                <div className="carGroupDirectory__overview__otherChoice">
                    <button onClick={resetSelectedItemHandler}>
                        انتخاب شرکت سازنده
                    </button>
                </div>
                <div className="carGroupDirectory__overview__content">
                    <p>{selectedItem?.name}</p>
                    <img src={selectedItem?.imageUrl} alt="selected-car-group-brand-logo" />
                </div>
            </div>
            <div className={`carGroupDirectory__container ${selectedItem ? "carGroupDirectory__container--hide" : ""}`}>
                {
                    list.map((el , i) => (
                        <CarGroupItem
                            selectHandler={onSelect} key={i} {...el} />
                    ))
                }
                {
                    exactCarList?.map((el , i) => (
                        <ExactCarItemGroup 
                            onSelect={onSelect} 
                            key={i} 
                            {...el} />
                    ))
                }
            </div>
        </Wrapper>
    )
}


export default CarGroupDirectory;