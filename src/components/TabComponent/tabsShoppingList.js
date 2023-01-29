import React, { useState} from "react";
import Fridge from "../AllTabs/Fridge";
import "./../../styles/Tabs/tabs.css"
import TabContent from "./tabContent";
import {sortInventory} from "../AllTabs/HelperFunc.js";

function TabsShoppingList(){
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

  /* this funcion sorts the list on the name and here is a case on type so i know
  which list to sort */
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

  /* This is the delete function, here i look for the id of the item to know which item
  to delete. Also here i add in a switch case for the different list types. And then 
  update the correct localStorage  */
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

  /* This is the update function, here i look for the id of the item to know which item
  to edit. Also added in a switch case for the different list types. And then 
  update the correct localStorage  */
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

  /* This is the functionality for adding */
  const addItem = (name, expiration, amount, key) => {
      let newList = [...listInventoryFridge]
      newList.push({id: listInventoryFridge.length+1, name: name, expiration: expiration, amount:amount});
      console.log(listInventoryFridge);
      setListInventoryFridge(newList);
      localStorage.setItem(key, JSON.stringify(newList));
    }


    return (
      <div className="tabs">
        {/* This is the tab where we switch between the content */} 
        {/*
        <ul className="tabs_list">
          
            <TabNavItem title="Fridge" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Freezer" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Cabinet" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>
        */}
        <div>
          {/* This is were the actual content is shown. Since i save the data of the list in useStats
          here, i have to pass down the different list to the different content types. 

          <TabContent id="tab1" activeTab={activeTab} >
            <ShoppingListTab sortItems={sortItems} 
                    listInventoryFridge={listInventoryShoppingList} 
                    setListInventoryFridge={setListInventoryShoppingList} 
                    handleDelete={handleDelete} 
                    setUpdate={setUpdate}/>
          </TabContent>
          */}
          
         
          <TabContent id="tab1" activeTab={activeTab} >
            <Fridge sortItems={sortItems} 
                    listInventoryFridge={listInventoryFridge} 
                    setListInventoryFridge={setListInventoryFridge} 
                    handleDelete={handleDelete} 
                    setUpdate={setUpdate}/>
          </TabContent>
          
      

          {/*
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
        */}
        </div>
      </div>
    );
  }
  export default TabsShoppingList;