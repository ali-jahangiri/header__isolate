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
}) => {
    const [currentStep, setCurrentStep] = useState(null);
    const [store, setStore] = useState(null);
    const [availableNextStepCount, setAvailableNextStepCount] = useState(0);


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
        console.log('submit');
    }

    const reachToEnd = currentStep + 1 === flattedStage.length;

    console.log(store , "STORE");
    
    // console.log(availableNextStepCount, 'availableNextStepCount' , currentStep , "currentStep");

    const introContinueHandler = () => {
        setCurrentStep(availableNextStepCount);
        setAvailableNextStepCount(0);
    }

    console.log(availableNextStepCount , "available");

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
                        </div>
                        <div className="insFocus__header__title">
                            <p>Title</p>
                        </div>
                    </div>
                    <InsIntroSection
                        introContinueHandler={introContinueHandler}
                        availableNextStepCount={availableNextStepCount}
                        currentStep={currentStep}
                        goToNextStepHandler={() => setCurrentStep(0)}
                        insName={mock.title} 
                        desc={mock.description}
                        shouldGetHide={currentStep !== null}
                        recoveryStepCount={0}
                     />
                    <div className="insFocus__container">
                        {
                            flattedStage.map((el , i) => (
                                <StepRow
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
                    </div>
                    <div className="insFocus__stepper">
                        <InsFocusStepperOverlay shouldGetHide={currentStep !== null} />
                        <div className='insFocus__stepper__timeline'>
                            <div style={{
                                width: `${(currentStep + 1) / (flattedStage.length * 100) * 10000}%`
                            }} className="insFocus__stepper__timeline__activePart" />
                        </div>

                        <div className="insFocus__stepper__controller">
                            <button disabled={currentStep === null} className="insFocus__stepper__controller__prev" onClick={prevStepHandler}>Prev</button>
                            <button disabled={availableNextStepCount <= 0} className="insFocus__stepper__controller__next" onClick={() => reachToEnd ? submitHandler() : nextStepHandler()}>
                                {reachToEnd ? "Finish" : "Next"}
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </Modal>
        </React.Fragment>
    )
}

export default InsuranceFocusedOrder;