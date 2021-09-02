import { useRef, useState } from "react";
import ReactParser from "react-html-parser"
import Wrapper from "./GalleyItemStyle";

const BackSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>155 arrow left</title><path d="M.876,14.088l3.879,3.879a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L2.614,13,23,13a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1L2.553,11,6.169,7.381a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0L.875,9.846A3.007,3.007,0,0,0,.876,14.088Z"/></svg>
const NextSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>154 arrow right</title><path d="M23.124,9.907,19.245,6.029a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L21.386,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.447l-3.616,3.615a1,1,0,0,0,0,1.415h0a1,1,0,0,0,1.414,0l3.88-3.879A3.008,3.008,0,0,0,23.124,9.907Z"/></svg>


const GalleyItem = ({ text , videoPath , setCurrentHoveredItem , isHover , index , setCurrentSelectedItem , isActive }) => {
    const [isPlay, setIsPlay] = useState(false)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef();



    const onHoverHandler = () => {
        setCurrentHoveredItem(index)
        if(!isPlay) {
            videoRef.current?.play();
            setIsPlay(true);
        }else if(isActive !== true) {
            videoRef.current?.pause()
            setIsPlay(false);
        }
    }


    const selectHandler = () => setCurrentSelectedItem(index);

    const quickCtaHandler = e => {
        e.stopPropagation();
    }


    return (
        <Wrapper isActive={isActive} onClick={selectHandler} onMouseEnter={() => isVideoLoaded && onHoverHandler()} onMouseLeave={onHoverHandler}>
            <div style={{ transitionDelay : isActive ? '.3s' : '0s' }} className="galleryItem__content">
                <div className="galleryItem__content__playground">
                    {ReactParser(text)}
                </div>
                <div onClick={quickCtaHandler} className={`galleryItem__quickCta ${isHover ? "galleryItem__quickCta--visitable" : ""}`}>
                    <p>Order Now</p>
                    <NextSvg />
                </div>
            </div>
            {
                !isVideoLoaded && <div className="galleryItem__video__loadingOverlay"></div>
            }
            <div onClick={e => {
                e.stopPropagation()
                setCurrentSelectedItem("");
            }} className={`galleryItem__controller ${isActive ? "galleryItem__controller--active" : ""}`}>
                <BackSvg />
                <p>Back</p>
            </div>
            <div className={`galleryItem__fadeOverlay ${!isHover || isActive === true ? "galleryItem__fadeOverlay--active" : ""}`}></div>
            <video onLoadedData={() => setIsVideoLoaded(true)} ref={videoRef} loop preload="auto">
                <source src={videoPath} type='video/mp4' />
            </video>
        </Wrapper>
    )
}

export default GalleyItem;