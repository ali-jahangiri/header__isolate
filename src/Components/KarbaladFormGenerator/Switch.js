import { Input } from 'antd';
import React, { useState } from 'react';
import Wrapper from "./switchStyle";

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z"/></svg>


const Switch = ({ filed : { options = [{ label : "" , value : "" }] , onChange , name, label , index , _selectedValue } , ...libraryProps }) => {
    const [showFlasher, setShowFlasher] = useState(false);
    console.log(libraryProps , "**LINAS**");

    const innerSelectHandler = value => {
        onChange(value, name , label , index);
        setShowFlasher(true);
        let timer = setTimeout(() => {
            setShowFlasher(false);
            clearTimeout(timer);
        } , 600)
    }
    
    return (
        <Wrapper>
            {
                options.map((el , i) => (
                    <div onClick={() => innerSelectHandler(el.value)} key={i} className={`switchItem ${_selectedValue === el.value ? "switchItem--selected" : ""}`}>
                        <div className={`switchFlasher ${showFlasher && _selectedValue === el.value ? "switchFlasher--show" : ""}`}>
                            <CheckIcon />
                        </div>
                        <Input value={_selectedValue} {...libraryProps} />
                        <div>{el.label}</div>
                    </div>
                ))
            }
        </Wrapper>
    )
}


export default Switch;