import Wrapper from "./style";
import { styleConstructor , dataConstructor } from "../../utils/utils"
import { Form, Input, Select, Steps } from 'antd';
import { useState } from "react";
import iconConstructor from "../../utils/iconConstructor";
import TextArea from "antd/lib/input/TextArea";

import ReactToPrint from "react-to-print";
import { useRef } from "react";

const { Step } = Steps
const { Option } = Select;

const iconPack = iconConstructor('ui');
const icon = iconPack()

const isValidIranianNationalCode = (input) => {
    if (!/^\d{10}$/.test(input))
        return false;

    var check = +input[9];
    var sum = Array(9).fill().map((_, i) => +input[i] * (10 - i)).reduce((x, y) => x + y) % 11;
    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
}

const isValidZipCode = input => {
    const regex = /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/;
    return regex.test(input)
}

const isValidShabaNumber = input => {
    const regex = /^(?=.{24}$)[0-9]*$/;
    return regex.test(input)
}


// Helper component
const NextBtn = ({ stepHandler , ...rest }) => (
    <button {...rest} className="nextStepBtn" onClick={() => stepHandler(prev => prev + 1)}>
        <span>مرحله بعد</span>
        {
            icon.get("arrowSoftLeft")
        }
    </button>
)

const Intro = ({ stepHandler , introImage , desc }) => (
    <div className="marketerStepper__intro">
            <div className="marketerStepper__intro__container">
                {/* TODO change with imageFinder */}
                <img src={introImage} alt="introImage" />
                <div>
                    <p>{desc}</p>
                    <NextBtn stepHandler={stepHandler} />
                </div>
            </div>
    </div>
)

