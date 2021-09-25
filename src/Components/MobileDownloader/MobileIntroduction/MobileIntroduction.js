import React from 'react';
import Wrapper from "./style";


const colors = ["406343" , "664E88" , "889EAF" , "4A403A" , "FFB344"];

const MobileIntroduction = ({ data , componentStyles }) => {

    const downloadHandler = () => {
        window.location.replace("");
    }

    return (
        <Wrapper id="MobileIntroduction">
            <div className="mobileIntroduction__background" >
                <div />
                <div />
            </div>
            <div className="mobileIntroduction__container">
                <div className="mobileIntroduction__phoneFrame">
                    <img onClick={downloadHandler} src={data.mobileImage} alt="mobileImage" />
                </div>
                <div className="mobileIntroduction__body">
                    <div className="mobileIntroduction__title">
                        <p>Sapiente amet adipisci eum. Alias et minus cum sit alias libero.</p>
                    </div>
                    <div className="mobileIntroduction__desc">
                        Praesentium nulla labore. Illo delectus natus tempore quod vero et. Iste omnis non beatae.Praesentium nulla labore. Illo delectus natus tempore quod vero et. Iste omnis non beatae.
                    </div>
                    <div className="mobileIntroduction__featureList">
                        {
                            data.feature.map((el , i ) => (
                                <div style={{ backgroundColor : `#${colors[i]}50` }} className="mobileIntroduction__featureBox" key={i}>
                                    <div style={{ backgroundColor : `#${colors[i]}50` }}>
                                        <img src={el.icon} alt="featureImage" />
                                    </div>
                                    <p>{el.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mobileIntroduction__actionContainer">
                        <div className="mobileIntroduction__prefix">
                            <p>Are you Ready to download the application ? </p>
                        </div>
                        <button onClick={downloadHandler} className="mobileIntroduction__cta">Download Now</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}



export default MobileIntroduction;