import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";


const jsForThisSlider = `function setREVStartSize(e){
    //window.requestAnimationFrame(function() {				 
        window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;	
        window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;	
        try {								
            var pw = document.getElementById(e.c).parentNode.offsetWidth,
                newh;
            pw = pw===0 || isNaN(pw) ? window.RSIW : pw;
            e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
            e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
            e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
            e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
            e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
            e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
            e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);		
            if(e.layout==="fullscreen" || e.l==="fullscreen") 						
                newh = Math.max(e.mh,window.RSIH);					
            else{					
                e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
                for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];					
                e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
                e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
                for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
                                    
                var nl = new Array(e.rl.length),
                    ix = 0,						
                    sl;					
                e.tabw = e.tabhide>=pw ? 0 : e.tabw;
                e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
                e.tabh = e.tabhide>=pw ? 0 : e.tabh;
                e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;					
                for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
                sl = nl[0];									
                for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}															
                var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);					
                newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
            }				
            if(window.rs_init_css===undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));					
            document.getElementById(e.c).height = newh+"px";
            window.rs_init_css.innerHTML += "#"+e.c+"_wrapper { height: "+newh+"px }";				
        } catch(e){
            console.log("Failure at Presize of Slider:" + e)
        }					   
    //});
  };`


const jsForThisSlider2 = `
    
    var	revapi9;
    var tpj;
function revinit_revslider91() {
    jQuery(function() {
    tpj = jQuery;
    revapi9 = tpj("#rev_slider_9_1");
    if(revapi9==undefined || revapi9.revolution == undefined){
        revslider_showDoubleJqueryError("rev_slider_9_1");
    }else{
        revapi9.revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1024,778,480",
            gridwidth:"1240,1024,778,480",
            gridheight:"600,500,400,300",
            perspectiveType:"local",
            responsiveLevels:"1240,1024,778,480",
            progressBar:{disableProgressBar:true},
            navigation: {
                onHoverStop:false
            },
            parallax: {
                levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,30],
                type:"mouse",
                origo:"slidercenter",
                speed:2000
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
        });
    }
    
});
} // End of RevInitScript
var once_revslider91 = false;
if (document.readyState === "loading") {document.addEventListener('readystatechange',function() { if((document.readyState === "interactive" || document.readyState === "complete") && !once_revslider91 ) { once_revslider91 = true; revinit_revslider91();}});} else {once_revslider91 = true; revinit_revslider91();}
`

const jsForThisSlider3 = `
if(typeof revslider_showDoubleJqueryError === "undefined") {

    function revslider_showDoubleJqueryError(sliderID) {
    var err = "<div class='rs_error_message_box'>";
    err += "<div class='rs_error_message_oops'>Oops...</div>";
    err += "<div class='rs_error_message_content'>";
    err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
    err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
    err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
    err += "</div>";
    err += "</div>";
    var slider = document.getElementById(sliderID); slider.innerHTML = err; slider.style.display = "block";
    }
    }
`   

