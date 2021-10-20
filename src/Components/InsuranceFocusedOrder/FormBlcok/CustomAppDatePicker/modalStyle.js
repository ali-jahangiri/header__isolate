import { css, keyframes } from "styled-components";
import WithStyled from "../../../../utils/HOC/WithStyled";



const todayTriggerAnime = (x , y) =>  keyframes`
    from {
        opacity: ${x};
    }
    to {
        opacity: ${y};
    }
`

const style = () => css`
    .customAppDatePicker {


        &__header {
            text-align: right;
            margin-bottom: -1rem;
            span {
                font-weight: 500;
                font-size: 1.2rem;
            }
        }
        

        &__calender {
            box-shadow: none !important;
            width : 100%;
        }


        &__input {
            margin-top: 1.5rem;
            position: relative;
            
            span {
                position: absolute;
                right: 5%;
                top: 50%;
                transition: .3s;
                transform: translateY(-50%);
                z-index: 555;
                background-color: white;
                padding : .2rem .5rem;
                user-select: none;
                border-radius: 35px;
            }


            input {
                text-align: right;
                width : 100%;
                border-radius: 5px;
                border: 2px solid white;
                outline: none;
                padding: .9rem .5rem;
                font-size: 1rem;
                transition: .3s;

                &:focus {
                    & + span {
                        top: 0;
                        right: 1%;
                        color: grey;
                    }
                }
            }


            .getOnTop {
                top: 0;
                right: 1%;
                color: grey;
            }


            &--error {
                span {
                    color: #E63E6D !important;
                }
                input {
                    border-color: #E63E6D8E;
                }
            }

            &--success {
                input {
                    border-color: #CEE5D0;
                }
            }
        }


        &__todayTrigger {
            position: absolute;
            left : 3%;
            top: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transform: translateY(-50%);
            transition : .3s;
            animation: ${todayTriggerAnime(0 , 1)} .3s forwards alternate;

            svg {
                width : 1.5rem;
                height: 1.5rem;
                fill: lightgrey;
                transition : .3s;
            }

            &:hover {
                top: 55%;
                svg {
                    fill: grey;
                }
            }

            &--disabled {
                animation: ${todayTriggerAnime(1 , 0)} .3s forwards alternate;
            }
        }

        &__controller {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;

            div {
                width: 100%;
                button {
                    width : 100%;
                    padding: .8rem;
                    user-select: none;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                }
            }
        }
    }
    
`

export default WithStyled(style);