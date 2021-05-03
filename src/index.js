
  import React, { useEffect, useRef, useState } from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter} from 'react-router-dom';

  import "./reset.css";

  import 'react-modern-calendar-datepicker/lib/DatePicker.css';
  import DatePicker, { Calendar } from 'react-modern-calendar-datepicker';
  import Modal from 'antd/lib/modal/Modal';
  import 'antd/dist/antd.css';
  // import Portal from "./Components/Portal/Portal";

  // const DatePickerTest = ({ date , changeDateHandler , ppRef}) => {
  //   const CustomInput = ({ref : passedRef}) => {
  //     ppRef.current = passedRef.current;
  //     return(
  //       <input readOnly ref={passedRef} className="input__hidden" />
  //     )
  //   }
  //   return (
  //   <DatePicker
  //       value={date} 
  //       onChange={changeDateHandler}
  //       inputPlaceholder="this is input placeholder"
  //       locale="fa"
  //       renderInput={CustomInput}
  //       colorPrimary={'red'}
  //       colorPrimaryLight={"yellow"}
  //       calendarClassName="custom__calender"
  //       formatInputText={"YYYY/DD/MM"}
  //       />
  //   )
  // }


  // const App = () => {
  //   const [, setForcedToRender] = useState(false);
  //   const [date, setDate] = useState(null);

  //   const ref = useRef();
  //   const showedInputRef = useRef();
  //   const focusHandler = () => ref.current.focus();

  //   useEffect(() => setForcedToRender(1) , []);
    
  //   return (
  //     <div>
  //       hello to test
  //       <input ref={showedInputRef} readOnly value={date ? date.day: "select something"} onFocus={focusHandler} placeholder="other inpput" />
  //       <Portal inputRef={showedInputRef}>
  //         <DatePickerTest changeDateHandler={setDate} date={date} ppRef={ref} position={showedInputRef.current} />
  //       </Portal>
  //     </div>
  //   )
  // }



  const App = () => {
    const [date, setDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const focusHandler = () => {
      console.log('sd');
      setIsModalOpen(true);
    }
    return (
      <div>
        <input onClick={focusHandler} value={date ? date.day : "select a day"} />
          <Modal onCancel={() => setIsModalOpen(false)} bodyStyle={{ padding : "0" }} className="custom__modal" style={{ width : "10px" , background : 'red' }} footer={null} visible={isModalOpen}><Calendar className="custom__calender" locale="fa" value={date} onChange={setDate} />
          </Modal>
      </div>
    )
  }

  ReactDOM.render(
      <BrowserRouter>
        <div className="container">
          <div className="column">
            Quisquam assumenda aperiam nemo rem ut expedita iusto doloremque delectus. Tenetur quos culpa veniam. Perspiciatis est est voluptatem amet. Et et eum.
          </div>
          <div className="column">
            <App />
          </div>
        </div>
      </BrowserRouter>,
    document.getElementById('root')
  );
