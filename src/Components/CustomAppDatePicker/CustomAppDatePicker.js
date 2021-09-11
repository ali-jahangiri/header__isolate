import { Modal } from 'antd';
import React, { useState } from 'react';

import Wrapper from "./style";


const CustomAppDatePicker = ({  }) => {
    const [isOpened, setIsOpened] = useState(false);
    
    return (
        <Wrapper>
            <input onFocus={setIsOpened}  placeholder="Select a date" />
            <Modal visible={isOpened}>
                Velit est qui suscipit in. Ut accusamus itaque. Dolor qui sit voluptatem nesciunt. Id pariatur maiores aut earum. Quas voluptatem mollitia saepe eius. Fugit quidem sint consequatur.
 
Quia in nobis. Ipsum expedita perferendis voluptatem ut laudantium sed deserunt alias officiis. Cupiditate et a et fugiat molestiae tenetur maiores doloremque. Totam libero consequatur odio ut nemo dolor. Et sed recusandae odio et et et reprehenderit et et.
 
Repellendus suscipit harum laudantium rerum quas saepe voluptatum ut reiciendis. Error culpa voluptates quia fuga perferendis. Officia quod aperiam magnam ducimus nostrum dolor et. Ut consectetur cupiditate atque qui qui cupiditate et rem eveniet. Soluta quod harum delectus voluptas. Magnam sunt vel soluta.
            </Modal>
        </Wrapper>
    )
}



export default CustomAppDatePicker;