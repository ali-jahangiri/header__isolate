import React from 'react';
import { createGlobalStyle } from 'styled-components';


const ModalStyle = createGlobalStyle`
    .insFocus__modal {
        width: 100vw !important;
        height: 100%;
        padding: 0;
        
        .ant-modal-content {
            padding: 0;
        }

        .ant-modal-content {
            height: 100%;
        }
        
        .ant-modal-body {
            padding: 0;
            height: 100%;
        }
    }
`

export default ModalStyle;