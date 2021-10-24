import React, {  useEffect, useRef } from 'react';
import InsRowHelper from './InsRowHelper/InsRowHelper';
import Wrapper from "./stepRowStyle"
import StepRowMainContent from './StepRowMainContent';


const LeftSvgIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z"/></svg>
const whiteListTypes = ["Long" , "Int" , "Float" , "CheckedForm"]


const StepRow = ({
    lbLName , 
    isRequierd,
    typesName,
    formData,
    index ,
    isActive,
    store,
    setStore,
    setIsPossibleToGoNextStep,
    isPossibleToGoNextStep,
    formName,
    carGroup,
    goToNextStepHandler,
    currentStage,
    setCurrentStage,
    availableNextStepCount,
    style,
    setAvailableNextStepCount,
    isInSubmitReview,
    ...rest
}) => {
    const headerRef = useRef();

    useEffect(function autoScrollToCurrentActiveRow () {
        if(isActive) {
            headerRef.current?.scrollIntoView({ behavior : "smooth" });
        }
    });

    useEffect(function nextBtnEnableHandler() {
        if(!isRequierd && isActive) return setIsPossibleToGoNextStep(true)
        if(isActive && store?.[formName]) {
            if(whiteListTypes.includes(typesName)) setIsPossibleToGoNextStep(true);

        }else if(isActive && whiteListTypes.slice(0 , 3).includes(typesName) && store?.[formName] === 0) {
            // handle zero number in NumberInput
            setIsPossibleToGoNextStep(true)
        }else if(isActive && !store?.[formName]) {
            setIsPossibleToGoNextStep(false);
        }
    } , [typesName , isPossibleToGoNextStep , isActive , store?.[formName]]);
    

    const onChange = (formName , value , canGoNextStepAutomatically = true) => {
        setStore(prev => ({
            ...prev,
            [formName] : value
        }));
        if(canGoNextStepAutomatically && !whiteListTypes.includes(typesName)) {
            goToNextStepHandler();
        };
    }

    useEffect(function fillStoreKeyForNonRequiredFiledHandler() {
        // if the current is not a required step , we should fill parent store to have current step formName in 'store'
        if(!isRequierd) onChange(formName , undefined , false);
    } , [isRequierd])

    // const jumpToCurrentItemHandler = () => {
    //     if(store?.[formName] || currentStage + availableNextStepCount === (index - 1)) {
    //         // headerRef.current.scrollIntoView({ behavior : "smooth" });
    //         // setCurrentStage(index - 1);
    //         // console.log(index , 'index' , availableNextStepCount , "avalble" , (index - 1) - availableNextStepCount , 'calc');
    //         // setAvailableNextStepCount(((index - 1) - availableNextStepCount))
    //     }
    // }

    return (
        <Wrapper style={style} isActive={isActive}>
            {
                !isActive && <div className="stepRow__preventUserInteract" />
            }
            <div ref={headerRef} className="stepRow__header">
                <InsRowHelper />
                <div style={{ display : "flex" , alignItems : "center" }}>
                    <div className="stepRow__header__label">
                        <p>{lbLName}</p>
                        {
                            !isRequierd && <p className="stepRow__header__label__optionalLabel">اختیاری</p>
                        }
                    </div>
                    <div className="stepRow__header__index">
                        <div>
                            <LeftSvgIcon />
                        </div>
                        <p>{index}</p>
                    </div>
                </div>
            </div>
            <StepRowMainContent
                style={style}
                goToNextStepHandler={goToNextStepHandler}
                isActive={isActive}
                carGroup={carGroup}
                formData={formData}
                formName={formName}
                isInSubmitReview={isInSubmitReview}
                onChange={onChange}
                store={store}
                typesName={typesName}
                {...rest}
            />
        </Wrapper>
    )
}


export default StepRow;