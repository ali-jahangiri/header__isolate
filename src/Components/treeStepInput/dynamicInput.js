import { Component } from "react";


class DynamicInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputArr : new Array(this.props.countOfInputStep).fill(""),
            inputValues : {...new Array(this.props.countOfInputStep).fill("")},
            wasCompleted : false,
            error : {}
        }
        this.refs = {}
    }

    addToState(value, index) {
        this.setState({ inputValues : {...this.state.inputValues, [index] : value}})
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
                }));
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
            }), this.onReachEnd)
        }
    }

    componentDidUpdate() {
        this.props.onChangeHandler(this.state.inputValues)
    }

    render() {
        const { inputArr , inputValues } = this.state;
        return (
            <>
                {
                    inputArr.map((_ , i) => (
                        <input
                            className={this.props.inputClassName}
                            maxLength={this.props.eachInputValueLength}
                            ref={element => this.refs = {...this.refs , [i] : element}}
                            key={i}
                            onChange={({ target : { value } }) => this.changeHandler(value , i)}
                            value={inputValues[i]} />
                    ))
                }
                {
                    JSON.stringify(inputValues)
                }
            </>
        )
    }
}



export default DynamicInput;