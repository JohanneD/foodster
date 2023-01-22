import React from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryFridge } from "./../../data/foodInventoryFridge.js";
import "./../../styles/Tabs/tabs.css";

function toDaysUntil(expiration){
  const current = new Date();
  var diffDays = null;
  if (expiration !== ""){
      const date1 = new Date(expiration.split('/').reverse().join('-'));
      const date2 = new Date(`${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`);
      const diffTime = Math.abs(date2 - date1);

      diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  return diffDays
}


function Fridge(){
  console.log(foodInventoryFridge);
  var foodFridge = foodInventoryFridge.sort((a, b) => {

    if (toDaysUntil(a.expiration) < toDaysUntil(b.expiration)) {
      return -1;
    }
    return 1;
  });

  console.log(foodFridge);

  return (
    <div className="fridge">
      {foodFridge.map((data, key) => {
          return (
            <InventoryListItem key={key} id={data.id} name={data.name} expiration={data.expiration} amount={data.amount} />
          );
        })}
    </div>
  );
}
export default Fridge;