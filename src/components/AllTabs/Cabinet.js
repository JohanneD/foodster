import React, {useState} from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import AddNewInventoryItem from '../ListItems/AddNewInventoryItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";
import addItem from '../Helpers/addData';
import handleDelete from '../Helpers/deleteDate';
import setUpdate from '../Helpers/updateDate';
import sortItems from '../Helpers/sortData';

function Cabinet({listInventoryCabinet, setListInventoryCabinet}){
  const [isAddingNew, setIsAddingNew] = useState(false);

  const saveNew = (name, expiration, amount) => {
    addItem(listInventoryCabinet, setListInventoryCabinet, name, expiration, amount, "Cabinet");
    setIsAddingNew(false);
  }

  const deleteItem = (id) => {
    handleDelete(listInventoryCabinet, setListInventoryCabinet, id, "Cabinet");
  }

  const updateItem = (id, name, expiration, amount) => {
    setUpdate(listInventoryCabinet, setListInventoryCabinet, id, name, expiration, amount, "Cabinet");
  }

  const sorton = (name) => {
    sortItems(listInventoryCabinet, setListInventoryCabinet, name, "Cabinet");
  }

  //Here is the Cabinet content with header and List. Pass all nessesary data and functions
  //down to the InventoryListItem, which is the component that actually show the data.
  //Also have a tenary for id we  are adding a new Cabinet item or not.
  return (
    <div className="Cabinet">
      {<HeaderInvetory sorton={sorton} setIsAddingNew={setIsAddingNew} type={"Cabinet"}/>}
      
      {/*if we are adding a new item this will show, otherview nothing will show.*/}
      {isAddingNew ? (<AddNewInventoryItem saveNew={saveNew} setIsAddingNew={setIsAddingNew}/>) : (null)}
      {listInventoryCabinet.map((data, key) => {
          return (
            <InventoryListItem 
            key={data.id} 
            id={data.id} 
            name={data.name} 
            expiration={data.expiration} 
            amount={data.amount} 
            deleteItem={deleteItem} 
            updateItem={updateItem} 
            type={"Cabinet"}/>
          );
        })}
    </div>
  );
}
export default Cabinet;