import { useLayoutEffect, useState } from 'react';
import BoxItem from './BoxItem';
import Wrapper from './style';


// ! remove this
import MediaQueryProvider from "../../../utils//MediaQueryProvider"
import useMediaQuery from "../../../utils//useMediaQuery"


export const mockData = {
    list : [
        {Link : "" , value : "" , TEXT : "Home"},
        {Link : "" , value : "" , TEXT : "Shop"},
        {Link : "" , value : "" , TEXT : "About us"},
        {Link : "" , value : "" , TEXT : "Location"},
        {Link : "" , value : "" , TEXT : "Free"},
    ]
}

const CloseSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>155 arrow left</title><path d="M.876,14.088l3.879,3.879a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L2.614,13,23,13a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1L2.553,11,6.169,7.381a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0L.875,9.846A3.007,3.007,0,0,0,.876,14.088Z"/></svg>
const OpenSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>154 arrow right</title><path d="M23.124,9.907,19.245,6.029a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L21.386,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.447l-3.616,3.615a1,1,0,0,0,0,1.415h0a1,1,0,0,0,1.414,0l3.88-3.879A3.008,3.008,0,0,0,23.124,9.907Z"/></svg>
const Hamburger = () =>  <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><title>183 burger menu</title><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>

const SideBarBoxed = ({ componentStyles , componentDatas }) => {
    const isMobile = useMediaQuery('md');
    const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile ? false : true)







    useLayoutEffect(() => {
        const CONDITIONAL_KEY = 'wasChangeFromNestedComponentContext';
        const _bodyReference = document.body;

        if(!isMobile) {
            _bodyReference.style.transition = "padding-right .3s"
            _bodyReference.style.paddingRight = `160px`;
            _bodyReference.setAttribute(CONDITIONAL_KEY , true);

        }

        return () => {
            if(_bodyReference.getAttribute(CONDITIONAL_KEY)) {
                _bodyReference.style.paddingRight = "0px"
            }
        }
    } , []);


    const closeSidebarHandler = () => {
        const _bodyReference = document.body.style;
        if(!isSidebarOpen) {
            setIsSidebarOpen(true);
            if(isMobile) return;
            else _bodyReference.paddingRight = `160px`;
        }else {
            setIsSidebarOpen(false);
            if(isMobile) return;
            else _bodyReference.paddingRight = `0`;
        }
    }

    return (
        <Wrapper isClosed={isSidebarOpen}>
            <diV className="sideBarBoxed__itemContainer">
                {
                    componentDatas.list.map((el , i) => <BoxItem key={i} {...el} />)
                }
            </diV>
            {
                !isSidebarOpen && <div onClick={closeSidebarHandler} className="sideBarBoxed__openTrigger">
                    <Hamburger /> 
                </div>
            }
            <div onClick={closeSidebarHandler} className="sideBarBoxed__backTrigger"> 
                <p>Close</p>
                <OpenSvg />
            </div>
        </Wrapper>
    )
}



const EnhancedSideBarWithMediaQuery = ({...rest}) => (
    <MediaQueryProvider maxWidth>
        <SideBarBoxed {...rest} />
    </MediaQueryProvider>
)

export default EnhancedSideBarWithMediaQuery;