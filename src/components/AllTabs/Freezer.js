import React from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryFreezer } from "./../../data/foodInventoryFreezer.js";
import "./../../styles/Tabs/tabs.css";

function Freezer(){
  return (
    <div className="freezer">
      {foodInventoryFreezer.map((data, key) => {
          return (
            <InventoryListItem id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} />
          );
        })}
    </div>
  );
}
export default Freezer;