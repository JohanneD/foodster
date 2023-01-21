import React, { useState } from "react";
import Cabinet from "../AllTabs/Cabinet";
import Freezer from "../AllTabs/Freezer";
import Fridge from "../AllTabs/Fridge";
import "./../../styles/Tabs/tabs.css"
import TabContent from "./tabContent";
import TabNavItem from "./tabNavItem";

function Tabs(){
  const [activeTab, setActiveTab] = useState("tab1");

    return (
      <div className="tabs">
        <ul className="tabs_list">
            <TabNavItem title="Fridge" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Freezer" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Cabinet" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>
        <div>
          <TabContent id="tab1" activeTab={activeTab} >
            <Fridge />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab} >
            <Freezer />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab} >
            <Cabinet />
          </TabContent>
        </div>
      </div>
    );
  }
  export default Tabs;