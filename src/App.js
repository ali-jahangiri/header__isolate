import { ConfigProvider } from "antd";
import { useState } from "react";
import InsuranceFocusedOrder from "./Components/InsuranceFocusedOrder/InsuranceFocusedOrder";

import faIR from "antd/es/locale/fa_IR";


const App = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <ConfigProvider locale={faIR} direction="rtl">
            <div>
                <button style={{ transform : "scale(5)" }} onClick={setIsVisible}>click</button>
                <InsuranceFocusedOrder onClose={() => setIsVisible(false)} visible={isVisible} />
            </div>
        </ConfigProvider>
    )
}

export default App;