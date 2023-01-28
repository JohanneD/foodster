import React from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function ShoppingListTab({sortItems, listInventoryShoppingListTab, handleDelete, setUpdate}){

  //Here is the Freezer content with header and List. Pass all nessesary data and functions
  //down to the InventoryListItem, which is the component that actually show the data.
  return (
    <div className="freezer">
      <HeaderInvetory sortItems={sortItems} type={"Freezer"}/>
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
            type={"Freezer"}/>
          );
        })}
    </div>
  );
}
export default ShoppingListTab;