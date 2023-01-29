import React, {useState} from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import AddNewInventoryItem from '../ListItems/AddNewInventoryItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";
import addItem from '../Helpers/addData';
import handleDelete from '../Helpers/deleteDate';
import setUpdate from '../Helpers/updateDate';
import sortItems from '../Helpers/sortData';

function Freezer({setListInventoryFreezer, listInventoryFreezer}){
  const [isAddingNew, setIsAddingNew] = useState(false);

  const saveNew = (name, expiration, amount) => {
    addItem(listInventoryFreezer, setListInventoryFreezer,name, expiration, amount, "Freezer");
    setIsAddingNew(false);
  }

  const deleteItem = (id) => {
    handleDelete(listInventoryFreezer, setListInventoryFreezer, id, "Freezer");
  }

  const updateItem = (id, name, expiration, amount) => {
    setUpdate(listInventoryFreezer, setListInventoryFreezer, id, name, expiration, amount, "Freezer");
  }

  const sorton = (name) => {
    sortItems(listInventoryFreezer, setListInventoryFreezer, name, "Freezer");
  }

  //Here is the Freezer content with header and List. Pass all nessesary data and functions
  //down to the InventoryListItem, which is the component that actually show the data.
  //Also have a tenary for id we  are adding a new Freezer item or not.
  return (
    <div className="Freezer">
      {<HeaderInvetory sorton={sorton} setIsAddingNew={setIsAddingNew} type={"Freezer"}/>}
      
      {/*if we are adding a new item this will show, otherview nothing will show.*/}
      {isAddingNew ? (<AddNewInventoryItem saveNew={saveNew} setIsAddingNew={setIsAddingNew}/>) : (null)}
      {listInventoryFreezer.map((data, key) => {
          return (
            <InventoryListItem 
            key={data.id} 
            id={data.id} 
            name={data.name} 
            expiration={data.expiration} 
            amount={data.amount} 
            deleteItem={deleteItem} 
            updateItem={updateItem} 
            type={"Freezer"}/>
          );
        })}
    </div>
  );
}
export default Freezer;