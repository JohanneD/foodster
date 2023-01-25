import React, { useState } from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryFridge } from "./../../data/foodInventoryFridge.js";
import "./../../styles/Tabs/tabs.css";

function Fridge(){
  const [listInventory, setListInventory] = useState(foodInventoryFridge);

  const setUpdate = (id, name, expiration, amount) => {
    console.log("in set update");
    console.log(name, expiration, amount)
    let newList = listInventory.map(item => {
      if (item.id === id) {
        item.name = String(name);
        console.log(item.name, name)
        item.expiration = String(expiration);
        item.amount = String(amount);
      }
      return listInventory;
    })
    console.log(newList);
    setListInventory(newList);
  }

  const handleDelete = (id) => {
    console.log("delete clicked")
    const newList = listInventory.filter((item) => item.id !== id);

    setListInventory(newList);
  }

  return (
    <div className="fridge">
      {listInventory.map((data, key) => {
          return (
            <InventoryListItem key={key} id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} handleDelete={handleDelete} setUpdate={setUpdate}/>
          );
        })}
    </div>
  );
}
export default Fridge;