import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

import { saveException , imageFinder } from "../../utils/ImageFinder";
import Container from "../Container";
import FooterWrapper from "./style";

const data = [
    {
        name : "copyright",
        value : "",
        setByCustomer : false
    },
    {
        name : "desc",
        value : '',
        setByCustomer : false
    },
    {
        name : "logo",
        value : "https://bimemahan.com/assets/front/_images/logo/logo.png",
        setByCustomer : true
    },
    {
        name : "instagramIcon",
        value : "",
        setByCustomer : false
    },
    {
        name : "instagram",
        value : "sd,sadk",
        setByCustomer : true
    },
    {
        name : "telegramIcon",
        value : "",
        setByCustomer : false
    },
    {
        name : "telegram",
        value : "http://google.com",
        setByCustomer : true
    },
    {
        name : "footerBgImage",
        value : "https://bimemahan.com/assets/front/_images/background/back.jpg",
        setByCustomer : false
    },
    {
        name : 'footerItem__1',
        value : JSON.stringify({Link : "http://google.com" , Name : "link goes here3"}),
        setByCustomer : false
    },
    {
        name : 'footerItem__2',
        value : JSON.stringify({Link : "http://google.com" , Name : "link goes here3"}),
        setByCustomer : false
    },
    {
        name : 'footerItem__3',
        value : JSON.stringify({Link : "http://google.com" , Name : "link goes here3"}),
        setByCustomer : false
    },
    {
        name : 'footerItem__4',
        value : JSON.stringify({Link : "http://google.com" , Name : "link goes here3"}),
        setByCustomer : false
    },
    {
        name : "firstCertificate",
        value : "<p>this is just a  test</p>",
        setByCustomer : true
    },
    {
        name : "secondCertificate",
        value : "",
        setByCustomer : false
    },
    {
        name : "thirdCertificate",
        value : "",
        setByCustomer : false
    },
    {
        name : "fourthCertificate",
        value : "",
        setByCustomer : false
    },
    {
        name : 'footerHeadingText',
        value : "",
        setByCustomer : false
    },
]


const componentStyles = [
    {
        name : "backgroundColor",
        value : '',
        setByCustomer : false
    },
    {
        name : "containerBgColor",
        value : '',
        setByCustomer : false
    },
    {
        name : "containerBorder",
        value : '',
        setByCustomer : false
    },
    {
        name : "containerBorderRadius",
        value : '',
        setByCustomer : false
    },
    {
        name : "containerWidth",
        value : '',
        setByCustomer : false
    },
    {
        name : "containerMargin",
        value : '',
        setByCustomer : false
    },
    {
        name : "containerPadding",
        value : '',
        setByCustomer : false
    },
    {
        name : "border",
        value : '',
        setByCustomer : false
    },
    {
        name : "",
        value : '',
        setByCustomer : false
    },
    {
        name : "footerItemColor",
        value : '',
        setByCustomer : false
    },
    {
        name : "footerItemSize",
        value : '',
        setByCustomer : false
    },
    {
        name : "socialIconsBgColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "mailboxBgColor",
        value : "red",
        setByCustomer : false
    },
    {
        name : "mailboxBtnBgColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "socialIconsContainerBgColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "headingTextColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "headingDividerColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "descColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "telegramIconColor",
        value : "",
        setByCustomer : false
    },
    {
        name : "instagramIconColor",
        value : "",
        setByCustomer : false
    },
]


