import React from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import "./../../styles/Tabs/tabs.css";
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function Freezer({sortItems, listInventoryFreezer, handleDelete, setUpdate}){

  return (
    <div className="freezer">
      <HeaderInvetory sortItems={sortItems} type={"Freezer"}/>
      {listInventoryFreezer.map((data, key) => {
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
export default Freezer;