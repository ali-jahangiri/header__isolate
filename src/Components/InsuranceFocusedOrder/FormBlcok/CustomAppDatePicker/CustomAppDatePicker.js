import { Drawer, Input, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from "react-modern-calendar-datepicker";
import jalaliday from "jalaliday";
import dayjs from 'dayjs';
import { createGlobalStyle, css } from 'styled-components';



import ModalWrapper from "./modalStyle";
import './style.css'
import useMediaQuery from '../../../../utils/Hooks/useMediaQuery/useMediaQuery';
import MediaQueryProvider from '../../../../utils/Hooks/useMediaQuery/MediaQueryProvider';


dayjs.extend(jalaliday);


const makeTwoDigit = input => {
    if(Number(input) < 10) return `0${Number(input)}`;
    return input
}

const makeValidDateString = ({ day , month , year }) => `${year}/${makeTwoDigit(month)}/${makeTwoDigit(day)}`;

const makeValidDateObject = (string = "") => {
    if(string) {
        const [year , month , day] = string.split("/");
        return {
            year : +year,
            month : +month,
            day : +day
        }

    }
    return null
}


const TodayIconSvg = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>بازگشت به امروز</title><path d="M17.707,13.121a1,1,0,0,0-1.414,0L13,16.413,12.993,6a1,1,0,0,0-2,0L11,16.414,7.707,13.121a1,1,0,1,0-1.414,1.414l3.585,3.586a3,3,0,0,0,4.243,0l3.586-3.586A1,1,0,0,0,17.707,13.121Z"/></svg>


const regex = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/;


const GlobalStyleForPortalScop = createGlobalStyle`
    ${({ primary }) => css`
        .customAppDatePicker__frontInput {
            background-color: transparent;
            border: 2px solid ${primary};
            padding: 1.7rem 0;
            cursor : pointer;
            background-color: ${primary + 30};
            margin-top: .5rem;
            color: white;
            font-size: 1rem;
            
            
            &::placeholder {
                color: white;
                font-size: 1rem;
            }


            &:hover {
                border: 2px solid ${primary};
            }

            &--haveValue {
                letter-spacing: 2px;
                background-color: ${primary + 60};
            }

        }


        .customAppDatePicker__modal {

            & .ant-drawer-body {
                background-color: ${primary + 50};
            }

            & .ant-modal-content {
                background: black;
            }
            
            & .ant-modal-body {
                background: ${primary + 50};
                border: 2px solid ${primary + 80};
                border-radius: 5px;
            }

            & .ant-drawer-content-wrapper {
                width: 100vw !important;
            }
            
            & .ant-drawer-close {
                display: none !important;
            }
            
            & .ant-drawer-wrapper-body {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                background-color: black;
            }

            & .ant-drawer-body {
                width: 100%;
                height: 100%;

                & > div {
                    display: flex;
                    flex-direction: column;
                    height: 100%;


                    & .Calendar {
                        max-width: 400px !important;
                        margin: auto !important;
                    }

                    & .customAppDatePicker__controller {
                        margin-top: auto;
                    }
                }
            }

            .ant-modal-close-x {
                display: none;
            }
        }
    `};
`;



const ConditionalWrapper = ({ isMobile , children , ...rest }) => {
    if(isMobile) {
        return <Drawer {...rest}>{children}</Drawer>
    }else return <Modal {...rest}>{children}</Modal>
}


const CustomAppDatePicker = ({ 
    onChange ,
    value ,
    style,
    selectedDayColor = "lightblue", 
    isCurrentlyActive,
    closeOnChange = true , 
    red ,
    green,
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [hideTodayTrigger, setHideTodayTrigger] = useState(false);
    const [inputError, setInputError] = useState(null);
    const [haveUseInputChange, setHaveUseInputChange] = useState(false);

    const [manualInputValue, setManualInputValue] = useState('');
    

    const isMobile = useMediaQuery("md");

    const todayString = dayjs().calendar("jalali").locale('fa').format("YYYY/MM/DD");

    const calendarChangeHandler = value => onChange(makeValidDateString(value))


    const backToTodayHandler = () => onChange(todayString);

    const inputChangeHandler = ({ target : { value : inputValue } }) => {
        setManualInputValue(inputValue);
        setHaveUseInputChange(true);
        
        if(regex.test(inputValue)) {
            setInputError(false)
            onChange(inputValue);
            closeModalHandler()
        }
        else setInputError(true);
    }

    
    const onLeaveInputHandler = () => {
        if(!inputError) onChange(manualInputValue)
        else setManualInputValue(value)
    }


    const closeModalHandler = () => {
        setIsOpened(false);
        setHaveUseInputChange(false);
    }

    const inputRef = useRef();

    
    useEffect(() => {
        setManualInputValue(value);
        setInputError(false);
        if(value === todayString) {
            let timer = setTimeout(() => {
                setHideTodayTrigger(true);
                clearTimeout(timer);
            } , 500)
        }else {
            setHideTodayTrigger(false);
        }

        if(closeOnChange && !haveUseInputChange) setIsOpened(false);

    } , [value]);



    useEffect(function openDatePickerAutomatically() {
        if(isCurrentlyActive && !value.trim()) {
            let timer = setTimeout(() => {
                setIsOpened(true);
                clearTimeout(timer)
            } , 500)
        }
    } , [value , isCurrentlyActive])


    return (
        <>
        <Input
            style={{ textAlign : "center" }}
            readOnly
            className={`customAppDatePicker__frontInput ${value ? "customAppDatePicker__frontInput--haveValue" : ""}`}
            placeholder="تاریخی را انتخاب کنید"
            value={value} 
            onClick={() => setIsOpened(true)} /> 
        <GlobalStyleForPortalScop primary={style.find(el => el.name === "primaryColor").value} />
            <ConditionalWrapper
                className="customAppDatePicker__modal"
                isMobile={isMobile}
                width={380}
                maskClosable
                centered
                destroyOnClose
                onCancel={closeModalHandler} 
                closable
                footer={null}
                visible={isOpened}>
                <ModalWrapper>
                    <Calendar
                        colorPrimary={selectedDayColor}
                        shouldHighlightWeekends
                        value={makeValidDateObject(value)}
                        calendarClassName="customAppDatePicker__calender"
                        locale="fa"
                        onChange={calendarChangeHandler}/>
                    <div className={`customAppDatePicker__input  ${manualInputValue && !inputError ? "customAppDatePicker__input--success" : ""}`}>
                        <input 
                            style={{ borderColor : (() => {
                            if(inputError) return red
                            else if(manualInputValue && !inputError ) return green
                            else return"white";
                        })() }} 
                            onBlur={onLeaveInputHandler} 
                            onChange={inputChangeHandler} 
                            ref={inputRef} 
                            value={manualInputValue}  />
                        <span onClick={() => inputRef.current?.focus()} style={{ color : inputError ? red : "grey" }} className={value ? "getOnTop" : ""}>تاریخ را  وارد نمایید</span>
                        {
                            !hideTodayTrigger && <div onClick={backToTodayHandler} className={`customAppDatePicker__todayTrigger ${value === todayString ? "customAppDatePicker__todayTrigger--disabled" : ""}`}>
                                <TodayIconSvg />
                            </div>
                        }
                    </div>
                    <div className="customAppDatePicker__controller">
                        <div>
                            <button 
                                style={{ background : green }} 
                                onClick={closeModalHandler} 
                                className="customAppDatePicker__controller__done">
                                    {
                                        haveUseInputChange? "تایید" : "بستن"
                                    }
                            </button>
                        </div>
                    </div>
                </ModalWrapper>
            </ConditionalWrapper>
        </>
    )
}

const EnhancedWithMediaQuery = ({ ...rest }) => {
    return (
        <MediaQueryProvider maxWidth>
            <CustomAppDatePicker {...rest} />
        </MediaQueryProvider>
    )
}

export default EnhancedWithMediaQuery;