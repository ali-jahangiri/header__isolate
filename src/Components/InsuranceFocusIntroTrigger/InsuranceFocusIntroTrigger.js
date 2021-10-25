import React, {  useState } from 'react';
import Wrapper from "./style";
import InsuranceFocusOrder from '../InsuranceFocusedOrder'
import Intro from './Intro';

const InsuranceFocusIntroTrigger = ({ componentStyles , data }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [renderPortal, setRenderPortal] = useState(false)
    const [portalStyle, setPortalStyle] = useState(null);
    const [getFullScreen, setGetFullScreen] = useState(false);

    
    const openMainInsHandler = introPosition => {
        setRenderPortal(true);
        setPortalStyle(introPosition);
        document.body.style.overflow = "hidden";
        
        let timer1 = setTimeout(() => {
            setGetFullScreen(true);
            clearTimeout(timer1);
        } , 500)

        let timer = setTimeout(() => {
            setIsVisible(true);
            clearTimeout(timer);
        } , 1800);
    }


    const prevClose = () => {
        setGetFullScreen(false);
        setIsVisible(false);
        let timer = setTimeout(() => {
            setRenderPortal(false);
            setPortalStyle(false);
            document.body.style.overflow = "auto";
            clearTimeout(timer);
        } , 1200);
    }

    
    return (
        <Wrapper>
            {
                renderPortal && <div style={{ ...portalStyle }} className={`insFocus__portal ${getFullScreen ? "insFocus__portal--visible" : ""}`}>
                    <Intro
                        shouldGetHide={isVisible}
                        style={componentStyles} 
                        title={data.title} 
                        desc={data.description} 
                        startHandler={openMainInsHandler} />
                    <InsuranceFocusOrder
                        closeParent={prevClose}
                        visibleIntroOnRenderWithNoWrapperHandler={prevClose}
                        renderWithNoWrapper 
                        componentStyles={componentStyles} 
                        visible={isVisible} 
                        onClose={() => setIsVisible(false)}  
                        mock={data} />
                </div>
            }
            <Intro style={componentStyles} title={data.title} desc={data.description} startHandler={openMainInsHandler} />
        </Wrapper>
    )
}

export default InsuranceFocusIntroTrigger;