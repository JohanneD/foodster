import React, {useState} from 'react';
import "./../../styles/Tabs/tabs.css";
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryCabinet } from "./../../data/foodInventoryCabinet.js";
import {sortInventory} from "./../AllTabs/HelperFunc.js";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function Cabinet(){
  const [listInventory, setListInventory] = useState(foodInventoryCabinet);

  const setUpdate = (id, name, expiration, amount) => {
    let newList = [...listInventory]
    listInventory.forEach((item, index) => {
      if (item.id === id) {
        newList[index] = {
          id: id,
          name: name,
          expiration: expiration,
          amount: amount
        }
        foodInventoryCabinet[index] = {
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

    var index = foodInventoryCabinet.findIndex(e => e.id = id);
    if (index !== -1) {
      foodInventoryCabinet.splice(index, 1);
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
    <div className="cabinet">
      <HeaderInvetory sortItems={sortItems}/>
      {listInventory.map((data, key) => {
          return (
            <InventoryListItem key={data.id} id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} handleDelete={handleDelete} setUpdate={setUpdate} />
          );
        })}
    </div>
  );
}
export default Cabinet;