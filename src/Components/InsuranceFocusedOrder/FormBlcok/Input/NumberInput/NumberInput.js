import React from 'react';
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
    value , 
    onChange ,
    max, 
    min,
    step,
}) => {

    const incrementHandler = () => {
        const numberedValue = Number(makePureNumber(value));
        if(numberedValue < max) {
            onChange(numberedValue + step)
        }
    }
    
    
    const decrementHandler = () => {
        const numberedValue = Number(makePureNumber(value));
        if(numberedValue > min) {
            onChange(numberedValue - step)
        }
    }


    const controlledInputValueChangeHandler = value => {
        const numberedValue = Number(value);
        if(numberedValue > max) {
            onChange(max)
        }else onChange(value);
    }

    const comeBackToSafeNumber = () => {
        if(value < min) onChange(min);
    }

    const reachToMax = Number(makePureNumber(value)) === max;
    const reachToMin = Number(makePureNumber(value)) === min;

    return (
        <Wrapper>
            <div className="numberInput__btn">
                <button disabled={reachToMin} onClick={decrementHandler}>-</button>
            </div>
            <div className="numberInput__input">
                <input
                    onBlur={comeBackToSafeNumber}
                    value={numberSeparator(value || min)}
                    onChange={({ target : { value } }) => controlledInputValueChangeHandler(makePureNumber(value))}
                />
            </div>
            <div className="numberInput__btn">
                <button disabled={reachToMax} onClick={incrementHandler}>+</button>
            </div>
        </Wrapper>
    )
}

export default NumberInput;