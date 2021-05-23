

import Container from "../../../components/Container";
import StyledWrapper from "./style";
import {  dataConstructor, styleConstructor } from "../../../utils"
import SliderInstance from "./SliderInstance";
import useMediaQuery , { MediaQueryProvider }  from "../../../utils/Hooks/useMediaQuery"
import Bg from "../../../utils/HOC/Bg/Bg";


const SliderDirectory = ({ get , slideEffect }) => {
    
    const isMobile = useMediaQuery("lg");
    const isTablet = useMediaQuery("xl");
    
    const renderSliders = () => {
        
        if(isMobile) {
            
            return (
                <section className="groupSlider__singleColumn">
                    <SliderInstance effect={slideEffect} combinedData={[get("smallSliderItem__1"),get("smallSliderItem__2"),get("bigSliderItem")].reduce((acc , res) => [...acc , JSON.parse(res)], []).flat()} />
                </section>
            )
        }else if(!isMobile) {
            return (
                <>  
                    <div className="groupSlider__column">
                        <div className="groupSlider__gap">
                            <SliderInstance style={{ width: isTablet ? "49%" : "100%" }} effect={slideEffect} data={JSON.parse(get("smallSliderItem__1"))} />
                            <SliderInstance style={{ width: isTablet ? "49%" : "100%" }} effect={slideEffect} data={JSON.parse(get("smallSliderItem__2"))}/>
                        </div>
                    </div>
                    <div className="groupSlider__column">
                        <div className="groupSlider__gap">
                            <SliderInstance effect={slideEffect} data={JSON.parse(get("bigSliderItem"))} />
                        </div>
                    </div>
                </>
            )
        }
    }
    return renderSliders()
}



const GroupSlider = ({ componentStyles , data }) => {
    const { getData , _ } = dataConstructor(data);
    const { get : getStyle , check : checkStyle } = styleConstructor(componentStyles);
    
    return (
        <StyledWrapper style={componentStyles}>
            <Bg className="bgContainer______" extendCss={`
                & > div {
                    @media (max-width : 992px) {
                        flex-direction : column-reverse;
                    }
                }
            `} check={checkStyle} get={getStyle}>
            <Container>
                <MediaQueryProvider maxWidth>
                    <SliderDirectory slideEffect={getStyle("slideChangeEffect")} get={getData} />
                </MediaQueryProvider>
            </Container>
            </Bg>
        </StyledWrapper>
        
    )
}


export default GroupSlider;