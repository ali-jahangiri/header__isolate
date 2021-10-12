import React, { useEffect, useState } from 'react';
import Wrapper from "./style";

const InsIntroSection = ({ insName , desc , goToNextStepHandler , shouldGetHide , recoveryStepCount }) => {
    const [getHideAuto, setGetHideAuto] = useState(false);
    // const [stepCountForContinue, setStepCountForContinue] = useState(0)

    useEffect(() => {
        if(!shouldGetHide && !getHideAuto) {
            let timer = setTimeout(() => {
                setGetHideAuto(true);
                goToNextStepHandler();
                clearTimeout(timer);
            } , 5000);
        }
    } , [shouldGetHide , getHideAuto])

    // useEffect(() => {
    //     setStepCountForContinue(recoveryStepCount);
    // } , [recoveryStepCount])

    return (
        <Wrapper shouldGetHide={shouldGetHide}>
            <div className="insIntroSection__title">
                <p>{insName}</p>
            </div>
            <div className="insIntroSection__desc">
                <p>{desc}</p>
            </div>
            <div className="insIntroSection__cta">
                <button onClick={goToNextStepHandler}>Start Now</button>
            </div>
        </Wrapper>
    )
}


export default InsIntroSection;