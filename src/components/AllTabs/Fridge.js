import React, {useState} from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import AddNewInventoryItem from '../ListItems/AddNewInventoryItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function Fridge({sortItems, listInventoryFridge, handleDelete, setUpdate}){
  const [isAddingNew, setIsAddingNew] = useState(false);

  //Here is the Fridge content with header and List. Pass all nessesary data and functions
  //down to the InventoryListItem, which is the component that actually show the data.
  //Also have a tenary for id we  are adding a new Fridge item or not.
  return (
    <div className="fridge">
      {<HeaderInvetory sortItems={sortItems} setIsAddingNew={setIsAddingNew} type={"Fridge"}/>}
      
      {/*if we are adding a new item this will show, otherview nothing will show.*/}
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