import React, {useState} from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import AddNewInventoryItem from '../ListItems/AddNewInventoryItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function Cabinet({sortItems, listInventoryCabinet, handleDelete, setUpdate}){
  const [isAddingNew, setIsAddingNew] = useState(false);

  //Here is the Cabinet content with header and List. Pass all nessesary data and functions
  //down to the InventoryListItem, which is the component that actually show the data.
  //Also have a tenary for id we  are adding a new Cabinet item or not.
  return (
    <div className="Cabinet">
      {<HeaderInvetory sortItems={sortItems} setIsAddingNew={setIsAddingNew} type={"Cabinet"}/>}
      
      {/*if we are adding a new item this will show, otherview nothing will show.*/}
      {isAddingNew ? (<AddNewInventoryItem />) : (null)}
      {listInventoryCabinet.map((data, key) => {
          return (
            <InventoryListItem 
            key={data.id} 
            id={data.id} 
            name={data.name} 
            expiration={data.expiration} 
            amount={data.amount} 
            handleDelete={handleDelete} 
            setUpdate={setUpdate} 
            type={"Cabinet"}/>
          );
        })}
    </div>
  );
}
export default Cabinet;