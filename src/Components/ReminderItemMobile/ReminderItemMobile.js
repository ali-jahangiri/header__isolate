import { Collapse } from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { useState } from "react";
import iconConstructor from "../../utils/iconConstructor";
import Wrapper from "./style";

const iconPack = iconConstructor("ui");

const ReminderItemMobile = ({ desc , title , index , date }) => {
    const icon = iconPack();
    const [isMoreControllerActive, setIsMoreControllerActive] = useState(false);
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    // TODO add event handler
    const deleteHandler = () => {

    }

    const editHandler = () => {

    }

    return (
    <Wrapper isMoreControllerActive={isMoreControllerActive} extendStyle={`
        transform : translateX(${isMoreControllerActive ? "40%" : "0%"})
    `}>
        <div style={{ left : isMoreControllerActive ? "-40%" : "-50%"  }} className="reminderItemMobile__controller">
            <div onClick={deleteHandler}>
                {
                    icon.get("trash")
                }
            </div>
            <div onClick={editHandler}>
                {
                    icon.get("pencil")
                }
            </div>
        </div>
        
        <div style={{ opacity : isCollapseOpen ? "0" : 1 ,width : isCollapseOpen ? "0%" : "13%" }} onClick={() => !isCollapseOpen && setIsMoreControllerActive(prev => !prev)} className={`reminderItemMobile__moreCta ${isMoreControllerActive ? "reminderItemMobile__moreCta--active" : ""}`}>
                {
                    icon.get(!isMoreControllerActive ?  "threeDotVertical" : "close")
                }
                </div>
        <Collapse
            destroyInactivePanel
            onChange={currentValue => setIsCollapseOpen(Boolean(...currentValue))}
            className={isMoreControllerActive ? "reminderItemMobile--disabled" : ""}
            style={{ width  : !isCollapseOpen ?  "80%" : "100%" ,  margin : "0 0 0 auto" , transition : "0.3s"}}>
        <CollapsePanel collapsible={isMoreControllerActive ? "disabled" : "header"} showArrow={true} style={{ padding : "1rem 0" }} header={
            <div className="reminderItemMobile__header">
                <div className="reminderItemMobile__date">
                    <p>{date}</p>
                </div>
                <div className="reminderItemMobile__index">
                    <span>{index}</span>
                </div>
            </div>
        } key={index} >
            <div className="reminderItemMobile__moreDetail">
                <div className="reminderItemMobile__title">
                    <span>عنوان</span>
                    <p>{title}</p>
                </div>
                <div className="reminderItemMobile__desc">
                    <span>توضیحات</span>
                    <p>{desc}</p>
                </div>
            </div>
        </CollapsePanel>
        </Collapse>
    </Wrapper>
    )
}

export default ReminderItemMobile;



