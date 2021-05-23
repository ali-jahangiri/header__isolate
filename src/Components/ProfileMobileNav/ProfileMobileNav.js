import Wrapper from "./style";
import iconConstructor from "../../utils/iconConstructor";
import { useState } from "react";


const iconPack = iconConstructor(["ui" , "general"]);

const navList = [
    {
        name : "بیمه نامه ها",
        icon : "insuranceMinimal",
    },
    {
        name : "یادآور",
        icon : "reminderMinimal",
    },
    {
        name : "کیف پول",
        icon : "walletMinimal",
    },  
    {
        name : "پشتیبانی",
        icon : "supportMinimal",
    },
]


const MobileNavItem = ({name , icon , onClickHandler , currentTab }) => {
    const iconClone = iconPack();
    return (
        <div className={currentTab === name ? "navItem--active" : "navItem--deActive"} onClick={() => onClickHandler(name)}>
            <p>{name}</p>
            {
                iconClone.get(icon)   
            }
        </div>
    )
}

const MobileNav = () => {
    const [currentTab, setCurrentTab] = useState(null)
    
    return (
        <Wrapper>
            {
                navList.map((el , i) => <MobileNavItem key={i} {...el} currentTab={currentTab} onClickHandler={setCurrentTab} />)
            }
        </Wrapper>
    )
}



export default MobileNav;