// icons
const telegramIcon = () => <svg className="footer__icon footer__icon--telegram" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" space="preserve"><g><path d="M432.464,512h-37.766c-8.021,0-14.523-6.502-14.523-14.523s6.502-14.523,14.523-14.523h37.766c27.839,0,50.49-22.65,50.49-50.49V79.536c0-27.839-22.65-50.49-50.49-50.49H214.367c-8.021,0-14.523-6.502-14.523-14.523S206.346,0,214.367,0h218.097C476.321,0,512,35.679,512,79.536v352.928C512,476.321,476.321,512,432.464,512z" /><path d="M289.693,512H79.536C35.679,512,0,476.321,0,432.464V79.536C0,35.679,35.679,0,79.536,0h32.684c8.021,0,14.523,6.502,14.523,14.523s-6.502,14.523-14.523,14.523H79.536c-27.839,0-50.49,22.65-50.49,50.49v352.928c0,27.839,22.65,50.49,50.49,50.49h210.157c8.021,0,14.523,6.502,14.523,14.523S297.714,512,289.693,512z" /></g><path  d="M397.094,120.693l-296.09,115.385c-9.593,3.738-9.009,17.5,0.864,20.412l67.633,19.969l21.022,78.715c2.932,9.308,14.725,12.127,21.552,5.157l41.623-39.722l88.273,68.661c9.341,6.856,22.643,1.76,25.015-9.578l50.552-241.69C420.013,126.162,408.366,116.3,397.094,120.693L397.094,120.693z" /><g><path d="M351.348,406.895h-0.001c-6.483,0-12.698-2.046-17.969-5.915c-0.109-0.08-0.216-0.161-0.322-0.244l-78.389-60.974l-32.42,30.94c-5.185,5.188-12.047,8.04-19.356,8.04c-12.064,0-22.601-7.716-26.219-19.202c-0.064-0.205-0.125-0.41-0.18-0.617l-18.918-70.841l-59.818-17.662c-10.545-3.112-17.663-12.223-18.128-23.209c-0.466-10.988,5.856-20.669,16.105-24.663l296.09-115.385c3.502-1.365,7.151-2.056,10.849-2.056c8.965,0,17.381,4.03,23.09,11.056c5.651,6.955,7.835,16,5.991,24.814l-50.554,241.69C378.264,396.705,365.71,406.895,351.348,406.895z M350.652,377.626c0.235,0.155,0.449,0.222,0.696,0.222c0.121,0,1.191-0.03,1.422-1.128l50.552-241.69c0.057-0.272,0.036-0.381-0.103-0.552c-0.151-0.186-0.388-0.327-0.548-0.327c-0.073,0-0.18,0.026-0.302,0.074L116.439,245.65l57.173,16.882c4.854,1.433,8.612,5.292,9.919,10.182l20.171,75.532l39.968-38.142c5.205-4.968,13.264-5.375,18.943-0.957L350.652,377.626z" /><path d="M219.677,360.209c0.456,1.476,17.095-19.324,17.272-20.862l-7.463-36.536c-0.983-4.813,0.761-9.776,4.538-12.915l136.798-113.674c3.292-2.913-0.532-8.05-4.265-5.737L205.69,268.601c-3.814,2.327-5.782,6.775-4.939,11.161L219.677,360.209z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
const InstagramIcon = () => <svg className='footer__icon footer__icon--instagram' version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" space="preserve"><g><path d="M432.464,512.001h-37.767c-8.02,0-14.523-6.502-14.523-14.523s6.503-14.523,14.523-14.523h37.767c27.839,0,50.49-22.65,50.49-50.49V79.537c0-27.839-22.65-50.49-50.49-50.49H214.367c-8.02,0-14.523-6.502-14.523-14.523s6.503-14.523,14.523-14.523h218.098c43.855,0,79.536,35.679,79.536,79.536v352.928C512,476.322,476.321,512.001,432.464,512.001z" /><path  d="M289.694,512.001H79.536C35.679,512.001,0,476.322,0,432.465V79.537C0,35.68,35.679,0.001,79.536,0.001h32.684c8.02,0,14.523,6.502,14.523,14.523s-6.503,14.523-14.523,14.523H79.536c-27.839,0-50.49,22.65-50.49,50.49v352.928c0,27.839,22.65,50.49,50.49,50.49h210.158c8.02,0,14.523,6.502,14.523,14.523C304.218,505.499,297.714,512.001,289.694,512.001z" /></g><path d="M359.599,102.056H152.401c-27.806,0-50.347,22.541-50.347,50.347v207.197c0,27.806,22.541,50.347,50.347,50.347h207.197c27.806,0,50.347-22.541,50.347-50.347V152.402C409.946,124.596,387.405,102.056,359.599,102.056z M256.001,330.781c-41.299,0-74.78-33.48-74.78-74.78s33.48-74.78,74.78-74.78s74.78,33.48,74.78,74.78S297.3,330.781,256.001,330.781z" /><g><path d="M359.599,424.47H152.403c-35.77,0-64.87-29.1-64.87-64.87V152.402c0-35.769,29.1-64.87,64.87-64.87h207.196c35.77,0,64.87,29.1,64.87,64.87v207.197C424.469,395.368,395.368,424.47,359.599,424.47z M152.403,116.579c-19.754,0-35.824,16.07-35.824,35.824v207.197c0,19.753,16.07,35.824,35.824,35.824h207.196c19.754,0,35.824-16.07,35.824-35.824V152.402c0-19.753-16.07-35.824-35.824-35.824H152.403V116.579z M256.001,345.304c-49.242,0-89.303-40.061-89.303-89.303s40.061-89.303,89.303-89.303s89.303,40.061,89.303,89.303S305.243,345.304,256.001,345.304z M256.001,195.744c-33.226,0-60.256,27.03-60.256,60.257s27.03,60.257,60.256,60.257s60.257-27.03,60.257-60.257S289.225,195.744,256.001,195.744z" /><circle cx="346.406" cy="164.504" r="20.449" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>


