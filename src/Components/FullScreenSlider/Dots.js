import Wrapper from './dotsStyle';

const Dots = ({ itemsLength , setCurrentIndex , currentIndex , passedStyle}) => (
    <Wrapper style={passedStyle}> 
            {
                new Array(itemsLength).fill("").map((_ , i) => <div onClick={() => setCurrentIndex(i)} className={`dotsItem ${currentIndex === i ? "dotsItem--active" : ""}`} key={i}><p>{i + 1}</p></div>)
            }
    </Wrapper>
)


export default Dots;