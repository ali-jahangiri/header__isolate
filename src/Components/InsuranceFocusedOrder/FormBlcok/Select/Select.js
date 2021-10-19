import React, { useState } from 'react';
import { Select as LibrarySelectComponent } from 'antd';

import Wrapper from "./style";
import { createGlobalStyle } from 'styled-components';

const OptionStyle = createGlobalStyle`
    
    .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
        background-color: #5392FF50 !important;
    }


    .customSelect__option {
        background-color: transparent;
        color: white !important;
        font-size: 1rem;
        padding: 1rem 0;
        padding-left: 1rem;
        display: flex;
        align-items: center;

        p {
            margin: 0;
        }

        & + .ant-select-dropdown-menu-item-active {
            background-color: #5392FF50 !important;
            & + .ant-select-dropdown-menu-item-selected {
                background-color: #5392FF90 !important;
            }
        }

    }


    .customSelect__optionContainer {
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
`

const Select = ({ 
    options = [{ id : "" , dataName : "" }] , 
    value , 
    onSelect , 
    placeholder,
    formName,
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const onSelectHandler = value => onSelect(formName , value);
    
    return (
        <Wrapper>
            <OptionStyle />
            <LibrarySelectComponent
                defaultValue={value || undefined}
                onChange={value => onSelectHandler(value)}
                placeholder={placeholder || "Type or Select One Option"}
                onDropdownVisibleChange={setIsSelectOpen}
                className="customSelect"
                showSearch
                optionFilterProp="label"
                dropdownMenuStyle={{ backgroundColor : "#161820" , outline : "none" }}
                dropdownClassName="customSelect__optionContainer">
                {
                    options.map((el , i) => (
                        <LibrarySelectComponent.Option
                            label={el.dataName.trim()}
                            className="customSelect__option"
                            key={i}
                            value={el.id}
                        >
                            <p>{el.dataName.trim()}</p>
                        </LibrarySelectComponent.Option>
                    ))
                }
            </LibrarySelectComponent>
            <div className={`customSelect__bottomDivider ${isSelectOpen ? "customSelect__bottomDivider--grow" : ""}`} />
        </Wrapper>
    )
}


export default Select;