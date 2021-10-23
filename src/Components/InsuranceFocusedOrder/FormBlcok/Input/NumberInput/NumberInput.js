import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Wrapper from "./style";


const makePureNumber = (string = '') => Number(String(string).replace(/\W+/g, ''))
const numberSeparator = number => {
    const endResult = [];
    String(number)
      .split("")
      .reverse()
      .forEach((el, index) => {
        if (!(index % 3) && index) endResult.push(",");
        endResult.push(el);
      });
    return endResult.reverse().join("");
}


const NumberInput = ({
    onChange ,
    max, 
    min,
    style,
    value, 
    step,
    submitHandler,
    isActive,
    formName,
}) => {
    const inputRef = useRef();
    const [haveInvalidInputNumber, setHaveInvalidInputNumber] = useState(false);

    const innerChangeHandler = value => onChange(formName , value);

    const incrementHandler = () => {
        const numberedValue = Number(makePureNumber(value));
        if(numberedValue < max) {
            innerChangeHandler(numberedValue + step)
        }
    }
    
    
    const decrementHandler = () => {
        const numberedValue = Number(makePureNumber(value));
        if(numberedValue > min) innerChangeHandler(numberedValue - step)
    }


    const controlledInputValueChangeHandler = value => {
        const numberedValue = Number(value);
        if(numberedValue > max) {
            innerChangeHandler(max)
        }else innerChangeHandler(value);
    }

    const comeBackToSafeNumberHandler = () => {
        if(+value < min) {
            innerChangeHandler(min);
            setHaveInvalidInputNumber(true);
            let timer = setTimeout(() => {
                setHaveInvalidInputNumber(false);
                clearTimeout(timer)
            } , 500) 
        };
    }


    const formSubmitHandler = e => {
        e.preventDefault();
        if(haveValidNumberValue && isActive) {
            if(!value) onChange(formName , usageNumberValue);
            submitHandler();
        }
    }

    const reachToMax = Number(makePureNumber(value)) >= max;
    const reachToMin = !value || Number(makePureNumber(value)) <= min;
    const haveValidNumberValue = Number(value) >= min || Number(value) <= max;
    const usageNumberValue = value || min



    useLayoutEffect(() => {
        console.log(formName , isActive);
        let timer = 0;
        if(inputRef.current && isActive) {
            timer = setTimeout(() => {
                inputRef.current.focus();
                clearTimeout(timer);
            } , 700)
        }else if(!isActive && timer) clearTimeout(timer);
    } , [inputRef.current , isActive])


    useEffect(function initialRenderMinNumberLiftToStoreHandler() {
        innerChangeHandler(min);
    } , [])

    return (
        <Wrapper style={style}>
            <div className="numberInput__btn">
                <button disabled={reachToMin} onClick={decrementHandler}>-</button>
            </div>
            <div className={`numberInput__input ${haveInvalidInputNumber ? "numberInput__input--invalidForced" : ""}`}>
                <form onSubmit={formSubmitHandler}>
                    <input
                        ref={inputRef}
                        onBlur={comeBackToSafeNumberHandler}
                        defaultValue={value || min}
                        value={numberSeparator(value)}
                        onChange={({ target : { value } }) => controlledInputValueChangeHandler(makePureNumber(value))}
                    />
                </form>
            </div>
            <div className="numberInput__btn">
                <button disabled={reachToMax} onClick={incrementHandler}>+</button>
            </div>
        </Wrapper>
    )
}

export default NumberInput;