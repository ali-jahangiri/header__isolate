import { ConfigProvider } from "antd";
import { useState } from "react";
import InsuranceFocusedOrder from "./Components/InsuranceFocusedOrder/InsuranceFocusedOrder";

import faIR from "antd/es/locale/fa_IR";
import InsuranceFocusIntroTrigger from "./Components/InsuranceFocusIntroTrigger/InsuranceFocusIntroTrigger";
import mock from "./mock";
import FormGenerator from "./Components/KarbaladFormGenerator/FormGenerator";

const mockStyle = [
    {
        name : "mainBgColor",
        value : "black",
    },
    {
        name : "mainTextColor",
        value : "black",
    },
    {
        name : "primaryColor",
        value : "#87AAAA",
    },
    {
        name : "mainControllerTextColor",
        value : "black",
    },
    {
        name : "introInsNameFontSize",
        value : "3.5rem",
    },
    {
        name : "introInsDescFontSize",
        value : "1rem",
    },
    
]

const App = () => {
    return (
        <ConfigProvider locale={faIR} direction="rtl">
            <FormGenerator />              
        </ConfigProvider>
    )
}

export default App;