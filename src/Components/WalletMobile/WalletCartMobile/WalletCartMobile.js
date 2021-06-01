import iconConstructor from "../../../utils/iconConstructor";
import Wrapper from "./style";

const iconPack = iconConstructor("general")

const WalletCartMobile = ({ date , amount , desc}) => {
    const icon = iconPack();
    return (
        <Wrapper>
            <div className="walletCartMobile__icon">
                {
                    icon.get("walletMinimal")
                }
            </div>
            <div className="walletCartMobile__desc">
                {desc}
            </div>
            <div className="walletCartMobile__lastTransaction">
                <div>
                    <span>باقی مانده</span>
                    <div>
                        <span>تومان</span>
                        <p>{amount}</p>
                    </div>
                </div>
                <div>
                    <span>تاریخ</span>
                    <p>{date}</p>
                </div>
            </div>
            
        </Wrapper>
    )
}


export default WalletCartMobile;