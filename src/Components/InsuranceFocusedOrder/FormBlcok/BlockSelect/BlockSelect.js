import React from 'react';
import Wrapper from "./style";
import Block from "./Block";

const BlockSelect = ({ options = [] , value , onSelect , formName , style }) => {
    
    const selectHandler = value => onSelect(formName , value);

    return (
        <Wrapper style={style}>
            <div className="blockSelect__itemContainer">
                {
                    options.map((el , i) => (
                        <Block style={style} isSelected={el.id === value} selectHandler={selectHandler} key={i} {...el} />
                    ))
                }
            </div>
        </Wrapper>
    )
}


export default BlockSelect;