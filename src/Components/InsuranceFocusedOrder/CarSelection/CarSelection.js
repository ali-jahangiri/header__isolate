import React, { useEffect, useState } from 'react';
import CarGroupDirectory from '../FormBlcok/CarGroup/CarGroupDirectory';
import EmptySearchResult from './EmptySearchResult';
import SearchBar from './SearchBar';

import ExactCarDirectory from './ExactCarDirectory';
import { unstable_batchedUpdates } from 'react-dom';

const CarSelection = ({
    value , 
    onChange,
    formName,
    carGroup = [],
    selectedUsage,
    setOverlayStyle ,
    exactCarList = [],
}) => {
    const [innerStore, setInnerStore] = useState({ search : "" , carGroupId : null });

    
    const searchValueChangeHandler = value => {
        setInnerStore(prev => ({
            ...prev,
            search : value
        }))
    }
    
    const selectCarGroupHandler = id => {
        setInnerStore(prev => ({
            ...prev ,
            carGroupId : id,
        }))
        if(!id) onChange(formName , undefined , false)
    }
    
    
    
    const selectExactHandler = carId => {
        onChange(formName , carId , false);
    }

    const selectUsageHandler = usageId => {
        onChange(`Nested_${formName}` , usageId);
    }


    useEffect(function passOverlayStyleToParentHandler (){
        if(!innerStore.carGroupId) {
            setOverlayStyle({ top : 45 })
        }else setOverlayStyle({});
    } , [innerStore])
    
    
    const selectOtherCarHand = () => onChange(formName , undefined , false)
    
    const itemForMapping = !innerStore.search ? carGroup : carGroup.filter(el => el.name.includes(innerStore.search))
    
    return (
        <React.Fragment>
            <SearchBar
                shouldGetHide={innerStore.carGroupId}
                value={innerStore.search} 
                onChange={searchValueChangeHandler} />
            <CarGroupDirectory
                selectedItem={innerStore.carGroupId} 
                onSelect={selectCarGroupHandler} 
                list={itemForMapping}
             />
            {
                !itemForMapping.length && <EmptySearchResult />
            }
            <ExactCarDirectory
                selectOtherCarHand={selectOtherCarHand}
                selectedItem={value}
                selectedUsage={selectedUsage}
                itemList={exactCarList.filter(el => el.carGroupId === innerStore.carGroupId?.id)} 
                selectExactHandler={selectExactHandler}
                selectExactUsageHandler={selectUsageHandler}
            />
        </React.Fragment>
    )
}


export default CarSelection;