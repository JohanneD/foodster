import React, { useState } from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryFridge } from "./../../data/foodInventoryFridge.js";
import { toDaysUntil } from './HelperFunc';
import "./../../styles/Tabs/tabs.css";

function Fridge(){
  const [listInventory, setListInventory] = useState(foodInventoryFridge);

  /*const setUpdate = (updatedText, type, id) => {
    let newList;
    if (type === "amount"){
      console.log(updatedText, id, type)
      newList = listInventory.map(item => {
        if (item.id === id) {
          item.amount = updatedText
        }
        return listInventory;
      })
    }else if (type === "name"){
      console.log(updatedText, id, type)
      newList = listInventory.map(item => {
        if (item.id === id) {
          item.name = updatedText
        }
        return listInventory;
      })
    }else if (type === "expiration"){
      console.log(updatedText, id, type)
      newList = listInventory.map(item => {
        if (item.id === id) {
          item.expiration = updatedText
        }
        return listInventory;
      })
    }
    setListInventory(newList);
  }

  const handleDelete = (id) => {
    console.log("delete clicked")
    const newList = listInventory.filter((item) => item.id !== id);

    setListInventory(newList);
  }*/

  return (
    <div className="fridge">
      {listInventory.map((data, key) => {
          return (
            <InventoryListItem key={key} id={data.id} name={data.name} expiration={toDaysUntil(data.expiration)} amount={data.amount}/>
          );
        })}
    </div>
  );
}
export default Fridge;