import React, { useState, useEffect} from "react";
import Cabinet from "../AllTabs/Cabinet";
import Freezer from "../AllTabs/Freezer";
import Fridge from "../AllTabs/Fridge";
import "./../../styles/Tabs/tabs.css"
import TabContent from "./tabContent";
import TabNavItem from "./tabNavItem";
import getData from "./../Helpers/getdata.js";

function Tabs(){
  const [activeTab, setActiveTab] = useState("tab1");

  /* Here is the the lists for the different tabs */
  const [listInventoryFridge, setListInventoryFridge] = useState([]);
  const [listInventoryFreezer, setListInventoryFreezer] = useState([]);
  const [listInventoryCabinet, setListInventoryCabinet] = useState([]);

  /* UseEffect is a nice react hook that can run code on certain conditions. If i 
  write a useEffect and in the bottom [], that here is empty, i add a variable. The 
  useEffect will run and do something every time the variable is changed
  But here since the [] are empty, this useEffect will only be ran when the page is
  redered. So this one will e.g. be ran everytime we refresh the page. */
  useEffect(()=>{
    getData("./data/foodInventoryFridge.json", "Fridge");
    getData("./data/foodInventoryFreezer.json", "Freezer");
    getData("./data/foodInventoryCabinet.json", "Cabinet");
    setListInventoryFridge(JSON.parse(localStorage.getItem("Fridge")));
    setListInventoryFreezer(JSON.parse(localStorage.getItem("Freezer")))
    setListInventoryCabinet(JSON.parse(localStorage.getItem("Cabinet")));

  },[]);


    return (
      <div className="tabs">
        <ul className="tabs_list">
            <TabNavItem title="Fridge" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Freezer" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Cabinet" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>
        <div>
          {/* This is were the actual content is shown. Since i save the data of the list in useStats
          here, i have to pass down the different list to the different content types. */}
          <TabContent id="tab1" activeTab={activeTab} >
            <Fridge listInventoryFridge={listInventoryFridge} 
                    setListInventoryFridge={setListInventoryFridge} />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab} >
            <Freezer listInventoryFreezer={listInventoryFreezer} 
                     setListInventoryFreezer={setListInventoryFreezer} />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab} >
            <Cabinet listInventoryCabinet={listInventoryCabinet} 
                     setListInventoryCabinet={setListInventoryCabinet} />
          </TabContent>
        </div>
      </div>
    );
  }
  export default Tabs;