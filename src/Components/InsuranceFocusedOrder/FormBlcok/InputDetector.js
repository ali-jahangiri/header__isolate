import React from 'react';

import Select from "./Select"
import NumberInput from "./Input/NumberInput"
import MultiSelect from './MultiSelect/MultiSelect';
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
    placeHolder,
    goToNextStepHandler,
    maxNumber,
    style,
    step,
    minNumber,
    setOverlayStyle,
    isActive,
    isInSubmitReview,
}) => {
    switch(typesName) {
        case "DropDown" :
            if(isCarCase) {
                return <CarSelection
                            style={style}
                            selectedUsage={nestedValue}
                            formName={formName}
                            exactCarList={formData} 
                            setOverlayStyle={setOverlayStyle} 
                            value={value}
                            onChange={onChange} 
                            carGroup={carGroup}
                        />
            }else {
                if(formData.length <= 4) return <BlockSelect
                                                    style={style}
                                                    value={value} 
                                                    formName={formName} 
                                                    onSelect={onChange} 
                                                    placeholder={placeHolder} 
                                                    options={formData} />
                else return <Select
                                style={style}
                                value={value}
                                otherTest={isActive}
                                formName={formName}
                                onSelect={onChange}
                                placeholder={placeHolder} 
                                options={formData} />
            }
        case "Date" :
            return <CustomAppDatePicker
                        style={style}
                        isCurrentlyActive={isActive}
                        green={"#C6D57E"} 
                        red={'#950101'} 
                        value={value} 
                        onChange={value => value && onChange(formName , value)} />
        case "CheckedForm" : 
            return <MultiSelect
                        isInSubmitReview={isInSubmitReview}
                        isActive={isActive}
                        style={style}
                        placeholder={placeHolder} 
                        formName={formName} 
                        onSelect={onChange} 
                        selectedList={value} 
                        list={formData} />
        case "Long" :
        case "Int" :
        case "Float" :
            return <NumberInput
                        isInSubmitReview={isInSubmitReview}
                        style={style}
                        isActive={isActive}
                        submitHandler={goToNextStepHandler}
                        formName={formName}
                        min={minNumber || 0}
                        max={maxNumber || 99999999999}
                        step={step || 1000}
                        value={value || 0}
                        onChange={onChange} />
        case "CreateYear" : 
            return <Select
                        style={style}
                        formName={formName}
                        options={formData} 
                        value={value}
                        onSelect={onChange} />
        default : return null
    }
}


export default InputDetector;