const html = ({ title , desc , cta }) => (
    `
<rs-module-wrap id="rev_slider_9_1_wrapper" data-alias="image-hero1" data-source="gallery" style="background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;">
<rs-module id="rev_slider_9_1" style="" data-version="6.3.8">
    <rs-slides>
        <rs-slide data-key="rs-12" data-title="Intro" data-anim="ei:power4.inOut;eo:power4.inOut;s:2000;t:zoomout;sl:d;">
            <img id="sliderImage" src="https://unsplash.com/photos/9UD_BuPqh5g/download?force=true" title="notgenericherobg.jpg" width="1920" height="1280" data-parallax="10" class="rev-slidebg" data-no-retina>
<!--
            --><rs-layer
                id="slider-9-slide-12-layer-10" 
                class="tp-shape tp-shapewrapper"
                data-type="shape"
                data-xy="x:c;y:m;"
                data-text="fw:800;"
                data-dim="w:100%;h:100%;"
                data-basealign="slide"
                data-rsp_bd="off"
                data-frame_0="tp:600;"
                data-frame_1="tp:600;st:750;sp:1500;"
                data-frame_999="tp:600;e:nothing;st:w;"
                style="z-index:5;background-color:rgba(0,0,0,0.40);"
            > 
            </rs-layer><!--

            --><rs-layer
                id="slider-9-slide-12-layer-8" 
                class="NotGeneric-Icon"
                data-type="text"
                data-color="rgba(255,255,255,1)"
                data-rsp_ch="on"
                data-xy="x:c;y:m;yo:-66px,-68px,-78px,-78px;"
                data-text="s:30;l:30;ls:3px;"
                data-frame_0="y:100%;tp:600;"
                data-frame_0_mask="u:t;y:100%;"
                data-frame_1="tp:600;e:power4.inOut;st:1000;sp:1500;"
                data-frame_1_mask="u:t;"
                data-frame_999="y:100%;tp:600;e:power2.inOut;st:w;sp:1000;"
                data-frame_999_mask="u:t;"
                style="z-index:6;font-family:Raleway;letter-spacing:3px;text-align:left;"
            ><i class="pe-7s-paper-plane"></i> 
            </rs-layer><!--

            --><rs-layer
                id="slider-9-slide-12-layer-1" 
                class="NotGeneric-Title"
                data-type="text"
                data-color="rgba(255,255,255,1)"
                data-rsp_ch="on"
                data-xy="x:c;y:m;yo:0,0,-22px,-29px;"
                data-text="s:70,70,70,50;l:70,70,70,50;fw:800;"
                data-padding="t:10;b:10;"
                data-frame_0="sX:1.5;sY:1.5;tp:600;"
                data-frame_0_mask="u:t;"
                data-frame_1="tp:600;st:1000;sp:1500;"
                data-frame_1_mask="u:t;"
                data-frame_999="y:100%;tp:600;e:power2.inOut;st:w;sp:1000;"
                data-frame_999_mask="u:t;"
                style="z-index:7;font-family:Raleway;"
            >${title}
            </rs-layer><!--

            --><rs-layer
                id="slider-9-slide-12-layer-4" 
                class="NotGeneric-SubTitle"
                data-type="text"
                data-color="rgba(255,255,255,1)"
                data-rsp_ch="on"
                data-xy="x:c;y:m;yo:52px,52px,28px,13px;"
                data-text="s:13;l:20;ls:4px;fw:500;"
                data-frame_0="y:100%;tp:600;"
                data-frame_0_mask="u:t;y:100%;"
                data-frame_1="tp:600;e:power4.inOut;st:1000;sp:1500;"
                data-frame_1_mask="u:t;"
                data-frame_999="y:100%;tp:600;e:power2.inOut;st:w;sp:1000;"
                data-frame_999_mask="u:t;"
                style="z-index:8;font-family:Raleway;letter-spacing:4px;text-align:left;"
            >${desc}
            </rs-layer><!--

            --><rs-layer
                id="slider-9-slide-12-layer-7" 
                class="NotGeneric-CallToAction rev-btn"
                data-type="button"
                data-color="rgba(255,255,255,1)"
                data-xy="x:c;y:m;yo:124px,124px,80px,65px;"
                data-text="s:14;l:14;ls:3px;fw:500;"
                data-actions='o:click;a:scrollbelow;offset:0;sp:300;e:none;'
                data-rsp_bd="off"
                data-padding="t:10;r:30;b:10;l:30;"
                data-border="bos:solid;boc:rgba(255,255,255,0.50);bow:1,1,1,1;"
                data-frame_0="y:50px;tp:600;"
                data-frame_1="tp:600;e:power4.inOut;st:1250;sp:1500;"
                data-frame_999="y:175%;tp:600;e:power2.inOut;st:w;sp:1000;"
                data-frame_999_mask="u:t;"
                data-frame_hover="boc:#fff;bor:0px,0px,0px,0px;bos:solid;bow:1,1,1,1;oX:50;oY:50;e:power1.inOut;"
                style="z-index:9;font-family:Raleway;cursor:pointer;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;letter-spacing:3px;text-align:left;"
            >${cta}
            </rs-layer><!--
-->						</rs-slide>
    </rs-slides>
</rs-module>
</rs-module-wrap>
`
)

const coreSrc = "https://store8.gofile.io/download/f0RTWD/bd2dae97397449c66c8144f66c76b7c4/rs6.min.js";
const coreToolSrc = "https://store8.gofile.io/download/xq3r4A/e5cd17674ab1e7e8f556707b9e894175/rbtools.min.js";
const coreStylesheetSrc = "https://store8.gofile.io/download/xuyydb/084f3cb0b9bab270c99e34d5b5ad638d/rs6.css";
const jquerySrc = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js";

const createScript = (src , isContentAvailable , orderIsMatter) => {
    const script = document.createElement("script");
    if(!isContentAvailable) {
        script.src = src;
    }
    else {
        script.type = "text/javascript";
        orderIsMatter ? script.defer = true : script.async = true;
        script.innerHTML = src;
    }
    document.head.appendChild(script);
}

const createStyleSheet = (href) => {
    const styleSheetElement = document.createElement("link");
    styleSheetElement.type = "text/css";
    styleSheetElement.rel = 'stylesheet';
    styleSheetElement.href = href;
    document.head.appendChild(styleSheetElement);
}

const SliderInsertion = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    useEffect(() => {
        setIsScriptLoaded(true)
        createScript(jquerySrc)
        createScript(coreSrc);
        createScript(coreToolSrc);
        window.addEventListener('load' , () => {
        createScript(jsForThisSlider3 , true)
        createScript(jsForThisSlider,true);
        createScript(jsForThisSlider2 , true)    

        // adding stylesheet
        createStyleSheet(coreStylesheetSrc);
        // after setting scripts , set loading to false
        setIsScriptLoaded(false)
        return window.removeEventListener("load" , () => {})
        })
        
    } , [])
    return (
        <>
            {
                isScriptLoaded ? <div>loading the slider</div> : <div>{ReactHtmlParser(html({ title : "THIS IS TITLE" , desc : "THIS IS DESC" , cta : "CTA"}))}</div>
            }
        </>
    )
}


export default SliderInsertion;