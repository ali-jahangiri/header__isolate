import iconConstructor from "../../utils/iconConstructor";
import Wrapper from "./style";

const iconPack = iconConstructor(["general", "ui"])

const IndexPageItem = ({ title , itemIcon , onClick }) => {
    const icon = iconPack();
    return (
        <div className="indexTab__item">
            <div className="indexTab__item__container">
            <div className="indexTab__item__headerIcon">
                {
                    icon.get(itemIcon)
                }
            </div>
            <p>{title}</p>
            <div onClick={() => onClick(title)} className="indexTab__item__action">
                {
                    icon.get("arrowSoftRight")
                }
            </div>
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

const IndexTab = ({ clickHandler }) => {
    return (
        <Wrapper>
            <div className="indexTab__row">
                {
                    items.slice(0 , 2).map((el , i) => (
                        <IndexPageItem onClick={clickHandler} key={i} {...el} />
                    ))
                }
            </div>
            <div className="indexTab__row">
                {
                    items.slice(2 , 4).map((el , i) => (
                        <IndexPageItem onClick={clickHandler} key={i} {...el} /> 
                    ))
                }
            </div>
        </Wrapper>
    )
}


export default IndexTab;