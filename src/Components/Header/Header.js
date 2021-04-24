import { Drawer, Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import HeaderAction from "./HeaderAction";

import ReactHtmlParser from 'react-html-parser';
import { useEffect , useState } from "react";

import HeaderWrapper from './style'
import debounce from "../../utils/debounce";
import HeaderMobileDrawer from "./HeaderMobileDrawer";
import dataConstructor from "../../utils/dataConstructor";

const srcMock = "https://bimemahan.com/assets/front/_images/logo/logo.png";


const MOCK = [
    {
        "id": 8308,
        "parentId": null,
        "name": "راهنمای بیمه گذاران",
        "link": "",
        "isActive": true,
        "subMenu": [
            {
                "id": 8309,
                "parentId": null,
                "name": "بیمه شخص ثالث",
                "link": "",
                "isActive": true,
                "subMenu": []
            },
            {
                "id": 8310,
                "parentId": null,
                "name": "بیمه بدنه",
                "link": "فرم_پیشنهاد/form22",
                "isActive": true,
                "subMenu": []
            },
            {
                "id": 8322,
                "parentId": null,
                "name": "ثبت نام و ورود",
                "link": "",
                "isActive": true,
                "subMenu": []
            }
        ]
    },
    {
        "id": 8347,
        "parentId": null,
        "name": "فرم های پیشنهاد",
        "link": "",
        "isActive": true,
        "subMenu": []
    },{
        "id": 8347,
        "parentId": null,
        "name": "فرم های پیشنهاد",
        "link": "",
        "isActive": true,
        "subMenu": []
    },
    {
        "id": 8348,
        "parentId": null,
        "name": "درباره ما",
        "link": "/دربارهما",
        "isActive": true,
        "subMenu": []
    },
    {
        "id": 8349,
        "parentId": null,
        "name": "تماس با ما",
        "link": "/تماسباما",
        "isActive": true,
        "subMenu": []
    }
]


const componentStyles = [
    {
        name: 'headerBackground',
        value: '#265247',
        setByCustomer: false,
    },
    {
        name: 'headerBackgroundMobile',
        value: '#fff',
        setByCustomer: false,
    },
    {
        name : "shadow",
        value : "no",
        setByCustomer : false,
    },
    {
        name : "linkColor",
        value : "whitesmoke",
        setByCustomer : false,
    },
    {
        name : "linkColorMobile",
        value : "black",
        setByCustomer : false,
    },
    {
        name : "actionsMobileBgColor",
        value : "black",
        setByCustomer : false,
    },
    {
        name : "actionMobileColor",
        value : "black",
        setByCustomer : false,
    },
    {
        name : "subMenuLinkMobile",
        value : "black",
        setByCustomer : false,
    },
    {
        name : "actionMobileColor",
        value : "#fff",
        setByCustomer : false,
    },
    {
        name : "linkColorHover",
        value : "#00bf8f",
        setByCustomer : false,
    },
    {
        name : "linkSize",
        value : "0.9rem",
        setByCustomer : false,
    },
    {
        name : "linkWight",
        value : "normal",
        setByCustomer : false,
    },
    {
        name : "headerHeight",
        value : "none",
        setByCustomer : false,
    },
    {
        name : "headerHeightAfterScroll",
        value : "auto",
        setByCustomer : false,
    },
    {
        name : "headerSticky",
        value : "yes",
        setByCustomer : false,
    },
    {
        name : "logoDisplay",
        value : "yes",
        setByCustomer : false,
    },
    {
        name : "topBanner",
        value : "false",
        setByCustomer : false,
    },
    {
        name: "backgroundBlur",
        value: 'none',
        setByCustomer: false,
    },
    {
        name: "actionColor",
        value: 'whitesmoke',
        setByCustomer: false,
    },
]

const componentData = [
    {
        name: "logo",
        value: '',
        setByCustomer: false,
    },
    {
        name: "headerBackgroundImage",
        value: '',
        setByCustomer: false,
    },
    {
        name: "banner",
        value: "",
        setByCustomer: true,
    },
    {
        name: "bannerMobile",
        value: "",
        setByCustomer: false,
    },
    {
        name: "headerId",
        value: '',
        setByCustomer: false,
    },
]

// TODO add actionHandler pattern
const allItemCount = MOCK.length;

const Header = ({ item = MOCK ,  icon = srcMock , actionHandler }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [afterScroll, setAfterScroll] = useState(false);
    const { get , check } = dataConstructor(componentData);
    
    const subMenuChecker = (menuElement , index) => {
    if(!menuElement.subMenu.length) return (<Link className="header__item" to={menuElement.link} key={index} >{menuElement.name}</Link> );
    return (
        <Dropdown
        key={index}
         overlay={() => (
            <Menu>
              {menuElement.subMenu.map((el , i) => (
                      <Menu.Item className="header__item" key={i}>
                          <Link to={el.link}>{el.name}</Link>
                      </Menu.Item>
                  ))}
            </Menu>
    )}
  >
   <a href="#somewhere" className="header__item" key={index} >
       {menuElement.name}
    </a>
    </Dropdown>)
    };
    
    useEffect(() => {
        // calculating and handling height of header after user scroll down
        window.addEventListener("scroll" , debounce(() => {
            if(window.pageYOffset >= 80) setAfterScroll(true)
            else if(window.pageYOffset <= 80) setAfterScroll(false);
        },30))
    } , [])

    return (
        <HeaderWrapper id={check("headerId") ? get("headerId") : ""} $style={componentStyles} style={{ backgroundImage : `${check('headerBackgroundImage') ? `url(${(get("headerBackgroundImage"))})` : "none"}` }} /*getStyles={getStyles} checkDefault={checkDefault}*/  >
            {check("banner") ? <div className="header__insertedBanner">{ReactHtmlParser(get("banner"))}</div> : null}
            <div className={`header__container ${afterScroll ? "header__container--afterScroll" : ""}`}>
     
             <div className="header__hamburgerIcon" onClick={() => setIsDrawerOpen(prev => !prev)} >
                         <svg height="384pt" viewBox="0 -53 384 384"	width="384pt"	xmlns="http://www.w3.org/2000/svg">	<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />	<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />	<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /></svg>
            </div>
     
             <HeaderAction
                     position="left"
                     text="سبد خرید"
                     handler={""}
                     hideInMobile
                     action="cart"
                 />
             
             {item.slice(0 , allItemCount / 2).map(subMenuChecker)}

            <div className="header__logo">
                <img src={check("logo") ? get('logo') : icon} alt="header_logo" />
             </div>

             {item.slice(allItemCount / 2 , allItemCount).map(subMenuChecker)}

                 <HeaderAction
                     icon={<svg id="user_1_" data-name="user (1)" xmlns="http://www.w3.org/2000/svg" width="426.667" height="426.666" viewBox="0 0 426.667 426.666"><g id="Group_125" data-name="Group 125"><path id="Path_324" data-name="Path 324" d="M213.333,0C95.467,0,0,95.467,0,213.333S95.467,426.666,213.333,426.666,426.667,331.2,426.667,213.333,331.2,0,213.333,0Zm0,64a64,64,0,1,1-64,64A64.05,64.05,0,0,1,213.333,64Zm0,302.933a153.613,153.613,0,0,1-128-68.693c.533-42.347,85.44-65.707,128-65.707s127.36,23.36,128,65.707A153.609,153.609,0,0,1,213.333,366.933Z"/></g></svg>}
                     position="right"
                     path="" 
                     text="عضویت/ورود"
                     action="login"
                 />
              
            </div>
            {/* <Drawer
            drawerStyle={{ backgroundColor : `${check("headerBackgroundMobile") ? get("headerBackgroundMobile") : '#fff'}`}}
            visible={isDrawerOpen}
            placement="right"
            onClose={() => setIsDrawerOpen(false)}>
                {check("bannerMobile") ? <div className="header__insertedBanner">{ReactHtmlParser(get("bannerMobile"))}</div> : null}
                <HeaderMobileDrawer getData={getData} getStyles={getStyles} checkDefault={checkDefault} checkDefaultData={checkDefaultData} items={item} actions={[
                    {handler: (id) => {} , name: 'ثبت نام', id: 'register'},
                    {handler : (id) => {} , name : "سبد خرید", id: 'cart'}
                ]} />
            </Drawer> */}
        </HeaderWrapper>
     )
}


export default Header;

