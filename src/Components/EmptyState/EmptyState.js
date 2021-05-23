import Wrapper from "./style";

import iconConstructor from "../../utils/iconConstructor";

const iconPack = iconConstructor("ui")

const EmptyState = ({ desc , icon , title , newActionComponent , ...rest }) => {
    console.log(newActionComponent);
    return (
        <Wrapper {...rest}>
            <div className="emptyState__icon">{icon || iconPack().get("emptyBox")}</div>
            <p className="emptyState__title">{title}</p>
            <p className="emptyState__desc">{desc || "نتیجه ای یافت نشد!"}</p>
            <div className="emptyState__newAction">
                {newActionComponent}
            </div>
        </Wrapper>
    )
}


export default EmptyState