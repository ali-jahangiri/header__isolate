import React, { useState } from 'react';
import Wrapper from "./searchBarStyle";

const SearchIconSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>

const SearchBar = ({ value , onChange , shouldGetHide }) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <Wrapper getHide={shouldGetHide} isFocused={isFocused}>
            <div>
                <SearchIconSvg />
            </div>
            <input
                onFocus={setIsFocused}
                onBlur={() => setIsFocused(false)}
                value={value} 
                onChange={({ target : { value } }) => onChange(value)} 
                placeholder="Search For car name"

            />
        </Wrapper>
    )
}


export default SearchBar;