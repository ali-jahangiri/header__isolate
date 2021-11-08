import React from 'react';

import Wrapper from "./groupHeaderStyle";

const GroupHeader =  ({ title , icon , desc }) => {
    return (
        <Wrapper>
            <div className="formGroupHeader__details">
                <p>{title}</p>
                <p>{desc}</p>
            </div>
            <div className="formGroupHeader__icon">
                {
                    icon && <img src={icon} alt="form-group-icon" />
                }
            </div>
        </Wrapper>
    )
}


export default GroupHeader;