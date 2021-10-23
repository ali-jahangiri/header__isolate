import React, { useEffect, useState } from 'react';
import CarGroupDirectory from '../FormBlcok/CarGroup/CarGroupDirectory';
import EmptySearchResult from './EmptySearchResult';
import SearchBar from './SearchBar';

import ExactCarDirectory from './ExactCarDirectory';


const CarSelection = ({
    value ,
    style,
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
        if(id?.skipUserSelection) {
            console.log(id);
            setInnerStore(prev => ({
                ...prev ,
                carGroupId : {
                    ...id,
                    name : id.groupName,
                    imageUrl : id.groupIcon
                },
                selectedBeforeItem : id.carId
            }))
            selectExactHandler(id.carId)
        }else {
            setInnerStore(prev => ({
                ...prev ,
                carGroupId : id,
            }))
        }
        
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
    const exactCarForMapping = innerStore.search ? exactCarList.filter(el => el.dataName.includes(innerStore.search)) : [];

    return (
        <React.Fragment>
            <SearchBar
                style={style}
                shouldGetHide={innerStore.carGroupId}
                value={innerStore.search} 
                onChange={searchValueChangeHandler} />
            <CarGroupDirectory
                style={style}
                selectedItem={innerStore.carGroupId} 
                onSelect={selectCarGroupHandler} 
                list={itemForMapping}
                exactCarList={exactCarForMapping.map(item => {
                    const { imageUrl , name , id } = carGroup.find(carGroupItem => carGroupItem.id === item.carGroupId);
                    return {
                        id : item.id,
                        groupId : id,
                        name : item.dataName, 
                        groupIcon : imageUrl,
                        groupName : name,
                    }
                })}
             />
            {
                !itemForMapping.length && !exactCarForMapping.length && <EmptySearchResult />
            }
            <ExactCarDirectory
                style={style}
                haveSelectedCarBefore={innerStore?.selectedBeforeItem}
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