import React, { useState } from 'react';
import { Select as LibrarySelectComponent } from 'antd';

import Wrapper from "./style";
import { createGlobalStyle } from 'styled-components';

const OptionStyle = createGlobalStyle`
    .customSelect__option {
        background-color: transparent;
        color: white;

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
    options = [{ label : "" , value : "" }] , 
    value , 
    onSelect , 
    openAutomatically,
    placeholder,
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    

    return (
        <Wrapper>
            <OptionStyle />
            <LibrarySelectComponent
                defaultValue={value || undefined}
                onChange={value => onSelect(value)}
                placeholder={placeholder || "Type or Select One Option"}
                onDropdownVisibleChange={setIsSelectOpen}
                className="customSelect"
                showSearch
                dropdownMenuStyle={{ backgroundColor : "#161820" , outline : "none" }}
                dropdownClassName="customSelect__optionContainer">
                {
                    options.map((el , i) => (
                        <LibrarySelectComponent.Option
                            className="customSelect__option"
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