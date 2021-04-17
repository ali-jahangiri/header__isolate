import styled from "styled-components";


const HeaderActionWrapper = styled.div`
    @media (max-width : 768px) {
    &&& {display : ${props => props.hideInMobile  ? "none" : 'flex' }}}
`

const HeaderAction = ({ action , text , position , handler , hideInMobile , icon }) => (
    <HeaderActionWrapper  className="header__action" hideInMobile={hideInMobile} position={position}>
        <svg className="action__icon" x="0px" y="0px" viewBox="0 0 373 422.1">
            <path d="M362.7,315.9L187,417.3l-0.5-0.3L11.3,315.9l102.1-59.2c18.3,20.2,44.7,32.9,74.1,32.9c29.2,0,55.5-12.5,73.8-32.5L362.7,315.9z"></path>
            <path fill="transparent" d="M187.5,11.1l-0.2,78.4c-55.1,0.1-99.8,44.8-99.8,100c0,25.8,9.8,49.4,25.9,67.1L11.3,315.9l-0.3-0.2V112.4l0.3-0.2L187,10.8L187.5,11.1z"></path>
            <path d="M363,112.4v203.2l-0.3,0.2l-101.4-58.8c16.3-17.8,26.3-41.5,26.3-67.5c0-55.2-44.8-100-100-100h-0.2l0.2-78.4l175.2,101.1L363,112.4z"></path>
        </svg>
        <div className="header__icon--mobile">{icon && icon}</div>
        <p onClick={() => handler(action)}>{text}</p>
    </HeaderActionWrapper>
)
export default HeaderAction;