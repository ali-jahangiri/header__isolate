import Wrapper from "./style";

const FlipCart = ({ frontSide , backSide , perspective, _direction , containerStyle , itemStyle , shouldFlip}) => {
    return (
        <Wrapper direction={_direction} containerStyle={containerStyle} itemStyle={itemStyle} perspective={perspective}>
            <div className={`flipCart__container ${shouldFlip ? "flipCart__container--active" : ""}`}>
                <div className="flipCart--frontSide">
                    {frontSide}
                </div>
                <div className="flipCart--backSide">
                    {backSide}
                </div>
            </div>
        </Wrapper>
    )
}


export default FlipCart;