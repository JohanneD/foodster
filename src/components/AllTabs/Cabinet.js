import React from 'react';
import "./../../styles/Tabs/tabs.css";
import InventoryListItem from '../ListItems/inventoryListItem';
import HeaderInvetory from "../ListItems/HeaderInvetory.js";

function Cabinet({sortItems, listInventoryCabinet, handleDelete, setUpdate}){

  return (
    <div className="cabinet">
      <HeaderInvetory sortItems={sortItems} type={"Cabinet"}/>
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
            type={"Cabinet"} />
          );
        })}
    </div>
  );
}
export default Cabinet;