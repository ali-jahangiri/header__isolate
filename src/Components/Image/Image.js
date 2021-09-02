const Image = props => {

    const {
        src = "",
        alt = "",

    } = props;


    

    return (
        <img src={src} alt={alt} />
    )
}

export default Image;