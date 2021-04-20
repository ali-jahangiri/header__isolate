import SliderWrapper from "./style";

import styleConstructor from '../../utils/styleConstructor';
import dataConstructor from "../../utils/dataConstructor";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { imageFinder } from "../../utils/ImageFinder";

import ReactHtmlParser from "react-html-parser";

const MOCK = [
    {
        name : "sliderSpeed",
        value : "",
        setByCustomer : false
    },
    {
        name : "showSliderDots",
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
        name : "readMoreText",
        value : "",
        setByCustomer : false
    },
    {
        name : "slider__item__1",
        value : JSON.stringify({
            Link : '',
            value : '',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__2",
        value : JSON.stringify({
            Link : '',
            value : '',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__3",
        value : JSON.stringify({
            Link : '',
            value : '',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__4",
        value : JSON.stringify({
            Link : '',
            value : '',
            TEXT : '',
        }),
        setByCustomer : false,
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
        dots: data.check("showSliderDots") ? data.get("showSliderDots") === "yes" && true : true,
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
                            <div style={{ backgroundImage : `url(../../${imageFinder}${JSON.parse(el.value).value})` }} className={`slider__item ${activeSlider === i ? 'slider__item--active' : ""}`}>
                                <span className={`slider__overlay ${activeSlider === i ? 'slider__overlay--active' : "" }`}></span>
                            <div className="slider__item__content"  >
                                <div>
                                    <p>{ReactHtmlParser(JSON.parse(el).TEXT)}</p>
                                    <a href={JSON.parse(el.value).Link}>{data.check("readMoreText")? data.get("readMoreText"): "بیشتر بخوانید"}</a> 
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