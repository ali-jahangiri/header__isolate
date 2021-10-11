import React, { useState } from 'react';
import { Select as LibrarySelectComponent } from 'antd';

import Wrapper from "./style";

const Select = ({ options = [{ label : "" , value : "" }] ,  }) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    return (
        <Wrapper>
            <LibrarySelectComponent
                placeholder="Type or Select One Option"
                onDropdownVisibleChange={setIsSelectOpen}
                className="customSelect"
                dropdownMenuStyle={{ backgroundColor : "#161820" , outline : "none" }}>
                {
                    options.map((el , i) => (
                        <LibrarySelectComponent.Option
                            style={{ backgroundColor :"transparent" , color : "white" }}
                            key={i} 
                            value={el.value}
                        >
                            <p>{el.label}</p>
                        </LibrarySelectComponent.Option>
                    ))
                }
            </LibrarySelectComponent>
            <div className={`customSelect__bottomDivider ${isSelectOpen ? "customSelect__bottomDivider--grow" : ""}`} />
        </Wrapper>
    )
}


export default Select;