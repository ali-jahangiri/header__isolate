import React from 'react';
import CarGroupItem from './CarGroupItem';
import Wrapper from "./directoryStyle";

const CarGroupDirectory = ({ list = [] , onSelect , selectedItem }) => {
    // TODO replace Image component

    const resetSelectedItemHandler = () => {
        onSelect(null);
    }

    return (
        <Wrapper>
            <div className={`carGroupDirectory__overview ${selectedItem ? "carGroupDirectory__overview--visible" : ""}`}>
                <div className="carGroupDirectory__overview__otherChoice">
                    <button onClick={resetSelectedItemHandler}>Choice Other Brand</button>
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
                            // isSelected={selectedItem === el.id} 
                            selectHandler={onSelect} key={i} {...el} />
                    ))
                }
            </div>
        </Wrapper>
    )
}


export default CarGroupDirectory;