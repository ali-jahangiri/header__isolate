import BgStyle from "./BgStyle";

/**
 * NOTE
 * background container of a inner component witch get componentStyle and filter the properties
 * witch start with "bg"
 */

const Bg = ({ children , style }) => (
    <BgStyle style={style.filter(el => el.name.startsWith("bg"))}>
        {children}
    </BgStyle>
)
export default Bg;

// for images 402db120-e5d0-450f-8c9e-428519315055.jpg
// for link #
// for text use lorem or .
// for link use []