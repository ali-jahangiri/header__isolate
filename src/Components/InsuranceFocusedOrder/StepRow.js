import React, {  useLayoutEffect, useRef, useState } from 'react';
// import NumberInput from './FormBlcok/Input/NumberInput/NumberInput';
import MultiSelect from './FormBlcok/MultiSelect/MultiSelect';
import Wrapper from "./stepRowStyle"


const LeftSvgIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z"/></svg>


const StepRow = ({
    lbLName , 
    isRequierd,
    typesName,
    ormData,
    index ,
    isActive,
    _debugFlattedList,
}) => {
    const [testValue, setTestValue] = useState([]);
    const headerRef = useRef();

    useLayoutEffect(()  => {
        if(isActive) {
            headerRef.current?.scrollIntoView({ behavior : "smooth" })
        }
    } , [isActive])
    
    return (
        <Wrapper isActive={isActive}>
            {
                !isActive && <div className="stepRow__preventUserInteract" />
            }
            <div ref={headerRef} className="stepRow__header">
                <div className="stepRow__header__help">
                    <div>
                        <span />
                        <p>راهنما</p>
                        <span />
                    </div>
                </div>
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
            <div className="stepRow__mainContent">
                {/* <Select options={[{ label : "ali" , value : "ali" } , { label : "ali" , value : "asd" } , { label : "ali" , value : "ali" }]} /> */}
                {/* <NumberInput step={10} max={99999} min={100} value={testValue} onChange={setTestValue} /> */}
                <MultiSelect selectedList={testValue} onSelect={setTestValue} list={[
                    {
                        name : "aut-repellendus-enim",
                        value : "qui-est-maxime"
                    },
                    {
                        name : "aut-repellendus-enim",
                        value : "temporibus-aliquid-cumque"
                    },
                    {
                        name : "aut-repellendus-enim",
                        value : "vel-enim-optio"
                    },
                    {
                        name : "aut-repellendus-enim",
                        value : "necessitatibus-at-sequi"
                    },
                    {
                        name : "aut-repellendus-enim",
                        value : "in-qui-minus"
                    },
                    {
                        name : "aut-repellendus-enim",
                        value : "et-iusto-voluptatem"
                    },
                    {
                        name : "aut-repellendus-enim",
                        value : "necessitatibus-et-eveniet"
                    },
                    {
                        name : "aut-repellendus-enim",
                        value : "atque-commodi-sed"
                    },
                ]} />
            </div>
        </Wrapper>
    )
}


export default StepRow;