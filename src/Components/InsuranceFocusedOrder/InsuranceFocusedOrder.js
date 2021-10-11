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
    setIsVisible
 }) => {
    const [currentStep, setCurrentStep] = useState(null);
    const [store, setStore] = useState(null);
    

    
    const flattedStage = mock.pages.map(el => el.forms).flat(1).filter(el => el.typesName !== "Info");

    const nextStepHandler = () => {
        setCurrentStep(prev => prev + 1)
    }


    const prevStepHandler = () => {
        setCurrentStep(prev => prev - 1);
    }

    const submitHandler = () => {
        console.log('submit');
    }


    const reachToEnd = currentStep + 1 === flattedStage.length;
    const isInStartPoint = currentStep === 0;




    return (
        <React.Fragment>
            <ModalStyle />
            <Modal
                centered
                footer={null}
                closable={null}
                className="insFocus__modal"
                visible={visible}>
                <Wrapper>
                    <div className="insFocus__header">
                        <div className="insFocus__header__controller">

                        </div>
                        <div className="insFocus__header__title">
                            <p>Title</p>                            
                        </div>
                    </div>
                    <InsIntroSection 
                        goToNextStepHandler={() => setCurrentStep(0)} 
                        insName={mock.title} 
                        desc={mock.description}
                        shouldGetHide={currentStep >= 0}
                        recoveryStepCount={0}
                     />
                    <div className="insFocus__container">
                        {
                            flattedStage.map((el , i) => (
                                <StepRow
                                    _debugFlattedList={flattedStage}
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
                            <button disabled={currentStep <= -1} className="insFocus__stepper__controller__prev" onClick={prevStepHandler}>Prev</button>
                            <button className="insFocus__stepper__controller__next" onClick={() => reachToEnd ? submitHandler() : nextStepHandler()}>
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