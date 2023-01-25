import React, {useState} from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryFreezer } from "./../../data/foodInventoryFreezer.js";
import "./../../styles/Tabs/tabs.css";

function Freezer(){
  const [listInventory, setListInventory] = useState(foodInventoryFreezer);

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
        foodInventoryFreezer[index] = {
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
    const newList = listInventory.filter((item) => item.id !== id);
    setListInventory(newList);

    var index = foodInventoryFreezer.findIndex(e => e.id = id);
    if (index !== -1) {
      foodInventoryFreezer.splice(index, 1);
    } 
  }


  return (
    <div className="freezer">
      {listInventory.map((data, key) => {
          return (
            <InventoryListItem key={data.id} id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} handleDelete={handleDelete} setUpdate={setUpdate} />
          );
        })}
    </div>
  );
}
export default Freezer;