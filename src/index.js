import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "./reset.css";
import reactDom from 'react-dom';
import { useState } from 'react';

import MobileDrawer from "./Components/MobileDrawer/MobileDrawer";
import MarketerTreeStepRegister from "./Components/MarketerTreeStepRegister/MarketerTreeStepRegister";

import Form from './Components/Form/Form';
import FormItem from './Components/Form/FormItem';
import { useFormOnChange, useFormSubmit } from './Components/Form/Hooks';

import CustomAppDatePicker from './Components/CustomAppDatePicker/CustomAppDatePicker';

const App = () => (
  <CustomAppDatePicker />
)

// import  MobileNav from './Components/ProfileMobileNav/ProfileMobileNav'
// import TabPageMobile from "./Components/TabPageMobile/TabPagMobile";
// import { useState } from "react";
// import { Children } from "react"
// import IndexTab from "./Components/indexTab/IndexTab";


// import useMediaQuery ,{ MediaQueryProvider} from "./utils/Hooks/useMediaQuery"
// import InsuranceItemMobile from "./Components/InsuranceItemMobile/InsuranceItemMobile";
// import ReminderItemMobile from "./Components/ReminderItemMobile/ReminderItemMobile";
// import WalletCartMobile from "./Components/WalletMobile/WalletCartMobile/WalletCartMobile";
// import WalletItemMobile from "./Components/WalletMobile/WalletItemMobile";


// const Tab = ({ children , currentTabPage }) => {
//     return Children.map(children , Child => {
//         if(Child?.props?.title === currentTabPage) return Child
//         else return null
//     })
// }



// const Indexer = () => {
//   const [currentTabPage, setCurrentTabPage] = useState("index");
//   const [isNavActive, setIsNavActive] = useState(false);
//   const isMobile = useMediaQuery("md")
  
//   const tabPageChanger = tabName => {
//   setCurrentTabPage(tabName)
//   setIsNavActive(true)
//   }
//   const backActionHandler = () => {
//     setIsNavActive(false)
//     setCurrentTabPage("index")
//   }
//   return (
//       isMobile ? <>
//       <Tab currentTabPage={currentTabPage}>
//         <TabPageMobile extendStyle={`
//           .tabPageMobile__bodyContainer {
//             height : 80vh;
//             & > div {
//               display : flex;
//               height : 100%;
//               flex-direction : column;
//                 .indexTab {
//                   &__row {
//                     flex : 1;
                    
//                 }
//                   &__item {
//                     height : 100%;
//                     display : flex;
//                     align-items : center;
//                     &__container {
//                       height : 80%;
//                     }
//                   }
//               }
//           }
//       `} active showBackIcon={false} isNavActive={isNavActive} backActionHandler={backActionHandler} title="index">
//         <IndexTab clickHandler={tabPageChanger} />
//       </TabPageMobile>
//         <TabPageMobile extendStyle={`
//         .tabPageMobile__bodyContainer {
//           overflow : hidden;
//         }
//       `} backActionHandler={backActionHandler} title="یادآور">
//         {/* TODO change name of component for version suppoer */}
//           <ReminderItemMobile index="1" date={"1399/12/13"} desc="من یک توضیح هستم" title="من یک عنوان هستم" />
//           <ReminderItemMobile index="2" date={"1400/8/2"} desc="من یک توضیح هستم" title="من یک عنوان هستم" />

//       </TabPageMobile>
//         <TabPageMobile extendStyle={`.tabPageMobile__bodyContainer {padding : 0px !important}`} backActionHandler={backActionHandler} title="بیمه نامه ها" >
//           <InsuranceItemMobile title="بیمه ایران" />
//           <InsuranceItemMobile title="بیمه ایران" />
//           <InsuranceItemMobile title="بیمه ایران" />
//           <InsuranceItemMobile title="بیمه ایران" />
//           <InsuranceItemMobile title="بیمه ایران" />
//       </TabPageMobile>
//       <TabPageMobile backActionHandler={backActionHandler} title="کیف پول">
//         <WalletCartMobile desc="آخرین تراکنش" date="1399/12/04" amount="50,500" />

//         <WalletItemMobile description="این یک توضیحات دیگری استتوضیحات دیگری استتوضیحات دیگری است." date="1400/5/4" index="1" reduced="12000" />
//         <WalletItemMobile description="این یک توضیحات دیگری است." date="1400/7/3" index="1" added="12000" />
//         <WalletItemMobile description="این یک توضیحات دیگری است." date="1365/5/4" index="1" added="12000" />

