import React from 'react';
import Wrapper from "./itemStyle";


const CarGroupItem = ({ imageUrl , name , id , selectHandler , isSelected , style }) => {
    // TODO replace with Image component
    return (
        <Wrapper style={style} isSelected={isSelected} className="carGroupItem" onClick={() => selectHandler({id , imageUrl : "https://i.pinimg.com/originals/c3/ff/8a/c3ff8a0bb8cd855bba58e0305e23bd02.jpg" , name})}>
            {/* <img src={imageUrl} alt="car_image" /> */}
            <img src={"https://i.pinimg.com/originals/c3/ff/8a/c3ff8a0bb8cd855bba58e0305e23bd02.jpg"} alt="car_image" />
            <p>{name}</p>
        </Wrapper>
    )
}

export default CarGroupItem;