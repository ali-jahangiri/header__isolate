import React, { useRef } from 'react';
import Wrapper from "./introStyle";

const Intro = ({ title , desc , startHandler , style , shouldGetHide }) => {
    const containerRef = useRef();
    
    const clickHandler = () => {
        const { top , width , left } = containerRef.current.getClientRects()[0];
        startHandler({ top , width , left });
    }

    return (
        <Wrapper getHide={shouldGetHide} style={style}> 
            <div ref={containerRef}>
                <p className="intro__title">{title}</p>
                <p className="intro__desc">{desc}</p>
                <button onClick={clickHandler} className="intro__cta">شروع کنید</button>
            </div>
        </Wrapper>
    )
}


export default Intro;