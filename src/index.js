import "./reset.css";
import reactDom from 'react-dom';
import MobileNav from "./Components/ProfileMobileNav/ProfileMobileNav";
import EmptyState from "./Components/EmptyState";
import styled, { css } from "styled-components";

const App = () => {
  // useEffect(() => {
  // return () => {
  //     // clean up => componentWillUnmount()
  //   }
  //   // depend of what ? component need to re render and (componentWillUpdate) and if some case was happened component should and need to re render (shouldComponentUpdate)? 
  // } , [])
  // // return statement basicity is a lifecycle method witch is both of functional and class component
  
}


reactDom.render(
  <div><MobileNav /></div>
  ,
  document.getElementById('root')
);
