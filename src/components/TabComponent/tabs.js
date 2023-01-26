import React, { useState, useEffect} from "react";
import Cabinet from "../AllTabs/Cabinet";
import Freezer from "../AllTabs/Freezer";
import Fridge from "../AllTabs/Fridge";
import "./../../styles/Tabs/tabs.css"
import TabContent from "./tabContent";
import TabNavItem from "./tabNavItem";
import {sortInventory} from "./../AllTabs/HelperFunc.js";

function Tabs(){
  const [activeTab, setActiveTab] = useState("tab1");
  const [listInventoryFridge, setListInventoryFridge] = useState([]);
  const [listInventoryFreezer, setListInventoryFreezer] = useState([]);
  const [listInventoryCabinet, setListInventoryCabinet] = useState([]);

  const getData=(url, key)=>{
    fetch(url
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        if (!localStorage.getItem(key)){
          localStorage.setItem(key, JSON.stringify(myJson));
          //setData(myJson)
          console.log(JSON.parse(localStorage.getItem(key)))
        }
      });
  }

  useEffect(()=>{
    getData("./data/foodInventoryFridge.json", "Fridge");
    getData("./data/foodInventoryFreezer.json", "Freezer");
    getData("./data/foodInventoryCabinet.json", "Cabinet");
    setListInventoryFridge(JSON.parse(localStorage.getItem("Fridge")));
    setListInventoryFreezer(JSON.parse(localStorage.getItem("Freezer")))
    setListInventoryCabinet(JSON.parse(localStorage.getItem("Cabinet")));

  },[])

  function sortItems(name, type){
    let newList = [];
    switch (type) {
      case "Fridge":
        newList = [...listInventoryFridge];
        newList = sortInventory(name, newList);
        setListInventoryFridge(newList);
        break;
      case "Freezer":
        newList = [...listInventoryFreezer];
        newList = sortInventory(name, newList);
        setListInventoryFreezer(newList);
        break;
      case "Cabinet":
        newList = [...listInventoryCabinet];
        newList = sortInventory(name, newList);
        setListInventoryCabinet(newList);
        break;
      default:
        break;
    }
  }

  const handleDelete = (id, key) => {
      let newList = [];
      switch (key) {
        case "Fridge":
          newList = listInventoryFridge.filter((item) => item.id !== id);
          setListInventoryFridge(newList);
          break;
        case "Freezer":
          newList = listInventoryFreezer.filter((item) => item.id !== id);
          setListInventoryFreezer(newList);
          break;
        case "Cabinet":
          newList = listInventoryCabinet.filter((item) => item.id !== id);
          setListInventoryCabinet(newList);
          break;
        default:
          break;
      }
      localStorage.setItem(key, JSON.stringify(newList));
    }

  const setUpdate = (id, name, expiration, amount, key) => {
      let newList = [];
      switch (key) {
        case "Fridge":
          newList = [...listInventoryFridge]
          listInventoryFridge.forEach((item, index) => {
          if (item.id === id) {
            newList[index] = {
            id: id,
            name: name,
            expiration: expiration,
            amount: amount
              }
            }
          }
          )
          setListInventoryFridge(newList);
          break;
        case "Freezer":
          newList = [...listInventoryFreezer]
          listInventoryFreezer.forEach((item, index) => {
          if (item.id === id) {
            newList[index] = {
            id: id,
            name: name,
            expiration: expiration,
            amount: amount
              }
            }
          }
          )
          setListInventoryFreezer(newList);
          break;
        case "Cabinet":
          newList = [...listInventoryCabinet]
          listInventoryCabinet.forEach((item, index) => {
          if (item.id === id) {
            newList[index] = {
            id: id,
            name: name,
            expiration: expiration,
            amount: amount
              }
            }
          }
          )
          setListInventoryCabinet(newList);
          break;
        default:
          break;
      }
      localStorage.setItem(key, JSON.stringify(newList));
    }

  const addItem = (name, expiration, amount, key) => {
      let newList = [...listInventoryFridge]
      newList.push({id: listInventoryFridge.length+1, name: name, expiration: expiration, amount:amount});
      console.log(listInventoryFridge);
      setListInventoryFridge(newList);
      localStorage.setItem(key, JSON.stringify(newList));
    }


    return (
      <div className="tabs">
        <ul className="tabs_list">
            <TabNavItem title="Fridge" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Freezer" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Cabinet" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>
        <div>
          <TabContent id="tab1" activeTab={activeTab} >
            <Fridge sortItems={sortItems} 
                    listInventoryFridge={listInventoryFridge} 
                    setListInventoryFridge={setListInventoryFridge} 
                    handleDelete={handleDelete} 
                    setUpdate={setUpdate}/>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab} >
            <Freezer sortItems={sortItems} 
                     listInventoryFreezer={listInventoryFreezer} 
                     setListInventoryFreezer={setListInventoryFreezer}
                     handleDelete={handleDelete} 
                     setUpdate={setUpdate}/>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab} >
            <Cabinet sortItems={sortItems} 
                     listInventoryCabinet={listInventoryCabinet} 
                     setListInventoryCabinet={setListInventoryCabinet} 
                     handleDelete={handleDelete} 
                     setUpdate={setUpdate}/>
          </TabContent>
        </div>
      </div>
    );
  }
  export default Tabs;