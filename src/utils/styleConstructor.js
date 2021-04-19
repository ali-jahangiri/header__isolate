import { saveException } from "../utils/ImageFinder";


const styleConstructor = (mock) => {
    const check = (name) => (
        !!mock.find(item => item.name === name)?.setByCustomer || saveException('component: Navbar >>> variable: ' + name + + ' url: ' + (typeof window != "undefined" && window.location.current), true)
    )
    const get = (name) => (
        mock.find(item => item.name === name)?.value || saveException('component: Navbar >>> variable: ' + name + ' url: ' + (typeof window != "undefined" && window.location.current), true)
    )

    return {
        check,
        get
    }
}

export default styleConstructor;