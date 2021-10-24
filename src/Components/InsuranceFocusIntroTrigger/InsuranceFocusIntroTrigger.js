import React, {  useState } from 'react';
import Wrapper from "./style";
import InsuranceFocusOrder from '../InsuranceFocusedOrder'
import Intro from './Intro';

const InsuranceFocusIntroTrigger = ({ componentStyles , data }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [renderPortal, setRenderPortal] = useState(false)
    const [portalStyle, setPortalStyle] = useState({});

    const openMainInHandler = introPosition => {
        setRenderPortal(true);
        setPortalStyle(introPosition);

        let timer = setTimeout(() => {
            setIsVisible(true);
            clearTimeout(timer);
        } , 1000)
    }

    return (
        <Wrapper>
            {
                renderPortal && <div style={{ ...portalStyle }} className="insFocus__portal">
                    <Intro style={componentStyles} title={data.title} desc={data.description} startHandler={openMainInHandler} />
                    <InsuranceFocusOrder renderWithNoWrapper componentStyles={componentStyles} visible={isVisible} onClose={() => setIsVisible(false)}  mock={data} />
                </div>
            }
            <Intro style={componentStyles} title={data.title} desc={data.description} startHandler={openMainInHandler} />
        </Wrapper>
    )
}

export default InsuranceFocusIntroTrigger;