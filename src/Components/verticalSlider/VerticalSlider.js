import VerticalSliderWrapper from "./style";

import styleConstructor from "../../utils/styleConstructor";
import dataConstructor from "../../utils/dataConstructor";
import { useRef, useState } from "react";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MOCK = [];
const componentsStyle = [];

const VerticalSlider = () => {
    const [activeSlider, setActiveSlider] = useState(0);

    const style = styleConstructor();
    const data = dataConstructor();

    const ref = useRef();

    const sliderConfig = {
        dots: data.check("showSliderDots") ? data.get("showSliderDots") === "yes" && true : true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const nextSlidHandler = () => {
        
    }
    return (
        <VerticalSliderWrapper $style={style}>
            <SlickSlider ref={ref} {...sliderConfig}>

            </SlickSlider>
        </VerticalSliderWrapper>
    )
}

export default VerticalSlider;