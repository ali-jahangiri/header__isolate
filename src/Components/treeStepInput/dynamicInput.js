import { cloneElement, Component } from "react";


class DynamicInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputArr : new Array(this.props.countOfInputStep).fill(""),
            inputValues : {...new Array(this.props.countOfInputStep).fill("")},
            wasCompleted : false,
            error : {},
        }
        this.triggerComponent = () => cloneElement(this.props.triggerComponent , {onClick : this.validateOnTrigger.bind(this)})
        this.refs = {}
    }

    validateOnTrigger() {
        const values = Object.values(this.state.inputValues)
        values.forEach((el , i) => {
            if(!el || el.length !== this.props.eachInputValueLength) {
                this.setState(prev => ({
                    ...prev ,
                    error : {
                        ...prev.error,
                        [i] : true
                    }
                }))
            }else {
                this.setState(prev => ({
                    ...prev ,
                    error : {
                        ...prev.error,
                        [i] : false
                    }
                }))
            }
        })
    }

    validateOnChange() {
        const values = Object.values(this.state.inputValues)
        console.log(values);
    }

    addToState(value, index) {
        this.setState({ inputValues : {...this.state.inputValues, [index] : value}} , this.validateOnChange)
    }

    onReachEnd() {
        // reaching end of input process and invoke parent callback and pass result
        if(Object.values(this.state.inputValues).every(el => el.length === this.props.eachInputValueLength)) {
            this.props.onReachEnd(this.state.inputValues)
            this.setState({ wasCompleted: true });
        }
    }

    changeHandler(value , index) {
        // force user to start from first input in initial mode
        if(!this.state.inputValues["0"] && index) {
            this.refs["0"].focus()
            this.addToState(value , 0);
        }else {
            // auto next input case handler
            if(this.props.eachInputValueLength === value.length && !this.state.wasCompleted && index !== this.state.inputArr.length) {
                this.setState(prev => ({
                    ...prev,
                    inputValues : {
                        ...prev.inputValues,
                        [index] : value
                    }
                }), this.validateOnChange);
                if(index !== this.state.inputArr.length - 1) {
                    return this.refs[index + 1].focus();
                }
            }
            // previous step handler
            else if(!value.length && index) {
                this.refs[index - 1].focus()
            }

            this.setState(prev => ({
                ...prev,
                inputValues : {
                    ...prev.inputValues,
                    [index] : value
                }
            }), () => {
                this.onReachEnd()
                this.validateOnChange()
            })
        }
    }

    componentDidUpdate() {
        this.props.onChangeHandler(this.state.inputValues);
    }

    render() {
        const { inputArr , inputValues } = this.state;
        return (
            <>
                {
                    inputArr.map((_ , i) => (
                        <input
                            className={`${this.props.inputClassName} ${this.state.error[i] ? this.props.inputErrorClassName : ""}`}
                            maxLength={this.props.eachInputValueLength}
                            ref={element => this.refs = {...this.refs , [i] : element}}
                            key={i}
                            onChange={({ target : { value } }) => this.changeHandler(value , i)}
                            value={inputValues[i]} />
                    ))
                }
                {this.triggerComponent()}
                {/* TODO remove this MOCK placement */}
                {
                    JSON.stringify(inputValues)
                }
            </>
        )
    }
}



export default DynamicInput;