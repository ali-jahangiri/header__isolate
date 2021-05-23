import iconConstructor from "../../../utils/iconConstructor";

const iconPack = iconConstructor("ui")

const SliderController = ({ sliderRef }) => {
    const icon = iconPack()
    return (
        <div className="groupSlider__controller">
            <div onClick={() => sliderRef.current.slickPrev()}>{icon.get("arrowSoftLeft")}</div>
            <div onClick={() => sliderRef.current.slickNext()}>{icon.get("arrowSoftRight")}</div>
        </div>
    )
}

export default SliderController;