import React from 'react';

import Select from "./Select"
import NumberInput from "./Input/NumberInput"
import MultiSelect from './MultiSelect/MultiSelect';
import DatePicker from "./DatePicker";
import CarGroupDirectory from './CarGroup/CarGroupDirectory';
import CarSelection from '../CarSelection/CarSelection';
import BlockSelect from './BlockSelect';

import CustomAppDatePicker from "./CustomAppDatePicker";

const InputDetector = ({
    isCarCase,
    typesName,
    formData = [],
    onChange,
    carGroup,
    value,
    nestedValue,
    formName,
    numberUnit = { max : 0 , min : 0 , step : 0 },
    placeHolder,
    setOverlayStyle,
    isActive,
}) => {
    switch(typesName) {
        case "DropDown" :
            if(isCarCase) {
                return <CarSelection
                            selectedUsage={nestedValue}
                            formName={formName}
                            exactCarList={formData} 
                            setOverlayStyle={setOverlayStyle} 
                            value={value}
                            onChange={onChange} 
                            carGroup={carGroup}
                        />
            }else {
                if(formData.length <= 4) return <BlockSelect value={value} formName={formName} onSelect={onChange} placeholder={placeHolder} options={formData} />
                else return <Select
                                isActive={isActive}
                                formName={formName} 
                                onSelect={onChange} 
                                placeholder={placeHolder} 
                                options={formData} />
            }
        case "Date" :
            return <CustomAppDatePicker
                        isCurrentlyActive={isActive}
                        green={"#C6D57E"} 
                        red={'#950101'} 
                        value={value} 
                        onChange={value => value && onChange(formName , value)} />
        // case "CheckedForm" : 
        //     return <MultiSelect onSelect={onChange} selectedList={value} list={formData} />
        case "Long" :
        case "Int" :
        case "Float" :
            return <NumberInput min={numberUnit.min} max={numberUnit.max} step={numberUnit.step} value={value} onChange={onChange} />
        case "CreateYear" : 
            return <Select
                        formName={formName}
                        options={formData} 
                        value={value} 
                        onSelect={onChange} />
        default : return null
    }
}


export default InputDetector;