import { useLayoutEffect, useState } from "react";
import Wrapper from "./style";

import selfClearTimeOut from "../../utils/selfClearTimeOut"
import { createPortal } from "react-dom";
import Portal from "../../utils/HOC/Portal/Portal";

const MobileDrawer = ({ title ,  visible , closeHandler , onDone , onCancel, children }) => {
    const [isOnClosing, setIsOnClosing] = useState(false);

    useLayoutEffect(() => {
        window.document.body.style.overflowY = visible ? "hidden" : "auto"
    } , [visible]);

    const onCloseHandler = () => {
        setIsOnClosing(true)
        selfClearTimeOut(() => {
            closeHandler(false);
            setIsOnClosing(false)
        } , 500)
        
    }
    return (
        <Portal>
            {
                visible && 
                <Wrapper isOnClosing={isOnClosing}>
                    <div style={{ opacity : isOnClosing ? 0 : 1 }} className={`overlay ${isOnClosing ? "overlay--deActive" : ""}`} onClick={onCloseHandler}></div>

                    <div className={`mobileDrawer__content ${!isOnClosing ? "mobileDrawer__content--active" : "mobileDrawer__content--deActive"}`}>
                        <div className="mobileDrawer__controller">
                            <button onClick={onDone}>تائید</button>
                            <button onClick={onCancel}>بازگشت</button>
                        </div>
                        <div className="mobileDrawer__title"><p>{title}</p></div>
                        {children}
                    </div>
                </Wrapper>
            }
        </Portal>
    )
}

export default MobileDrawer