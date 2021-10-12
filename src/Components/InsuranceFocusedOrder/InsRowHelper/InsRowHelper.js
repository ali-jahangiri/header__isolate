import { Popover } from 'antd';
import React from 'react';

const ContentContainer = ({ content }) => {
    return (
        <div className="stepRow__header__help__content">
            <p>{content}</p>
        </div>
    )
}

const InsRowHelper = ({ content }) => {
  return (
        <div className="stepRow__header__help">
            <Popover 
                content={<ContentContainer content={content} />}  
                mouseEnterDelay={1.3} 
                trigger="hover" 
                placement="bottomLeft"
            >
                <div>
                    <span />
                    <p>راهنما</p>
                    <span />
                </div>
            </Popover>
         </div>
    )
}


export default InsRowHelper;