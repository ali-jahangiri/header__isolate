import React from 'react';

import Select from "./Select"
import NumberInput from "./Input/NumberInput"
import MultiSelect from './MultiSelect/MultiSelect';
import DatePicker from "./DatePicker";
import CarGroupDirectory from './CarGroup/CarGroupDirectory';
import CarSelection from '../CarSelection/CarSelection';

const InputDetector = ({
    isCarCase,
    typesName,
    formData,
    onChange,
    carGroup,
    value,
    numberUnit = { max : 0 , min : 0 , step : 0 },
    placeHolder,
    setOverlayStyle,
}) => {
    switch(typesName) {
        case "DropDown" :
            if(isCarCase) {
                return <CarSelection exactCarList={formData} setOverlayStyle={setOverlayStyle} value={value} onChange={onChange} carGroup={carGroup} />
            }else return <Select placeholder={placeHolder} options={formData} />
        // case "Date" :
        //     return <DatePicker />
        // case "CheckedForm" : 
        //     return <MultiSelect onSelect={onChange} selectedList={value} list={formData} />
        // case "Long" :
        // case "Int" :
        // case "Float" :
        //     return <NumberInput min={numberUnit.min} max={numberUnit.max} step={numberUnit.step} value={value} onChange={onChange} />
        // case "CreateYear" : 
        //     return <Select options={formData} value={value} onSelect={onChange} />
        default : return null
    }
}


export default InputDetector;