import React from 'react';
import Wrapper from "./exactCarItemGroupStyle";

const ExactCarItemInGroup = ({ name , onSelect , id , groupIcon , groupName , groupId , style }) => {
    return (
        <Wrapper style={style} onClick={() => onSelect({ id : groupId , groupIcon , groupName , skipUserSelection : true , name , carId : id})}>
            {/* <img src={groupIcon} alt="image_car_group" /> */}
            <img src={"https://lezebre.lu/images/detailed/17/30608-Iran-Khodro.png"} alt="image_car_group" />
            <p style={{ fontWeight : 900 , marginBottom : ".2rem" }}>{groupName}</p>
            <p>{name}</p>
        </Wrapper>
    )
}


export default ExactCarItemInGroup;