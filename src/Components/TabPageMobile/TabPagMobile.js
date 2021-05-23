import Wrapper from "./style";

import iconConstructor from "../../utils/iconConstructor";

const iconPack = iconConstructor("ui");

const TabPageMobile = ({ title , children , extendStyle }) => {
    const icon = iconPack()
    return (
        <Wrapper extendStyle={extendStyle} className="tabPageMobile">
            <div className="tabPageMobile__header">
                <p>{title}</p>
                <div>
                        {
                            icon.get("arrowSoftLeft")
                        }
                </div>
            </div>
            <div className="tabPageMobile__bodyContainer">
                {children}
            </div>
        </Wrapper>
    )
}


export default TabPageMobile;