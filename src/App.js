import { ConfigProvider } from "antd";
import { useState } from "react";
import InsuranceFocusedOrder from "./Components/InsuranceFocusedOrder/InsuranceFocusedOrder";

import faIR from "antd/es/locale/fa_IR";
import InsuranceFocusIntroTrigger from "./Components/InsuranceFocusIntroTrigger/InsuranceFocusIntroTrigger";
import mock from "./mock";

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
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            
            
            {/* <div>
                <button style={{ transform : "scale(5)" }} onClick={setIsVisible}>click</button>
                <InsuranceFocusedOrder componentStyles={mockStyle} onClose={() => setIsVisible(false)} visible={isVisible} />
            </div> */}
            <InsuranceFocusIntroTrigger componentStyles={mockStyle} data={mock} />


            periam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
            Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
 
Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
periam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
 periam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
 
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
             Aperiam libero officia libero sunt voluptas. Aperiam laudantium quod at ea consequatur commodi ipsam enim est. Sit vitae commodi vel. Hic vel et saepe dolorem consequatur qui exercitationem provident maxime. Fugit numquam in numquam fugiat animi. Culpa eum asperiores.
  
 Voluptas totam nemo nesciunt eligendi alias dolores. Voluptatem quis occaecati ipsa quia illum. Voluptate quibusdam ut totam ea voluptatem est voluptatem labore. Quos possimus dicta possimus veritatis magnam. Voluptatem labore alias enim possimus aperiam iste accusamus et esse. Repudiandae officiis et.
  
 Impedit culpa qui iusto eos enim quam non. Labore voluptatem repellendus consequuntur eius temporibus. In quasi id officiis sit quisquam.
              
        </ConfigProvider>
    )
}

export default App;