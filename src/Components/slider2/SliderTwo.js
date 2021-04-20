import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styleConstructor from "../../utils/styleConstructor";
import dataConstructor from "../../utils/dataConstructor";

import SliderTwoWrapper from "./style"
import SlickSlider from "react-slick";
import { useRef, useState } from "react";
import selfClearTimeout from "../../utils/selfClearTimeOut";
import { imageFinder } from "../../utils/ImageFinder";

const MOCK = [
    {
        name : "slider__item__1",
        value : JSON.stringify({
            Link : '',
            value : 'https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLVUpEems2ZXpHYVk',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__2",
        value : JSON.stringify({
            Link : '',
            value : 'https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLRml1b3B6eXVqQ2s',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__3",
        value : JSON.stringify({
            Link : '',
            value : 'https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLWTdaX3J5b1VueDg',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__4",
        value : JSON.stringify({
            Link : '',
            value : 'https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__5",
        value : JSON.stringify({
            Link : '',
            value : 'https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLNXBIcEdOUFVIWmM',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "slider__item__6",
        value : JSON.stringify( {
            Link : '',
            value : 'https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLVUpEems2ZXpHYVk',
            TEXT : '',
        }),
        setByCustomer : false,
    },
    {
        name : "sliderStarterText",
        value : 'Quidem ipsa harum ipsa fugit totam dolorem cum ipsum. Omnis veniam et aut. Sunt dolores id. Voluptatum ducimus exercitationem.Assumenda voluptas quasi. Assumenda accusantium consequatur. Qui necessitatibus ea voluptatem voluptas enim. Omnis beatae aut deserunt ad tempora eaque. Iste quia autem totam accusantium deleniti.Illum voluptatem voluptatem tempora incidunt totam autem sit. Accusantium qui cupiditate. Eveniet iure ut occaecati impedit. Sequi delectus quis est totam quos tempore dicta. Quis ut repellendus mollitia at omnis commodi aut asperiores rerum. Voluptate explicabo et.',
        setByCustomer : true
    },
];

const componentStyle = [
    {
        name : "sliderChangeSpeed",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderAutoplaySpeed",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderAutoPlay",
        value : '',
        setByCustomer : false
    },
    {
        name : "showSliderDots",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderItemBorder",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderItemTextColor",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderItemHeight",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderItemFontSize",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderItemBorderRadius",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderItemDeActiveBlur",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderStarterTextColor",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderStarterTextFontSize",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderStarterPadding",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderStarterTextAlignment",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderStarterWidth",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderStarterAlignment",
        value : '',
        setByCustomer : false
    },
    {
        name : "sliderStarterHeight",
        value : '',
        setByCustomer : false
    },
];


const SliderTwo = () => {
    const [activeSlider, setActiveSlider] = useState(0);
    const [isOnSwipe, setIsOnSwipe] = useState(false);
    const style = styleConstructor(componentStyle);
    const data = dataConstructor(MOCK);

    const sliderRef = useRef();

    const sliderConfig = {
        dots: style.check("showSliderDots") ? style.get("showSliderDots") === "yes" : true,
        infinite: false,
        autoplay: style.check("") ? style.get("") === "yes" && true : true,
        speed: style.check("sliderChangeSpeed") ? style.get("sliderChangeSpeed") : 500,
        autoplaySpeed : style.check("sliderAutoplaySpeed") ? style.get("sliderAutoplaySpeed") : 3000,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const sliderItemClickItem = index => {
        if(isOnSwipe) return;
        let currentIndexOfActive = index;
        if(currentIndexOfActive !== activeSlider) {
            setActiveSlider(currentIndexOfActive)
            sliderRef.current.slickGoTo(currentIndexOfActive)
        }
    }
    const afterChangeHandler = (index) => {
            setIsOnSwipe(false);
            setActiveSlider(index);

            // NOTE when reach end of slider item , we Submission the index because items index start from zero
            if(index === data.get((values) => values.filter(el => el.name.includes("slider__item__"))).length - 1) {
                selfClearTimeout(() => {
                    sliderRef.current.slickGoTo(0)
                } , data.check("sliderAutoplaySpeed") ? data.get("sliderAutoplaySpeed") : 3000)
            }
    }
    return (
        <SliderTwoWrapper $style={style}>
            <SlickSlider 
                onSwipe={() => setIsOnSwipe(true)} 
                ref={sliderRef} 
                afterChange={(index) => afterChangeHandler(index)} 
                {...sliderConfig}
                className="slider"
            >
                <div className="slider__container">
                    <div className={`slider__starter ${activeSlider ? "slider__starter--deActive" : ""}`}>
                        <p>{data.check("sliderStarterText") ? data.get("sliderStarterText") : ""}</p>
                    </div>
                </div>
                {
                    data.get((values) => values.filter(el => el.name.includes("slider__item__")))
                    .map((slider , i) => (
                        <div className="slider__container" key={i}>
                            <div style={{ backgroundImage : `url(../../${imageFinder}${JSON.parse(slider.value).value})` }} onClick={() => sliderItemClickItem(i)}  className={`slider__item ${activeSlider  === i ? "slider__item--active" : "slider__item--deActive"}`}>
                                <div className="slider__item__overlay">
                                    <p>{JSON.parse(slider.value).TEXT}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div></div>
            </SlickSlider>
        </SliderTwoWrapper>
    )
}

export default SliderTwo;
