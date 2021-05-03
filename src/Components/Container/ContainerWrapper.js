import styled from "styled-components";

const ContainerWrapper = styled.div`
        margin : auto;
        display : flex;
        align-self : center;
        width : 100%;
        @media (min-width: 480px) {
             &&& {max-width : 480px;}
        }
        @media(min-width: 576px)  {
            &&& {max-width : 576px;}
        }
        @media(min-width : 768px) {
            &&& {max-width : 768px;}
        }
        @media(min-width : 992px) {
            &&& {max-width : 992px;}
        }
        @media(min-width : 1200px) {
            &&& {max-width : 1200px;}
        }
`


export default ContainerWrapper;