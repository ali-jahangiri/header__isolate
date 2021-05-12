import "./reset.css";
import reactDom from 'react-dom';
import { useEffect } from "react";
import DynamicInput from "./Components/treeStepInput/dynamicInput";

const App = () => {
  // useEffect(() => {
  // return () => {
  //     // clean up => componentWillUnmount()
  //   }
  //   // depend of what ? component need to re render and (componentWillUpdate) and if some case was happened component should and need to re render (shouldComponentUpdate)? 
  // } , [])
  // // return statement basicity is a lifecycle method witch is both of functional and class component
  
}

const Index = () => {
  const onReachEnd = values => {
    console.log(values);
  }

  const changeHandler = (currentValue) => {
    console.log("current value" , currentValue);
  }

  return (
    <DynamicInput inputClassName={"input__"} onChangeHandler={changeHandler} onReachEnd={onReachEnd} countOfInputStep={4} eachInputValueLength={3} />
  )
}

reactDom.render(<Index />,
  document.getElementById('root')
);
