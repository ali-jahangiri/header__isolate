import { saveException } from "../utils/ImageFinder";

const dataConstructor = (mock) => {

    const get = (name) => {
        if(typeof name === "function") {
            return name(mock)
        }
        return Boolean(mock.filter(item => item.name === name)[0]) ? mock.filter(item => item.name === name)[0].value : saveException('component: Navbar >>> variable: ' + name + ' url: ' + (typeof window != "undefined" && window.location.current), true);
    }

    const check = (name) => {
        return Boolean(mock.filter(item => item.name === name)[0]) ? mock.filter(item => item.name === name)[0].setByCustomer : saveException('component: Navbar >>> variable: ' + name+ ' url: ' + (typeof window != "undefined" && window.location.current), true);
    }
    return {
        get , 
        check
    }
}


export default dataConstructor;