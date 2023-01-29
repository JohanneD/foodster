import React, {useEffect, useState} from 'react';
import "./../../styles/inventoryitem.css"
import HeaderShopping from "../ListItems/HeaderShopping";
import getData from '../Helpers/getdata.js';
import AddNewInventoryItem from '../ListItems/AddNewInventoryItem';
import addItem from '../Helpers/addData';
import InventoryListItem from '../ListItems/inventoryListItem';
import handleDelete from '../Helpers/deleteDate';
import setUpdate from '../Helpers/updateDate';
import sortItems from '../Helpers/sortData';

function ShoppingList(){
  const [shoppingListItems, setShoppingListItems] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);

  useEffect(()=>{
    getData("./data/shoppingList.json", "Shoppinglist")
    setShoppingListItems(JSON.parse(localStorage.getItem("Shoppinglist")));
  },[]);

  const saveNew = (name, expiration, amount) => {
    addItem(shoppingListItems, setShoppingListItems, name, expiration, amount, "Shoppinglist");
    setIsAddingNew(false);
  }

  const deleteItem = (id) => {
    handleDelete(shoppingListItems, setShoppingListItems, id, "Shoppinglist");
  }

  const updateItem = (id, name, expiration, amount) => {
    setUpdate(shoppingListItems, setShoppingListItems, id, name, expiration, amount, "Shoppinglist");
  }

  const sorton = (name) => {
    sortItems(shoppingListItems, setShoppingListItems, name, "Shoppinglist");
  }

  //Here is the shoppinglist content with header and List. Pass all nessesary data and functions
  //down to the InventoryListItem, which is the component that actually show the data.
  return (
    <div className='shoppinglist_container'>
      <HeaderShopping sorton={sorton} setIsAddingNew={setIsAddingNew} type={"Shoppinglist"}/>
      {isAddingNew ? (<AddNewInventoryItem saveNew={saveNew} setIsAddingNew={setIsAddingNew} type="Shoppinglist"/>) : (null)}
      {shoppingListItems.map((data, key) => {
          return (
            <InventoryListItem
            key={data.id} 
            id={data.id} 
            name={data.name} 
            amount={data.amount} 
            deleteItem={deleteItem} 
            updateItem={updateItem} 
            type={"Shoppinglist"}/>
          );
        })}
    </div>
  );
}
export default ShoppingList;