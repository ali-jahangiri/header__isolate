import "./reset.css";
import reactDom from 'react-dom';
import  MobileNav from './Components/ProfileMobileNav/ProfileMobileNav'
import TabPageMobile from "./Components/TabPageMobile/TabPagMobile";
import { useState } from "react";
import { Children } from "react"
import IndexTab from "./Components/indexTab/IndexTab";

const App = () => {
  // useEffect(() => {
  // return () => {
  //     // clean up => componentWillUnmount()
  //   }
  //   // depend of what ? component need to re render and (componentWillUpdate) and if some case was happened component should and need to re render (shouldComponentUpdate)? 
  // } , [])
  // // return statement basicity is a lifecycle method witch is both of functional and class component
  
}

const Tab = ({ children , currentTabPage }) => {
    return Children.map(children , Child => {
        if(Child?.props?.title === currentTabPage) return Child
        else return null
    })
}

export default Tab;
const Indexer = () => {
  const [currentTabPage, setCurrentTabPage] = useState("index");
  const [isOnPageSwitch, setIsOnPageSwitch] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  const tabPageChanger = tabName => {
    setIsOnPageSwitch(true)
    setCurrentTabPage(tabName)
    setIsOnPageSwitch(false)

  }

  return (
    <div>
      <Tab currentTabPage={currentTabPage}>
        <TabPageMobile extendStyle={`opacity : ${isOnPageSwitch ? "0" : "1"}`} title="index">
          <IndexTab />
          <button onClick={() => setIsNavActive(!isNavActive)}>active navigation</button>
        </TabPageMobile>
        <TabPageMobile extendStyle={`opacity : ${isOnPageSwitch ? "0" : "1"}`} isOnTabPageSwitch={isOnPageSwitch} title="یادآور">
          this is reminder
        </TabPageMobile>
      <TabPageMobile extendStyle={`opacity : ${isOnPageSwitch ? "0" : "1"}`} isOnTabPageSwitch={isOnPageSwitch} title="بیمه نامه ها" >
        Aut odio id magnam cumque. Delectus id mollitia. Porro eos tempore beatae. Aut cumque voluptatem deleniti sit voluptas in itaque id. Ex non sapiente nihil dolorem aut beatae quaerat debitis. Hic delectus id rerum delectus magni distinctio accusantium cum.
        perspiciatis sed. Nesciunt excepturi dolorem ab cupiditate repellendus modi quia. Est dolores doloribus placeat earum magnam qui molestiae. Quia excepturi id sint repellat inventore officia. Quibusdam aut et excepturi eveniet.
        Molestiae reprehenderit aliquam quis dolores pariatur accusamus aut quia ducimus. Voluptatum in ea ea vel sit ipsa quae omnis. Possimus consequuntur voluptas et error tenetur recusandae sequi officiis. Et quas non doloremque. Id quis est. Quisquam totam numquam minima nihil enim voluptas ut quisquam.
        
      </TabPageMobile>
      </Tab>
      <MobileNav active={isNavActive} currentStep={currentTabPage} handler={tabPageChanger} />
    </div>
  )
}


reactDom.render(<Indexer />,document.getElementById('root'));
