import React, { useEffect, useState } from 'react';
import CarGroupDirectory from '../FormBlcok/CarGroup/CarGroupDirectory';
import EmptySearchResult from './EmptySearchResult';
import SearchBar from './SearchBar';

import ExactCarDirectory from './ExactCarDirectory';

const CarSelection = ({
    value , 
    onChange,
    carGroup = [],
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
            carGroupId : id
        }))
    }
    
    
    const selectExactHandler = () => {

    }


    useEffect(() => setOverlayStyle({ top : 45 }) , [])
    
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
                itemList={exactCarList.filter(el => el.carGroupId === innerStore.carGroupId?.id)} 
                selectExactHandler={selectExactHandler}
            />
        </React.Fragment>
    )
}


export default CarSelection;