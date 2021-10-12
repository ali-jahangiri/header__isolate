import React, {  useLayoutEffect, useRef, useState } from 'react';
// import NumberInput from './FormBlcok/Input/NumberInput/NumberInput';
import MultiSelect from './FormBlcok/MultiSelect/MultiSelect';
import InsRowHelper from './InsRowHelper/InsRowHelper';
import Wrapper from "./stepRowStyle"
import Select from "./FormBlcok/Select"
import InputDetector from './FormBlcok/InputDetector';
import StepRowMainContent from './StepRowMainContent';


const LeftSvgIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z"/></svg>


const carCaseChecker = formData => {
    if(formData[0]?.isCar) return true
}

const StepRow = ({
    lbLName , 
    isRequierd,
    typesName,
    formData,
    index ,
    isActive,
    _debugFlattedList,
    store,
    formName,
    carGroup,
    ...rest
}) => {
    const [testValue, setTestValue] = useState(null);
    const headerRef = useRef();

    console.log(_debugFlattedList);

    useLayoutEffect(()  => {
        if(isActive) {
            headerRef.current?.scrollIntoView({ behavior : "smooth" })
        }
    } , [isActive])
    
    const onChange = () => {

    }

    return (
        <Wrapper isActive={isActive}>
            {
                !isActive && <div className="stepRow__preventUserInteract" />
            }
            <div ref={headerRef} className="stepRow__header">
                <InsRowHelper />
                <div style={{ display : "flex" , alignItems : "center" }}>
                    <div className="stepRow__header__label">
                        <p>{lbLName}</p>
                    </div>
                    <div className="stepRow__header__index">
                        <div>
                        <LeftSvgIcon />
                        </div>
                        <p>{index}</p>
                    </div>
                </div>
            </div>
            <StepRowMainContent
                carGroup={carGroup}
                formData={formData}
                formName={formName}
                onChange={onChange}
                rest={rest}
                store={store}
                typesName={typesName}
            />
        </Wrapper>
    )
}


export default StepRow;