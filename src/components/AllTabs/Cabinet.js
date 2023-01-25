import React, {useState} from 'react';
import "./../../styles/Tabs/tabs.css";
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryCabinet } from "./../../data/foodInventoryCabinet.js";

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
    const newList = listInventory.filter((item) => item.id !== id);
    setListInventory(newList);

    var index = foodInventoryCabinet.findIndex(e => e.id = id);
    if (index !== -1) {
      foodInventoryCabinet.splice(index, 1);
    } 
  }

  return (
    <div className="cabinet">
      {listInventory.map((data, key) => {
          return (
            <InventoryListItem key={data.id} id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} handleDelete={handleDelete} setUpdate={setUpdate} />
          );
        })}
    </div>
  );
}
export default Cabinet;