import React from 'react';


const InputDetector = ({
    isCarCase,
    typesName,

}) => {
    switch(typesName) {
        case "DropDown" : 
            if(isCarCase) {

            }else {
                
            }
        case "Date" :
            return  ;
        case "CheckedForm" : 
            return ;
        case "" : 
            return ;
        case "Long" :
        case "Int" :
        case "CreateYear" : 
            return 
        case "Float" :
            return 
        default : return null
    }
}


export default InputDetector;