import { Select } from 'antd';
import React, { useState } from 'react';
import Wrapper from "./style";

const MultiSelect = ({
    list = [],
    onSelect,
    selectedList = [],
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    return (
        <Wrapper haveList={!!selectedList.length}>
            <Select
                onChange={value => onSelect(value)}
                mode="multiple"
                placeholder="Type or Select One Option"
                onDropdownVisibleChange={setIsSelectOpen}
                dropdownMenuStyle={{ backgroundColor : "#161820" , outline : "none" }}

                >
                {
                    list.map((el , i) => (
                        <Select.Option key={i} style={{ backgroundColor : "transparent", color : "white" , fontSize : "1rem" }} value={el.value}>
                            <p>{el.name}</p>
                        </Select.Option>
                    ))
                }
            </Select>
            <div className={`bottomDivider ${isSelectOpen ? "bottomDivider--grow" : ""}`} />
        </Wrapper>
    )
}


export default MultiSelect;