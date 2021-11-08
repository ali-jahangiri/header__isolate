import { Col, Form, Input, InputNumber, Row, Select, Upload } from 'antd';
import React, { useState } from 'react';
import Container from "./containerStyle";
import FormGeneratorCustomUploader from './FormGeneratorCustomUploader';
import GroupHeader from './GroupHeader';
import Submit from './Submit';
import Switch from './Switch';


// const schema = {
//     formTitle : "",
//     afterSubmitMessage : "",
//     groups : [
//         {
//             title : "",
//             desc : "",
//             icon : "",
//             items : [
//                 {
//                     type : "",
//                     name : "",
//                     label : "",
//                     isRequired : false,
//                     placeholder : "",
//                     defaultValue : "",
//                     col : "",
//                     smCol : '',
//                     regex : "",
//                     errMessage : "",
//                     options : "" , // only in select & radio,
//                     helper : "", // optional field for help user to fill fill the form easily
        
//                 }
//             ],
//         },
        
//     ]
// };



const CustomSelect = ({ filed : { options = [{ value : "" , label : "" }] , placeholder , onChange , name , label , index} , ...libraryProps }) => {
    return (
        <Select size="large" placeholder={placeholder} {...libraryProps} onChange={e => {
            onChange(e, name , label , index)
        }}>
            {
                options.map((el , i) => (
                    <Select.Option value={el.value} key={i}>
                        {el.label}
                    </Select.Option>
                ))
            }
        </Select>
    )
}



const CustomText = ({ filed : { onChange , placeholder , name , label , index } , ...libraryProps }) => {
    return (
        <Input {...libraryProps} size="large" placeholder={placeholder} onChange={e => onChange(e.target.value, name , label , index)} />
    )
}


const CustomNumber = ({ filed : { placeholder , onChange , name , label , index } , ...libraryProps }) => (
    <InputNumber type="number" size="large" style={{ width : "100%" }} {...libraryProps} onChange={e => onChange(e, name , label , index)} placeholder={placeholder} />
)


const CustomUploader = () => {
    return (
        <FormGeneratorCustomUploader  />
    )
}



const FormItemClone = ({ ...rest }) => {
    return {
        select: <CustomSelect {...rest} />,
        text : <CustomText {...rest} />,
        number :    <CustomNumber {...rest} />,
        upload : <CustomUploader {...rest} />,
        switch : <Switch {...rest} />
    }
}


const mockJson = {
    formTitle : "",
    afterSubmitMessage : "",
    submitText : "",
    groups : [
        {
            title : "اطلاعات شخصی",
            desc : "اطلاعات شخصی خود را تکمیل نمیایید",
            icon : "https://img.icons8.com/material-outlined/24/000000/user--v1.png",
            items : [
                {
                    type : "text",
                    name : "userName",
                    label : "نام کاربری",
                    isRequired : true,
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "",
                    errMessage : "نام کاربری را وارد کنید",
                    options : "" , // only in select & radio,
                    helper : "", // optional field for help user to fill fill the form easily
                },
                {
                    type : "text",
                    name : "phone",
                    label : "شماره تماس",
                    isRequired : true,
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "",
                    errMessage : "",
                    helper : "", 
                },
                {
                    type : "switch",
                    name : "gene",
                    label : "جنسیت",
                    isRequired : true,
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "",
                    errMessage : "",
                    helper : "",
                    options : [{
                        label : "Male",
                        value : "Male"
                    } , {
                        label : "Female",
                        value : "Female"
                    }]
                },
                {
                    type : "text",
                    name : "email",
                    label : "ایمیل",
                    isRequired : true,
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$",
                    errMessage : "",
                    helper : "", 
                },
                {
                    type : "text",
                    name : "nationalCode",
                    label : "کدملی",
                    isRequired : true,
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "",
                    errMessage : "",
                    helper : "",
                },
                {
                    type : "upload",
                    name : "avatar",
                    label : "تصویر",
                    isRequired : true,
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "",
                    errMessage : "",
                    helper : "",
                },
                {
                    type : "number",
                    name : "age",
                    label : "سن",
                    isRequired : true,
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "",
                    errMessage : "",
                    helper : "",
                },
                {
                    type : "select",
                    name : "job",
                    label : "شغل",
                    isRequired : true,
                    placeholder : "Pick your Job",
                    defaultValue : "",
                    col : 12,
                    smCol : 24,
                    regex : "",
                    errMessage : "",
                    options : [{
                        label : "developer",
                        value : "developer",
                    },{
                        label: "Firefighters",
                        value : "Firefighters",
                    }] , 
                    helper : "",
                },
            ],
        }
    ]
};

const FormGenerator = ({ data , componentStyle , form }) => {
    
	const [formData, setFormData] = useState([]);
    const [requestData, setRequestData] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        var dynamicValidation = true;

        for (var key in requestData) {
            if (requestData[key].value === '') {
                requestData[key].validateStatus = 'error';
                requestData[key].errorMsg = 'این آیتم الزامی است!';
                dynamicValidation = false;
            }
		}

        // multi select


        form.validateFieldsAndScroll((err, values) => {

            if (!err && dynamicValidation) {

                for (var key in requestData) {
                    requestData[key] = requestData[key].value;
                }
                // setSubmitLoading(true);

                // unFetch('MasterApi/saveForm', {
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({
				// 		Json: JSON.stringify(formData),
				// 		FormName: getData('formName')
				// 	})
                // })
                //     .then(response => response.json())
                //     .then(response => {
				// 		if(response.typeId > 0) {
				// 			success(response.message);
							
				// 			setShowModal(true)

				// 			setSubmitLoading(false);

                //         } else {
				// 			error(response.message);

				// 			setShowErrorModal(true)

				// 			setSubmitLoading(false);
                //         }
                //     })
            } else {
            }
        });
	};

    const { getFieldDecorator } = form;

    const onFill = (e, target,title, index) => {
		form.setFieldsValue({
			[target]: e
		});

		if(Boolean(formData.find(item => item.name === target))) {
			setFormData([...formData.filter(item =>  item.name !== target), {
				name: target,
				value: e,
				type: 'text',
				title: title,
				index: index
			}]
			)
		} else {
			
			setFormData([...formData,{
				name: target,
				value: e,
				type: 'text',
				title: title,
				index: index
			}])	
		}
    };


    return (
        <div>
            <Container style={componentStyle}>
                <Form
                    onSubmit={handleSubmit}
                >
                    <Row>
                        {
                            mockJson.groups.map((el , i) => (
                                <Row>
                                    {
                                        el.title && <GroupHeader {...el} />
                                    }
                                    {
                                        el.items.map((filed , i) => (
                                            <Col key={i} style={{ padding : "0 1rem" }} lg={filed.col} xs={filed?.smCol || filed.col}>
                                                <Form.Item label={filed.label} >
                                                    {getFieldDecorator(filed.name,
                                                        { rules: [{ required: filed.isRequired , message : filed.errMessage || "آیتم اجباری است" }] },
                                                    )(FormItemClone({ filed : { ...filed , onChange : (...rest) => onFill(...rest) , index : i , _selectedValue : formData?.find(el => el.name === filed.name)?.value} })[filed.type])}
                                                </Form.Item>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            ))
                        }
                    </Row>
                    <Submit />
                </Form>
            </Container>
        </div>
    )
}


export default Form.create()(FormGenerator)
