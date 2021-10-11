import React, { useEffect, useState } from 'react';
import dataConstructor from '../../../utils/utils';
import Wrapper from "./style";

const TimeIcon = () => <svg className="rotateIcon" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm2-10a2,2,0,1,1-3-1.723V7a1,1,0,0,1,2,0v3.277A1.994,1.994,0,0,1,14,12Z"/></svg>
const CheckTimeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M23.707,16.325a1,1,0,0,0-1.414,0l-5.627,5.628L13.978,19.3A1,1,0,0,0,12.543,20.7L15.287,23.4a1.876,1.876,0,0,0,1.345.6h.033A1.873,1.873,0,0,0,18,23.447l5.707-5.708a1,1,0,0,0,0-1.414Z"/><path d="M11.09,21.959A10,10,0,1,1,22,12c0,.307-.015.611-.041.911A1,1,0,0,0,22.866,14a.989.989,0,0,0,1.085-.907C23.983,12.73,24,12.367,24,12A12,12,0,1,0,10.91,23.951c.031,0,.061,0,.091,0a1,1,0,0,0,.089-2Z"/><path d="M11,7v4.586L8.293,14.293a1,1,0,1,0,1.414,1.414l3-3A1,1,0,0,0,13,12V7a1,1,0,0,0-2,0Z"/></svg>


const MobileRedirectionDownload = ({ data , componentStyles }) => {
    const [currentTime, setCurrentTime] = useState(5);
    
    const { get } = dataConstructor(data);

    useEffect(() => {
        let looperTimer = setInterval(() => {
            setCurrentTime(prev => {
                if(prev !== 0) return prev - 1;
                else clearInterval(looperTimer);
            });
        } , 1000);

        let timer = setTimeout(() => {
            window.location.replace(get("downloadPath"));
        } , 5000);
        return () => {
            clearTimeout(timer);
        }
    } , []);

    return (
        <Wrapper style={componentStyles} id="MobileDownloadRedirection">
            <div>
                {
                    !currentTime ? <CheckTimeIcon /> : <TimeIcon />
                }
                <div>
                    {
                        !currentTime ? <div className="redirectionTextContainer"><p> در حال انتقال </p><span>...</span></div> :<React.Fragment>
                            <span>ثانیه</span>
                            <span style={{ fontWeight : 500}}> {currentTime} </span>
                            <span>تا دریافت فایل نصبی</span>
                        </React.Fragment>
                    }
                </div>
            </div>
        </Wrapper>
    )
}



export default MobileRedirectionDownload;