import React, { useState } from 'react';
import InputDetector from '../FormBlcok/InputDetector';


export function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };
  
const carCaseChecker = formData => {
    if(formData[0]?.isCar) return true
}

const StepRowMainContent = ({
    carGroup ,
    formData,
    formName,
    typesName ,
    onChange,
    store,
    rest
}) => {
    const [wasScrolled, setWasScrolled] = useState(false);
    const [overlayStyle, setOverlayStyle] = useState({});

    const scrollHandler = debounce(e => {
        if(e.target.scrollTop) {
            setWasScrolled(true)
        }else setWasScrolled(false);
    } , 50)

    

    return (
        <div onScroll={scrollHandler} className="stepRow__mainContent">
            <div style={overlayStyle} className={`stepRow__mainContent__scrollOverlayHelper ${wasScrolled ? "stepRow__mainContent__scrollOverlayHelper--visible" : ""}`} />
            <InputDetector
                setOverlayStyle={setOverlayStyle}
                carGroup={carGroup}
                isCarCase={carCaseChecker(formData)}
                formData={formData} 
                typesName={typesName} 
                onChange={onChange}
                formName={formName}
                nestedValue={store?.[`Nested_${formName}`]}
                value={store?.[formName] || ''}
                {...rest}
            />
        </div>
    )
}


export default StepRowMainContent