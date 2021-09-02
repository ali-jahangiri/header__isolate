import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Dots from "./Dots";
import Wrapper from "./style";
import TextBox from "./TextBox";


const images = ["https://images.unsplash.com/photo-1630522791300-ba628fef4d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1630457240966-ebcb76fd2893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" , "https://images.unsplash.com/photo-1630495325532-815f8d91a31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" , "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"]
const textList = ["Molestia Totam quos soluta dignissimos veritatis voluptas sint reprehenderit asperiores et. Necessitatibus voluptatem dignissimos.Deleniti fuga sit porro deserunt nihil velit. Non ullam reprehenderit expedita incidunt. Asperiores officia voluptas harum est minus illum reprehenderit." ,"Dignissimos quis itaque. Ut vel recusandae quas iste. Et voluptatem impedit. Nobis dolorum sequi sint dolor." , "Dicta minima tenetur magnam commodi provident sunt modi rerum. Aut dignissimos dolorum dolore repellat perspiciatis. Sapiente rerum voluptatibus qui necessitatibus occaecati est alias. Quia molestiae asperiores perspiciatis. Est et est. Quis eum inventore in." , "Qui maxime modi est ea qui nobis qui ea. Voluptatem quo eos. Est quia a tempora esse rem. Aut et error eos est. Sit et maiores quas voluptatem nam iure recusandae suscipit. Sint est sed doloremque quisquam reiciendis."]



const FullScreenSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageSliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        afterChange : index => setCurrentIndex(index),
    }

    const textSliderConfig = {
        ...imageSliderConfig,
        verticalSwiping: true,
        vertical : true
    }


    const imageSliderRef = useRef();
    const textSliderRef = useRef();

    useEffect(() => {
        imageSliderRef.current.slickGoTo(currentIndex);
        textSliderRef.current.slickGoTo(currentIndex);
    } , [currentIndex]);

    return (
        <Wrapper>
            <div className="fullScreenSliderInnerContainer">
                <div className="sliderContainer">
                    <Slider ref={imageSliderRef} {...imageSliderConfig}>
                        {
                            images.map((el  , i) => (
                                <div>
                                    <div style={{ backgroundImage : `url(${el})` }} className="fullScreenSliderItem" key={i}></div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="textSliderContainer">
                    <div className="textSliderInnerContainer">
                        <Slider ref={textSliderRef} {...textSliderConfig}>
                            {
                                textList.map((el, i) => (
                                    <TextBox index={i} title="Title" body={el} key={i} ctaText="Let's go!" />
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="fullScreenSliderDotContainer">
                        <Dots currentIndex={currentIndex} itemsLength={images.length} setCurrentIndex={setCurrentIndex} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}



export default FullScreenSlider;