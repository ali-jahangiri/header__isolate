import React, { useRef, useState } from 'react';
import Wrapper from "./introStyle";

const Intro = ({ title , desc , startHandler , style }) => {
    const containerRef = useRef();
    const [visible, setVisible] = useState(true);

    const clickHandler = () => {
        const { top , width , left } = containerRef.current.getClientRects()[0];
        startHandler({ top , width , left });
        
        let timer = setTimeout(() => {
            setVisible(false);
            clearTimeout(timer)
        } , 500)

    }
    
    
    console.log(visible , "visible");
    return (
        <Wrapper visible={visible} style={style}> 
            <div ref={containerRef}>
                <p className="intro__title">{title}</p>
                <p className="intro__desc">{desc}</p>
                <button onClick={clickHandler} className="intro__cta">
                    Start
                </button>
            </div>
        </Wrapper>
    )
}


export default Intro;