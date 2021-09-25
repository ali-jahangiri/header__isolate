import React, { useEffect, useLayoutEffect, useState } from 'react';
import { debounce } from '../utils';



const useScrollPosition = config => {
    const { targetElement , containerElement } = config;
    const [reforce, setForcer] = useState(0);

    const [currentPosition, setCurrentPosition] = useState(0);
    
    
    const onScrollHandler = () => {
        const currentScrolled = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        setCurrentPosition(currentScrolled)
        // if(targetElement) {
        //     if(containerElement.getClientRects()[0].top <= 0) {
        //         setCurrentPosition(containerElement.getClientRects()[0].top)
        //     }
        // }

    };

    useEffect(() => {
        // setForcer(Date.now());
        console.log(targetElement , containerElement)
    } , [config]);

    useEffect(() => {
        document.addEventListener("scroll" , onScrollHandler);
        
    } , []);

    return currentPosition;
}



export default useScrollPosition;