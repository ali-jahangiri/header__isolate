import React, { useEffect, useState } from 'react';


const InsFocusStepperOverlay = ({ shouldGetHide }) => {
    const [shouldOverlayGetDestroyed, setShouldOverlayGetDestroyed] = useState(false);

    useEffect(() => {
        if(shouldGetHide) {
            let timer = setTimeout(() => {
                setShouldOverlayGetDestroyed(true);
                clearTimeout(timer);
            } , 500);
        }
    } , [shouldGetHide])


    return (
        !shouldOverlayGetDestroyed ? <div className={`insFocus__stepper__overlay ${shouldGetHide ? "insFocus__stepper__overlay--getHide" : ""}`} /> : null
    )
}


export default InsFocusStepperOverlay;