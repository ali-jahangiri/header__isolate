import SliderWrapper from "./style";

import styleConstructor from '../../utils/styleConstructor';
import dataConstructor from "../../utils/dataConstructor";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";


const MOCK = [
    {
        name : "sliderSpeed",
        value : "",
        setByCustomer : false
    },
    {
        name : "showDots",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderId",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderId",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderId",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderId",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderId",
        value : "",
        setByCustomer : false
    },
    {
        name : "slider__item__1",
        linkText : "go to link",
        text : "this is value",
        bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-3.jpg",
        path : "https://google.com"
    },
    {
        name : "slider__item__2",
        bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-2.jpg",
        linkText : "go to link",
        text : "this is value",
        path : "https://google.com"
    },
    {
        name : "slider__item__3",
        bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-1.jpg",
        linkText : "go to link",
        text : "this is value",
        path : "https://google.com"
    },
    {
        name : "slider__item__4",
        bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-4.jpg",
        linkText : "go to link",
        text : "this is value",
        path : "https://google.com"
    },
];
const componentStyle = [
    {
        name :  "itemBgColor",
        value : "",
        setByCustomer : false
    },
    {
        name :  "itemBgColorHover",
        value : "",
        setByCustomer : false
    },
    {
        name :  "itemLinkColor",
        value : "",
        setByCustomer : false
    },
    {
        name :  "itemTextColor",
        value : "",
        setByCustomer : false
    },
    {
        name :  "itemTextFontSize",
        value : "",
        setByCustomer : false
    },
    {
        name :  "itemLinkFontSize",
        value : "",
        setByCustomer : false
    },
    {
        name :  "sliderMargin",
        value : "",
        setByCustomer : false
    },
    {
        name :  "activeDotColor",
        value : "",
        setByCustomer : false
    },
];


const Slider = () => {
    const [activeSlider, setActiveSlider] = useState(0);

    const data = dataConstructor(MOCK);
    const style = styleConstructor(componentStyle);

    const sliderConfig = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <SliderWrapper $style={style}>
             <SlickSlider afterChange={(index) => setActiveSlider(index)} className="slider" {...sliderConfig}>
                {
                    data.get((data) => data.filter(el => el.name.includes("slider__item__"))).map((el , i) => (
                        <div key={i}>
                            <div style={{ backgroundImage : `url(${el.bgSrc})` }} className={`slider__item ${activeSlider === i ? 'slider__item--active' : ""}`}>
                                <span className={`slider__overlay ${activeSlider === i ? 'slider__overlay--active' : "" }`}></span>
                            <div className="slider__item__content"  >
                                <div>
                                    <p>{el.text}</p>
                                    <a href={el.path}>{el.linkText}</a> 
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </SlickSlider>  
        </SliderWrapper>
    )
}


export default Slider;