import styled from "styled-components";
import withStyleWrapper from "../../HOC/withStyleWrapper";

const FooterWrapper = ({get , check , children }) => {
    
    const StyledWrapper = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 1rem ;

    & > div {
        flex : 1;
    }
    & .certificates {
        display: 'flex';
		justify-content: 'center';
		align-items: 'center';
		width: '100%';
		margin: '10px 0';
		flex-wrap: 'wrap';
    }
    & .certificateItem {
        width: 120;
			height: 120;
			margin: 5;
			display: 'flex';
			justify-content: 'center';
			align-items: 'center';
			
            img {
                width: 100;
            }
    }
    .footer {
        &__content {
            background-color : ${get("backgroundColor")};
            height : 100%;
            display : flex;
            justify-content : center;
            align-items: flex-end;
            flex-direction : column;
            div {
                display : flex;
                justify-content : flex-end;
                svg {
                    width : 1.6rem;
                    height : 1.6rem;
                }

                // style of image witch user uploaded (fallback style)
                img {
                    max-width : 3rem;
                }
            }
        }
        
    }
`

    return <StyledWrapper>{children}</StyledWrapper>
}

export default withStyleWrapper(FooterWrapper)