import { Modal } from 'antd';
import React, { useState } from 'react';

import Wrapper from "./style";
import ModalStyle from './modalStyle';

// mock 
import mock from "../../mock";
import StepRow from './StepRow';
import InsIntroSection from './InsIntroSection/InsIntroSection';
import InsFocusStepperOverlay from './InsFocusStepperOverlay';


const InsuranceFocusedOrder = ({
    visible ,
    onClose
}) => {
    const [currentStep, setCurrentStep] = useState(null);
    const [store, setStore] = useState(null);
    const [availableNextStepCount, setAvailableNextStepCount] = useState(0);
    const [isPossibleToGoNextStep, setIsPossibleToGoNextStep] = useState(false);
    const [submitted, setSubmitted] = useState(false)

    const flattedStage = mock.pages.map(el => el.forms).flat(1).filter(el => el.typesName !== "Info");

    const nextStepHandler = () => {
        if(currentStep === null) {
            setCurrentStep(0);
        }else {
            let timer = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
                if(availableNextStepCount > 0) setAvailableNextStepCount(prev => prev - 1);
                clearTimeout(timer);
                // if user is navigating between stages , we don't need any delay for changing steps
            } , availableNextStepCount > 0 ? 0 : 350);
        }
    }
    

    const prevStepHandler = () => {
        if(currentStep === 0) {
            setCurrentStep(null);
        }else {
            setAvailableNextStepCount(prev => prev + 1);
            setCurrentStep(prev => prev - 1);
        };
    }

    const submitHandler = () => {
        console.log('submit' , store);
        let timeoutTimer = setTimeout(() => {
            setSubmitted(true);
            let internalCurrentStep = 0;
            let timer = setInterval(() => {
                if(internalCurrentStep === flattedStage.length) {
                    clearInterval(timer);
                    clearTimeout(timeoutTimer)
                }else {
                    setCurrentStep(prev => prev + 1)
                }
                internalCurrentStep++;
            } , 1000);
            
        } , 200)
        setCurrentStep(0);
        
    }

    const reachToEnd = currentStep === flattedStage.length;

    
    const introContinueHandler = () => {
        setCurrentStep(availableNextStepCount);
        setAvailableNextStepCount(0);
    }


    const redirectHandler = () => {

    }


    const closeEntireModal = () => {
        onClose(false);
        let timer = setTimeout(() => {
            setCurrentStep(null);
            setIsPossibleToGoNextStep(0);
            setStore(null);
            clearTimeout(timer);
        } , 500)
    }

    return (
        <React.Fragment>
            <ModalStyle />
            <Modal
                centered
                footer={null}
                closable={null}
                className="insFocus__modal"
                visible={!!visible}>
                <Wrapper>
                    <div className="insFocus__header">
                        <div className="insFocus__header__controller">
                            <button disabled={submitted} onClick={closeEntireModal}>بستن</button>
                        </div>
                        <div className="insFocus__header__title">
                            <p>عنوان</p>
                        </div>
                    </div>
                    <InsIntroSection
                        redirectHandler={redirectHandler}
                        submitted={submitted}
                        introContinueHandler={introContinueHandler}
                        availableNextStepCount={availableNextStepCount}
                        currentStep={currentStep}
                        goToNextStepHandler={() => visible && setCurrentStep(0)}
                        insName={mock.title} 
                        desc={mock.description}
                        shouldGetHide={(() => {
                            if(submitted) return false;
                            else if(currentStep !== null) return true
                        })()}
                        recoveryStepCount={0}
                     />
                    <div className="insFocus__container">
                        {
                            flattedStage.map((el , i) => (
                                <StepRow
                                    isPossibleToGoNextStep={isPossibleToGoNextStep}
                                    setIsPossibleToGoNextStep={setIsPossibleToGoNextStep}
                                    setCurrentStep={setCurrentStep}
                                    setCurrentStage={setCurrentStep}
                                    availableNextStepCount={availableNextStepCount}
                                    setAvailableNextStepCount={setAvailableNextStepCount}
                                    currentStage={currentStep}
                                    goToNextStepHandler={nextStepHandler}
                                    carGroup={mock.carGroup}
                                    store={store}
                                    setStore={setStore}
                                    isActive={currentStep === i}
                                    index={i + 1}
                                    key={i} 
                                    {...el} />
                                    ))
                        }
                        {
                            submitted && <div className="insFocus__preventUserChangeValueAfterSubmitOverlay" />
                        }
                    </div>
                    <div className={`insFocus__stepper ${submitted ? "insFocus__stepper--submitted" : ""}`}>
                        <InsFocusStepperOverlay shouldGetHide={currentStep !== null} />
                        <div className='insFocus__stepper__timeline'>
                            <div style={{
                                width: `${(currentStep + 1) / (flattedStage.length * 100) * 10000}%`
                            }} className="insFocus__stepper__timeline__activePart" />
                        </div>

                        <div className={`insFocus__stepper__controller ${submitted ? "insFocus__stepper__controller--hide" : ""}`}>
                            <button disabled={currentStep === null} className="insFocus__stepper__controller__prev" onClick={prevStepHandler}>قبلی</button>
                            <button
                                disabled={(() => {
                                    if(reachToEnd) return false
                                    if(isPossibleToGoNextStep || availableNextStepCount > 0) return false;
                                    else if(!isPossibleToGoNextStep || availableNextStepCount <= 0) {
                                        return true
                                    }
                                })()}
                                className="insFocus__stepper__controller__next" 
                                onClick={() => reachToEnd ? submitHandler() : nextStepHandler()}>
                                    {reachToEnd ? "اتمام" : "بعدی"}
                                </button>
                        </div>
                    </div>
                </Wrapper>
            </Modal>
        </React.Fragment>
    )
}

export default InsuranceFocusedOrder;