import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    & > div {
        height: 100vh;
        transition: .3s .2s;
    }

    /* reset ant style */
    
    .stepperContainer {
        margin-top: 1rem;
    }

    .ant-input-prefix {
        font-weight: 900;
        color: grey;
        user-select: none;
    }
    


    .nextStepBtn {
        /* TODO replace with color primary */
        display: flex;
        align-items: center;
        padding: .7rem 2rem;
        margin-top: auto;
        background-color: grey;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        color: #ffffff;
        user-select: none;
            svg {
                width: 1rem;
                margin-right: .5rem;
                fill: #ffffff;
            }
    }
    .nextStepContainer {
        width: 80%;
        margin: 0 auto;
    }



    .marketerStepper {
        &__content {
            width: ${props => props.isOnIntro ? "100%" : "60%"};
            display: flex;
            flex-direction: column;
        }

        &__sectionDescribe {
            width: ${props => props.isOnIntro ? "0%" : "40%"};
            overflow: hidden;
            /* TODO get color  */
            background-color: #80808038;
            display: flex;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            &__title {
                font-size: 2rem;
                font-weight: 600;

            }
            &__desc {
                color: #161616;
                font-size: 1rem;
            }
        }


        &__field {
            direction: rtl;
            margin: auto 0;
            &__formRow {
                display: flex;
                justify-content: space-between;
                width: 80%;
                margin: 1rem auto;
                .ant-row {
                    width: 49%;
                }
                &--singleInput {
                    .ant-row {width: 100%;}
                }
                input {
                    direction: rtl;
                    height: 50px;
                }
                
            }
        }
        &__intro {
            height: 100vh;
            display: flex;
            align-items: center;
            &__container {
                width: 80%;
                margin: 0 auto;
                display: flex;
                direction: rtl;
                div {
                    padding : 1rem;
                    display: flex;
                    flex-direction: column;
                    
                }
                img {
                    max-width: 300px;
                    border-radius: 10px;
                }
                button {align-self: flex-end;}
            }
        }

        &__confirm {
            width: 83%;
            margin: 0 auto;
            max-height: 100vh;
            overflow-y: auto;
            .controller {
                display: flex;
                justify-content: space-between;
                margin: 2rem 0;
                .trigger {
                    
                    &--agree {
                        background-color: #00800075;
                        
                    }
                    &--disagree {
                        background-color: #80808014;
                        color: grey;
                        svg {
                            fill: grey;
                            margin: 0;
                            margin-left: .7rem;
                        }
                    }
                }
            }
        }

        &__endResult {
            width: 83%;
            margin : 0 auto;
            .editDetailContainer {
                text-align: right;
                button {
                    margin-left: auto;
                    background-color: #80808012;
                    color: grey;
                    svg {
                        fill: gray;
                    }
                }
            }
            .controller {
                display: flex;
                margin-top: 2rem;
                .printTrigger {
                    background-color: #00800075;
                }
                .uploadTrigger {
                    margin-left: 2rem;
                    background-color: #3b2aca6b;
                }
            }
        }
    }
`


export default Wrapper;