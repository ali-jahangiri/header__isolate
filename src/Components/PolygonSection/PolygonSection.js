import PolygonWrapper from "./style"

import { saveException } from "../../utils/ImageFinder";
import Container from "../Container";


const componentStyles = [
    {
        name : "polygonItemBgColor",
        value : "",
        setByCustomer : false,
    },
    {
        name : "polygonItemMarginBetween",
        value : "",
        setByCustomer : false,
    },
    {
        name : "",
        value : "",
        setByCustomer : false,
    },
    {
        name : "",
        value : "",
        setByCustomer : false,
    },
    {
        name : "countOfItemInOneRow",
        value : "4",
        setByCustomer : true,
    },
]

const data = [
    {
        name : "mainTitle",
        value : "به سبک خودت بیمه کن",
        setByCustomer : false
    },
    {
        name : "desc",
        value : "با استفاده از بابیمه در همه زمینه ها و از همه شرکت های بیمه استعلام و مقایسه قیمت داشته باشید",
        setByCustomer : false
    },
    {
        name : "mainTitle",
        value : "به سبک خودت بیمه کن",
        setByCustomer : false
    },
]

const PolygonSection = () => {
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

    const allItems = new Array(22).fill(1).map((x, y) => x + y);
    const countOfRow = new Array(Math.round(allItems.length / +getStyles('countOfItemInOneRow'))).fill("");
    
    
    const itemClickHandler = (input) => {
        
    }

    const calc = (index) => {
        
        if(index % 2) {
            return ++index * +getStyles("countOfItemInOneRow") - 1
        }
        else {
            return ++index  * +getStyles("countOfItemInOneRow")
        }
    }
    const calcStart = (index) => {
        // if(index % 2) {
        //     return +getStyles("countOfItemInOneRow")* index
        // }
        // else if(!index % 2) {
        //     return (+getStyles("countOfItemInOneRow")* index)
        // }
        console.log(index,(+getStyles("countOfItemInOneRow")* index));
        if(!index % 2) {
            console.log("inside render", `index ${index}` ,(+getStyles("countOfItemInOneRow")* index) - 1);
            if(index) {
                return (+getStyles("countOfItemInOneRow") * index) - 1
            }else {
                console.log('zero');
                return (+getStyles("countOfItemInOneRow")* index) 
            }
        }
        return (+getStyles("countOfItemInOneRow")* index)
    }
    return (
        <Container checkDefault={checkDefault} getStyles={getStyles} >
            <PolygonWrapper checkDefault={checkDefault} getStyles={getStyles}>
                {
                    countOfRow.map((_ , i) => (
                        <div key={i} className="polygonSection__row">
                            {
                                allItems.slice(calcStart(i) , calc(i)).map((el , i) => (
                                    <div onClick={() => itemClickHandler(el)} className="polygonSection__item" key={i}>
                                        <div>{el}</div>
                                    </div>
                                ))
                            }
                        </div>
                    ))  
                }



            {/* <div className="polygonSection__row">
            {
                allItems.slice(0 , eachRowShouldHave).map((el , i) => (
                    <div onClick={() => itemClickHandler(el)} className="polygonSection__item" key={i}>
                        <div>{el}</div>
                    </div>
                ))
            }
            </div>
            <div className="polygonSection__row">
            {
                allItems.slice(eachRowShouldHave ,((count) => count += count)(eachRowShouldHave) - 1).map((el , i) => (
                    <div onClick={() => itemClickHandler(el)} className="polygonSection__item" key={i}>
                        <div>{el}</div>
                    </div>
                ))
            }
            </div>
            <div className="polygonSection__row">
            {
                allItems.slice(((count) => count += count)(eachRowShouldHave) - 1 , allItems.length).map((el , i) => (
                    <div onClick={() => itemClickHandler(el)} className="polygonSection__item" key={i}>
                        <div>{el}</div>
                    </div>
                ))
            }
            </div> */}
            </PolygonWrapper>
        </Container>
    )
}


export default PolygonSection;