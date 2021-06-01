import { Collapse } from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { useState } from "react";
import iconConstructor from "../../utils/iconConstructor";
import Wrapper from "./style";

const iconPack = iconConstructor("ui")

const WalletItemMobile = ({ index , description , reduced , added , date }) => {
    const icon = iconPack();
    const [isMoreControllerActive, setIsMoreControllerActive] = useState(false);
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    return (
        <Wrapper isActive={isCollapseOpen}>
        <Collapse
                style={{ width : "100%" }}
                destroyInactivePanel
                onChange={currentValue => setIsCollapseOpen(Boolean(...currentValue))}
                className={isMoreControllerActive ? "reminderItemMobile--disabled" : ""}
                >
            
            <CollapsePanel style={{ display : "flex" , width : "100%" , justifyContent : "space-between" , flexDirection : 'column'}} header={
                <>
                    <div className="walletItemMobile__date">
                     <span>{date}</span>
                 </div>
                 <div className="walletItemMobile__amount">
                     <span>{added || reduced}</span>
                 </div>
                 <div className={`walletItemMobile__index ${added ? "walletItemMobile__index--added" : "walletItemMobile__index--reduced"}`}>
                     <span>{index}</span>
                 </div>
                </>
            }>
                <div className="walletItemMobile__desc">
                     <span>توضیحات</span>
                     <p>{description}</p>
                 </div>
            </CollapsePanel>
            </Collapse>
        </Wrapper>
       
    )
}

export default WalletItemMobile;