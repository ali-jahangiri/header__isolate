import { useState, useEffect } from "react"
import { createContext } from "react"

export const FormContext = createContext({
    formData : {},
    error : {},
    onChange : () => {},
    setError : () => {},
})


const flatErrorObject = errObj => {
//    console.log('*' , errObj);
    if(!Object.values(errObj).length) return null
    else if(Object.entries(errObj).every(([_ , errStatus]) => errStatus === false)) return null
    else return errObj

}

const Form = ({ changeHandler ,  children }) => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState({});

    const onChange = newValueObject => {
        setFormData(newValueObject)
    }

    useEffect(() => {
        changeHandler?.({value : formData , error : flatErrorObject(error)})
    }, [formData])
    
    return <FormContext.Provider value={{ formData , onChange , error , setError , shouldValidateOnChange : !!changeHandler }}>
        {children}
    </FormContext.Provider>
}



export default Form;