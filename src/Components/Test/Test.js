// import styled ,{ css } from "styled-components/macro";

import SS from "./style";

const Test = () => {
    return (
        <SS style={[{ name : "bgColor" , setByCustomer : true , value : "red" }]}>
                this is test
        </SS>
    )
}


export default Test;