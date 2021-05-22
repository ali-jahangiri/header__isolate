import "./reset.css";
import reactDom from 'react-dom';
import { useEffect, useState } from "react";
import DynamicInput from "./Components/treeStepInput/dynamicInput";
import iconConstructor from "./utils/iconConstructor";
import GroupSlider from "./Components/GroupSlider/GroupSlider";

const App = () => {
  // useEffect(() => {
  // return () => {
  //     // clean up => componentWillUnmount()
  //   }
  //   // depend of what ? component need to re render and (componentWillUpdate) and if some case was happened component should and need to re render (shouldComponentUpdate)? 
  // } , [])
  // // return statement basicity is a lifecycle method witch is both of functional and class component
  
}

const Btn = ({ onClick , text , icon }) => {
  console.log(icon);
  return (
    <button onClick={onClick} style={{ color : "red" }}>{icon}</button>
  )
}
Btn.defaultProps = {
  text : "iam a default text"
}
const icon = iconConstructor()
window.scrollTo({
  top : 0,
  behavior : "smooth"
})
const Index = () => {
  const componentStyle = [
    {
      name : "supportIconColor",
      value : "red",
      setByCustomer : false
    },
    {
      name : "reminderIconColor",
      value : "blue",
      setByCustomer : false
    },
    {
      name : "walletIconColor",
      value : "blue",
      setByCustomer : false
    },
    {
      name : "insuranceIconColor",
      value : "red",
      setByCustomer : false
    },
    {
      name : "profileIconColor",
      value : "pink",
      setByCustomer : true
    },
    {
      name : "bgColor",
      value : "pink",
      setByCustomer : false
    },
    {
      name : "fonSize",
      value : "pink",
      setByCustomer : false
    },
  ]

  const iconPack = icon(componentStyle , {
    primaryColor : "blue",
    'primary_2' : "red",
  })
  const [value, setValue] = useState("");
  return (
    <div>
      this is a icon
      <input value={value} onChange={({ target : { value } }) => setValue(value)} />
      <Btn icon={iconPack.get("wallet")} />
      <div onClick={() => console.log('from parent')}>
        iam the parent
        <div onClick={() => console.log('from child')}>
            iam the child
        </div>
      </div>
    </div>
  )
}

reactDom.render(<div style={{ margin : "50rem 0" }}><GroupSlider /></div>,
  document.getElementById('root')
);
