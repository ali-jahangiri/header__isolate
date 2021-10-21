import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import Wrapper from "./style";
import { createGlobalStyle } from "styled-components"

const OptionContainerStyle = createGlobalStyle`
    .customMultiSelect {

        &__option {
            padding: 1rem 0;
            padding-left: 1rem;
            display: flex;
            align-items: center;

            p {
                margin: 0;
            }

            .ant-select-selected-icon {
                background-color: #5392FF10;
                border-radius: 5px;
                padding : .5rem;
            }

            & + .ant-select-dropdown-menu-item-selected {
                .ant-select-selected-icon {
                    border: 2px solid #5392FF90 !important;
                    background-color: #5392FF50;
                }
            }
        }

        &__optionContainer {
            ul {
                ::-webkit-scrollbar {
                    width: 10px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }

                ::-webkit-scrollbar-thumb {
                    background: #5392FF50;
                    border-radius: 3px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: #5392FF;
                }
            }
        }
    }
`

const MultiSelect = ({
    list = [],
    onSelect,
    formName,
    isActive,
    isInSubmitReview,
    selectedList = [],
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    useEffect(() => {
        if(isActive && !selectedList.length && !isInSubmitReview) {
            let timer = setTimeout(() => {
                setIsSelectOpen(true);
                clearTimeout(timer);
            } , 600);
        }else {
            setIsSelectOpen(false)
        }
    } , [isActive , selectedList , isInSubmitReview]);

    if(isActive) {
        console.log(isSelectOpen);
    }

    return (
        <Wrapper haveList={!!selectedList.length}>
            <OptionContainerStyle />
            <Select
                onBlur={() => setIsSelectOpen(false)}
                onDropdownVisibleChange={setIsSelectOpen}
                onChange={value => {
                    onSelect(formName , value , false);
                    setIsSelectOpen(true)
                }}
                mode="multiple"
                showSearch
                open={isSelectOpen}
                optionFilterProp="label"
                placeholder="یک یا چند گزینه را انتخاب کنید"
                dropdownMenuStyle={{ backgroundColor : "#161820" , outline : "none" }}
                dropdownClassName="customMultiSelect__optionContainer">
                {
                    list.map((el , i) => (
                        <Select.Option  
                            key={i}
                            className="customMultiSelect__option"
                            style={{ backgroundColor : "transparent", color : "white" , fontSize : "1rem" }}  
                            value={el.id}>
                            <p>{el.dataName.trim()}</p>
                        </Select.Option>
                    ))
                }
            </Select>
            <div className={`bottomDivider ${isSelectOpen ? "bottomDivider--grow" : ""}`} />
        </Wrapper>
    )
}


export default MultiSelect;