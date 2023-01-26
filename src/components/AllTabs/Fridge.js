import React, {useState} from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import AddNewInventoryItem from '../ListItems/AddNewInventoryItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function Fridge({sortItems, listInventoryFridge, handleDelete, setUpdate}){
  const [isAddingNew, setIsAddingNew] = useState(false);

  return (
    <div className="fridge">
      {<HeaderInvetory sortItems={sortItems} setIsAddingNew={setIsAddingNew} type={"Fridge"}/>}
      {isAddingNew ? (<AddNewInventoryItem />) : (null)}
      {listInventoryFridge.map((data, key) => {
          return (
            <InventoryListItem 
            key={data.id} 
            id={data.id} 
            name={data.name} 
            expiration={data.expiration} 
            amount={data.amount} 
            handleDelete={handleDelete} 
            setUpdate={setUpdate} 
            type={"Fridge"}/>
          );
        })}
    </div>
  );
}
export default Fridge;