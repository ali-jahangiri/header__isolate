import { useMemo, useState } from "react";
import GalleyItem from "./GalleryItem";
import Wrapper from "./style";

const makeValidValueList = ( valueObject = {} , targetKey ) => {
    return Object
        .entries(valueObject)
        .filter(([key]) => key.includes(targetKey))
        .map(([_ , value]) => value);
}


export const mockStyle = {
    useFadeOverlay : true
}


export const mockData = {
    itemVideo1 : "https://player.vimeo.com/external/573632985.sd.mp4?s=276ee06082d1535aa5fb4429ec8e3c1659ba7546&profile_id=165&oauth2_token_id=57447761",
    itemVideo2 : "https://player.vimeo.com/external/515123267.sd.mp4?s=65533e5cb2668c3f0bb1a2ac4fabd071ec985fec&profile_id=165&oauth2_token_id=57447761",
    itemVideo3 : "https://player.vimeo.com/external/428228445.sd.mp4?s=7221faa21c44298d6e94d660b4bd82f3de219811&profile_id=165&oauth2_token_id=57447761",
    itemVideo4 : "https://player.vimeo.com/external/487633120.sd.mp4?s=c230413cef0888a55912d3ddd4e6e05234c8395a&profile_id=165&oauth2_token_id=57447761",
    itemText1 : "<div><p>Insurance</p><p>Name of new</p></div>",
    itemText2 : "<div><p>Insurance</p><p>Name of new</p></div>", 
    itemText3 : "<div><p>Insurance</p><p>Name of new</p></div>",
    itemText4 : "<div><p>Insurance</p><p>Name of new</p></div>",
    itemText5 : "<div><p>Insurance</p><p>Name of new</p></div>",
}

const Galley = ({ componentStyles , componentDatas }) => {
    const [currentHoveredItem, setCurrentHoveredItem] = useState(null);
    const [currentSelectedItem, setCurrentSelectedItem] = useState("");

    const textList = useMemo(() => makeValidValueList(componentDatas , "itemText") , [componentDatas]);
    const videoList = useMemo(() => makeValidValueList(componentDatas , "itemVideo") , [componentDatas]);

    return (
        <Wrapper>
            {
                videoList.map((el , i) => <GalleyItem 
                                            index={i} 
                                            setCurrentSelectedItem={setCurrentSelectedItem} 
                                            setCurrentHoveredItem={setCurrentHoveredItem} 
                                            isHover={currentHoveredItem === i} 
                                            isActive={typeof(currentSelectedItem) === "string" ? null : currentSelectedItem === i ? true : false}
                                            key={i} 
                                            {...el}  
                                            text={textList[i]} 
                                            videoPath={videoList[i]} />)
            }
        </Wrapper>
    )
}


export default Galley;