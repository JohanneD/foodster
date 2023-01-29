import React, {useState} from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import AddNewInventoryItem from '../ListItems/AddNewInventoryItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";
import addItem from '../Helpers/addData';
import handleDelete from '../Helpers/deleteDate';
import setUpdate from '../Helpers/updateDate';
import sortItems from '../Helpers/sortData';

function Fridge({listInventoryFridge, setListInventoryFridge }){
  const [isAddingNew, setIsAddingNew] = useState(false);

  const saveNew = (name, expiration, amount) => {
    addItem(listInventoryFridge, setListInventoryFridge, name, expiration, amount, "Fridge");
    setIsAddingNew(false);
  }

  const deleteItem = (id) => {
    handleDelete(listInventoryFridge, setListInventoryFridge, id, "Fridge");
  }

  const updateItem = (id, name, expiration, amount) => {
    setUpdate(listInventoryFridge, setListInventoryFridge, id, name, expiration, amount, "Fridge");
  }

  const sorton = (name) => {
    sortItems(listInventoryFridge, setListInventoryFridge, name, "Fridge");
  }

  //Here is the Fridge content with header and List. Pass all nessesary data and functions
  //down to the InventoryListItem, which is the component that actually show the data.
  //Also have a tenary for id we  are adding a new Fridge item or not.
  return (
    <div>
      {<HeaderInvetory sorton={sorton} setIsAddingNew={setIsAddingNew} type={"Fridge"}/>}
      
      {/*if we are adding a new item this will show, otherview nothing will show.*/}
      {isAddingNew ? (<AddNewInventoryItem saveNew={saveNew} setIsAddingNew={setIsAddingNew}/>) : (null)}
      {listInventoryFridge.map((data, key) => {
          return (
            <InventoryListItem 
            key={data.id} 
            id={data.id} 
            name={data.name} 
            expiration={data.expiration} 
            amount={data.amount} 
            deleteItem={deleteItem} 
            updateItem={updateItem} 
            type={"Fridge"}/>
          );
        })}
    </div>
  );
}
export default Fridge;