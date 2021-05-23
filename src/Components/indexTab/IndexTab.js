import iconConstructor from "../../utils/iconConstructor";
import Wrapper from "./style";

const iconPack = iconConstructor(["general", "ui"])

const IndexPageItem = ({ title , itemIcon }) => {
    const icon = iconPack();
    return (
        <div className="indexTab__item">
            {
                icon.get(itemIcon)
            }
            <p>{title}</p>
            <div className="indexTab__item__action">
                {
                    icon.get("arrowSoftLeft")
                }
            </div>
        </div>
    )
}

// TODO change icon with colored icons

const items = [
    {
        title : "بیمه نامه ها",
        itemIcon : "insuranceMinimal",
    },
    {
        title : "یادآور",
        itemIcon : "reminderMinimal",
    },
    {
        title : "کیف پول",
        itemIcon : "walletMinimal",
    },
    {
        title : "پشتیبانی",
        itemIcon : "supportMinimal",
    },
]

const IndexTab = () => {
    return (
        <Wrapper>
            <div className="indexTab__row">
                {
                    items.slice(0 , 2).map((el , i) => (
                        <IndexPageItem key={i} {...el} />
                    ))
                }
            </div>
            <div className="indexTab__row">
                {
                    items.slice(2 , 4).map((el , i) => (
                        <IndexPageItem key={i} {...el} /> 
                    ))
                }
            </div>
        </Wrapper>
    )
}


export default IndexTab;