import Wrapper from './itemStyle';

const BoxItem = ({ TEXT , value , Link }) => {

    const clickHandler = () => {
        
    }

    return (
        <Wrapper onClick={clickHandler}>
            <img src="https://img.icons8.com/material/24/000000/bookmark-outline.png" alt="webIcon" />
            <p> {TEXT}</p>
        </Wrapper>
    )
}


export default BoxItem;