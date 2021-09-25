import { Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from "react-modern-calendar-datepicker";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import Wrapper from "./style";
import ModalWrapper from "./modalStyle";

import dayjs from "dayjs";
import { createGlobalStyle } from 'styled-components';


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


const TodayIconSvg = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>comeback today</title><path d="M17.707,13.121a1,1,0,0,0-1.414,0L13,16.413,12.993,6a1,1,0,0,0-2,0L11,16.414,7.707,13.121a1,1,0,1,0-1.414,1.414l3.585,3.586a3,3,0,0,0,4.243,0l3.586-3.586A1,1,0,0,0,17.707,13.121Z"/></svg>
const VerifiedDateIconSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>Valid date picked</title><path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z"/></svg>


const regex = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/;


const GlobalStyleForPortalScop = createGlobalStyle`
    .customAppDatePicker__modal {
        .ant-modal-close-x {
            display: none;
        }
    }
`


const CustomAppDatePicker = ({ onChange , value , selectedDayColor = "lightblue" , label , placeholder }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [hideTodayTrigger, setHideTodayTrigger] = useState(false);
    const [inputError, setInputError] = useState(null);


    const [manualInputValue, setManualInputValue] = useState('');


    const todayString = dayjs().calendar("jalali").locale('fa').format("YYYY/MM/DD");

    const calendarChangeHandler = value => {
        // console.log(value , "pure" , makeValidDateObject(value) , "exchanged");
        console.log(value);
        onChange(makeValidDateString(value))
    }

    const backToTodayHandler = () => onChange(todayString);

    const inputChangeHandler = ({ target : { value : inputValue } }) => {
        setManualInputValue(inputValue)
        if(regex.test(inputValue)) {
            setInputError(false)
            onChange(inputValue);
        }
        else setInputError(true);
    }

    const onLeaveInputHandler = () => {
        if(!inputError) {
            onChange(manualInputValue)
        }else {
            setManualInputValue(value)
        }
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
    } , [value])

    return (
        <Wrapper>
            <div onClick={() => setIsOpened(true)} className="customAppDatePicker__container">
                <p>{value || placeholder}</p>
                {
                    value && !inputError && <div><VerifiedDateIconSvg /></div>
                }
            </div>
            <GlobalStyleForPortalScop />
            <Modal className="customAppDatePicker__modal" width={380} maskClosable centered destroyOnClose onCancel={() => setIsOpened(false)} closable footer={null} visible={isOpened}>
                <ModalWrapper>
                    {/* <div className="customAppDatePicker__header">
                        <p> <span>{label}</span> : انتخاب تاریخ برای </p>
                    </div> */}
                    <Calendar
                        colorPrimary={selectedDayColor}
                        shouldHighlightWeekends
                        value={makeValidDateObject(value)}
                        calendarClassName="customAppDatePicker__calender"
                        locale="fa"
                        onChange={calendarChangeHandler}
                    />
                    <div className={`customAppDatePicker__input ${inputError ? "customAppDatePicker__input--error" : ""} ${manualInputValue && !inputError ? "customAppDatePicker__input--success" : ""}`}>
                        <input onBlur={onLeaveInputHandler} onChange={inputChangeHandler} ref={inputRef} value={manualInputValue}  />
                        <span className={value ? "getOnTop" : ""} onClick={() => inputRef.current?.focus()}>تاریخ را  وارد نمایید</span>
                        {
                            !hideTodayTrigger && <div onClick={backToTodayHandler} className={`customAppDatePicker__todayTrigger ${value === todayString ? "customAppDatePicker__todayTrigger--disabled" : ""}`}>
                                <TodayIconSvg />
                            </div>
                        }
                    </div>
                    <div className="customAppDatePicker__controller">
                        <div>
                            <button onClick={() => setIsOpened(false)} className="customAppDatePicker__controller__done">تایید</button>
                        </div>
                        <div>
                            <button onClick={() => setIsOpened(false)} className="customAppDatePicker__controller__cancel">بازگشت</button>
                        </div>
                    </div>
                </ModalWrapper>
            </Modal>
        </Wrapper>
    )
}



export default CustomAppDatePicker;