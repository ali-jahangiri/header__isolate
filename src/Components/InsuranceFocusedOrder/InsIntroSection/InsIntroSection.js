import React, { useEffect, useRef, useState } from 'react';
import Wrapper from "./style";

const InsIntroSection = ({ insName , desc , goToNextStepHandler , shouldGetHide , currentStep , availableNextStepCount , introContinueHandler , submitted , redirectHandler , style }) => {
    const [getHideAuto, setGetHideAuto] = useState(false);
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            if(!shouldGetHide && !getHideAuto) {
                setGetHideAuto(true);
                goToNextStepHandler();
                clearTimeout(timerRef.current);
            }
        } , 5000);
    } , [])


    const comeBackToIntroAfterAWhile = currentStep === null && availableNextStepCount > 0;


    const innerGoNextHandler = () => {
        goToNextStepHandler();
        if(timerRef.current !== undefined) {
            clearTimeout(timerRef.current)
        }
    }

    return (
        <Wrapper style={style} submitted={submitted} shouldGetHide={shouldGetHide}>
            <div className="insIntroSection__title">
                <p>{insName}</p>
            </div>
            <div className="insIntroSection__desc">
                <p>{desc}</p>
            </div>
            <div className="insIntroSection__cta">
                <button onClick={() => submitted ? redirectHandler() : (comeBackToIntroAfterAWhile ? introContinueHandler() :  innerGoNextHandler())}>
                    {
                        submitted ? "ارسال به صفحه نتایج" : (comeBackToIntroAfterAWhile ? "ادامه" : "!شروع کنید")
                    }
                </button>
            </div>
        </Wrapper>
    )
}


export default InsIntroSection;