//       </TabPageMobile>
//       <TabPageMobile backActionHandler={backActionHandler} title="پشتیبانی" >

//       </TabPageMobile>
//     </Tab>
//     <MobileNav active={isNavActive} currentStep={currentTabPage} handler={tabPageChanger} /></> : <div>outside of mobile</div>
    
//   )
// }


// const Index = ({ key}) => {
//   const [climeMe, setClimeMe] = useState(false);

//   return (
//     <div>
//       Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//       <button onClick={() => setClimeMe(prev => !prev)}>show me</button>
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.Voluptatibus nesciunt modi atque ratione officiis. Sit et perspiciatis placeat debitis voluptatem. Vero esse dolor nulla sequi sint. Et qui dicta. Voluptates enim voluptatum dolor.
 
//  Est quos et dicta nam et. Illum odio voluptate quia consequatur quisquam quibusdam minima molestiae. Aspernatur eius voluptas ratione reprehenderit adipisci enim placeat. Odit non nemo.
  
//  Animi ducimus minima qui magni possimus. Voluptas omnis qui exercitationem illum minus qui illo nostrum. Consequatur nulla quia amet. Facere sed nobis illo est omnis sit et ducimus.
//       <MobileDrawer closeHandler={setClimeMe} title="بیمه نامه ها" visible={climeMe} >
//       Fuga vel aut iste qui qui busdam. Doloremque iste suscipit qui vel facere ut minima nam. Possimus asperiores est esse earum mollitia asperiores.
//       Fuga vel aut iste qui qui busdam. Doloremque iste suscipit qui vel facere ut minima nam. Possimus asperiores est esse earum mollitia asperiores.
//       Fuga vel aut iste qui qui busdam. Doloremque iste suscipit qui vel facere ut minima nam. Possimus asperiores est esse earum mollitia asperiores.
//       Fuga vel aut iste qui qui busdam. Doloremque iste suscipit qui vel facere ut minima nam. Possimus asperiores est esse earum mollitia asperiores.
//       Fuga vel aut iste qui qui busdam. Doloremque iste suscipit qui vel facere ut minima nam. Possimus asperiores est esse earum mollitia asperiores.
//       Fuga vel aut iste qui qui busdam. Doloremque iste suscipit qui vel facere ut minima nam. Possimus asperiores est esse earum mollitia asperiores.
//       </MobileDrawer>
//     </div>
//   )
// }
// Index.defaultProps = {
  
// }




























// NOTE if we only have rule prop without any assigment , that means the input value should pass base validation


const Index = ({ customErr }) => {
  // const { getFormError , getFormValue } = useFormSubmit()  
  // const submitHandler = () => {
  //   console.log(getFormError());
  // }

  const customChangeHandler = useFormOnChange()

  const clickHandler = () => {
    customChangeHandler("customInput" , Date.now())
  }
  return (
    <div>
        <FormItem help="Ex deleniti rerum ipsam impedit consequatur in. Et velit et enim accusantium rerum quas aut beatae. Quidem cumque voluptatem ducimus veritatis rerum recusandae natus et. 
            Doloremque et omnis recusandae. Unde atque ut alias dolore sequi ullam et. Quasi unde repellat quaerat officiis tempore fuga. Non cupiditate repellat nostrum quis ut eius. Illo expedita ea corrupti vel impedit nostrum ab. Et et dignissimos dolore autem." rule={userName => {
          if(userName.length >= 5) {
            return true
          }
          return false
        }} placeholder="asdsmj" name="userName" />

        <FormItem rule={password => {
          if(password.includes('*')) return true
          else return false
        }} name="password" />
        
        <FormItem help="this is other hepl text" defaultValue="this is default props" name="customInput" rule={gettedValue => {
          console.log(gettedValue);
          return false
        }}>
           <div className='uploader'>
             <button onClick={() => clickHandler()}>uploader</button>
           </div>
        </FormItem>
    </div>
  )
}


const EnhancedWithForm = () => {
  const [value, setValue] = useState({});
  return (
    <Form 
      changeHandler={e => {setValue(e.value)}}
    >
      <Index customErr={value.err} />
      {
        JSON.stringify(value)
      }
    </Form>
  )
}

reactDom.render(<EnhancedWithForm />,document.getElementById('root'));
