import Wrapper from "./style";

import iconConstructor from "../../utils/iconConstructor";

const iconPack = iconConstructor("ui");

const TabPageMobile = ({ title , showBackIcon = true, isNavActive = true , backActionHandler, children , ...rest }) => {
    const icon = iconPack()
    return (
        <Wrapper {...rest} isNavActive={isNavActive} className="tabPageMobile">
            <div className="tabPageMobile__header">
                <p>{title}</p>
                {showBackIcon && <div onClick={backActionHandler}>
                        {
                            icon.get("arrowSoftLeft")
                        }
                </div>}
            </div>
            <div className="tabPageMobile__bodyContainer">
                {children}
            </div>
        </Wrapper>
    )
}


export default TabPageMobile;