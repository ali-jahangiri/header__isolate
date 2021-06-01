import { Form, Input } from "antd";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { FormContext } from "./Form";

const FormItem = ({ name , rule ,  ruleHelperType = "error", help = "فیلد را به درستی وارد کنید." , children , ...restProps }) => {
    const { onChange , formData, setError , error , shouldValidateOnChange} = useContext(FormContext);
    const [inputWasTouched, setInputWasTouched] = useState(false);
    if(!onChange) throw new Error("cannot use form item outside of 'Form' ")

    useEffect(() => {
        
        // if(value[name]) throw new Error("input name should be a unique identifier");
        // creating key and setting the key
        onChange(prev => ({
            ...prev,
            [name] : {
                value : restProps?.defaultValue || "",
                rule
            }
        }))
    } , []);


  const changeHandler = value => {
        onChange(prev => ({...prev,[name] : {...prev[name] , value}}));


        if(shouldValidateOnChange && inputWasTouched) {
            // validate in custom callback
            if(typeof rule === "function") {
                const wasValid = rule(value);
                setError(prev => ({
                    ...prev ,
                    [name] : !wasValid
                }))
            }else if(rule === true){
                
                // validate base case
                if(!value) setError(prev => ({...prev , [name] : true}))
                else setError(prev => ({...prev , [name] : false}));
            }
        }
    }


    return <Form.Item
                help={error && error[name] ? help: ""}
                validateStatus={error && error[name] ? ruleHelperType : ""}>
                {
                    !children ? <Input onChange={({ target : { value } }) => changeHandler(value)} value={restProps?.defaultValue || formData[name]?.value} onFocus={() => setInputWasTouched(true)} {...restProps} /> : children
                }
            </Form.Item>
}

export default FormItem;