const Field = ({ form : { getFieldDecorator, validateFields } , stepHandler , setInInputStore , inputStore}) => {

    const [customError, setCustomError] = useState({});
    
    const submitHandler = e => {
        e.preventDefault()
        validateFields((err , values) => {
            if(err) {
                Object.entries(err).forEach(([key]) => {
                    if(key === "nationalCode" || key === "shabaNumber" || key === "zipCode") {
                        setCustomError(prev => ({...prev,[key] : true}))
                    }
                })
            }else {
                const MOCKSetter = {
                    address : "آدرس",
                    education : "مدرک تحصیلی" ,
                    email : "ایمیل",
                    firstName : "نام",
                    lastName : "نام خانوادگی",
                    nationalCode : "کد ملی",
                    relativeInsuranceActivityExperience : "سابقه کار مرتبط",
                    shabaNumber : "شماره شبا",
                    zipCode : "کد پستی"
                }
                const result = Object.entries(values).map(el => ({
                    title : MOCKSetter[el[0]],
                    name  : el[0],
                    value : el[1],
                    type : "text"
                }))

                setInInputStore(result)
                stepHandler(prev => prev + 1)
            }
        })
    }

    const customErrorHandler = (isValid , key) => {
        setCustomError(prev => ({
            ...prev,
            [key] : isValid
        }))
    }
    
    const recoveredInputValue = inputName => {
        if(inputStore.length) {
            return inputStore.find(el => el.name === inputName).value
        }else return ""
    }

    return (
        <div className="marketerStepper__field">
            <Form onSubmit={submitHandler}>
                <div className="marketerStepper__field__formRow">
                    <Form.Item>
                        {getFieldDecorator('firstName', {
                          rules: [{ required: true, message: 'نام خود را وارد کنید.' }],
                          initialValue : recoveredInputValue('firstName')
                        })(
                          <Input placeholder="نام" />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('lastName', {
                          rules: [{ required: true, message: 'نام خانوادگی خود را وارد کنید.' }],
                          initialValue : recoveredInputValue("lastName")
                        })(
                          <Input placeholder="نام خانوادگی" />,
                        )}
                    </Form.Item>
                </div>
                <div className="marketerStepper__field__formRow">
                    <Form.Item>
                        {getFieldDecorator('email', {
                          rules: [{ required: true, type : "email", message: 'ایمیل وارد شده صحیح نیست' }],
                          initialValue : recoveredInputValue("email") 
                        })(
                          <Input placeholder="ایمیل" />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={customError?.nationalCode ? 'error' : ''} help={customError?.nationalCode ? "کد ملی وارد شده صحیح نیست" : ""}>
                        {getFieldDecorator('nationalCode', {
                          rules: [{ required: true, message: 'کد ملی خود را وارد کنید.' }],
                          initialValue : recoveredInputValue("nationalCode") 
                        })(
                          <Input maxLength={10} onChange={({ target : { value } }) => customErrorHandler(!isValidIranianNationalCode(value) , 'nationalCode')} placeholder="کدملی" />,
                        )}
                    </Form.Item>
                </div>
                <div className="marketerStepper__field__formRow">
                    <Form.Item >
                        {getFieldDecorator('relativeInsuranceActivityExperience', {
                          rules: [{ required: true, message: 'سابقه کار مرتبط را انتخاب کنید.' }],
                          initialValue : recoveredInputValue("relativeInsuranceActivityExperience") || undefined
                        })(
                          <Select style={{ textAlign : "right" }} placeholder="سابقه کار مرتبط">
                            <Option value="سابقه ندارم">سابقه ندارم</Option>
                            <Option value="کمتر از یک سال" > کمتر از یک سال</Option>
                            <Option value="1 تا 3 سال">1 تا 3 سال</Option>
                            <Option value="بیش از 3 سال">بیش از 3 سال</Option>
                          </Select>,
                        )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('education', {
                          rules: [{ required: true, message: 'مدرک تحصیلی خود را انتخاب کنید.' }],
                          initialValue : recoveredInputValue("education") || undefined
                        })(
                          <Select style={{ textAlign : 'right' , }} placeholder="آخرین مدرک تحصیلی"
                          >
                            <Option value="دیپلم">دیپلم</Option>
                            <Option value="کاردانی" > کاردانی</Option>
                            <Option value="کارشناسی">کارشناسی</Option>
                            <Option value="کارشناسی ارشد و بالاتر">کارشناسی ارشد و بالاتر</Option>
                          </Select>,
                        )}
                    </Form.Item>
                </div>
                <div className="marketerStepper__field__formRow marketerStepper__field__formRow--singleInput">
                    <Form.Item>
                            {getFieldDecorator('address', {
                              rules: [{ required: true, message: 'آدرس پستی خود را وارد کنید.' }],
                              initialValue : recoveredInputValue("address")
                            })(
                              <TextArea autoSize={{ maxRows : 7 , minRows : 3 }} placeholder="آدرس پستی" />,
                            )}
                    </Form.Item>
                </div>
                <div className="marketerStepper__field__formRow marketerStepper__field__formRow--singleInput">
                    <Form.Item validateStatus={customError?.zipCode ? "error" : ""} help={customError?.zipCode ? "کدپستی وارد شده صحیح نمیباشد. " : ""}>
                            {getFieldDecorator('zipCode', {
                              rules: [{ required: true, message: 'کدپستی خود را وارد کنید.' }],
                              initialValue : recoveredInputValue("zipCode")
                            })(
                              <Input onChange={({ target : { value } }) => customErrorHandler(!isValidZipCode(value) , "zipCode")} placeholder="کدپستی" />,
                            )}
                    </Form.Item>
                </div>
                <div className="marketerStepper__field__formRow marketerStepper__field__formRow--singleInput">
                    <Form.Item validateStatus={customError.shabaNumber ? 'error' : ''} help={customError?.shabaNumber ? "شماره شبا وارد شده صحیح نمیباشد." : ""}>
                            {getFieldDecorator('shabaNumber', {
                              rules: [{ required: true, message: 'شماره شبا خود را وار کنید.' }],
                              initialValue : recoveredInputValue("shabaNumber")
                            })(
                              <Input prefix={"IR"}  onChange={({ target : { value } }) => customErrorHandler(!isValidShabaNumber(value) , "shabaNumber")} placeholder="شماره شبا" />,
                            )}
                    </Form.Item>
                </div>
                <div className="nextStepContainer">
                    <NextBtn type="submit" style={{ marginRight : "auto"  }} stepHandler={() => {}} />
                </div>
            </Form>
        </div>
    )
}

const Confirm = ({ stepHandler }) => {
    return (
        <div className="marketerStepper__confirm">
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            Placeat qui totam repellat minus. Ad odio nobis rerum optio eum. Aspernatur qui voluptate voluptates quo ut facere. Aperiam ea voluptatem.
            <div className="controller">
                <button onClick={() => stepHandler(prev => prev + 1)} className="trigger trigger--agree nextStepBtn">موافقت</button>
                <button onClick={() => stepHandler(prev => prev - 1)} className="trigger trigger--disagree nextStepBtn">
                    <span>بازگشت</span>
                    {
                        icon.get("arrowSoftRight")
                    }
                </button>
            </div>
        </div>
    )
}

const EndResult = ({ stepHandler }) => {
    const containerRef = useRef();
    const [wasPrinted, setWasPrinted] = useState(false);

    return (
        <div ref={containerRef} className="marketerStepper__endResult">
            <div className="editDetailContainer">
                <button className="nextStepBtn" onClick={() => stepHandler(1)}>
                    {
                        icon.get("pencil")
                    }
                    <span>ویرایش اطلاعات</span>
                </button>
            </div>
            <div className="controller">
            <ReactToPrint 
                pageStyle={``}
                onAfterPrint={() => setWasPrinted(true)}
                documentTitle={`${Date.now()}`}
                bodyClass={'printFrame'}
                onPrintError={err => window.alert(`مشکلی در پرینت قرارداد وجود دارد.مجددا امتحان کنید ${err}`)}
                trigger={() => (
                    <button className="printTrigger nextStepBtn">
                        {
                            icon.get("print")
                        }
                        <span>
                            {
                                wasPrinted ? "چاپ مجدد" : "چاپ قرارداد"
                            }
                        </span>
                    </button>
                )}
                content={() => containerRef.current} />
                <div className="uploader">
                    <button className="uploadTrigger nextStepBtn">
                        {
                            icon.get("upload")
                        }
                        <span>آپلود قرارداد</span>
                    </button>
                </div>
            </div>
           
        </div>
    )
}


const MarketerTreeStepRegister = ({ componentStyles , data }) => {
    const { check , get } = styleConstructor(componentStyles);
    const { get : getData , check : checkData } = dataConstructor(data)

    const [currentStep, setCurrentStep] = useState(0);
    const [inputValues, setInputValues] = useState({});

    // TODO add auth Context

    const steps = [
        {
            title : "intro",
            content : () => <Intro introImage={'https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg'} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." stepHandler={setCurrentStep} />
        } , {
            title : "field",
            content : () => {
                const WrappedWithForm = Form.create()(Field)
                return <WrappedWithForm setInInputStore={setInputValues} inputStore={inputValues} stepHandler={setCurrentStep} />
            }
    
        }, {
            title : "confirm",
            content : () => <Confirm stepHandler={setCurrentStep} />
        },{
            title : "endResult",
            content: () => <EndResult stepHandler={setCurrentStep} />
    }];

    return (
        <Wrapper isOnIntro={!currentStep} get={get} check={check} >
            <div className="marketerStepper__sectionDescribe">
                {/* TODO get content from variables */}
                <p className="marketerStepper__sectionDescribe__title">
                    this is title
                </p>
                <p className="marketerStepper__sectionDescribe__desc">
                    this is desctib
                </p>
            </div>
            <div className="marketerStepper__content">
                {
                    currentStep ? <Steps className="stepperContainer" progressDot current={currentStep}>
                    {
                        steps.map((_ , i) => (
                            <Step key={i}></Step>
                        ))
                    }
                </Steps> : null
                }

                {steps[currentStep].content(setCurrentStep)}

            </div>
        </Wrapper>
    )
}



export default MarketerTreeStepRegister;