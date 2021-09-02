import Wrapper from "./textBoxStyle";

const Svg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M.876,14.088l3.879,3.879a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L2.614,13,23,13a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1L2.553,11,6.169,7.381a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0L.875,9.846A3.007,3.007,0,0,0,.876,14.088Z"/></svg>

const TextBox = ({ title , body , ctaText , index }) => {
    return (
        <Wrapper>
            <div className="textBox__content">
                <p className="textBox__title">{title}{index}</p>
                <p className="textBox__body">{body}</p>
            </div>
            <div className="textBox__ctaContainer">
                <Svg />
                <p>{ctaText}</p>
            </div>
        </Wrapper>        
    )    
}



export default TextBox;