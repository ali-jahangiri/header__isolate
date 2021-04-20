import SliderWrapper from "./style";

import styleConstructor from '../../utils/styleConstructor';
import dataConstructor from "../../utils/styleConstructor";

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

    const mockMap = [
        {
            linkText : "this is link1",
            desc : "this is content",
            bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-3.jpg",
            path : "https://google.com"
        },
        {
            linkText : "this is link2",
            desc : "this is content",
            bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-2.jpg",
            path : "https://google.com"
        },
        {
            linkText : "this is link3",
            desc : "this is content",
            bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-1.jpg",
            path : "https://google.com"
        },
        {
            linkText : "this is link4",
            desc : "this is content",
            bgSrc : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-4.jpg",
            path : "https://google.com"
        },

    ]
    return (
        <SliderWrapper $style={style}>
             <SlickSlider afterChange={(index) => setActiveSlider(index)} className="slider" {...sliderConfig}>
                {
                    mockMap.map((el , i) => (
                        <div key={i}>
                            <div style={{ backgroundImage : `url(${el.bgSrc})` }} className={`slider__item ${activeSlider === i ? 'slider__item--active' : ""}`}>
                                <span className={`slider__overlay ${activeSlider === i ? 'slider__overlay--active' : "" }`}></span>
                            <div className="slider__item__content"  >
                                <div>
                                    <p>{el.desc}</p>
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