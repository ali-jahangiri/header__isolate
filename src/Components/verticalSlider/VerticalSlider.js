import VerticalSliderWrapper from "./style";
import dataConstructor from "../../utils/dataConstructor";
import selfClearTimeOut from "../../utils/selfClearTimeOut";
import { useRef, useState } from "react";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { imageFinder } from "../../utils/ImageFinder";


const MOCK = [
    {
        name : "slider__item__1",
        value : JSON.stringify({
            Link : '',
            value : 'https://source.unsplash.com/VsBl5PwVZpY/2000x1200',
            TEXT : 'this is title of one',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__2",
        value : JSON.stringify({
            Link : '',
            value : 'https://source.unsplash.com/D8GFCYxyJj8/2000x1200',
            TEXT : 'this is title of two',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__3",
        value : JSON.stringify({
            Link : '',
            value : 'https://source.unsplash.com/D8GFCYxyJj8/2000x1200',
            TEXT : 'this is title of tree',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__4",
        value : JSON.stringify({
            Link : '',
            value : 'https://source.unsplash.com/VsBl5PwVZpY/2000x1200',
            TEXT : 'this is title of four',
        }),
        setByCustomer : false,
    },
];
const componentsStyle = [
    {
        name : "containerOfSliderBgColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "slideBgColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderFontColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderHeight",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderFontSize",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderInnerBorderColor",
        value : "red",
        setByCustomer : true
    },
    {
        name : "sliderInnerBorderSize",
        value : "red",
        setByCustomer : true
    },
    {
        name : "sliderFontSizeMobile",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderImageSize",
        value : "60%",
        setByCustomer : true
    },
    {
        name : "sliderControllerSize",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderControllerColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "sliderControllerHoverColor",
        value : "",
        setByCustomer : false
    },
];

const arrowSvg = (className) => (
    <>
<svg className={className} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 512 512" >
<g>
	<g>
		<path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
			c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
			l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
			c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

    </>
)

const VerticalSlider = () => {
    const data = dataConstructor(MOCK);
    
    const [activeSlider, setActiveSlider] = useState(0);
    const [isOnSlideChange, setIsOnSlideChange] = useState(false);
    const [currentTextValue, setCurrentTextValue] = useState(JSON.parse(data.get((data) => data.filter(el => el.name.includes("slider__item__")))[0].value).TEXT);

    const setTextValue = (currentIndex) => {
        setCurrentTextValue(JSON.parse(data.get((data) => data.filter(el => el.name.includes("slider__item__")))[currentIndex].value).TEXT)
    }

    const ref = useRef();
    
    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        swipe : false
    }
    const sliderCount = data.get((data) => data.filter(el => el.name.includes("slider__item__"))).length - 1;

    const nextSlidHandler = () => {
        setIsOnSlideChange(true)
        if(activeSlider <= 0) {
            setActiveSlider(sliderCount)
            ref.current.slickGoTo(sliderCount)
            selfClearTimeOut(() => {
                setIsOnSlideChange(false)
                setTextValue(sliderCount) 
            }, 500);
        }else {
            setActiveSlider(prev => prev - 1)
            selfClearTimeOut(() => {
                ref.current.slickPrev();
                setIsOnSlideChange(false)
                setTextValue(activeSlider - 1)
            } , 500)
        }
    }
    const prevSlideHandler = () => {
        setIsOnSlideChange(true)
        if(activeSlider >= sliderCount) {
            setActiveSlider(0)
            ref.current.slickGoTo(0)
            selfClearTimeOut(() => {
                setIsOnSlideChange(false)
                setTextValue(0)
            } , 500)
        }else {
          setActiveSlider(prev => prev + 1);
          selfClearTimeOut(() => {
            ref.current.slickNext()
            setIsOnSlideChange(false)
            setTextValue(activeSlider + 1)
        } , 500)  
        }
    }
    
    return (
        <VerticalSliderWrapper className='slider' $style={componentsStyle}>
            <div className="slider__controller">
                <div onClick={nextSlidHandler}>{arrowSvg("slider__controller--next")}</div>
                <div onClick={prevSlideHandler}>{arrowSvg("slider__controller--prev")}</div>
            </div>
            <div className={`slider__text ${isOnSlideChange ? "slider__text--hide" : "slider__text--visible"}`}>
                <p>{currentTextValue}</p>
            </div>
            <SlickSlider className="slider" ref={ref} {...sliderConfig}>
                {data.get((data) => data.filter(el => el.name.includes("slider__item__")))
                    .map((slide , i) => (
                        <div key={i}>
                            <div className={`slider__item ${activeSlider === i ? "slider__item--active" : "slider__item--deActive"}`}>
                                <div className="slider__inner">
                                    <div className="slider__outline"></div>
                                    <div style={{ backgroundImage : `url(../../${imageFinder}${JSON.parse(slide.value).value})` }} className="slider__img"></div>
                                </div>
                            </div>
                        </div>
                    ))}
            </SlickSlider>
        </VerticalSliderWrapper>
    )
}

export default VerticalSlider;