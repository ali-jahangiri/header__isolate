import { saveException } from "../utils/ImageFinder";

const dataConstructor = (data) => {
    const get = (name) => {
        if(typeof name === "function") {
            return name(data)
        }
        return Boolean(data.filter(item => item.name === name)[0]) ? data.filter(item => item.name === name)[0].value : saveException('component: Navbar >>> variable: ' + name + ' url: ' + (typeof window != "undefined" && window.location.current), true);
    }

    const check = (name) => {
        return Boolean(data.filter(item => item.name === name)[0]) ? data.filter(item => item.name === name)[0].setByCustomer : saveException('component: Navbar >>> variable: ' + name+ ' url: ' + (typeof window != "undefined" && window.location.current), true);
    }
    return {
        get , 
        check
    }
}


export default dataConstructor;