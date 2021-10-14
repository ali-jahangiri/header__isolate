import React, { useEffect, useState } from 'react';
import Wrapper from "./style";

const InsIntroSection = ({ insName , desc , goToNextStepHandler , shouldGetHide , currentStep , availableNextStepCount , introContinueHandler }) => {
    const [getHideAuto, setGetHideAuto] = useState(false);

    useEffect(() => {
        if(!shouldGetHide && !getHideAuto) {
            let timer = setTimeout(() => {
                setGetHideAuto(true);
                goToNextStepHandler();
                clearTimeout(timer);
            } , 5000);
        }
    } , [shouldGetHide , getHideAuto])


    const comeBackToIntroAfterAWhile = currentStep === null && availableNextStepCount > 0;

    return (
        <Wrapper shouldGetHide={shouldGetHide}>
            <div className="insIntroSection__title">
                <p>{insName}</p>
            </div>
            <div className="insIntroSection__desc">
                <p>{desc}</p>
            </div>
            <div className="insIntroSection__cta">
                <button onClick={() => comeBackToIntroAfterAWhile ? introContinueHandler() :  goToNextStepHandler()}>
                    {
                        comeBackToIntroAfterAWhile ? "Continue" : "Start Now"
                    }
                </button>
            </div>
        </Wrapper>
    )
}


export default InsIntroSection;