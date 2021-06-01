import { createContext } from "react";

export const Context = createContext()



const Provider = ({ children }) => {
    return (
        <Context.Provider value={{ primaryColor : 'red' }}>
            {children}
        </Context.Provider>
    )
}


export default Provider;