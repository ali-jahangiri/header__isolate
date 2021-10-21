import React from 'react';
import Wrapper from "./exactCarItemGroupStyle";

const ExactCarItemInGroup = ({ name , onSelect , id , groupIcon , groupName , groupId }) => {
    return (
        <Wrapper onClick={() => onSelect({ id : groupId , groupIcon , groupName , skipUserSelection : true , name , carId : id})}>
            {/* <img src={groupIcon} alt="image_car_group" /> */}
            <div>
                <img src={"https://lezebre.lu/images/detailed/17/30608-Iran-Khodro.png"} alt="image_car_group" />
                <p style={{ fontWeight : 900 , marginBottom : ".2rem" }}>{groupName}</p>
            </div>
            <p style={{ textAlign : "center" }}>{name}</p>
        </Wrapper>
    )
}


export default ExactCarItemInGroup;