import SlickSlider from "react-slick";
import { useRef } from "react";
import SliderController from "./SliderController";
import { imageFinder } from "../../../utils";

const SliderTest = ({ data , style , combinedData , effect }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        fade : effect === "swipe" ? false : true
      };
      
    const sliderRef = useRef()

    return (
        <div style={style} className="groupSlider__container">
            <SliderController sliderRef={sliderRef} />
             <SlickSlider ref={sliderRef} dotsClass="slick-dots groupSlider__slideDots" {...settings}>
                 {
                     combinedData?.map(((el , i) => (
                        <div key={i}>
                            <div data-id="combined" className="groupSlider__slide">

                                <img src={`../..${imageFinder}${el.value}`} alt="slider_item" />
                            </div>
                        </div>
                    )))
                    || 
                        data.map((el , i) => (
                            <div key={i}>
                            <div data-id="bespread" className="groupSlider__slide">

                                <img src={`../..${imageFinder}${el.value}`} alt="slider_item" />
                            </div>
                            </div>
                            ))
                    }
                 
             </SlickSlider>
        </div>
    )
}

export default SliderTest