const Footer = () => {
    const [mailboxValue, setMailboxValue] = useState('');

    const mailboxHandler = () => {
        // TODO ^
    }
    const checkDefaultData = name => {
        return Boolean(data.filter(item => item.name === name)[0]) ? data.filter(item => item.name === name)[0].setByCustomer : saveException('component: Navbar >>> variable: ' + name+ ' url: ' + (typeof window != "undefined" && window.location.current), true);
    }
    const checkDefault = name => {
        return Boolean(componentStyles.filter(item => item.name === name)[0]) ? componentStyles.filter(item => item.name === name)[0].setByCustomer : saveException('component: Navbar >>> variable: ' + name + + ' url: ' + (typeof window != "undefined" && window.location.current), true);
        //return componentStyles.filter(item => item.name === name)[0].setByCustomer;
    }
    const getData = name => {
        return Boolean(data.filter(item => item.name === name)[0]) ? data.filter(item => item.name === name)[0].value : saveException('component: Navbar >>> variable: ' + name + ' url: ' + (typeof window != "undefined" && window.location.current), true);
        //return data.filter(item => item.name === name)[0].value
    }
    const getStyles = name => {
        return Boolean(componentStyles.filter(item => item.name === name)[0]) 
        ? componentStyles.filter(item => item.name === name)[0].value 
        : saveException('component: Navbar >>> variable: ' + name + ' url: ' + (typeof window != "undefined" && window.location.current), true);
    }
    return (
        <Container checkDefault={checkDefault} getStyles={getStyles}>
            <FooterWrapper  checkDefault={checkDefault} getStyles={getStyles}>
                <div className="footer__row">
                    <div className="footer__certificates">
                    {checkDefaultData('firstCertificate') &&
				    			<div className="certificateItem">
				    				{ReactHtmlParser(getData('firstCertificate'))}
				    			</div>
				    		}
				    		{checkDefaultData('secondCertificate') &&
				    			<div className="certificateItem">
				    				{ReactHtmlParser(getData('secondCertificate'))}
				    			</div>
				    		}
				    		{checkDefaultData('thirdCertificate') &&
				    			<div className="certificateItem">
				    				{ReactHtmlParser(getData('thirdCertificate'))}
				    			</div>
				    		}
				    		{checkDefaultData('fourthCertificate') &&
				    			<div className="certificateItem">
				    				{ReactHtmlParser(getData('fourthCertificate'))}
				    			</div>
				    		}
                    </div>
                    <div className="footer__mailbox">
                        <input  placeholder="ایمیل را وارد کنید" value={mailboxValue} onChange={({ target : { value } }) => setMailboxValue(value)} />
                        <button onClick={mailboxHandler}>عضویت در خبرنامه</button>
                    </div>
                </div>
                <div style={{ background : `url(${checkDefaultData("footerBgImage") ? getData("footerBgImage") : ""})`}} className="footer__row">
                <div className="footer__inner">
                    <div className="footer__links">
                        <div className="footer__heading">
                            <span></span>
                            {checkDefaultData('footerHeadingText') ? getData("footerHeadingText") : <p>لینک های مفید</p>}
                        </div>
                        <div className="footer__linkContainer">
                            <div>
                            {
                                data.filter(el => el.name.includes("footerItem") && el.value)
                                .slice(0 , 2)
                                .map(({ value } , i) => (
                                    <a className="footer__item" href={JSON.parse(value).Link} key={i} >{JSON.parse(value).Name}</a>
                                ))
                            }
                            </div>
                            <div>
                            {
                                data.filter(el => el.name.includes("footerItem") && el.value)
                                .slice(2 , 4)
                                .map(({ value } , i) => (
                                    <a className="footer__item" href={JSON.parse(value).Link} key={i} >{JSON.parse(value).Name}</a>
                                ))
                            } 
                            </div>
                        </div>
                    </div>
                    {/* TODO remove MOCK span */}
                    <div className="footer__desc">
                        <p>{checkDefaultData("desc") ? getData("desc") : <span>فروشگاه بیمه ماهان، به عنوان اولین دارنده پروانه فعالیت فروش برخط بیمه به شماره 1695 از بیمه مرکزی جمهوری اسلامی ایران، یک سامانه جامع خرید اینترنتی بیمه آتش سوزی، مسافرتی، عمر، حوادث، بدنه، شخص ثالث، تجهیزات الکترونیک و درمان تکمیلی در کمتر از 5 دقیقه است. بیمه ماهان در این راه با شرکت های معتبر و تحت نظارت بیمه مرکزی جمهوری اسلامی ایران همچون سامان، رازی، ایران، پاسارگاد، پارسیان، سینا، ملت، ما، حافظ، معلم، میهن، نوین، کوثر، بیمه آرمان، تعاون، سرمد، پارسیان، دی، دانا، آسیا، کارآفرین، البرز، حکمت و تجارت نو همکاری می نماید.</span>}</p>
                    </div>
                    
                    <div className="footer__logo">
                        <img src={checkDefaultData("logo") && getData("logo")} alt="site logo" />
                    </div>
                    <div className="footer__row footer__end">
                        <div className="footer__socialIcons">
                            {checkDefaultData("telegram") && getData("telegram") && <a href={getData("telegram")}>{checkDefaultData("telegramIcon") ? <img src={`../../${imageFinder}${getData("telegram")}`} alt="icon" /> : telegramIcon()}<svg className="polygonShape" viewBox="0 0 50 50">
                                                    <polygon className="hexagon" points="47,37.5 25,50 3,37.5 3,12.5 25,0 47,12.5"></polygon>
                                                </svg></a>}
                            {checkDefaultData("instagram") && getData("instagram") && <a href={getData("instagram")}>{checkDefaultData("instagramIcon") ? <img src={`../../${imageFinder}${getData("instagram")}`} alt="icon" />:  InstagramIcon()}<svg className="polygonShape" viewBox="0 0 50 50">
                                                    <polygon className="hexagon" points="47,37.5 25,50 3,37.5 3,12.5 25,0 47,12.5"></polygon>
                                                </svg></a> }
                        </div>
                        <div className="footer__copyright">
                            <p>{checkDefaultData("copyright") && getData("copyright")}</p>
                            {/* TODO remove test */}
                            تمامی حقوق این وب سایت متعلق به شرکت کارگزاری رسمی بیمه مستقیم برخط فروشگاه بیمه ماهان می باشد.
                        </div>      
                    </div>
                </div>
                </div>
                    </FooterWrapper>
        </Container>
    )
}


export default Footer;