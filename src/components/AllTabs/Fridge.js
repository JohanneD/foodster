import React, { useState } from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryFridge } from "./../../data/foodInventoryFridge.js";
import "./../../styles/Tabs/tabs.css";
import {sortInventory} from "./../AllTabs/HelperFunc.js";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function Fridge(){
  const [listInventory, setListInventory] = useState(foodInventoryFridge);

  const setUpdate = (id, name, expiration, amount) => {
    console.log("in set update");
    console.log(name, expiration, amount)
    let newList = [...listInventory]
    listInventory.forEach((item, index) => {
      if (item.id === id) {
        newList[index] = {
          id: id,
          name: name,
          expiration: expiration,
          amount: amount
        }
        foodInventoryFridge[index] = {
          id: id,
          name: name,
          expiration: expiration,
          amount: amount
        }
      }
    }
    )
    setListInventory(newList);
  }

  const handleDelete = (id) => {
    console.log("delete clicked")
    const newList = listInventory.filter((item) => item.id !== id);
    setListInventory(newList);

    var index = foodInventoryFridge.findIndex(e => e.id = id);
    if (index !== -1) {
      foodInventoryFridge.splice(index, 1);
    } else {
      console.log("Item not found in appGlobal.ObjProduct");
    }
    //console.log(newList)
    console.log(listInventory)
  }

  function sortItems(name){
    console.log("clicked")
    let newList = [...listInventory];
    newList = sortInventory(name, listInventory);
    console.log(newList);
    setListInventory(newList);
    console.log(listInventory);

  }

  return (
    <div className="fridge">
      <HeaderInvetory sortItems={sortItems}/>
      {listInventory.map((data, key) => {
          return (
            <InventoryListItem key={data.id} id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} handleDelete={handleDelete} setUpdate={setUpdate}/>
          );
        })}
    </div>
  );
}
export default Fridge;