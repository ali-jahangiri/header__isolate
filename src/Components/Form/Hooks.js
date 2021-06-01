import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react"
import { FormContext } from "./Form"



const useFormSubmit = () => {
    const { formData , setError , shouldValidateOnChange } = useContext(FormContext);

    if(shouldValidateOnChange) throw new Error("cannot use useFormSubmit Hook with 'onChange' mode. please select 'onSubmit' mode instead!")

    const firstCheckHappened = useRef(false);

    const validate = () => {
        const resultObject = {};
        Object.entries(formData)
            .map(([key , values]) => {
                if(typeof values.rule === "function") {
                    let isNotValid = values.rule(values.value);
                    if(isNotValid) resultObject[key] = true
                }else if(values.rule === true){
                    // handle string case with base validation
                    if(!values.value) resultObject[key] = true
                    // setError(prev => ({...prev , [name] : true}))
                }
            })
        firstCheckHappened.current = true

        // Note if we have error , we force all tree to re render and show help text and also return object error
        if(Object.values(resultObject).length) {
            setError(resultObject)
            return resultObject
        }
        // Note otherwise if we dont have any error , return nothing
        else {
            setError(null)
            return null
        }
    }

    useEffect(() => {
        if(firstCheckHappened.current) validate()
    } , [formData])
    return {
        getFormValue() {
            const endResult = {};
                Object.entries(formData)
                    .map(([key , values]) => (
                        endResult[key] = values.value
                    ))
            return endResult
        },
        getFormError() {
            return validate()
        }
    }
}



const useFormOnChange = () => {
    const { onChange , formData , setError } = useContext(FormContext)
    return (keyName , newValue) => {
        onChange(prev => ({
            ...prev,
            [keyName] : {
                ...prev[keyName],
                value : newValue
            }
        }))

        // validate in custom callback
            const currentRule = formData[keyName].rule
            if(typeof currentRule === "function") {
                const wasValid = currentRule(newValue);
                setError(prev => ({
                    ...prev ,
                    [keyName] : !wasValid
                }))
            }else if(currentRule === true){
                
                // validate base case
                if(!newValue) setError(prev => ({...prev , [keyName] : true}))
                else setError(prev => ({...prev , [keyName] : false}));
            }
        
    }
}


export {
    useFormSubmit,
    useFormOnChange
}