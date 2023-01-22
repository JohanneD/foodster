import React from 'react';
import "./../../styles/Tabs/tabs.css";
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryCabinet } from "./../../data/foodInventoryCabinet.js";

function Cabinet(){
  return (
    <div className="cabinet">
      {foodInventoryCabinet.map((data, key) => {
          return (
            <InventoryListItem id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} />
          );
        })}
    </div>
  );
}
export default Cabinet;